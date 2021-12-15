<template>

<div class="row justify-center q-px-md q-my-md">
    <q-responsive style="width: 100%; max-width: 900px;" :ratio="4/3">
        <svg id="my_dataviz" width="100%" height="100%" viewBox="0 0 900 700" >
            <country
                v-for="c of countries" 
                :key="c.id"
                :my_projection="my_projection"
                :country="c"
                >
            </country>

        </svg>
    </q-responsive>
    
</div>


<div>

</div>
<!-- <div>
    <q-btn @click="run_code">
        Run
    </q-btn>
    <q-btn @click="download">
        Download
    </q-btn>
    <q-input v-model="file_name" label="File Name" />
</div> -->
<!-- <div v-if="depression_data">
    <q-table
      title="Treats"
      :rows="depression_data"
      row-key="name"
    />
</div> -->


</template>
<script>
import * as d3 from 'd3';
import Country from '@/components/data_viz/Country.vue'

export default {
    components: {
        Country: Country
    },
    data() {
        return {
            d3_instance: null,
            my_svg: null,
            my_projection: null,

            file_name: 'countries.json',
            depression_data: [],
            other_data: [],
            country_codes:[],
            country_data: [ 'AUT', 'BEL', 'BGR', 'CYP', 'CZE', 'DEU', 'DNK', 'EST', 'GRC', 'ESP', 'FIN', 'FRA', 'HRV', 'HUN', 'IRL', 'ISL', 'ITA', 'LTU', 'LUX', 'LVA', 'MLT', 'NLD', 'NOR', 'POL', 'PRT', 'ROU', 'SRB', 'SWE', 'SVN', 'SVK', 'TUR', 'GBR' ],
            countries: [],
            temp: []
        }
    },
    mounted(){
        this.d3_instance = d3;
        this.draw_map();
    },
    methods:{
        draw_map(){
            // The svg
            this.my_svg = d3.select('svg');

            // Map and projection
            this.my_projection = d3
                .geoConicConformal()
                .center([10, 55])                // GPS of location to zoom on
                .scale(900)                       // This is like the zoom
                .translate([ 900/2, 700/2 ])

            this.load_json();

            // Create data for circles:
            // const markers = [
            // {long: 9.083, lat: 42.149}, // corsica
            // {long: 7.26, lat: 43.71}, // nice
            // {long: 2.349, lat: 48.864}, // Paris
            // {long: -1.397, lat: 43.664}, // Hossegor
            // {long: 3.075, lat: 50.640}, // Lille
            // {long: -3.83, lat: 58}, // Morlaix
            // ];

            // Load external data and boot
            // d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
            //   .then( data => {
                
            //     // Filter data


            //     // Draw the map
            //     // this.my_svg.append('g')
            //     //     .selectAll('path')
            //     //     .data(data.features)
            //     //     .join('path')
            //     //     .attr('fill', '#b8b8b8')
            //     //     .attr('d', )
            //     //     .style('stroke', 'black')
            //     //     .style('opacity', .3)

            //     // Add circles:
            //     // this.my_svg
            //     //     .selectAll('myCircles')
            //     //     .data(markers)
            //     //     .join('circle')
            //     //         .attr('cx', d => projection([d.long, d.lat])[0])
            //     //         .attr('cy', d => projection([d.long, d.lat])[1])
            //     //         .attr('r', 14)
            //     //         .style('fill', '69b3a2')
            //     //         .attr('stroke', '#69b3a2')
            //     //         .attr('stroke-width', 3)
            //     //         .attr('fill-opacity', .4)
            // })
        },
        load_json(){
            this.other_data = require('../assets/depression_data_general.json');
            this.depression_data = require('../assets/depression_data.json');
            this.country_codes = require('../assets/countries.json');
            this.temp = require('../assets/world.json');
            this.countries = this.temp.features

            // this.countries = this.countries.filter( d => this.country_data.includes(d.id))
        },
        run_code(){
            for(let c of this.depression_data)
                if(!this.country_data.includes(c.country))
                    this.country_data.push(c.country)
            
        },
        download(contentType = 'text/plain') {
            var a = document.createElement('a');
            var file = new Blob([JSON.stringify(this.depression_data)], {type: contentType});
            a.href = URL.createObjectURL(file);
            a.download = this.file_name;
            a.click();
        },
        get_projection(){
            return d3.geoPath().projection(this.my_projection)
        }
    },
    computed:{

    }

}
</script>

<style lang="scss">
#my_dataviz{
    width: 100%;
    height: 100%;
}
</style>