<template>
    <div id='competence_wordcloud_main' ref='competence_wordcloud_main'/>
</template>

<script>

import WordCloud from 'wordcloud'

export default {
    name: 'WordCloud',

    data: () => ({
        WordCloud: WordCloud,
        word_data: []
    }),

    mounted(){
        this.SetWordcloud();
    },

    methods:{


        async SetWordcloud(){

            let competence_wc = this.$refs.competence_wordcloud_main


            let data = await this.$api
                .get('collections/get/expertise')
                .then( res => res.data )
                .then( d => d.entries )
                .catch( e => console.log(e));

            for(let d of data)
                this.word_data.push([d.title, d.weight])

            console.log(this.word_data)


            let rate = competence_wc.clientWidth / 1024;

            let options = {
                list: this.word_data,
                gridSize: Math.round(18 * rate),
                weightFactor: size => (10 + Math.pow(size, 1.9)) * rate* 1.3,
                fontWeight: (word, weight) => [1,3].includes(weight)? 500: 600,
                shape: 'rectangle', 
                color: (word, weight) => (4 - weight) * 10,
                rotateRatio: 0,
                backgroundColor: '#fff0',
                shuffle: true
            }

            WordCloud(document.getElementById('competence_wordcloud_main'), options );

        }
    }
}
</script>

<style>
#competence_wordcloud_main{
    background-color: green;
    width: 100%;
    height: 600px;
}

</style>
