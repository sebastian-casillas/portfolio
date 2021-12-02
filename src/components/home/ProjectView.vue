<template>
    <div>

        <q-card class="my_project_card text-black" style="background: white">
            <q-card-section>
                <div class="fill-width row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <q-img v-if="selected_project" :src="'https://casillas.dev' + selected_project.cover.path" scale-down style="height: 100%; width: 100%;"></q-img>
                        <q-skeleton v-else style="height: 100%; width: 100%;" />
                    </div>

                    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-lg" v-if="selected_project">
                        <h3  style="color:black" class="q-mb-sm">{{selected_project.title}}</h3>
                        <p v-if="selected_project" class="text-overline" style="color:black">{{selected_project.context}}</p>
                        <div>
                            <vue3-markdown-it :source="selected_project.description" />
                        </div>
                        <!-- <p v-if="selected_project" style="color:black">{{selected_project.description}}</p> -->
                        <div v-if="selected_project" class="row wrap q-mt-md">
                            <q-chip v-for="c of selected_project.knowledge_applied" :key="c">
                                {{c}}
                            </q-chip>
                        </div>

                    </div>
                </div>
                
            </q-card-section>

            <q-separator :dark="false" inset/>

            <q-card-section class="q-mt-md" id="project_gallery" :style="gallery_columns">

                    <q-btn v-for="(i, index) of gallery" :key="i._id" 
                            flat class="my-gallery-item q-pa-none" 
                            @click="lightbox_panel = ('c_' + index)"
                            >

      
                        <q-card  flat style="background: transparent; width: 100%;">
                            <q-img :src="i.src" :alt="i.caption"
                                    scale-down
                                    />

                            <q-card-section>
                                <div style="color:black;" class="text-caption">
                                    {{ i.caption }}
                                </div>
                            </q-card-section>

                        </q-card>
                    </q-btn>

                    <q-skeleton v-show="!selected_project" class="col-sm-6 col-md-4 col-xs-12" />


            </q-card-section>
        </q-card>

        <q-dialog
            v-model="lightbox_visible"
            persistent maximized
            transition-show="slide-up"
            transition-hide="slide-down"
            >
            <div style="height: 100vh; width: 100vw">

                <q-carousel
                    style="height: 100%; width: 100%;"
                    :swipeable="false"

                    arrows padding
                    control-color="white"
                    animated
                    infinite
                    id="my_carousel"
                    v-model="lightbox_panel"
                    >

                        <q-carousel-slide 
                            v-for="(i, index) of gallery" :key="i._id" 
                            class="q-pt-xl"
                            :name="'c_' + index"
                            >

                            <intersection-img @mounted_element="init_panzoom" :src="i.src" :asset="'c_' + index" />


                        </q-carousel-slide>


                </q-carousel>

                <q-btn class="fixed-top-right q-ma-sm" round color="white" style="color: black" size=".8rem" @click="lightbox_panel = ''">
                    <q-icon name="mdi-close" color="black"/>
                </q-btn>


            </div>


    </q-dialog>

    </div>

</template>

<script>

import { Screen } from 'quasar'
import panzoom from '@panzoom/panzoom'
import IntersectionImg from '@/components/home/IntersectionImg.vue'

export default {
  name: 'ProjectView',
  components: {IntersectionImg},
  props: {
      selected_slug :{
          type: String,
          required: true
      }
  },
  data: () => ({
    selected_project: null,
    nothing_found: false,

    lightbox_visible: false,
    lightbox_panel: '',
    panzoom_instance: undefined,
  }),
  mounted(){
      this.load_project(this.selected_slug)
  },
  methods:{
    load_project(slug){
        this.$api
            .post('collections/get/project?filter[slug][$eq]=' + slug, { populate: 1 })
            .then( res => res.data )
            .then( d => { 
                console.log(d)
                if(d.entries.length > 0)
                    this.selected_project = d.entries[0]
                else
                    this.nothing_found = true
                })
            .catch( e => console.log(e));
        },
    
    init_panzoom(el, parent){
        
        if (this.panzoom_instance)
            this.panzoom_instance.destroy()

        this.panzoom_instance = panzoom(el.$el, { maxScale: 3, minScale: 1 })

        parent.$el.addEventListener('wheel', this.panzoom_instance.zoomWithWheel)
    }
  },
  watch: {
    lightbox_panel: function(val){
        this.lightbox_visible = (val !== '')? true: false
    }
  },
  computed:{
      gallery: function (){
            let res = []


            if( this.selected_project && 'gallery' in this.selected_project ) 
                res =  this.selected_project
                           .gallery
                           .filter(d => !('path' in d.value) )
                           .map( d => {
                                return {
                                    type: 'image',
                                    // asset: d.meta.asset,
                                    thumb: 'https://casillas.dev' + d.value.picture.path,
                                    src: 'https://casillas.dev' + d.value.picture.path,
                                    caption: d.value.description
                                }
                          })

            return res

        
      },
      
      gallery_columns: function(){
          if (Screen.gt.lg) return 'grid-template-columns: 1fr 1fr 1fr;'
          else if (Screen.lt.xs) return 'grid-template-columns: 1fr;'
          else return 'grid-template-columns: 1fr 1fr;'
      }
  }
}

</script>

<style lang="scss">

.my_project_card{
    margin-bottom: 50px;
}

#project_gallery{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
}


</style>

