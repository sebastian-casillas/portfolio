<template>
  <div id="contact_component" class="full-width row justify-center items-center content-center">

    <contact-card/>

    <workflow :competences="competences" 
              :programming_lang="programming_lang" 
              :international_lang="international_lang"
              :programming_lang_note="programming_lang_note"
              :international_lang_note="international_lang_note"
              />

  </div>
</template>

<script>
import { copyToClipboard } from 'quasar'
import ContactCard from '@/components/home/ContactCard.vue'
import Workflow from '@/components/home/Workflow.vue'

export default {
    name: 'Contact',
    components: {
      Workflow,
      ContactCard
    },
    props: {
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
      international_lang_note: ''
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
</style>

