<template>


<div id="project_window_layout">

    <q-card id="project_window_card" class="text-black col" >

        <q-card-section v-if="!!selected_project" class="fill-width row justify-center" style="background-color: #222">
                    <q-carousel
                        class="col-md-8 col-sm-12 col-xs-12"
                        swipeable
                        animated
                        v-model="slide"
                        infinite
                        >

                        <q-carousel-slide 
                                v-for="i in selected_project.gallery" 
                                :key="i.meta.asset" 
                                :name="i.meta.asset">
                                <q-img :src="'https://api.casillas.dev/' + i.path" :alt="i.meta.title" />
                        </q-carousel-slide>

                    </q-carousel>

                    <div class="col-md-4 col-sm-12">
                        <div class="row q-my-sm">


                            <q-img class="q-mx-sm q-mb-md col-sm-6 col-md-4" img-class="my-button"
                            
                                    v-for="i in selected_project.gallery" 
                                    :key="i.meta.asset"
                                    style="max-height: 100px; width: 100px;"
                                    :ratio="4/3"
                                    :src="'https://api.casillas.dev/' + i.path" 
                                    @click="slide = i.meta.asset" >

                            </q-img>


                        </div>
                </div>
        </q-card-section>


        <q-card-section class="q-mt-sm q-pa-lg">

            <q-bar class="q-pa-none q-mb-md">
                <h4 v-if="!!selected_project" class="q-ma-none">
                    {{selected_project.title}}
                </h4>

                <q-space />

                <q-btn outline round size=".8rem" color="#505050"
                    icon="close" 
                    @click="$router.push({name: 'Portfolio'})"
                    />
            </q-bar>

            <template v-if="!!selected_project">
                <p v-if="selected_project" class="text-overline" style="color:black">{{selected_project.context}}</p>
                <div>
                    <vue3-markdown-it :source="selected_project.description" />
                </div>
                <!-- <p v-if="selected_project" style="color:black">{{selected_project.description}}</p> -->
                <div v-if="selected_project" class="row wrap q-mt-md">
                        <q-chip v-for="c of selected_project.knowledge_applied" :key="c" color="#505050">
                        {{c}}
                    </q-chip>
                </div>
            </template>

        </q-card-section>

        <q-separator size="2" color="grey" inset/>

        <template v-if="!!selected_project && !!selected_project.blocks">
             <q-card-section v-for="(block, index) in selected_project.blocks" :key="selected_project._id + '_block_' + index" class="q-px-lg q-py-md">
                <template v-if="block.field.type === 'text'">
                    <p>
                        {{block.value}}
                    </p>
                </template>
                <template v-else-if="block.field.type === 'markdown'">
                    <Markdown :source="block.value"/>
                </template>
                <template v-else-if="block.field.type === 'html'">
                    <div v-html="block.value"></div>
                </template>
                <template v-else-if="block.field.type === 'code'">
                    <component :is="'script'" >
                        {{block.value}}
                    </component>
                </template>

            </q-card-section>
        </template >


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

    slide: undefined,

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

