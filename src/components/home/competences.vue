<template>
    <div id="competences_div" v-intersection="options" :style="'margin: 40px ' + (40*percent/100) + 'px'">
        <div>
            <p class="text-italic text-center">
            A good computer system implementation involves much more than just coding.
            </p>  
        </div>

        <div id="general_info">
            <div v-for="c of competences" :key="c._id" class="competence_card">
                <h4 style="margin-bottom: 14px;"> {{c.value.title}}</h4>
                <p>{{c.value.content}}</p>
        
            </div>
        </div>

    </div>
</template>

<script>

const thresholds = []

import { ref } from 'vue'

for (let i = 0; i <= 1.0; i += 0.01) {
  thresholds.push(i)
}



export default {
    name: 'Competences',
    props: {
        competences: {
            type: Array,
            default: () => [],
        },
    },
    setup(){
        const percent = ref(0);
        return {
                percent,
                options: {
                    handler (entry) {
                        const val = (entry.intersectionRatio * 100).toFixed(0)
                        if (percent.value !== val) percent.value = val
                    },
                    cfg: {threshold: thresholds}
                }
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
    padding: 4rem;

    & .competence_card {
      padding: 10px 20px;;

      & > *{
        color: black;
      }
      
    }


    
    @media screen and (max-width: 601px){
      grid-template-columns: 1fr;
    }

    
  }
</style>