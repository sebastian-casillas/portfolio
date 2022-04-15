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

                <p><span class="block_title" v-html="experience.title"></span></p>
                    
                <template v-if="experience.details">
                    <p class="content_note">
                        <span>{{experience.subtitle}}</span>
                        <my-tag v-for="d in experience.details" :key="d.content" :tag="d"/>
                    </p>
                </template>


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

            .block_title{
                font-size: 4mm !important;
            }
 

            .info_block_content{


                .content_note{
                    height: 3mm;

                    display: flex;
                    align-items: bottom;

                    & > span{
                        font-size: 3.2mm !important;
                        line-height: 3.2mm !important;
                        font-weight: 600 !important;
                        color: #595959 !important;

                        margin-right: 2mm;
                    }

                }
            }


                .block_item{
                    font-size: 3.1mm !important;
                    line-height: 3.2mm !important;
                    margin-bottom: .8mm !important;
                }

        }
    }

</style>