<template>
    <q-timeline-entry
        class="my-timeline-entry"
        :icon="icon"
        :side="side"
    >

        <template #>
            <div class="">
                <p class="content_title">{{data.title}}</p>
            
                <div class="content_notes">  
                    <q-chip 
                        v-for="d in data.details" :key="d.content"
                        color="teal-6" size="md" square dense outline 
                        :icon="d.value.icon"
                        class="q-px-sm"
                        >
                        {{d.value.content}}
                            
                    </q-chip>

                </div>
            
                <p class="block_item" v-for="item of data.items" 
                    :key="item.value.content"
                    v-text="item.value.content"
                    />
            </div>
        </template>


        <template #subtitle>
            {{data.subtitle}}<br>{{data.date_init}}
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
        font-size: 1.6rem !important;
        line-height: 1.7rem !important;
        font-weight: 300;
        letter-spacing: .003rem;
        color: #111 !important;
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