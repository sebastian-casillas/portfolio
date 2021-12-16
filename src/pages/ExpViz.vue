<template>
<q-scroll-area style="height: 100vh; max-width: 100vw;">
    <div class="column items-center q-px-md q-my-md">

        <div class="q-mb-md">
            <h3 class="q-mb-md">Working, Self-care, and Leisure life balance</h3>
            <p class="q-my-xs">CS-E4450 : Explorative Information Visualisation</p>
            <p class="q-my-xs">Tomi Kauppinen</p>
            <p class="q-my-xs">Casillas Perez Sebastian: #1033665</p>

        </div>
        <q-responsive style="width: 100%; max-width: 900px;" :ratio="4/3">
            <svg id="my_dataviz" width="100%" height="100%" viewBox="0 0 900 700" >
                
                <country
                    v-for="c of countries" 
                    :key="c.id"
                    :my_projection="my_projection"
                    :data="depression_data"
                    :country="c"
                    :filter_year="filter_year"
                    :filter_sex="filter_sex"
                    >
                </country>

                <country-data
                    v-for="c of countries" 
                    :key="c.id"
                    :my_projection="my_projection"
                    :data="activity"
                    :country="c"
                    :capitals="country_capitals"
                    :filter_year="filter_year"
                    :filter_sex="filter_sex"
                    :filter_activity="filter_activity"
                    >
                </country-data>

            </svg>
        </q-responsive>
        <div class="q-my-sm row justify-end text-bold" style="width: 300px; padding:10px; border: solid #666 4px; background-color: red;" :style="'background: linear-gradient(90deg,' + color_init +' 0%, '+ color_final +' 100%);'">
            Self-assess chronical depression <br> max value: 30% of the population
        </div>
        <div>
            <h5>Filters:</h5>
        </div>
        <div class="row">
            <div class="col">
                <h6 class="q-my-xs">Depression metrics:</h6>
                <p></p>
                <div class="q-gutter-sm">
                    <q-radio v-model="filter_year" val="2014" label="2014" />
                    <q-radio v-model="filter_year" val="2019" label="2019" />
                </div>
                <div class="q-gutter-sm">
                    <q-radio v-model="filter_sex" val="F" label="Female" />
                    <q-radio v-model="filter_sex" val="M" label="Male" />
                    <q-radio v-model="filter_sex" val="T" label="All" />
                </div>
                <p>Source:  <a style="color: #999" href="https://ec.europa.eu/eurostat/web/health/data/database">Eurostat</a></p>
            </div>
            <div class="col">
                <h6 class="q-my-xs">Leisure metrics:</h6>
                <p></p>
                <div class="q-gutter-sm">
                    <q-radio v-model="filter_activity" val="AC01" label="Sleep" />
                    <q-radio v-model="filter_activity" val="AC1_TR" label="Work" />
                    <q-radio v-model="filter_activity" val="AC4-8" label="Leisure" />
                </div>
                <p>Source:  <a style="color: #999" href="https://ec.europa.eu/eurostat/databrowser/view/TUS_00AGE__custom_1777733/default/table?lang=en">Eurostat</a></p>
            </div>


        </div>
        
    </div>
</q-scroll-area>


<div>

</div>
<!-- <div class="row q-pa-sm">
    <q-btn @click="run_code" class="q-mr-sm">
        Run
    </q-btn>
    <q-btn @click="download" class="q-mr-sm">
        Download
    </q-btn>
    <q-input v-model="file_name" label="File Name" />
</div>

<div>
    {{activity}}
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
import CountryData from '@/components/data_viz/CountryData.vue'

import { colors } from 'quasar'

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

            file_name: 'activity.json',
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

            activity: {},

            filter_year: '2019',
            filter_sex: 'T',
            filter_activity: 'AC01',

            color_init: null,
            color_final: null
        }
    },
    mounted(){
        this.color_init = colors.rgbToHex({r: 40, g: 120, b: 30})
        this.color_final = colors.rgbToHex({r: 254, g: 120, b: 30})

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

            this.activity = require('../assets/activity_catalogue.json');

            // this.countries = this.countries
        },
        run_code(){
            // let type = [... new Set(this.activity.map(e => e.acl00))]
            // console.log(type)

            // this.activity = Object.values(this.activity)
            // this.activity = this.activity.filter(e => e.unit === 'PTP_TIME')

            // for(let i in this.activity){
            //     let geo = this.activity[i].geo
            //     let country = this.country_codes.find(e => e['alpha-2'] === geo)
            //     this.activity[i]['country'] = country['alpha-3']
            // }

            // console.log(this.activity)

            // this.activity = this.activity.filter(e => this.country_data.includes(e.country) )
            // console.log(this.activity)

            // sleep - AC01
            // employment - AC1_TR
            // Leisure, social and associative life AC4-8




            // let countries = this.activity.map(e => e.country)
            // countries = [...new Set(countries)]

            // let year = this.activity.map(e => e.TIME_PERIOD)
            // year = [...new Set(year)]

            // let sex = this.activity.map(e => e.sex)
            // sex = [...new Set(sex)]

            // let acl00 = this.activity.map(e => e.acl00)
            // acl00 = [...new Set(acl00)]
            
            
            // this.test = {}
            
            // for(let i of this.activity){
            //     if(! (i.country in this.test))
            //         this.test[i.country] = {}

            //     if(! (i.sex in this.test[i.country]))
            //         this.test[i.country][i.sex] = {}

            //     if(! (i.acl00 in this.test[i.country][i.sex]))
            //         this.test[i.country][i.sex][i.acl00] = {}

            //     this.test[i.country][i.sex][i.acl00] = i
            // }

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