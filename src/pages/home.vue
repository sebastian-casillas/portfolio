<template>
<div id="home">
  <div id="home_title">
    <div class="centered_flexbox">
      <q-avatar size="250px">
        <img src="/assets/profile_circle.png">
      </q-avatar>
      <div>
        <h2>Sebastian</h2>
        <h3>Casillas Perez</h3>
      </div>
    </div>



    <div>
      <q-avatar>
          <q-icon name="email" />
      </q-avatar>
      <span>sebastian.casillas@outlook.com</span>
    </div>
    <div class="centered_flexbox">

    </div>
    <div class="centered_flexbox">
      <q-avatar>
          <q-icon name="mdi-linkedin" />
      </q-avatar>
      <span>linkedin.com/in/sebastian-casillas/</span>
    </div>


  </div>

  <div>
    <p>
      A good computer system implementation involves much more than just coding.
    </p>
    
  </div>

  <div id="general_info">
    <div v-for="c of curriculum.competences" :key="c._id" class="competence_card">
      <h4> {{c.value.title}}</h4>
      <p>{{c.value.content}}</p>
      
    </div>
  </div>
  
</div>

</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    curriculum: [],
  }),

  async created() {
    this.$axios
        .get("singletons/get/curriculum")
        .then(res => res.data)
        .then(d => { 
          console.log(d)
            this.curriculum = d;
            
            })
        .catch((e) => console.log(e));

  }

}
</script>



<style lang="scss">

@import '@/styles/quasar.variables.scss';

  #home{
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #home_title{
    // background-color: red;


    padding-top: 8vh;
    padding-bottom: 8vh;

    & > div{
      margin: 10px 40px;

      h2, h3{
        margin-bottom: 20px;
        margin-top: 20px;
      }

    }
  }

  #general_info{
    background-color: #EEE;
    width: 100%;
    display: grid;
    row-gap: 2rem;
    column-gap: 1.5rem;
    grid-template-columns: 1fr 1fr;

    & .competence_card {
      padding: 10px 20px;;

      & > *{
        color: black;
      }
      
    }


    
    @media screen and (max-width: 601px){
      grid-template-columns: 1fr;
    }

    
  }

</style>