<template>
    <div id="word_cloud_container">
        <div id='competence_wordcloud_main' ref='competence_wordcloud_main'/>
    </div>
</template>

<script>

import WordCloud from 'wordcloud'

export default {
    name: 'WordCloud',

    data: () => ({
        WordCloud: WordCloud,
        word_data: [],
        wordcloud_options: undefined,
        data_thing: []
    }),

    mounted(){
        this.LoadData();
    },

    methods:{

        async LoadData(){
            const data = await this.$api
                .get('collections/get/expertise')
                .then( res => res.data )
                .then( d => d.entries )
                .catch( e => console.log(e));

            for(const d of data){
                this.word_data.push([d.title, d.weight])
                this.data_thing.push([d.title, 6+d.weight])
            }


            this.SetWordcloud()
        },


        SetWordcloud(){

            this.wordcloud_options = {
                list: this.word_data,
                gridSize: Math.round(18 * this.rate),
                weightFactor: size => (10 + Math.pow(size, 2.5)) * this.rate * .7,
                fontWeight: (word, weight) => [1,3].includes(weight)? 500: 600,
                shape: 'rectangle', 
                color: (word, weight) => (4 - weight) * 10,
                rotateRatio: 0,
                backgroundColor: '#fff0',
                shuffle: true
            }

            WordCloud(document.getElementById('competence_wordcloud_main'), this.wordcloud_options );

        },

        
    },
    watch: {
        '$q.screen.width'() {
            this.SetWordcloud();
        }
    },
    computed:{
        rate: function(){
            return this.$refs.competence_wordcloud_main.clientWidth / 1024;
        }
    }
}
</script>

<style lang="scss">
#word_cloud_container{
    margin: 2rem 0;
    padding: 0 20px;

    & > div#competence_wordcloud_main{
        margin-right: 0 !important;
        width: 120rem;
        min-height: 60rem;
        max-height: 90vh;
        max-width: 90vw;
    }

}



</style>
