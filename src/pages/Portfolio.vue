<template>
  <q-layout view="hHh lpR fFf" style="overflow: hidden; max-width: 100vw;">



    <!-- <q-drawer show-if-above v-model="leftDrawerOpen" side="left">

    </q-drawer> -->

    <q-page-container style="max-width: 100vw;">

      <q-scroll-area style="height: 100vh;">

        <div stretch class="row q-py-sm justify-center">
          <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

          <q-btn flat round icon="mdi-home-circle" class="text-white q-mx-sm" color="grey-0" size="18px" @click="$router.push({name: 'home'})">
            <q-tooltip>
              Home
            </q-tooltip>
          </q-btn>

          <q-btn flat round icon="mdi-dots-grid" class="text-white q-mx-sm" color="grey-0" size="18px" @click="$router.push({name: 'Project'})">
            <q-tooltip>
              Portfolio
            </q-tooltip>
          </q-btn>

        </div>

        <div style="width: 100%" class="row">
        <project-card 
            class="col-md-4 col-lg-3 col-sm-6"
            v-for="p of projects" 
            :key="p._id" 
            v-show="!selected_slug"
            :project="p"
            />

        </div>


        <project-view 
            v-if="selected_slug"
            :selected_slug="selected_slug"
            />

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