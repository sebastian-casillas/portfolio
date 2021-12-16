<template>

    <g :transform="'translate(' + capital[0] +','+capital[1] +')'" :id="'capital_'+country.id">
        <foreignObject x="-10" y="-10" width="28px" height="28px">
            <q-circular-progress
                :value="value_dep"
                size="26px"
                :thickness="0.3"
                font-size="8px"
                color="light-blue"
                center-color="grey-9"
                >
                <span style="color:white;">
                    {{value_dep}}
                </span>
                
            </q-circular-progress>
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
        },
        filter_activity:{
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
    methods:{
        hour_to_12(val){
            let items = val.split(':')
            let percentage = (parseInt(items[0]) + items[1]/60) * 100 / 12
            return percentage 
        }
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
            return (   this.country.id in this.data
                && this.filter_sex in this.data[this.country.id]
                && this.filter_activity in this.data[this.country.id][this.filter_sex])?
                    
                this.hour_to_12(this.data[this.country.id][this.filter_sex][this.filter_activity]['t_2010'])
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