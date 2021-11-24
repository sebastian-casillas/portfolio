<template>
<div style="max-width: 100vw;">

    <div>
        <p class="text-italic text-center"> A good computer system implementation involves much more than just code</p>  
    </div>

    <div id="competences_div" class="q-pa-lg">

        <div class="row q-mb-xl">

            <div v-for="c of competences" :key="c._id" 
                 class="col-md-6 col-sm-12 col-xs-12 q-pa-md competence_card">
                <h5 class="q-my-md" style="line-height: 2rem;"> {{c.value.title}}</h5>
                <p style="line-height: 1rem;">{{c.value.content}}</p>
            </div>
        </div>

        <div class="row q-mb-xl">
            <div class="col-md-6 col-sm-12 col-xs-12 q-pa-xl" id="language_icon_p">
                <h4 class="q-mt-sm" >Programming languages</h4>



                <div v-for="l of p_languages" :key="l" class="row wrap items-center content-center q-mb-md">


                    <span class="col-shrink text-h5 q-mx-sm" align='left'>{{l.value.language}}</span>

                    

                    <span class="col-grow"></span>

                    <q-rating  class="col-shrink q-mx-sm" icon="mdi-label-variant" readonly  v-model='l.value.level' size='1.3rem' color='deep-orange-3' :max='4'/>
                    <q-icon name="mdi-clock" size='1.3rem'></q-icon>


                </div>

                <p class="text-overline q-mt-xl q-mb-md" style="line-height: 1rem;">{{p_languages_note}}</p>

            </div>

            <div class="col-md-6 col-sm-12 col-xs-12 q-pa-xl" id="language_icon_l">

                <h4 class="q-mt-sm" >Languages</h4>

                <div v-for="l of languages" :key="l" class="row wrap items-center content-center q-mb-md">


                    <span class="col-shrink text-h5 q-mx-sm" align='left'>{{l.value.language}}</span>

                    <span class="col-grow"></span>

                    <span class="col-shrink text-overline q-mx-sm" style="color: #fffA" v-if="l.value.level >= 2">{{l.value.subtitle}}</span>
                    <span class="col-shrink text-overline q-mx-sm " v-else  >...In progress</span>

                    <q-rating  class="col-shrink q-mx-sm" v-if="l.value.level >= 2" readonly   v-model='l.value.level' size='1.3rem' color='deep-orange-3' :max='4'/>


                </div>

            </div>
        </div>



    </div>
</div>

</template>

<script>

export default {
    name: 'Competences',
    props: {
        competences: {
            type: Array,
            default: () => [],
        },
        languages: {
            type: Array,
            default: () => [],  
        },
        p_languages: {
            type: Array,
            default: () => [], 
        },
        p_languages_note: {
            type: String,
            default: ''
        }
    },
}
</script>

<style lang="scss" scoped>


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

#competences_div{
    background-color: #EEE;
    width: 100%;
    margin-bottom: 3rem;

    & .competence_card > *{
        color: black;
    }
}
</style>