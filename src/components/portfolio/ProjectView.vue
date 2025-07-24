<template>


<div id="project_window_layout">

    <q-card id="project_window_card" class="col" v-if="!!selected_project">


        <q-card-section class="fill-width row justify-center" style="background-color: #222">

                <q-carousel
                    class="col-md-8 col-sm-12"
                    swipeable
                    animated
                    v-model="slideKey"
                    infinite
                    >

                    <q-carousel-slide 
                            v-for="i in selected_project.gallery" 
                            :key="i._id" 
                            :name="i._id">
                            <q-img :src="i.path" :alt="i.title" @click="launchLightbox(i)"/>
                    </q-carousel-slide>

                </q-carousel>

                    <div class="col-md-4 col-sm-12">
                        <div class="row q-my-sm">


                            <q-img class="q-mx-sm q-mb-md col-sm-6 col-md-4" img-class="my-button"
                            
                                    v-for="item in selected_project.gallery" 
                                    :key="item._id"
                                    style="max-height: 100px; width: 100px;"
                                    :ratio="4/3"
                                    :src="item.path" 
                                    @click="slideKey = item._id" >

                            </q-img>


                        </div>
                </div>
        </q-card-section>

        <q-card-section class="q-mt-sm q-pa-lg">

            <q-bar class="q-pa-none q-mb-md bg-transparent">
                <h4 class="q-ma-none">
                    {{selected_project.title}}
                </h4>

                <q-space />

                <q-btn round size=".9rem" color="grey-10"
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

// import IntersectionImg from '@/components/home/IntersectionImg.vue'
import Markdown from 'vue3-markdown-it'

export default {
  name: 'ProjectView',
  components: {
    // IntersectionImg,
    Markdown
  },
  props: {
      selected_project: {
          type: Object,
          default: () => {}
      },
      nothing_found: {
          type: Boolean,
          default: false
      }
  },

  data: () => ({
    slideKey: {
        type: String,
        default: null
    },
  }),
  watch:{
    selected_project(){
        this.slideKey = this.selected_project.gallery[0]?._id;
    }
  },
  methods: {
    launchLightbox(image){
        this.$emit('launchLightbox', image);
    },
  },
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

