<template>
  <div>

    <div class="full-width row wrap justify-center content-start q-py-lg q-px-md">

      <!-- Loading div: centered and with a min ratio -->
      <div v-show="!projects && !projects.length" class="full-width row justify-center q-py-lg">

        <q-circular-progress
          
            style="min-width: 150px; min-height: 150px;"
            indeterminate
            size="20px"
            :thickness="0.1"
            color="primary"
            track-color="grey-3"
            class="q-ma-md column q-my-md"
          />

      </div> 

      <!-- Grid of results -->
       <div class="full-width row" style="max-width: 1200px; min-width: 500px;">

        <div class="column col-12 col-md-6 col-lg-4 col-xl-4 q-px-sm q-my-md" v-for="p of projects" :key="p._id">
          <project-card  :project="p" />
        </div>

      </div>

    </div>

    <q-dialog 
        :model-value="!!selected_image"   
        persistent
        maximized
        @show="manageLightbox"
        >

      <div class="lightboxParent" ref="lightboxParent"  >

        <div ref="lightbox">
          <q-img  :src="selected_image.path" />
        </div>

        <div class="lightboxMenu">

          <q-btn color="white" icon="close" round class="text-black" size="1rem" @click="closeLightbox" />

          <q-btn-group >
            
            <q-btn color="accent" icon="zoom_out" @click="zoomOut"/>
            <q-btn color="accent" icon="zoom_in" @click="zoomIn"/>
            <q-btn color="accent" icon="keyboard_arrow_left" @click="lightboxPrev"/>
            <q-btn color="accent" icon="keyboard_arrow_right" @click="lightboxNext"/>

          </q-btn-group>

        </div>

      </div>

    </q-dialog>

    <q-dialog
        :model-value="!!selected_slug"
        persistent 
        maximized
        position="bottom"
        >
        <q-scroll-area style="max-height: 100%; max-width: 100%; overflow: hidden;">
          <project-view  :selected_project="selected_project" :nothing_found="nothing_found" @launchLightbox="launchLightbox"></project-view>
        </q-scroll-area>
    </q-dialog>

      
  </div>


</template>

<script>
import ProjectCard from '@/components/portfolio/ProjectCard.vue'
import ProjectView from '@/components/portfolio/ProjectView.vue'
import Panzoom from '@panzoom/panzoom'

import { useDataStore } from '@/store/Data';

export default {
  components:{
    ProjectCard,
    ProjectView
  },
  
  data: () => ({
    projects: [],
    selected_project: null,
    selected_image: null,
    nothing_found: false,
    panzoom: null,

  }),
  created(){
    this.load_portfolio()
  },
  mounted(){
    if(this.selected_slug)
      this.load_project(this.selected_slug)
  },
  methods:{
    async load_portfolio(){
      this.projects = await useDataStore().getDataProjects.then(e=> e)
      console.log(this.projects)
    },

    load_project(slug){
      this.selected_project = null
      this.nothing_found = false

      this.$api
          .get('/content/items/portfolio', { filter: {slug: slug}, populate: 1 })
          .then( res => res.data )
          .then( d => { 
          
            if (d && d.length >= 1){
                this.selected_project = d.find( o => o.slug ===  this.selected_slug)

                if (!this.selected_project.gallery)
                  this.selected_project.gallery = [];
                
                this.selected_project.gallery = this.selected_project.gallery.map( 
                    (item, index) =>  
                      { 
                        return { 
                            ...item, 
                            path: 'https://api.casillas.dev/storage/uploads' + item.path, 
                            index: index
                            } 
                      } 
                    )
            }

              })
          .catch( e => console.log(e));
    },

    manageLightbox(){
      console.log('run Panzoom')
      
      this.panzoom = Panzoom(this.$refs.lightbox, {
        maxScale: 2.5,
        minScale: .8,
        bounds: true,
        boundsPadding: 0.2,
        zoomDoubleClickSpeed: 1,
        zoomSpeed: 0.1,
        smoothScroll: false,
        startScale: .8,
        beforeWheel: (e) => {
          e.preventDefault()
          return true
        }
      })
      
      this.$refs.lightbox.parentElement.addEventListener('wheel', this.panzoom.zoomWithWheel)
    },

    launchLightbox (slide) {
      this.selected_image = slide
    },

    closeLightbox(){
      this.selected_image = null
    },

    lightboxNext(){
      if(this.selected_project.gallery.length > 1 && this.selected_image.index < this.selected_project.gallery.length - 1)
        this.selected_image = this.selected_project.gallery[this.selected_image.index + 1]
      else
        this.selected_image = this.selected_project.gallery[0]

      this.panzoom.reset()
    },

    lightboxPrev(){
      if(this.selected_project.gallery.length > 1 && this.selected_image.index > 0)
        this.selected_image = this.selected_project.gallery[this.selected_image.index - 1]
      else
        this.selected_image = this.selected_project.gallery[this.selected_project.gallery.length - 1]

      this.panzoom.reset()
    },

    zoomIn(){
      this.panzoom.zoomIn()
    },
    zoomOut(){
      this.panzoom.zoomOut()
    }
    

  },
  watch: {
    selected_slug(slug) {
      if (slug) {
        this.load_project(slug)
      }
    }
  },
  computed:{
    selected_slug: function(){
      return this.$route.params.slug || undefined
    },
  },
  unmounted(){
    this.$refs.lightbox.parentElement.removeEventListener('wheel', this.panzoom.zoomWithWheel)
    this.panzoom.destroy()
  }
}
</script>

<style type="scss">
.lightboxParent{
  height: 100%; 
  width:100%;
}

.lightboxMenu{
  position: absolute;
  bottom: 1rem;
  height: 2rem;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

}
</style>