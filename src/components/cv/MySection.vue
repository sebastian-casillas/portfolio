<template>
    <div class="section">
        <div class="date_block">
            <p class="date_text">
                {{experience.date_start}}<br>{{experience.date_end}}
            </p>
        </div>

        <div class="detail_block"/>

        <div class="info_block">

            <div class="info_block_content">

                <p>
                    <span class="content_title" v-html="experience.title"></span>
                    <span class="subtitle" v-html="experience.subtitle"></span>
                </p>
                    
                <p class="content_note" v-if="experience.details">
                    <my-tag v-for="d in experience.details" :key="d.content" :tag="d" />
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

    import MyTag from '@components/cv/tags';

    export default {
        name: 'MySection',
        props: ['experience'],
        components: {MyTag},
    }
</script>

<style lang="scss">

    .section{
        max-width: 100%;
        display: flex;

        margin-top: 1mm;
        margin-bottom: 1.4mm;


        .date_block{
            margin-top: 2mm;

            width: 7mm;
            max-width: 7mm;
            min-width: 7mm;

            // height: 100%;
            
            


            & > p.date_text{

                font-size: 2.7mm !important;
                line-height: 3mm !important;

                font-weight: 400;
                color: #777 !important;

                min-width: 7mm;

                margin: 0;
                text-orientation: sideways-right;

                writing-mode: vertical-rl;
                letter-spacing: .05mm !important;

                text-align: right;
                vertical-align: text-bottom;

                transform: rotate(180deg);

            }
          }

        .detail_block{
                margin-top: 2mm;
                width: 1.6mm; 
                margin-left:.4mm;
                margin-right:.6mm;
                border-top: 1px solid #777; 
                border-left:1px solid #777;
          }


        .info_block{
 

            .info_block_content{
                // padding-left: .6mm;
                // padding-top: .8mm;

                .content_title{
                    font-size: 3.7mm !important;
                    line-height: 3.8mm !important;
                    letter-spacing: -.08mm !important;

                    vertical-align: text-bottom !important;

                    font-weight: 400 !important;
                    
                }

                .content_note{
                    padding-left: .4mm;
                    height: 2.6mm;
                    display: flex;
                    align-items: center;
                    line-height: 2.7mm !important;

                    & > span{
                        font-size: 2.9mm !important;
                        line-height: 2.6mm !important;
                        font-weight: 600 !important;
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
                font-weight: 400;
                letter-spacing: 0;
                margin-bottom: .2mm;
            }

                .block_item{
                    font-size: 2.9mm !important;
                    line-height: 3.1mm !important;
                    margin-bottom: .4mm !important;
                }

        }
    }

</style>