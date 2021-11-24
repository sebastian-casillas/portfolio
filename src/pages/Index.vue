<template>
  <div id="home">
    <div id="app_header"  :style="menu_height">
      <q-toolbar :style="menu_height">

        <q-toolbar-title>
            <h6 style="margin: 0;">
              Sebastian Casillas
            </h6>
        </q-toolbar-title>


        <q-tabs shrink>
          <q-tab name="tab1" label="Contact" @click="scrollTo('section_contact')"/>
          <q-tab name="tab2" label="Workflow" @click="scrollTo('section_competences')"/>
          <q-tab name="tab3" label="Projects" @click="scrollTo('section_projects')"/>
          <q-tab name="tab4" label="Background" @click="scrollTo('section_background')"/>
          <q-btn name="tab5" label="CV" flat :style="scrollbased_transparency" round :to="'/cv'"/>
        </q-tabs>
      </q-toolbar>
    </div>


    <q-scroll-area id="home_main" ref="home_main" class="scroll">

      <div v-intersection="options" style="height: 80px;"></div>

      <contact ref="section_contact" :max_width="max_width"/>
      <competences ref="section_competences" :competences="curriculum?.competences" :languages="curriculum?.language" :p_languages="curriculum?.programming_languages" :p_languages_note="curriculum?.p_languages_note"/>
      <word-cloud ref="section_wordcloud"/> 
      <projects ref="section_projects" :projects="curriculum?.featured_projects" @select-project="select_project"/>
      <background ref="section_background" :background="curriculum?.background" />

    </q-scroll-area>

    <q-dialog v-model="cv_dialog" maximized>
      <cv/>
    </q-dialog> 

    <q-dialog :model-value="is_project_selected" @update:model-value="project_show = null" full-width  >
      <project-view :selected_project="project_show"  @hide-dialog="hide_project_dialog"/>
    </q-dialog>

  </div>




</template>

<script>

import Contact from '@/components/home/Contact.vue'
import Competences from '@/components/home/Competences.vue'
import Projects from '@/components/home/Projects.vue'
import Background from '@/components/home/Background.vue'
import CV from '@/components/cv.vue'
import WordCloud from '@components/home/WordCloud.vue'
import ProjectView from '@components/home/ProjectView.vue'

import { ref } from 'vue'

import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

export default {
  name: 'Home',
  components: {
    Contact,
    Competences,
    Projects,
    Background,
    cv: CV,
    WordCloud,
    ProjectView
  },

  data: () => ({
    curriculum: [],
    v_scroll: 0,
    menu: true,
    cv_dialog: false,
    project_show: null
  }),

  setup(){
      const percent = ref(0);

      const thresholds = []
      for (let i = 0; i <= 1.0; i += 0.05) 
        thresholds.push(i)
      
      return {
              percent,
              options: {
                  handler (entry) {
                      const val = (entry.intersectionRatio * 100).toFixed(0)
                      if (percent.value !== val) percent.value = val
                  },
                  cfg: {threshold: thresholds}
              }
          }
  },

  created() {
    this.$api
        .post('singletons/get/curriculum', { populate: 1 })
        .then( res => res.data )
        .then(d => {  this.curriculum = d; })
        .catch( e => console.log(e));
  },

  computed:{
    percent_u: function(){
      return this.percent / 100;
    },
    menu_height: function(){
      let val = (40 + 40 * this.percent/100).toString()
      return  `height:  ${val}px; min-height: ${val}px; `
    },

    scrollbased_transparency: function(){
      let val = (254* this.percent/100).toString()
      return  `background-color: rgba(68, 85,102, ${val});`
    },

    max_width: function(){
      let calc_width = (740 + this.percent_u * 60).toString()

      return 'width:' + calc_width + 'px;';
    },
    is_project_selected: function(){
      return this.project_show !== null
    }
  },

  methods: {

    scrollTo(item_id){
      if(item_id in this.$refs){
        let el = this.$refs[item_id].$el

        const target = getScrollTarget(el)
        const offset = el.offsetTop
        const duration = 600

        setVerticalScrollPosition(target, offset, duration)
      }


    },
    
    select_project(project){
      this.project_show = project;
    },

    hide_project_dialog(){
      this.project_show = null
    }

  }

}
</script>

<style lang="scss">

  #home{
    width: 100%;
    max-width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  #home_main{
    max-width: 100%;
    overflow: none;
  }

  #app_header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    backdrop-filter: blur(4px);

    background-color: #2223;

    display:flex;
    flex-wrap: wrap;
    justify-content: center;

    z-index: 5;

    & > * {
      max-width: 1000px;
      border-bottom: solid 1px #FFFA;
    }



    
  }
  
  #home_main{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }  

  .q-dialog__inner{
    overflow:hidden;
  }



</style>