<template>
    <q-img :src="'https://api.casillas.dev/' + project.cover.path" ratio="1" style="height: 100%; width: 100%;">
        <div class="absolute-bottom text-h6">{{project.title}}</div>
        <div class="abs-full">
            <q-btn   @click="$router.push({name: 'Portfolio', params: { slug: project.slug }})"/>
        </div>
    </q-img>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            default: () => {}
        }
    },
}
</script>

<style scoped>
    .my-card{
        height: 450px; width: 450px;
        background-color: white;
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