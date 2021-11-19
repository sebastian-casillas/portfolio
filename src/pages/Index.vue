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

      <contact ref="section_contact" :percent="percent"/>
      <competences ref="section_competences" :competences="curriculum?.competences"/>
      <word-cloud ref="section_wordcloud"/> 
      <projects ref="section_projects"/>
      <background ref="section_background" :background="curriculum?.background" />

    </q-scroll-area>

    <q-dialog v-model="cv_dialog" maximized>
      <cv/>
    </q-dialog> 

  </div>




</template>

<script>

import Contact from '@/components/home/contact.vue'
import Competences from '@/components/home/competences.vue'
import Projects from '@/components/home/projects.vue'
import Background from '@/components/home/background.vue'
import CV from '@/components/cv.vue'
import WordCloud from '@components/home/WordCloud.vue'

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
    WordCloud
  },

  data: () => ({
    curriculum: [],
    v_scroll: 0,
    menu: true,
    cv_dialog: false
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
        .get('singletons/get/curriculum')
        .then( res => res.data )
        .then(d => {  this.curriculum = d; })
        .catch( e => console.log(e));

  },

  computed:{
    menu_height: function(){
      let val = (40 + 40 * this.percent/100).toString()
      return  `height:  ${val}px; min-height: ${val}px; `
    },

    scrollbased_transparency: function(){
      let val = (254* this.percent/100).toString()
      console.log(val)
      return  `background-color: rgba(68, 85,102, ${val});`
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