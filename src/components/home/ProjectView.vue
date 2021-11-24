<template>
    <div id="project_container" class="full-width column content-center no-wrap" >
        <div class="row q-pb-md" >
            <q-btn flat icon="mdi-arrow-left" color="grey-8" @click="$emit('hide-dialog')">Back</q-btn>
        </div>
        

        <div class="row justify-center">

            <div class="col-md-6 col-sm-10 col-xs-12 q-pa-md">
                <q-img :src="'https://casillas.dev' + selected_project.cover.path" style="height: 100%; min-height: 30vh;" scale-down></q-img>
            </div>
            
            <div class="col-md-6 col-sm-12 q-pa-md">
                <h3 style="color:black" class="q-mb-md">{{selected_project.title}}</h3>
                <p style="color:black">{{selected_project.context}}</p>
                <p style="color:black">{{selected_project.description}}</p>
                <div class="row wrap">
                    <q-chip v-for="c of selected_project.knowledge_applied" :key="c">
                        {{c}}
                    </q-chip>
                </div>
            </div>
                

        </div>



        <div class="project_gallery q-pa-md row q-mt-lg">
            <div v-for="i of selected_project.gallery" :key="i" class="col-md-4 col-sm-6 xs-12 q-pa-md self-center q-mb-md">
                <q-img :src="'https://casillas.dev' + i.path"></q-img>
                <div class="q-pa-sm">
                    <p style="color:black;">{{i.value.description}}</p>
                </div>
            </div>

        </div>
        
    </div>
</template>

<script>



export default {
  name: 'ProjectView',
  props: {
      selected_project :{
          required: true,
          type: Object
      }
  },
}

</script>

<style lang="scss">

#project_container{
    background-color: white;
    min-height: 100px;
    padding: 2rem;
    overflow: none;
    
}



</style>

