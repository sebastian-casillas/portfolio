
<template>
    <q-card style="padding: 3mm 0 3mm 0">
        <!-- <canvas id="tech-competences" height="180mm"></canvas> -->
    </q-card>

</template>

<script>
    import Chart from 'chart.js'

    export default {
        name: "MyChart",
        data: () => ({
            options: {
                legend:{
                    display:false
                },
                scale: {
                    pointLabels: {
                        fontSize: 9,
                    },
                    ticks: {
                        beginAtZero: true,
                            max: 5,
                            showLabelBackdrop:false,
                            fontSize:0

                    }
                },
            }

        }),
        props: {
            chartData:{
                type: Object,
                default: _ => {}
            },
        },
        mounted () {
            let ctx = document.getElementById('tech-competences').getContext('2d');


            // let chart = new Chart(ctx, {
            //     // The type of chart we want to create
            //     type: 'radar',
            //     scaleShowLabels: false,
            //     // The data for our dataset
            //     data: this.chartData,

            //     // Configuration options go here
            //     options: this.options
            // });
        }
    }
</script>

<style scoped>
    .small {
        max-width: 600px;
        margin:  150px auto;
    }
</style>