<template>

  <div class="q-pt-lg">

    <div  class="row justify-center">

      <div>
        <q-circular-progress
          v-show="!projects.length"
          indeterminate
          size="50px"
          :thickness="0.22"
          color="primary"
          track-color="grey-3"
          class="q-ma-md"
        />
      </div>

      <project-card 
          class="col-md-4 col-lg-3 col-sm-6 q-mt-md"
          v-for="p of projects" 
          :key="p._id"
          :project="p"
          />

    </div>




    <q-dialog
      :model-value="!!selected_slug"
      persistent maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <div >


        <q-card-section v-if="selected_slug">
          <project-view :selected_slug="selected_slug"></project-view>
        </q-card-section>
      </div>
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