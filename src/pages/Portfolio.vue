<template>
  <q-layout view="hHh lpR fFf" style="overflow: hidden; max-width: 100vw;">

    <q-header flat class="text-white" style="background-color: transparent;">

      <q-toolbar stretch class="row">
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

        <q-space/>

        <q-btn flat icon="mdi-home-circle" class="text-white" color="grey-0" @click="$router.push({name: 'home'})"></q-btn>
        <q-btn flat icon="mdi-dots-grid" class="text-white" color="grey-0" @click="$router.push({name: 'Project'})"></q-btn>

        <q-space/>

      </q-toolbar>

    </q-header>

    <!-- <q-drawer show-if-above v-model="leftDrawerOpen" side="left">

    </q-drawer> -->

    <q-page-container style="max-width: 100vw;">

      <q-scroll-area v-show="!selected_slug" style="height: 100vh;">
        <div class="row q-pa-md" >
          <project-card 
              class="col-md-4 col-lg-3 col-sm-6"
              v-for="p of projects" 
              :key="p._id" 
              :project="p"
              />

        </div>
      </q-scroll-area>

      <q-scroll-area v-if="selected_slug" style="height: 100vh;">
        <project-view :selected_slug="selected_slug"/>
      </q-scroll-area>


    </q-page-container>

  </q-layout>
</template>

<script>
import ProjectCard from '@/components/home/ProjectCard.vue'
import ProjectView from '@/components/home/ProjectView.vue'

export default {
  components:{
    ProjectCard,
    ProjectView
  },
  
  data: () => ({
    projects: [],
    leftDrawerOpen: false,
  }),

  created(){
    this.load_portfolio()
  },
  methods:{
    load_portfolio(){
      this.$api
          .post('collections/get/project', { populate: 1 })
          .then( res => res.data )
          .then( d => {  this.projects = d.entries; })
          .catch( e => console.log(e));
    },

    toggleLeftDrawer(){
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  },
  computed:{
    selected_slug: function(){
      return this.$route.params.slug || undefined
    }
  }
}
</script>

<style>

</style>