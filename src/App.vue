<template>
  <q-layout view="lHh Lpr lFf">

    <q-header id="app_header">
      <q-toolbar id="app_toolbar">

        <q-toolbar-title>
          <h6>
            Sebastian C. P.
          </h6>
          
        </q-toolbar-title>


        <q-tabs shrink>
          <q-tab name="tab1" label="Tab 1" />
          <q-tab name="tab2" label="Tab 2" />
          <q-tab name="tab3" label="Tab 3" />
        </q-tabs>
      </q-toolbar>
    </q-header>


    <div class="fixed-bottom-right q-pa-md">

      <q-fab  color="purple" icon="keyboard_arrow_up" direction="up">
        <q-fab-action color="primary" @click="onClick" icon="mail" />
        <q-fab-action color="secondary" @click="onClick" icon="alarm" />
      </q-fab>
      
    </div>



    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>


export default {
  name: 'LayoutDefault',

  components: {

  },

  data: () => ({
    leftDrawerOpen: false,
  }),

  methods:{
    onClick(){

    }
  }
}
</script>

<style scoped>
  #app_header{
    position: relative;
    display: flex;
    justify-content: center;
    background-color: transparent;
  }

  #app_toolbar{
    max-width: 1000px;
    border-bottom: solid 1px #FFFA;
  }
</style>