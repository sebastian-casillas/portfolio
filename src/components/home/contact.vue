<template>
  <div id="home_title">
    <div class="centered_flexbox" style="margin-bottom: 40px;">
      <q-avatar size="250px">
        <img src="/assets/profile_circle.png">
      </q-avatar>
      <div>
        <h2>Sebastian</h2>
        <h3>Casillas Perez</h3>
      </div>
    </div>
    <div class="centered_flexbox">

    </div>
    
    <div class="contact_buttons">
      <q-btn  flat dense size="12px" color="transparent" icon="email" label="sebastian.casillas@outlook.com" />
      <q-btn @click='open_linkedin' flat dense size="12px" color="transparent" icon="linkedin" label="linkedin.com/in/sebastian-casillas" />
    </div>

  </div>
</template>

<script>
import { copyToClipboard } from 'quasar'

export default {
    name: 'Contact',
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
  #home_title{

    padding-top: 16vh;
    padding-bottom: 14vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > *{
      margin: 15px 20px;

      h2, h3{
        margin-bottom: 20px;
        margin-top: 20px;
      }

    }

    .contact_buttons > *{
      display: block;
      margin-bottom: 10px;;
    }

    .q-btn__content {
      color:white;
    }
  }
</style>