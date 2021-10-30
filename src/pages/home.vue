<template>
  <div id="home">
    <div id="app_header"  :style="'height: ' + menu_height">
          <q-toolbar>

            <q-toolbar-title>
              <h6 style="margin: 0;">
                Sebastian C. P.
              </h6>
              
              
            </q-toolbar-title>


            <q-tabs shrink>
              <q-tab name="tab1" label="Contact" />
              <q-tab name="tab2" label="Competences" />
              <q-tab name="tab3" label="Workflow" />
              <q-tab name="tab4" label="Projects" />
              <q-tab name="tab5" label="Background" />
            </q-tabs>
          </q-toolbar>
    </div>

    <q-scroll-area id="home_main" ref="home_main">
      <div v-intersection="options" style="height: 80px;">
        
      </div>
        <contact/>
        <competences :competences="curriculum?.competences"/>
        <workflow/>
        <projects/>
        <background/>
    </q-scroll-area>

    <div class="fixed-bottom-right q-pa-md">
      <q-btn fab icon="add" color="accent" @click="cv_dialog = !cv_dialog" />
    </div>

    <q-dialog v-model="cv_dialog" maximized>
      <cv/>
    </q-dialog> 
  </div>




</template>

<script>

import Contact from '@/components/home/contact.vue'
import Competences from '@/components/home/competences.vue'
import Workflow from '@/components/home/workflow.vue'
import Projects from '@/components/home/projects.vue'
import Background from '@/components/home/background.vue'
import CV from '@/components/cv.vue'

import { ref } from 'vue'

const thresholds = []
for (let i = 0; i <= 1.0; i += 0.05) {
  thresholds.push(i)
}



export default {
  name: 'Home',
  components: {
    Contact,
    Competences,
    Workflow,
    Projects,
    Background,
    cv: CV
  },

  data: () => ({
    curriculum: [],
    v_scroll: 0,
    menu: true,
    cv_dialog: false
  }),

  setup(){
      const percent = ref(0);
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
        .then(d => { 
            console.log(d)
            this.curriculum = d;
            
            })
        .catch((e) => console.log(e));

  },

  computed:{
    menu_height: function(){
      return (40 + 40*this.percent/100).toString() + 'px'
    }
  },

  methods: {
    onClick: function (e) {
      console.log(e)
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