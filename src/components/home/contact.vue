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
    
    <div class="contact_buttons">
      <q-btn flat dense size="12px" color="transparent" icon="email" label="sebastian.casillas@outlook.com" />
      <q-btn flat dense size="12px" color="transparent" icon="linkedin" label="linkedin.com/in/sebastian-casillas" />
    </div>

  </div>
</template>

<style lang="scss">
  #home_title{

    padding-top: 10vh;
    padding-bottom: 10vh;

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
    }

    .q-btn__content {
      color:white;
    }
  }
</style>