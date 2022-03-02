<template>
    <div class="section">
        <div class="date_block">
            <span class="date_text">
                {{experience.date_start}}<br>{{experience.date_end}}
            </span>
        </div>
        <div class="detail_block" style="width: 1.6mm; border-top: solid 1px #777;">

        </div>
        <div class="info_block">

            <div class="info_block_content">

                <div class="content_div_title">
                    <span class="content_title" v-html="experience.title"></span>
                    <span class="content_subtitle" v-html="experience.subtitle"></span>
                </div>



                <p class="content_note" v-if="experience.details">
                    <template v-for="d in experience.details" :key="d.content"> 
                        <q-icon size="2.5mm" :name="d.icon"/><span>{{d.content}}</span>
                    </template>
                </p>
                <p class="block_item" v-for="item of experience.items" 
                    :key="item"
                    v-html="item"
                    />

            </div>

        </div>
    </div>


</template>

<script>
    export default {
        name: 'MySection',
        props: ['experience'],
    }
</script>

<style lang="scss">

    .section{
        max-width: 100%;
        display: flex;

        margin-top: 1.6mm;
        margin-bottom: 2mm;


        .date_block{
            position: relative;
            padding-top: 1mm;

            width: 7mm;
            max-width: 7mm;
            min-width: 7mm;

            display:flex;
            justify-content: center;

            border-right: solid 1px #777;
            

            & > span.date_text{
                font-size: 2.2mm !important;
                line-height: 3mm !important;
                font-weight: 300;
                color: #666 !important;
                
                writing-mode: vertical-rl;
                letter-spacing: .05mm !important;

                text-align: right;
                transform: rotate(180deg);
            }
          }

          .detail_block, .date_block{
              margin-top: 2mm;
          }


        .info_block{
            display:inline-block;

            .info_block_content{
                padding-left: 1mm;
                padding-top: .8mm;

                .content_div_title{
                    padding-left: 1.2mm;
                    display: flex;
                    align-items: flex-end;
                }

                .content_title{
                    
                    font-size: 3.2mm !important;
                    line-height: 3.8mm !important;
                    font-weight: 300;
                    letter-spacing: .005mm;
                }

                .content_subtitle{
                    font-size: 2.3mm !important;
                    line-height: 2.6mm !important;
                    font-weight: 600;
                    margin-left: .8mm;
                    color: #555 !important;
                    letter-spacing: .005mm;
                }

                .content_note{
                    padding-left: 1.4mm;
                    height: 2.6mm;
                    display: flex;
                    align-items: center;
                    line-height: 2.7mm !important;

                    & > span{
                        font-size: 2.4mm;
                        line-height: 2.6mm !important;
                        font-weight: 600;
                        color: #444 !important;

                        margin-left: 1mm;
                        margin-right: 2mm;
                    }

                }
            }

            ul{
                margin: 0 0 0 2mm;
                padding-left: 3mm;
            }

            li{
                color: #333;
                font-size: 2.8mm;
                font-weight: 400;
                letter-spacing: 0;
                margin-bottom: .2mm;
            }

                .block_item{
                    font-size: 2.4mm !important;
                    line-height: 2.8mm;
                    margin-bottom: .4mm !important;
                }

        }
    }

</style>