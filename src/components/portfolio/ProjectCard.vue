<template>
    <q-responsive :ratio="7/4" style="width: 100%;" @click="$router.push({name: 'Portfolio', params: { slug: project.slug }})">
    
        <div>
            <q-skeleton class="abs-full" v-show="!showImg" style="z-index: 5;"/>

            <img :src="'https://api.casillas.dev/storage/uploads' + project.cover.path" class="abs-full" style="object-fit: cover;" v-show="showImg" @load="showImg = true" />


            <div class="abs-full p-card-overlay" @mouseover="cardHover = true" @mouseleave="cardHover = false">

                <div class="absolute-bottom q-px-sm q-pt-md hide-scrollbar" style="background-color: #3338; max-height: 100%; overflow-y: auto;">


                    <div class="text-h5 non-selectable q-mb-sm">{{project.title}}</div>



                    <q-slide-transition>
                        <div v-show="cardHover" style="overflow-x: hidden;">
                            <div class="non-selectable" >{{project.subtitle}}</div>
                            <div class="q-my-sm" v-show="cardHover">
                                <q-chip v-for="chip of project.knowledge_applied" :key="chip" :clickable="false" class="non-selectable">
                                    {{chip}}
                                </q-chip>
                            </div>
                        </div>
                    </q-slide-transition>


                </div>
            </div>
        </div>


    </q-responsive>

</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            default: () => {}
        }
    },

    data: () => ({
        showImg: false,
        cardHover: false,
    }),
}
</script>

<style scoped>
    .p-card-overlay{
        z-index: 10;
        cursor: pointer;
    }
    .abs-full{
        position: absolute;
        top: 0;
        left: 0;
        padding: 0;
        height: 100%; 
        width: 100%;
        background-color: transparent;
    }

    .abs-full button{
        height: 100%; 
        width: 100%;
        background-color: transparent;
    }
</style>