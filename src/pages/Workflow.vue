<template>
<div id="competences_div" class="q-pt-lg">

    <p class="text-h4 text-grey-10 q-py-md q-ml-xl">Workflow</p>

    <div class="row q-mb-xl q-pa-md">



        <template v-if="!competences.length">
            <div v-for="i in 5" :key="i" class="col-md-6 col-sm-12 col-xs-12 q-px-xl q-my-sm competence_card">
                <q-skeleton type="text"/>
                <q-skeleton type="rect" class="q-mt-sm" style="height: 40px;"/>
            </div>
        </template>

        <div v-for="c of competences" :key="c._id" 
                class="col-md-6 col-sm-12 col-xs-12 q-px-xl q-my-sm competence_card">
            <h5 class="q-my-md" style="line-height: 2rem;"> {{c.value.title}}</h5>
            <p style="line-height: 1rem;">{{c.value.content}}</p>
        </div>


        <div class="col-md-6 col-sm-12 col-xs-12 q-px-xl q-my-sm competence_card">
            <h5 class="q-my-md" style="line-height: 2rem;">Keep updated and relevant, always!</h5>
            <div style="height: 80px; width: 100%; padding: 10px; background-color: #333;">
                <p style="line-height: 1rem; color: #CCC; font-family: consolas; font-weight: 600;">

                    <span style="color: #4D4;">sebastian.casillas@mycomputer:</span> /usr/projects/onlineportfolio# git pull
                </p>
            </div>
            
        </div>


    </div>


     <div class="row">

        <div class="col-md-6 col-sm-12 col-xs-12 q-pa-xl" id="language_icon_p">
            <h4 class="q-mt-sm" >Programming languages</h4>

            <q-skeleton v-if="!programming_lang.length" type="rect" />

            <template v-else>

                <technologies-graph :graph_data="programming_lang"></technologies-graph>

                <!-- <div v-for="l of programming_lang" :key="l" class="row wrap items-center content-center q-mb-md">


                    <span class="col-shrink text-h5 q-mx-sm" align='left'>{{l.value.language}}</span>

                    

                    <span class="col-grow"></span>

                    <q-rating  class="col-shrink q-mx-sm" icon="mdi-label-variant" readonly  v-model='l.value.level' size='1.3rem' color='deep-orange-3' :max='4'/>
                    <q-icon name="mdi-clock" size='1.3rem'></q-icon>


                </div> -->

                <!-- <p class="text-overline q-mt-xl q-mb-md" style="line-height: 1rem;">{{programming_lang_note}}</p> -->
            </template>


        </div>

         <div class="col-md-6 col-sm-12 col-xs-12 q-pa-xl" id="language_icon_l">

            <h4 class="q-mt-sm" >Languages</h4>


            <q-skeleton v-if="!international_lang.length" type="rect" />

            <template v-else>
                <div v-for="l of international_lang" :key="l" class="row wrap items-center content-center q-mb-md">


                    <span class="col-shrink text-h5 q-mx-sm" align='left'>{{l.value.language}}</span>

                    <span class="col-grow"></span>

                    <span class="col-shrink text-overline q-mx-sm" style="color: #fffA" v-if="l.value.level >= 2">{{l.value.subtitle}}</span>
                    <span class="col-shrink text-overline q-mx-sm " v-else  >...In progress</span>

                    <q-rating  class="col-shrink q-mx-sm" v-if="l.value.level >= 2" readonly   v-model='l.value.level' size='1.3rem' color='deep-orange-3' :max='4'/>


                </div>

            </template>


        </div>
    </div>



</div>
</template>

<script>

import TechGraph from '@/components/home/TechnologiesGraph.vue'
import TechnologiesGraph from '@/components/home/TechnologiesGraph.vue'

import { useDataStore } from '@/store/Data';

export default {
  components: { TechnologiesGraph },
    name: 'Workflow',
    data: () => ({
        competences: [],
        programming_lang: [],
        programming_lang_note: [],
        international_lang: [],
        international_lang_note: []
        
    }),
    created(){
        this.init()
    },
    methods: {
        async init(){
            let data = await useDataStore().getDataWorkflow
            this.competences = data.competences
            this.programming_lang = data.programming_lang
            this.programming_lang_note = data.programming_lang_note
            this.international_lang = data.international_lang
            this.international_lang_note = data.international_lang_note
        }
    },
}
</script>

<style lang="scss" scoped>

#competences_div{
    background-color: #EEE;
    max-width: 100vw;
    width: 100vw;

    & .competence_card > *{
        color: black;
    }
}

#language_icon_p{
    background-color: #456;

    background-image: url(/assets/background_coding.svg);

    background-position: right top;

    background-repeat: no-repeat;
    background-size: 20%;

    & > *{
        background-color: #4566;
    }
}

#language_icon_l{
    background-color: #654;

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