<template>
    <div id="projects_div">
        <h2 class="q-mb-md">Projects</h2>
        <div class="project_contents q-pa-lg row wrap justify-center">
                
            <project-card 
                v-for="p of projects" 
                :key="p._id" 
                :project="p"
                />


        </div>
        <div class="row justify-center q-py-md">
            <q-btn icon="mdi-dots-grid" flat to="/projects" size="1.2rem">
                <span class="q-mx-sm">View all</span>
            </q-btn>
        </div>
    </div>
</template>

<script>
import ProjectCard from '@/components/home/ProjectCard.vue'

export default {
    components: {
        ProjectCard
    },
    props: {
        projects: {
            type: Array,
            default: () => []
        }
    },
}
</script>

<style lang="scss">
#projects_div{
    margin-top:100px;
    padding: 1em 3em;
    width: 100%;

}


</style>