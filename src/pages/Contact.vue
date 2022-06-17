<template>
  <div id="contact_component" class="full-width row justify-center items-center content-center">

    <div >
      <contact-card/>
    </div>
    

    <div class="row justify-center" style="width: 100%;">
      <q-tabs
          v-model="tab"
          dense shrink
          class="text-grey row justify-center"
          active-color="white"
          indicator-color="white"
          align="center"
          narrow-indicator
          style="width: 400px; padding: 0;"
        >
          <q-tab name="workflow" label="Workflow" icon="mdi-console-network"/>
          <q-tab name="background" label="Background" icon="mdi-check-network" />
          <q-tab name="projects" label="Projects" icon="mdi-book-variant-multiple" />
        </q-tabs>
    </div>


    
    <q-tab-panels 
      animated 
      transition-prev="slide-right"
      transition-next="slide-left"
      v-model="tab" style="width: 100vw; background-color: transparent;">

      <q-tab-panel name="workflow" class="q-pa-0 row justify-center" style="width: 100%;">
        <div class="col" style="max-width: 1200px;">
          <workflow :competences="competences" 
                    :programming_lang="programming_lang" 
                    :international_lang="international_lang"
                    :programming_lang_note="programming_lang_note"
                    :international_lang_note="international_lang_note"
                    />
        </div>

      </q-tab-panel>

      <q-tab-panel name="background" class="q-pa-0 row justify-center" style="width: 100%;">
        <div class="col" style="max-width: 1200px;">
          <background :background="background"></background>
        </div>
      </q-tab-panel>

      <q-tab-panel name="projects" class="q-pa-0 row justify-center" style="width: 100%;">
        <div class="col" style="max-width: 1200px;">
          <projects></projects>
        </div>
      </q-tab-panel>
    </q-tab-panels>



  </div>
</template>

<script>
import { copyToClipboard } from 'quasar'
import ContactCard from '@/components/home/ContactCard.vue'
import Workflow from '@/components/home/Workflow.vue'
import Background from '@/pages/Background.vue'
import Projects from '@/components/home/Projects.vue'

export default {
    name: 'Contact',
    components: {
      Workflow,
      ContactCard, 
      Background,
      Projects
    },
    Projectrops: {
        max_width: {
            type: String,
            default: 'width: 800px;'
        },
    },
    data: () => ({
      competences: [],
      programming_lang: [],
      international_lang: [],
      programming_lang_note: '',
      international_lang_note: '',
      background: [],
      tab: 'workflow'
    }),


    created() {
      this.$api
          .post('singletons/get/contact', { populate: 1 })
          .then( res => res.data )
          .then( d => {  
            if('competences' in d) this.competences = d.competences;
            if('programming_lang' in d) this.programming_lang = d.programming_lang;
            if('international_lang' in d) this.international_lang = d.international_lang;
            if('programming_lang_note' in d) this.programming_lang_note = d.programming_lang_note;
            if('international_lang_note' in d) this.international_lang_note = d.international_lang_note; 
            })
          .catch( e => console.log(e));

      this.$api
          .post('collections/get/background')
          .then( res => res.data?.entries )
          .then(d => {  this.background = d; })
          .catch( e => console.log(e));

    },

    methods: {
      open_link(webpage){
        window.open(webpage, '_blank');
      },
      to_clipboard(){
        copyToClipboard('sebastian.casillas@outlook.com')
            .then(() => {
              console.log('Copy success')
            })
            .catch(() => {
              console.log('Copy fail')
            })
      }
    }
}

</script>

<style>
  #contact_component{
    padding-top: 14vh;
  }

  .max-1200{
    max-width: 1200px;
  }
</style>

