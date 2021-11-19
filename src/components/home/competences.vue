<template>
<div>

    <div>
        <p class="text-italic text-center"> A good computer system implementation involves much more than just code</p>  
    </div>

    <div id="competences_div">



        <div id="general_info" >
            <div v-for="c of competences" :key="c._id" class="competence_card">
                <h5 style=" margin-top: 0; margin-bottom: 1em; height: 2.2em;"> {{c.value.title}}</h5>
                <p style="height: 4em;">{{c.value.content}}</p>
            </div>

            <div class="medium_item" style="background-color: #456">
                <h4 class="q-mt-sm" >Programming languages</h4>

                <div class="small_grid">
                    <div v-for="l of p_languages" :key="l" >
                        <h6 class="q-my-md q-px-md" style="height: 40px;">
                            {{l.name}}
                        </h6>
                    </div>
                </div>
            </div>

            <div class="medium_item" style="background-color: #654">
                <h4 class="q-mt-sm" >Languages</h4>
                <div class="small_grid">
                    <div v-for="l of languages" :key="l" >
                        <h6 class="q-my-md q-px-md" style="height: 40px;">
                            {{l.name}}
                        </h6>
                    </div>
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


#general_info{
    background-color: #EEE;
    width: 100%;
    display: grid;
    row-gap: 2rem;
    column-gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 3rem;
    padding: 2.4rem;

    & .competence_card {
      padding: 10px 20px;;

      & > *{
        color: black;
      }
      
    }


    
    @media screen and (max-width: 651px){
      grid-template-columns: 1fr;
    }

    
  }
</style>