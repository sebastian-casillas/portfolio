<template>
    <div id="projects_div">
        <h2>Projects</h2>
        <div class="project_contents q-pa-lg row wrap">
                

            <q-card class="my-card" v-for="p of projects" :key="p._id">
            <q-img :src="'https://casillas.dev/' + p.gallery[0].path">
                <div class="absolute-bottom text-h6">
                {{p.title}}
                </div>
            </q-img>

            <q-card-section style="color: black;">
                <p class="">{{p.context}}</p>
                <p>{{p.description}}</p>
            </q-card-section>
            </q-card>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        projects: {
            type: Array,
            default: () => []
        }
    }

}
</script>

<style lang="scss">
#projects_div{
    margin-top:100px;
    padding: 1em 3em;
    width: 100%;

    .project_contents{

    }
}

.my-card{
    height: 500px; width: 500px;
     background-color: white;
}
</style>