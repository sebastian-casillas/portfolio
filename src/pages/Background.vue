<template>
    <div id="background_div">
        <h2 style="color: #000;">Background</h2>
        
        <div class="q-px-lg q-pb-md">
            <q-timeline color="secondary" :dark="false" :layout="layout">

                <background-card v-for="(value, name) of background" :key="name" :data="value" />

            </q-timeline>
        </div>

    </div>
</template>

<script>

import BackgroundCard from '@/components/home/BackgroundCard.vue'
import { useDataStore } from '@/store/Data';

export default {
    name: 'MyComponent',
    components:{BackgroundCard},
    data: () => ({
        background: {}
    }),
    created(){
        this.load_background()
    },
    methods:{
        async load_background(){
            this.background = await useDataStore().getDataBackground.then(e => e.entries)
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