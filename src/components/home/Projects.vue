<template>
    <div id="projects_div">
        <h2 class="q-mb-md">Projects</h2>
        <div class="project_contents q-pa-lg row wrap justify-center">
                

            <q-card class="my-card" v-for="p of projects" :key="p._id" style="height: 450px; width: 450px;" @click="select_project(p)">
                <q-img :src="'https://casillas.dev/' + p.cover.path" ratio="1" style="height: 100%; width: 100%;">
                    <div class="absolute-bottom text-h6">
                    {{p.title}}
                    <div class="text-caption">{{p.context}}</div>
                    </div>
                </q-img>
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
    },
    methods:{
        select_project: function(p){
            this.$emit('select-project', p)

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