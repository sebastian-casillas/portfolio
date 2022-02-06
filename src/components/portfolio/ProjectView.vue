<template>
<div id="project_window_layout" class="column">
<q-card id="project_window_card" class="text-black col" v-if="selected_project">

    <q-card-section>
        <q-bar>
            <q-space />

            <q-btn flat round size=".8rem"
                icon="close" 
                @click="$router.push({name: 'Portfolio'})"
                />
        </q-bar>
        
    </q-card-section>

    <q-card-section>
        <div class="fill-width row">
            <div class="col-md-6 col-sm-12 col-xs-12">

                <q-carousel
                    swipeable
                    animated
                    v-model="slide"
                    infinite
                    >

                    <q-carousel-slide 
                            v-for="i in selected_project.gallery" 
                            :key="i.meta.asset" 
                            :name="i.meta.asset" 
                            :img-src="'https://api.casillas.dev/' + i.path" 
                            :alt="i.meta.title"  
                            @click="lightbox_panel = ('c_'+i.meta.asset)"
                            />

                </q-carousel>

                <div class="row q-my-sm">


                    <q-img class="q-mx-sm q-mb-md col col-xs-4 col-sm-3 col-md-2" img-class="my-button"
                    
                             v-for="i in selected_project.gallery" 
                            :key="i.meta.asset"
                            style="max-height: 100px; width: 100px;"
                            :ratio="4/3"
                            :src="'https://api.casillas.dev/' + i.path" 
                            @click="slide = i.meta.asset" >

                    </q-img>


                </div>

            </div>

            <div class="col-md-6 col-sm-12 col-xs-12 q-pa-lg">
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
                            v-for="i in selected_project.gallery" :key="i.meta.asset" 
                            class="q-pt-xl"
                            :name="'c_' + i.meta.asset"
                            >

                            <intersection-img @mounted_element="init_panzoom" :src="'https://api.casillas.dev/'+ i.path" :asset="'c_' + i.meta.asset" />


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

    slide: undefined,

    lightbox_panel: '',
    lightbox_image: null,
    lightbox_visible: false,
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
                if(d.entries.length > 0){
                    this.selected_project = d.entries[0]
                    if(this.selected_project.gallery.length)
                        this.slide = this.selected_project.gallery[0].meta.asset;
                }  
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
  }
}

</script>

<style lang="scss">

#project_window_layout{
    min-height: 100vh; 
    padding: 20px 10px 0;

    #project_window_card{
        background: white; 
        max-width: 1200px; 
        margin:auto;
    }
}

#project_gallery{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
}

.my-button{
    opacity: 0.4;
    filter: alpha(opacity=40); /* msie */

    &:hover, &:active{
        opacity: 1;
        filter: alpha(opacity=100); /* msie */
    }
}

</style>

