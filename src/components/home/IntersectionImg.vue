<template>
    <q-img style="max-height: 100%;" :src="src" :ref="asset" :id="'c_' + asset" fit="contain"/>
</template>

<script>

export default {
    emits: ['mounted_element'],
    props: {
        src :{
            type: String,
            required: true
        },
        asset: {
            type: String,
            required: true
        }
    },
    mounted(){
        const element = this.$refs[this.asset]
        const parent = element.$parent
        this.$emit('mounted_element', element, parent)
    }
}
</script>

<style>

</style>