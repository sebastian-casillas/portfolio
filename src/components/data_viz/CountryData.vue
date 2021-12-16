<template>

    <g :transform="'translate(' + capital[0] +','+capital[1] +')'" :id="'capital_'+country.id">
        <foreignObject x="-10" y="-10" width="24px" height="24px">
            <q-circular-progress
                reverse
                :value="value_dep"
                size="20px"
                :thickness="0.6"
                font-size="20px"
                color="light-blue"
                center-color="grey-9"
                />
        </foreignObject>

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
        capital(){
            let loc = this.capitals[this.country.id]
            let x = this.my_projection([loc.long, loc.lat])
            return x
        },
        value_dep(){
            return (
                this.country.id in this.data
                && this.filter_year in this.data[this.country.id]
                && this.filter_sex in this.data[this.country.id][this.filter_year]
                )?
                this.data[this.country.id][this.filter_year][this.filter_sex]['OBS_VALUE']
                :
                null
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