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
          v-show="!selected_slug"
          :project="p"
          />

    </div>


    <q-dialog
      v-model="is_selected_project"
      persistent maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />
          
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- <project-view 
        v-if="selected_slug"
        :selected_slug="selected_slug"
        /> -->

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
    is_selected_project:{
        // getter
        get: function () {
          return !!this.selected_project;
        },
        // setter
        set: function (newValue) {
          if(!newValue)
            this.selected_project = null;
        }

    }
  }
}
</script>

<style>
.this_grid {
  display: grid;

}
</style>