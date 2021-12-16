<template>
    <g style="fill: white; stroke:black;">
        <path :d="d" :fill="fill" ></path>
    </g>
</template>

<script>

import * as d3 from 'd3';
import { colors } from 'quasar'

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
        filter_year:{
            type: String,
            required: true
        },
        filter_sex:{
            type: String,
            required: true
        }
    },
    data() { return {
        path: null
    }},
    created(){
        this.path = d3.geoPath().projection(this.my_projection)
    },
    computed:{
        d(){
            return this.path(this.country)
        },
        fill(){
            if (   this.country.id in this.data 
                    && this.filter_year in this.data[this.country.id]
                    && this.filter_sex in this.data[this.country.id][this.filter_year]){
                let red = parseInt(40 + this.data[this.country.id][this.filter_year][this.filter_sex]['OBS_VALUE'] * 7)
                return colors.rgbToHex({r: red, g: 120, b: 30})
                    }

            else return '#333'

                
        }
    }
}

</script>

<style lang="scss">
    .capital:hover{
        transform: scale(3);
        fill:green;
    }

</style>