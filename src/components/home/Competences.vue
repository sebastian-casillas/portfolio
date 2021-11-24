<template>
<div>

    <div>
        <p class="text-italic text-center"> A good computer system implementation involves much more than just code</p>  
    </div>

    <div id="competences_div" class="q-pa-lg">

        <div class="row q-mb-lg">

            <div v-for="c of competences" :key="c._id" 
                 class="col-md-6 col-sm-12 col-xs-12 q-pa-md competence_card">
                <h5 class="q-my-md" style="line-height: 2rem;"> {{c.value.title}}</h5>
                <p style="line-height: 1rem;">{{c.value.content}}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12 q-pa-lg" id="planguage_card">
                <h4 class="q-mt-sm" >Programming languages</h4>


                <div v-for="l of p_languages" :key="l" >
                    <h6 class="q-my-md q-px-md" style="height: 40px;">
                        {{l.name}}
                    </h6>
                </div>


            </div>

            <div class="col-md-6 col-sm-12 col-xs-12 q-pa-lg" id="language_card">

                <h4 class="q-mt-sm" >Languages</h4>


                <div v-for="l of languages" :key="l">
                    <h6 class="q-my-md q-px-md" style="height: 40px;">
                        {{l.name}}
                    </h6>
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
    },
    data() {
        return {
                languages:[
                    {name: 'Spanish', level: 4, note: 'Mother-tongue'},
                    {name: 'English', level: 4, note: 'IELTS 2020 - CERF C1'},

                    {name: 'German', level: 2, note: 'Deutschotek: A2'},
                    {name: 'Chinese', level: 1, note: 'BIT:Mandarin Basic'},
                    {name: 'Dutch'},
                    {name: 'Finnish'}
                ],
                p_languages:[
                    {name: 'Javascript', level: 4},
                    {name: 'Python', level: 4},
                    {name: 'PHP', level: 4},

                    {name: 'Java', level: 4},
                    {name: 'C/C++', level: 3},
                    {name: 'SQL', level: 3},

                    {name: 'R', level: 2},
                    {name: 'Low level: ASM, VHDL', level: 2},
                ]

        }
    },
}
</script>

<style lang="scss" scoped>
#language_card{
    background-color: #654;
    background-image: url(/assets/background_lang.svg);
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: right bottom;

}

#planguage_card{
        background-color: #456;
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