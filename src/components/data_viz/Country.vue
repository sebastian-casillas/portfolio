<template>
    <g style="fill: white; stroke:black;">
        <path :d="d"></path>
    </g>
</template>

<script>

import * as d3 from 'd3';

export default {
    props:{
        country: {
            type: Object,
            required: true
        },
        my_projection:{
            type: Function,
            required: true
        },
        data:{
            type: Object,
            required: true
        },
        capitals:{
            type: Object,
            required: true
        }
    },
    data() { return {
        path: null
    }},
    created(){
        this.path = d3.geoPath().projection(this.my_projection)
    },
    mounted(){
        console.log(this.capital)
    },
    watch:{

    },
    computed:{
        d(){
            return this.path(this.country)
        },
        capital(){
            let loc = this.my_projection(this.capitals[this.country.id])
            return loc
        }
    }
}

</script>