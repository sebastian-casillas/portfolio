<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <div class="fixed-bottom-right q-pa-md">

    <q-fab  color="purple" icon="keyboard_arrow_up" direction="up">
      <q-fab-action color="primary" @click="onClick" icon="mail" />
      <q-fab-action color="secondary" @click="onClick" icon="alarm" />
    </q-fab>
    </div>


    <q-page-container>
      <HelloWorld />
    </q-page-container>
  </q-layout>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld
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
