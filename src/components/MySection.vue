<template>
    <div no-gutters style="padding:.6mm 0 .5mm 0;">
        <div class="grow" style="padding:0 1mm 0 1mm">
            <h5 v-html="experience.title"></h5>
            <h6 v-html="experience.subtitle"></h6>
            <template v-for="item of experience.items" :key="item">
                <ul>
                    <li v-html="item"></li>
                </ul>

            </template>

        </div>
        <div min-width="8mm" class="shrink px-0">
            <div width="8mm"  height="100%">
                <div class="vertical-text text-no-wrap"
                     :style="'transform: rotate(270deg) translateX('+ x_spacing +'%) translateY(-315%)'">
                    {{experience.date_start}}<br>{{experience.date_end}}
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "MySection",
        props: ['experience', 'x_spacing'],
        computed: {
            // a computed getter
            x_calculated: function () {
                return this.x_spacing - 40;
            }
        }
    }
</script>

<style scoped>
    h1{
        font-size: 9mm;
        padding-bottom: .3mm;
    }

    h2{
        font-size: 6mm;
        padding-bottom: .3mm;
    }

    h3{
        font-size: 4.5mm;
        padding-bottom: 1mm;
    }

    h4{
        font-size: 3mm;
        padding-bottom: 1mm;
    }

    h5{
        font-size: 4mm !important;
        padding-bottom: .5mm !important;
        height:5.4mm;
    }

    h6{
        font-size: 3.2mm !important;
        padding-bottom: .5mm !important;
        line-height:4.6mm;
        color: #666666;
    }

    ul{
        padding-left: 4mm;
    }

    li{
        font-size: 2.8mm;
        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: .2mm;
    }


    .vertical-text {
        font-size: 2.4mm;
        font-weight: 600;
        color: #555555;
        height: 5.5mm;
        width: 40mm;
        /* text-wrap: none; */
    }

</style>