<template>
    <div class="section">
        <div class="date_block">
            <span class="date_text">
                {{experience.date_start}}<br>{{experience.date_end}}
            </span>
        </div>
        <div class="info_block">
            <div class="info_block_detail"/>
            <div class="info_block_content">
                <p v-if="experience.company">{{company}}</p>
                <h5 v-html="experience.title"></h5>
                <h6 v-html="experience.subtitle"></h6>
                
                <ul>
                    <li v-for="item of experience.items" 
                        :key="item"
                        v-html="item"
                        />
                </ul>
            </div>

        </div>
    </div>


</template>

<script>
    export default {
        name: "MySection",
        props: ['experience'],
    }
</script>

<style lang="scss">

    .section{
        max-width: 100%;
        display: flex;
        margin-bottom: 3mm;

        .date_block{
            position: relative;
            padding-top: 1mm;
            margin-right: 1mm;

            width: 6mm;
            max-width: 6mm;
            min-width: 6mm;

            display:flex;
            justify-content: flex-end;
            

            & > .date_text{
                font-size: 2mm;
                font-weight: 600;
                color: #666;
                line-height: 2.8mm;
                writing-mode: vertical-rl;
                letter-spacing: .05mm;

                text-align: right;
                transform: rotate(180deg)
            }
          }


        .info_block{
            display:inline-block;
            border-left: solid .3mm #888;

            .info_block_detail{
                height: .2mm; 
                width: 10mm; 
                border-top: solid .3mm #888;
            }

            .info_block_content{
                padding-left: 1.5mm;
                padding-top: .8mm;
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

        }
    }

</style>