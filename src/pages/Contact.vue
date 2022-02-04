<template>
  <div id="contact_component" class="full-width row justify-center items-center content-center">

    <div class="presentation_background">

      <div class="row q-pa-md justify-center items-center" style="background-color: white;">


        <div class="col-grow column items-center">
          <img class="items-center q-pa-md" style="height:250px; width: 250px;" src="/assets/profile_circle.jpg">
        </div>
        



        <div class="card_text col-md-7 col-sm-12">
          <h2  :class="{'text-center': $q.screen.lt.md}">Sebastian</h2>
          <h3  :class="{'text-center': $q.screen.lt.md}">Casillas Perez</h3>
          <div class="contact_buttons"  :class="{'column items-center': $q.screen.lt.md}">
            <q-btn @click='to_clipboard' flat dense size="12px" icon="email" class="q-px-sm" label="sebastian.casillas@outlook.com" />
            <q-btn @click='open_linkedin' flat dense size="12px"  icon="mdi-linkedin" class="q-px-sm" label="linkedin.com/in/sebastian-casillas" />
          </div>
        </div>

      </div>

      <div>
        <p class="text-italic text-center q-my-sm"> A good computer system implementation involves much more than just code</p>  
      </div>

    </div>

    <workflow :curriculum="curriculum"></workflow>

  </div>
</template>

<script>
import { copyToClipboard } from 'quasar'
import Workflow from '@/components/home/Workflow.vue'

export default {
    name: 'Contact',
    components: {
      Workflow
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
      open_linkedin(){
        window.open('https://linkedin.com/in/sebastian-casillas', '_blank');
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

<style lang="scss">
  #contact_component{

    .presentation_background{
      box-shadow: 0px 48px 317px 59px rgba(122, 75, 75, 0.05);
      -webkit-box-shadow: 0px 48px 317px 59px rgba(255,255,255,0.05);
      -moz-box-shadow: 0px 48px 317px 59px rgba(255,255,255,0.05);
    }

    padding-top: 24vh;
    padding-bottom: 24vh;

    .pressentation_card{

      background-color: white; 
      height: 100%; 
      width: 100%;
      color: black;

      box-shadow: 16px 24px 50px -11px rgba(0,0,0,0.76);
      -webkit-box-shadow: 16px 24px 50px -11px rgba(0,0,0,0.76);
      -moz-box-shadow: 16px 24px 50px -11px rgba(0,0,0,0.76);

 
    }


  }

  .card_text{
    margin: 2rem 0;

     h2{
       color: #333;
       margin-top: 1rem;
       margin-bottom: 1rem;
     } 
     
     h3{
        color: #333;
        margin-top: 1rem;
        margin-bottom: 2rem;
      }

      span{
        color: #444;
      }
  }

  .text-center{
    text-align: center;
  }
</style>