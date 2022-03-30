<template>
  <div>
    <div class="full-width row wrap justify-center content-start q-py-lg q-px-md">

      <!-- Loading div: centered and with a min ratio -->
      <div v-show="!projects.length" class="full-width row justify-center q-py-lg">

        <q-circular-progress
          
            style="min-width: 150px; min-height: 150px;"
            indeterminate
            size="20px"
            :thickness="0.1"
            color="primary"
            track-color="grey-3"
            class="q-ma-md column q-my-md"
          />

      </div>

      <!-- Grid of results -->
      <div class="full-width row" style="max-width: 1200px; min-width: 500px;">

        <div class="column col-md-4 col-lg-3 col-sm-12 q-px-sm q-my-md" v-for="p of projects" :key="p._id">
          <project-card  :project="p" />
        </div>

      </div>

    </div>

    <q-dialog
        :model-value="!!selected_slug"
        persistent 
        maximized
        position="bottom"
        >
          <project-view :selected_slug="selected_slug"></project-view>
      </q-dialog>
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
    selected_project: null,
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
  },
  computed:{
    selected_slug: function(){
      return this.$route.params.slug || undefined
    },
  }
}
</script>

<style>


</style>