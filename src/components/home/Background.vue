<template>
    <div id="background_div">
        <h2>Background</h2>

        <div class="q-px-lg q-pb-md">
            <q-timeline color="secondary" :dark="false" :layout="layout">

                <background-card v-for="(value, name) of background" :key="name" :data="value" />

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
            type: Object,
            default: () => {}
        },
    },
    computed:{
        layout: function () {
            return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
        }
    }
}
</script>

<style lang="scss" scoped>
#background_div{
    padding-top: 1rem;
    padding-right: 3rem;
    padding-left: 3rem;
    width: 100%;
    background-color: white;

    .q-timeline.q-timeline--dark{

        & > .q-timeline__entry{


            .q-timeline__title{

                font-size: 2rem !important;
                line-height: 1.6rem !important;
                font-weight: 300;
            }

        }


    }


}
</style>