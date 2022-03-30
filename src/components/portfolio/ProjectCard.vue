<template>
    <q-responsive :ratio="1" style="width: 100%;">

        <q-skeleton class="abs-full" v-show="!showImg" style="z-index: 5;"/>

        <img :src="'https://api.casillas.dev/' + project.cover.path" class="abs-full" style="object-fit: cover;" v-show="showImg" @load="showImg = true"/>


        <div class="abs-full" style="z-index: 10;">
            <div class="absolute-bottom q-px-sm q-py-md" style="background-color: #3338;">

                <div class="text-h4 non-selectable">{{project.title}}</div>
                <q-slide-transition>
                    <div v-show="cardHover">
                        <div class="text-h6 non-selectable" >{{project.subtitle}}</div>
                        <div class="q-mt-sm" v-show="cardHover">
                            <q-chip v-for="chip of project.knowledge_applied" :key="chip">
                                {{chip}}
                            </q-chip>
                        </div>
                    </div>
                </q-slide-transition>
            </div>


        </div>

        <div class="abs-full" style="z-index: 12;" @mouseover="cardHover = true" @mouseleave="cardHover = false">
            <q-btn  @click="$router.push({name: 'Portfolio', params: { slug: project.slug }})"/>
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