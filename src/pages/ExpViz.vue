<template>

<div class="row justify-center q-px-md q-my-md">
    <q-responsive style="width: 100%; max-width: 900px;" :ratio="4/3">
        <svg id="my_dataviz" width="100%" height="100%" viewBox="0 0 900 700" >
            
            <country
                v-for="c of countries" 
                :key="c.id"
                :my_projection="my_projection"
                :data="depression_data"
                :country="c"
                :capitals="country_capitals"
                >
            </country>

            <country-data
                v-for="c of countries" 
                :key="c.id"
                :my_projection="my_projection"
                :data="depression_data"
                :country="c"
                :capitals="country_capitals"
                :filter_year="filter_year"
                :filter_sex="filter_sex"
                >
            </country-data>

        </svg>
    </q-responsive>
    
</div>


<div>
    <div class="q-gutter-sm">
      <q-radio v-model="filter_year" val="2014" label="2014" />
      <q-radio v-model="filter_year" val="2019" label="2019" />
    </div>
    <div class="q-gutter-sm">
      <q-radio v-model="filter_sex" val="F" label="Female" />
      <q-radio v-model="filter_sex" val="M" label="Male" />
      <q-radio v-model="filter_sex" val="T" label="All" />
    </div>
</div>
<div>
    <q-btn @click="run_code">
        Run
    </q-btn>
    <q-btn @click="download">
        Download
    </q-btn>
    <q-input v-model="file_name" label="File Name" />
</div>

<div>
    {{test}}
</div>
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
import CountryData from '@/components/data_viz/CountryData.vue'


export default {
    components: {
        Country: Country,
        CountryData: CountryData
    },
    data() {
        return {
            test: undefined,

            d3_instance: null,
            my_svg: null,
            my_projection: null,

            file_name: 'countries.json',
            depression_data: [],
            other_data: [],
            country_codes:[],
            country_data: [ 'AUT', 'BEL', 'BGR', 'CYP', 'CZE', 'DEU', 'DNK', 'EST', 'GRC', 'ESP', 'FIN', 'FRA', 'HRV', 'HUN', 'IRL', 'ISL', 'ITA', 'LTU', 'LUX', 'LVA', 'MLT', 'NLD', 'NOR', 'POL', 'PRT', 'ROU', 'SRB', 'SWE', 'SVN', 'SVK', 'TUR', 'GBR' ],
            country_capitals: {
                'AUT': { lat: 48.2,    long: 16.367},
                'BEL': { lat: 50.833,  long: 4.333},
                'BGR': { lat: 42.6833, long: 23.3166},
                'CYP': { lat: 35.1666, long: 33.366},
                'CZE': { lat: 50.083,  long: 14.466},
                'DEU': { lat: 52.5166, long: 13.400},
                'DNK': { lat: 55.6666, long: 12.5833},
                'EST': { lat: 59.4333, long: 24.7166},
                'GRC': { lat: 37.9833, long: 23.7333},
                'ESP': { lat: 40.4,    long: -3.6833},
                'FIN': { lat: 60.1666, long: 24.9333},
                'FRA': { lat: 48.8666, long: 2.3333},
                'HRV': { lat: 45.8,    long: 16.00},
                'HUN': { lat: 47.5,    long: 19.0833},
                'IRL': { lat: 53.3166, long: -6.2333},
                'ISL': { lat: 64.15,   long: -21.95},
                'ITA': { lat: 41.9,    long: 12.4833},
                'LTU': { lat: 54.6833, long: 25.3166},
                'LUX': { lat: 49.6,    long: 6.1166},
                'LVA': { lat: 56.95,   long: 24.10},
                'MLT': { lat: 35.8833, long: 14.50},
                'NLD': { lat: 52.35,   long: 4.9166},
                'NOR': { lat: 59.9166, long: 10.75},
                'POL': { lat: 52.25,   long: 21.00},
                'PRT': { lat: 38.7166, long: -9.1333},
                'ROU': { lat: 44.4333, long: 26.10},
                'SRB': { lat: 44.8333, long: 20.50},
                'SWE': { lat: 59.3333, long: 18.05},
                'SVN': { lat: 46.05,   long: 14.5166},
                'SVK': { lat: 48.15,   long: 17.1166},
                'TUR': { lat: 39.9333, long: 32.8666},
                'GBR': { lat: 37.9833, long: 23.7333}
                },
            
            countries: [],
            temp: [],

            filter_year: '2019',
            filter_sex: 'T'
        }
    },
    mounted(){
        this.d3_instance = d3;
        this.my_svg = d3.select('svg');

        // Map and projection
        this.my_projection = d3
            .geoConicConformal()
            .center([12, 53])                // GPS of location to zoom on
            .scale(1200)                       // This is like the zoom
            .translate([ 900/2, 700/2 ])

        this.load_json();


    },
    methods:{
        load_json(){
            this.other_data = require('../assets/depression_data_general.json');
            this.depression_data = require('../assets/depression_data_catalog.json');
            this.country_codes = require('../assets/countries.json');

            this.temp = require('../assets/world.json');
            this.countries = this.temp.features.filter( d => this.country_data.includes(d.id))

            // this.countries = this.countries
        },
        run_code(){
            // let countries = this.depression_data.map(e => e.country)
            // countries = [...new Set(countries)]

            // let year = this.depression_data.map(e => e.TIME_PERIOD)
            // year = [...new Set(year)]

            // let sex = this.depression_data.map(e => e.sex)
            // sex = [...new Set(sex)] 
            this.test = {}
            
            for(let i of this.depression_data){
                if(! (i.country in this.test))
                    this.test[i.country] = {}

                if(! (i.TIME_PERIOD in this.test[i.country]))
                    this.test[i.country][i.TIME_PERIOD] = {}

                if(! (i.sex in this.test[i.country][i.TIME_PERIOD]))
                    this.test[i.country][i.TIME_PERIOD][i.sex] = {}

                this.test[i.country][i.TIME_PERIOD][i.sex] = i
            }

        },
        download(contentType = 'text/plain') {
            var a = document.createElement('a');
            var file = new Blob([JSON.stringify(this.test)], {type: contentType});
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