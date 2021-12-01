<template>
    <div class="q-pa-md">

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

            <q-card-section class="q-mt-md">
                <div id="project_gallery" :style="gallery_columns">

                    <q-btn v-for="(i, index) of gallery" :key="i._id" 
                           flat class="my-gallery-item q-pa-none" 
                           @click="toggle_lightbox(index)"
                           >
                        <q-card  flat style="background: transparent; width: 100%;">
                            <q-img :src="'https://casillas.dev' + i.picture.path" 
                                   scale-down
                                   alt="i.description"/>

                            <q-card-section>
                                <div style="color:black;" class="text-caption">
                                    {{ i.description }}
                                </div>
                            </q-card-section>

                        </q-card>
                    </q-btn>

                    <q-skeleton v-show="!selected_project" class="col-sm-6 col-md-4 col-xs-12" />

                </div>
            </q-card-section>
        </q-card>

    <vue-easy-lightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="lightbox_visible"
      :imgs="lightbox_gallery"
      :index="lightbox_index"
      @hide="handleHide"
    ></vue-easy-lightbox>

    </div>

</template>

<script>

import { Screen } from 'quasar'

export default {
  name: 'ProjectView',
  props: {
      selected_slug :{
          type: String,
          required: true
      }
  },
  data: () => ({
    selected_project: undefined,
    nothing_found: false,
    lightbox_visible: false,
    lightbox_index: 0
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
                if(d.entries.length > 0){
                    this.selected_project = d.entries[0]
                } 
                else
                    this.nothing_found = true
                })
            .catch( e => console.log(e));
      },
      toggle_lightbox(index = 0){
          this.lightbox_index = index
          this.lightbox_visible = !this.lightbox_visible
      },
      handleHide(){
          this.lightbox_visible = false;
      }
      
  },
  watch: {
    selected_slug: function (val) {
        this.load_project(val)
    },
  },
  computed:{
      gallery: function (){
        return this.selected_project? this.selected_project.gallery.map(r => r.value): []
      },
      lightbox_gallery: function(){
          return this.gallery.filter(d => 'path' in d.picture).map(d=> 'https://casillas.dev' + d.picture)
      },
      gallery_columns: function(){
          if (Screen.lg) return 'grid-template-columns: 1fr 1fr 1fr;'
          else if (Screen.xs) return 'grid-template-columns: 1fr;'
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

