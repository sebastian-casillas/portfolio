<template>
    <g style="fill: white; stroke:black;">
        <path :d="my_path"></path>
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
    },
    data() { return {
        my_path: null
    }},
    created(){

        let pr = d3.geoPath().projection(this.my_projection)

        pr = pr(this.country)

        console.log(pr)

        this.my_path = pr


        // svg.append('g')
        //     .data(this.country.features)
        //     .join('path')
        //     .attr('fill', '#b8b8b8')
        //     .attr('d', pr)
        //     .style('stroke', 'black')
        //     .style('opacity', .3)

    },
    methods:{

    },
    computed:{
        my_d3(){
            return this.$parent.d3_instance
        }
    }
}

</script>