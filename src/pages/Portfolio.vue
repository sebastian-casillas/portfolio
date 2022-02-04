<template>

  <div class="q-pt-lg">

    <div  class="row justify-center">
      <project-card 
          class="col-md-4 col-lg-3 col-sm-6 q-mt-md"
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

  </div>

</template>

<script>
import ProjectCard from '@/components/portfolio/ProjectCard.vue'
import ProjectView from '@/components/portfolio/ProjectView.vue'

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
    },
  }
}
</script>

<style>
.this_grid {
  display: grid;

}
</style>