<template>
    <q-timeline-entry
        class="my-timeline-entry"
        :icon="icon"
        :side="side"
        :title="data.subtitle"
        :color="(side === 'left')? 'accent': 'positive'"
    >

        <template #>
            <div >
                <p class="content_title">{{data.title}}</p>

                <div class="content_notes">  
                    <q-chip 
                        v-for="d in data.tags" :key="d.content"
                        color="grey-9" size="md" square dense outline 
                        :icon="d.value.icon"
                        class="q-px-sm"
                        >
                        {{d.value.content}}
                            
                    </q-chip>

                </div>
            

                <!-- <vue3-markdown-it :source="selected_project.description" /> -->
                <p class="block_item">
                    <Markdown v-if="data.content" :source="data.content"/>
                </p>
            </div>
        </template>

        <template #subtitle>
            <div class="subtitle_div">
                <span class="subtitle_span" v-show="data.date_init">{{data.date_init || ''}}</span>
                <span class="subtitle_span" v-show="data.date_end">{{data.date_end || ''}}</span>
            </div>

        </template>


    </q-timeline-entry>
</template>

<script>
import Markdown from 'vue3-markdown-it';

export default {
    components: {
        Markdown
    },
    props:{
        data: {
            type: Object,
            default: () => {},
        },
    },

    computed:{
        icon: function(){
            if ( !this.data.date_init) return undefined
            else return  (this.data.type === 'Education')? 'school' : 'mdi-briefcase'
        },
        side: function(){
            return (this.data.type === 'Education')? 'left' : 'right'
        },
        layout: function(){
            return this.$parent.layout
        },
        date: function(){
            let res = '';
            if(this.data.date_init){
                res += this.data.date_init;
                if(this.data.date_end);
                    res += '\n' + this.data.date_end;
            }
            return res;
                
        }
    }
}
</script>

<style lang="scss">

.my-timeline-entry{
    padding-bottom: 2rem !important;

    .q-timeline__title{
        color: #555;
        font-size: .8rem;
        line-height: .8rem;
        margin: .3rem 0;
    }

    .subtitle_div span{
        display: inline-block;

        &:nth-child(2){
            margin-left: .6rem;
        }
        
    }

    .q-timeline__subtitle{
        color: #222;
        padding-top: 1px;
        line-height: 20px !important;
        margin-bottom: .2rem;

    }

    .content_title{
        font-size: 1.6rem !important;
        line-height: 1.7rem !important;

        font-weight: 300;
        letter-spacing: .2pt;
        color: #333 !important;
        margin-bottom: .4rem;
    }


    .content_notes{
        margin-bottom: 1rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

            & > div.item_chip{
                margin: 2px 0 2px 2px;
            }
    }

    .item_chip{
        color: #333 !important;
        font-size: .8rem;
        font-weight: 500 !important;
        line-height: 1rem;
        margin-bottom: 6px;

        & > i{
            margin-left: 6px;
            margin-right: 6px;
        }
    }


    p.block_item{
        color: #333;
        font-size: 1rem !important;
        line-height: 1.2rem;
        margin-bottom: .4rem !important;
        margin-left: .5rem;
    }


    &.q-timeline__entry--icon{
        .q-timeline__title{
            margin: .8rem 0 .6 0;
        }
    }


}


.q-timeline--loose, .q-timeline--comfortable{

    .subtitle_div span{
        display: block;
        &:nth-child(2){
            margin-left: 0rem;
        }
    }

    .q-timeline__content{
        padding-top: 0 !important;
    }
}

.q-timeline--loose{

    .q-timeline__entry--left{
        .content_notes{
            justify-content: flex-end;

            & > div.item_chip{
                margin: 2px 2px 2px 0;
            }
        }

    }


}








    
</style>