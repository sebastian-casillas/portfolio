<template>
    <div id="workflow_div">

        <div class="workflow_grid">
            <div class="medium_item" style="background-color: #456">
                <h4 class="q-mt-sm" >Languages</h4>
                <div class="small_grid">
                    <div v-for="l of languages" :key="l" >
                        <h6 class="q-my-md q-px-md" style="height: 40px;">
                            {{l.name}}
                        </h6>
                    </div>
                </div>

                <!-- <div>
                    <table class="langauge_table">
                        <tr v-for='language of languages' :key='language'>
                            <th align='left'>{{language.name}}</th>
                            
                            <td v-if='language.note' align='right'><span class='subtitle' >{{language.note}}</span></td>
                            <td v-else align='right'><span class='subtitle' >In progress</span></td>
                            <td v-if='language.level' align='right' style='width:13mm;'><q-rating v-model='language.level' size='2.5mm' color='grey-10' :max='4'/></td>
                            <td v-else align='left'><span style='margin-left: 2.5mm'>...</span></td>
                        </tr>
                    </table>
                </div> -->
            </div>
            <div class="medium_item" style="background-color: #654">
                <h4 class="q-mt-sm" >Programming languages</h4>

                <div class="small_grid">
                    <div v-for="l of p_languages" :key="l" >
                        <h6 class="q-my-md q-px-md" style="height: 40px;">
                            {{l.name}}
                        </h6>
                    </div>
                </div>
            </div>
            <!-- <div class="large_item">
                <h5>Geeky developer looking for his next challenging project</h5>
                <p>
                    Eager to take projects from ideation to delivery, and ready to ensure viability through all its dimensions.
                        </p>
            </div>
            <div class="medium_item">
                <h5>Geeky developer looking for his next challenging project</h5>
                <p>
                    Eager to take projects from ideation to delivery, and ready to ensure viability through all its dimensions.
                     </p>
            </div>
            <div class="medium_item">
                <h5>Geeky developer looking for his next challenging project</h5>
                <p>
                    Eager to take projects from ideation to delivery, and ready to ensure viability through all its dimensions.
                     </p>
            </div> -->
        </div>

    </div>
</template>

<script>

export default {
    name: 'Workflow',
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
    methods: {

    }
}
</script>


<style lang="scss" scoped>
#workflow_div{
    margin-top:40px;
    padding: 1em 3em;
    min-height: 400px;
    width: 100%;

    & > .workflow_grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
        row-gap: 4rem;

        & > .medium_item{
            padding: 20px;

            @media screen and (max-width: 651px){
                grid-column: 1 / span 2;
            }

            
        }

        & > .large_item{
            padding: 20px;
            grid-column: 1 / span 2;
        }

    }


}

.langauge_table{
    width: 100%;
}

.small_grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
}



</style>