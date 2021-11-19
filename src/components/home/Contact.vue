<template>
  <div id="contact_component" class="full-width row justify-center items-center content-center">

    <div class="presentation_background" :style="max_width">
      <q-responsive  :ratio="2.2"  >

        <div class="row pressentation_card">


          <q-avatar size="250px" class="q-mx-xl col-grow">
            <img src="/assets/profile_circle.png">
          </q-avatar>

          <div class="q-mx-md col-grow">
            <h2 class="q-ma-sm">Sebastian</h2>
            <h3 class="q-ma-sm">Casillas Perez</h3>


            <div class="contact_buttons q-mt-lg q-ml-md">
              <q-btn @click='to_clipboard' flat dense size="12px" icon="email" class="q-px-sm" label="sebastian.casillas@outlook.com" />
              <q-btn @click='open_linkedin' flat dense size="12px"  icon="mdi-linkedin" class="q-px-sm" label="linkedin.com/in/sebastian-casillas" />
            </div>
          </div>

        </div>

      </q-responsive>
    </div>



  </div>
</template>

<script>
import { copyToClipboard } from 'quasar'

export default {
    name: 'Contact',
    props: {
        max_width: {
            type: String,
            default: 'width: 800px;'
        },
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

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: white; 
      height: 100%; 
      width: 100%;
      color: black;

box-shadow: 16px 24px 50px -11px rgba(0,0,0,0.76);
-webkit-box-shadow: 16px 24px 50px -11px rgba(0,0,0,0.76);
-moz-box-shadow: 16px 24px 50px -11px rgba(0,0,0,0.76);
    }

    .contact_buttons{

      & > *{
        display: block;
        margin-bottom: 10px;
      }

    }

    .background_radial{
      height: 100%;
      position:relative;
      background-color: red;
      background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    }

  }
</style>