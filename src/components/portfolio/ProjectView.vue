<template>


<div id="project_window_layout">

    <q-card id="project_window_card" class="col" v-if="!!selected_project">


        <q-card-section class="fill-width row justify-center" style="background-color: #222">

                    <q-carousel
                        class="col-md-8 col-sm-12"
                        swipeable
                        animated
                        v-model="slide"
                        infinite
                        >

                        <q-carousel-slide 
                                v-for="i in gallery" 
                                :key="i._id" 
                                :name="i._id">
                                <q-img :src="'https://api.casillas.dev/storage/uploads' + i.path" :alt="i.title" />
                        </q-carousel-slide>

                    </q-carousel>

                    <div class="col-md-4 col-sm-12">
                        <div class="row q-my-sm">


                            <q-img class="q-mx-sm q-mb-md col-sm-6 col-md-4" img-class="my-button"
                            
                                    v-for="i in gallery" 
                                    :key="i._id"
                                    style="max-height: 100px; width: 100px;"
                                    :ratio="4/3"
                                    :src="'https://api.casillas.dev/storage/uploads' + i.path" 
                                    @click="slide = i._id" >

                            </q-img>


                        </div>
                </div>
        </q-card-section>

        <q-card-section class="q-mt-sm q-pa-lg">

            <q-bar class="q-pa-none q-mb-md">
                <h4 class="q-ma-none">
                    {{selected_project.title}}
                </h4>

                <q-space />

                <q-btn outline round size=".8rem" color="#505050"
                    icon="close" 
                    @click="$router.push({name: 'Portfolio'})"
                    />
            </q-bar>

            <template>
                <p class="text-overline" style="color:black">{{selected_project.context}}</p>
                <div>
                    <vue3-markdown-it :source="selected_project.description" />
                </div>
                <!-- <p v-if="selected_project" style="color:black">{{selected_project.description}}</p> -->
                <!-- <div class="row wrap q-mt-md">
                        <q-chip v-for="c of selected_project.knowledge_applied" :key="c" color="#505050">
                        {{c}}
                    </q-chip>
                </div> -->
            </template>

        </q-card-section>

        <q-separator size="2" color="grey" inset/>


        <q-card-section  class="q-px-lg q-py-md" 
                v-for="(block, index) in selected_project.content_blocks" 
                :key="selected_project._id + '_block_' + index"
                >

            <div v-if="block.type === 'text'" v-text="block.content"></div>
            <div v-if="block.type === 'html'" v-html="block.content"></div>
            <Markdown v-if="block.type === 'markdown'" :source="block.content"/>

        </q-card-section>




    </q-card>

    

</div>

</template>

<script>

import panzoom from '@panzoom/panzoom'
import IntersectionImg from '@/components/home/IntersectionImg.vue'
import Markdown from 'vue3-markdown-it'

export default {
  name: 'ProjectView',
  components: {IntersectionImg, Markdown},
  props: {
      selected_slug :{
          type: String,
          required: true
      }
  },
  data: () => ({
    selected_project: null,
    nothing_found: false,
    gallery: [],

    slide: undefined,

  }),
  mounted(){
      this.load_project(this.selected_slug)
  },
  methods:{
    load_project(slug){

        
        this.$api
            .get('/content/items/portfolio', { filter: {slug: this.selected_slug }, populate: 1 })
            .then( res => res.data )
            .then( d => { 
                console.log(d)
                if(d && d.length > 0){
                    this.selected_project = d[0]

                    if(this.selected_project.gallery.length >= 0){
                        this.gallery = this.selected_project.gallery
                        this.slide = this.gallery[0]._id
                    }
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
  }
}

</script>

<style lang="scss">

#project_window_layout{
    min-height: 100vh; 
    width: 100%;
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

