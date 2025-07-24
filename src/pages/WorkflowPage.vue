<template>
<div id="competences_div" class="q-pt-lg">

    <div class="title_div">
        <p class="text-h4 text-grey-10">Workflow</p>
    </div>
    
    <div class="row q-mb-xl q-pa-md">

        <template v-if="!competences.length">
            <div v-for="i in 5" :key="i" class="col-md-6 col-sm-12 col-xs-12 q-px-xl q-my-sm competence_card">
                <q-skeleton type="text"/>
                <q-skeleton type="rect" class="q-mt-sm" style="height: 40px;"/>
            </div>
        </template>

        <div v-for="c of competences" :key="c._id" 
                class="col-md-6 col-sm-12 col-xs-12 q-px-xl q-my-sm competence_card">
            <h5 class="q-my-md" style="line-height: 2rem;"> {{c.title}}</h5>
            <p style="line-height: 1rem;">{{c.content}}</p>
        </div>

    </div>


    <div class="row">

        <div class="col-md-6 col-sm-12 col-xs-12 q-pa-xl" id="language_icon_p">
            <h4 class="q-mt-sm text-white" >Programming languages</h4>

            <q-skeleton v-if="!programming_lang.length" type="rect" />

            <template v-else>

                <technologies-graph :graph_data="programming_lang"></technologies-graph>

            </template>


        </div>

        <div class="col-md-6 col-sm-12 col-xs-12 q-pa-xl" id="language_icon_l">

            <h4 class="q-mt-sm text-white" >Languages</h4>


            <q-skeleton v-if="!international_lang.length" type="rect" />

            <template v-else>
                <div v-for="l of international_lang" :key="l" class="row wrap items-center content-center q-mb-md">


                    <span class="col-shrink text-h5 q-mx-sm text-white" align='left'>{{l.title}}</span>

                    <span class="col-grow"></span>

                    <span class="col-shrink text-overline q-mx-sm" style="color: #fffA" v-if="l.value >= 2">{{l.content}}</span>
                    <span class="col-shrink text-overline q-mx-sm " v-else  >...In progress</span>

                    <q-rating  class="col-shrink q-mx-sm" v-if="l.value >= 2" readonly   v-model='l.value' size='1.3rem' color='deep-orange-3' :max='4'/>


                </div>

            </template>


        </div>
    </div>



</div>
</template>

<script lang="ts">

// import TechGraph from '@/components/home/TechnologiesGraph.vue'
import TechnologiesGraph from '@/components/home/TechnologiesGraph.vue'

import { useDataStore } from '@/store/Data';

export default {
  components: { TechnologiesGraph },
    name: 'WorkflowPage',
    data: () => ({
        competences: [],
        programming_lang: [],
        international_lang: [],
    }),
    created(){
        this.init()
    },
    methods: {
        async init(){
            const data = await useDataStore().getDataWorkflow
            console.log(data)
            this.competences = data.competences
            this.programming_lang = data.lang_programming
            this.international_lang = data.lang_communication
        }
    },
}
</script>

<style lang="scss" scoped>

.title_div{
    padding-top: 1rem;
    padding-right: 3rem;
    padding-left: 3rem;
}

#competences_div{
    background-color: #EEE;
    max-width: 100vw;
    width: 100vw;

    & .competence_card > *{
        color: black;
    }
}

#language_icon_p{
    background-color: rgb(63, 83, 105);

    background-image: url(/assets/background_coding.svg);

    background-position: right top;

    background-repeat: no-repeat;
    background-size: 20%;

    & > *{
        background-color: #4566;
    }
}

#language_icon_l{
    background-color: rgb(119, 98, 78);

    background-image: url(/assets/background_lang.svg);

    background-position: right top;

    background-repeat: no-repeat;
    background-size: 20%;

    & > *{
        background-color: #6546;
    }
}

.q-skeleton--anim-wave:after {
    background: linear-gradient(90deg, rgba(0, 0, 0, .00), rgba(0, 0, 0, 0.09), rgba(0, 0, 0, .00));
}

.q-skeleton--dark {
    background: rgba(69, 69, 69, 0.05);
}


</style>