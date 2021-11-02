<template>
    <q-timeline-entry
        class="my-timeline-entry"
        :icon="icon"
        :side="side"
    >

        <template #>
            <div>
                <p class="content_title">{{data.title}}</p>
                <p class="content_subtitle">{{data.subtitle}}</p>

                <div class="content_note" v-show="layout !== 'loose'">  
                    <div v-for="d in data.details" :key="d.content" class="item_chip">
                        <q-icon :name="d.value.icon" color="gray-9" size="1rem" />
                        <span>{{d.value.content}}</span>
                    </div>
                </div>
            
                <p class="block_item" v-for="item of data.items" 
                    :key="item.value.content"
                    v-text="item.value.content"
                    />
            </div>
        </template>

        <template #subtitle>
            <div class="date_subtitle">{{data.date_init}}</div>
            <div class="content_note_subtitle" v-show="layout === 'loose'"> 

                <div v-for="d in data.details" :key="d.content" class="item_chip">
                    <q-icon :name="d.value.icon" color="gray-9" size="1rem" />
                    <span>{{d.value.content}}</span>
                </div>
            </div>
        </template>


    </q-timeline-entry>
</template>

<script>
export default {
    props:{
        data: {
            type: Object,
            default: () => {},
        },
    },

    computed:{
        icon: function(){
            if ( !this.data.date_init) return null
            else return  (this.data.category === 'Education')? 'school' : 'mdi-briefcase'
        },
        side: function(){
            return (this.data.category === 'Education')? 'left' : 'right'
        },
        layout: function(){
            return this.$parent.layout
        }
    }
}
</script>

<style lang="scss">
.my-timeline-entry{
    .q-timeline__title{
        margin-bottom: 0;
    }

    .content_title{
        font-size: 1.2rem !important;
        line-height: 1.4rem !important;
        font-weight: 300;
        color: #333 !important;
        margin-bottom: .4rem;
    }

    .content_subtitle{
        font-size: 1.1rem !important;
        line-height: 1.2rem;
        min-height: 1.4rem;
    }

    .content_note{
        margin-bottom: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

            & > div.item_chip{
                margin: 2px 2px 2px 0;
            }
    }

    .content_note_subtitle{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex: wrap;
        text-transform: unset !important;
    }


    &.q-timeline__entry--right{

        .content_note_subtitle{
            align-items: flex-end;
            margin: 4px 0 4px 4px;

            & > div.item_chip{
                margin: 2px 0 2px 2px;
            }
        }

    }

    &.q-timeline__entry--left{

        .content_note_subtitle{
            align-items: flex-start;
            margin: 4px 4px 4px 0;

            & > div.item_chip{
                margin: 2px 2px 2px 0;
            }
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


}









    
</style>