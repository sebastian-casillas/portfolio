<template>
    <q-timeline-entry
        class="my-timeline-entry"
        :icon="icon"
        :side="side"
        :title="data.subtitle"
        :color="(side === 'left')? 'accent': 'positive'"
    >

        <template #title>
            <p class="content_title">{{data.title}}</p>
        </template>

        <template #subtitle>
            <div class="subtitle_div">
                <span class="subtitle_span" v-if="data.date_end">{{data.date_end}}</span>
                <span class="subtitle_span" v-if="data.date_init">{{data.date_init}}</span>
            </div>
        </template>

        <div>
            <div class="content_notes"> 

                <q-chip dense color="white" class="shadow-1" :clickable="false" :ripple="false">
                    <span class="text-subtitle2 q-px-xs">{{ data.subtitle }}</span>
                </q-chip>

                <q-chip v-for="d in data.tags" :key="d.content" 
                        :clickable="d.icon === 'mdi-web'" :ripple="d.icon === 'mdi-web'"
                        color="darkaccent" dense  style="background-color: #555973"
                        >
                    <q-avatar color="white" class="shadow-1"> 
                        <q-icon :name="d.icon" size="15px" style="color: #454953"></q-icon>
                    </q-avatar>
                    <span class="q-px-xs text-grey-1" >{{d.content}}</span>
                    
                </q-chip>

            </div>

            <div class="block_item" v-if="data.content" v-html="data.content"></div>

        </div>

    </q-timeline-entry>
</template>

<script>
// import Markdown from 'vue3-markdown-it';

export default {
    components: {
        // Markdown
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
                
        },

    }
}
</script>

<style lang="scss">

.my-timeline-entry{
    padding-bottom: 2rem !important;

    .q-timeline__title{
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
        margin-bottom: .4rem;
    }


    .content_notes{
        margin-bottom: 1rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;


    }




    div.block_item{
        font-size: 1rem !important;
        line-height: 1.2rem;
        margin-bottom: .4rem !important;
        margin-left: .5rem;

        ul{
            padding-left:20px;
        }

        li{
            margin-bottom: 6px;
            padding-left: 1em;
            text-indent: -1em;
        }
    }


    &.q-timeline__entry--icon{
        .q-timeline__title{
            margin: .8rem 0 .6 0;
        }
    }


}


.q-timeline--loose, .q-timeline--comfortable{

    .subtitle_div{

        display: flex;
        flex-direction: column;
        justify-content: center;
        height:38px;

        span{
            display: block;
            &:nth-child(2){
                margin-left: 0rem;
            }
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

        }

    }


}








    
</style>