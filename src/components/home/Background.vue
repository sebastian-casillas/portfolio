<template>
    <div id="background_div">
        <h2 style="color: #000;">Background</h2>


        <div class="q-px-lg q-pb-md">
            <q-timeline color="secondary" :layout="layout">

                <background-card v-for="(value, name) of background" :key="name" :data="value.value" />

            </q-timeline>
        </div>
        
    </div>
</template>

<script>

import BackgroundCard from '@/components/home/BackgroundCard.vue'

export default {
    name: 'MyComponent',
    components:{BackgroundCard},
    props: {
        background: {
            type: Array,
            default: () => [],
        },
    },

    data: () => ({
        
    }),
    computed:{
        layout: function () {
            return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
        }
    }
}
</script>

<style lang="scss" scoped>
#background_div{
    margin-top:100px;
    padding: 1em 3em;
    width: 100%;
    background-color: white;

    .q-timeline.q-timeline--dark{

        & > .q-timeline__entry{
            color: #111 !important;

            .q-timeline__title{
                color: #111 !important;
                font-size: 2rem !important;
                line-height: 1.6rem !important;
                font-weight: 300;
            }

            .q-timeline__subtitle{
                color: #333 !important;
            }
        }


    }


}
</style>