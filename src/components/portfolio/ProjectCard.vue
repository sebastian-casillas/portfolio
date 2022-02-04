<template>
    <q-card class="my-card q-mx-md q-mb-sm"  @click="$router.push({name: 'Project', params: { slug: project.slug }})">
        <q-img :src="'https://api.casillas.dev/' + project.cover.path" ratio="1" style="height: 100%; width: 100%;">
            <div class="absolute-bottom text-h6">
            {{project.title}}
            </div>
        </q-img>
    </q-card>
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
</style>