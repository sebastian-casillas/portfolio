<template>
  <div id="contact_component" class="full-width row justify-center items-center content-center">

    <contact-card/>

    <workflow :curriculum="curriculum"/>

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
        curriculum: {
          type: Object,
          default: () => {}
        }
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

