<template>

    <div id="cv_page">
            <div class="left_column">

                <!--<v-avatar><v-img :src="'./assets/profile_circle.png'"></v-img></v-avatar>-->

                <h1>Sebastian</h1>
                <h2>Casillas Pérez</h2>

                <table>
                    <tr>
                        <td><q-icon name="mail" color="grey-10"/></td>
                        <td><span class="small">Sebastian.Casillas@outlook.com</span></td>
                    </tr>
                    <tr>
                        <td><q-icon name="phone" color="grey-10"/></td>
                        <td><span class="small">+31 06 82777956</span></td>
                    </tr>
                    <tr>
                        <td><q-icon name="map" color="grey-10"/></td>
                        <td><span class="small">Espoo, Finland</span></td>
                    </tr>
                    <tr>
                        <td><q-icon name="linkedin" color="grey-10"/></td>
                        <td><span class="small">/in/sebastian-casillas</span></td>
                    </tr>
                    <tr>
                        <td><q-icon name="link" color="grey-10"/></td>
                        <td><span class="small">casillas.dev</span></td>
                    </tr>
                </table>

                <h3>Languages:</h3>

                <table style="width: 100%;">
                    <tr v-for="language of cv_data.languages" :key="language">
                        <td><h6>{{language.name}}</h6></td>
                        <td align="right"><span class="subtitle" >{{language.note}}</span></td>
                        <td align="right"><q-rating v-model="language.level" size="2.5mm" color="grey-10" :max="4"/></td>
                    </tr>
                </table>

                <h3>Technical competences:</h3>

                <!-- <my-chart :chartData="cv_data.chart_data" style="margin: 2mm 0 1mm 0;"></my-chart> -->

                <table style="width: 100%;">
                    <tr v-for="competence of cv_data.competences" :key="competence">
                        <td><h6>{{competence.name}}</h6></td>
                        <td align="right"><q-rating v-model="competence.level" size="2.5mm" color="grey-10" :max="4"/></td>
                    </tr>
                </table>

                <h3>Programming languages:</h3>

                <table style="width: 100%;">
                    <tr v-for="language of cv_data.p_languages" :key="language">
                        <td><h6>{{language.name}}</h6></td>
                        <td align="right"><q-rating v-model="language.level" size="2.5mm" color="grey-10" :max="4"/></td>
                    </tr>
                </table>

            </div>

            <div class="right_column">

                <template v-if="cv_data.experience">

                <div no-gutters><h2>Work experience</h2><q-icon style="margin-right:4mm">mdi-briefcase</q-icon></div>
                <!-- <v-divider></v-divider> -->

                    <template  v-for="job of cv_data.experience" :key="job">
                        <my-section :experience="job" :x_spacing="job.spacing"/>
                    </template>
                </template>

                <template v-if="cv_data.education">
                    <div no-gutters><h2>Education</h2><q-icon style="margin-right:4mm">mdi-book</q-icon></div>
                    <!-- <v-divider></v-divider> -->

                    <template v-for="item of cv_data.education" :key="item">
                        <my-section :experience="item" :x_spacing="item.spacing"/>
                    </template>
                </template>

                <template v-if="cv_data.certifications">
                    <div no-gutters><h2>Certifications</h2><q-icon style="margin-right:4mm">mdi-dumbbell</q-icon></div>
                    <!-- <v-divider></v-divider> -->

                    <template v-for="item of cv_data.certifications" :key="item">
                        <my-section :experience="item" :x_spacing="item.spacing"/>
                    </template>
                </template>


            </div>
    </div>

</template>

<script>

    // import MyChart from "./MyChart";
    import MySection from "./MySection";

    export default {
        name: "Cv",
        components: {MySection},
        data: () => ({

            cv_data :{
                ctx: null,

                chart_data: {
                    labels: ["Critical thinking", "Communication", "Content creation", "Problem solving", "Detail", "Team work"],
                    datasets: [{
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        fill: false,
                        data: [5, 4, 4, 5, 4, 4],
                    }]
                },

                languages:[
                    {name: "Spanish", level: 4, note: 'Mother-tongue'},
                    {name: "English", level: 4, note: 'IELTS 2020 - CERF C1'},

                    {name: "German", level: 2, note: 'Deutschotek: A2'},
                    {name: "Chinese", level: 1, note: 'BIT:Mandarin Basic'},
                ],

                competences:[
                    {name: "IT architecture & design", level: 4},
                    {name: "IT proj. management", level: 4},
                    {name: "User UI & UX", level: 4},


                    {name: "3D tools: Unity/Blender", level: 4},
                    {name: "2D: PS/Inskape/Gimp", level: 4},

                    {name: "MySQL/MariaDB/Galera", level: 4},
                    {name: "Java Spring", level: 3},
                    {name: "Front End [Angular - Vue]", level: 4},

                    {name: "Django", level: 4},
                    {name: "Laravel", level: 3},
                    {name: "Git/SVN/SSH", level: 4},

                ],

                p_languages:[
                    {name: "Javascript", level: 4},
                    {name: "Python", level: 4},
                    {name: "PHP", level: 4},

                    {name: "Java", level: 4},
                    {name: "C/C++", level: 3},
                    {name: "SQL", level: 3},

                    {name: "R", level: 2},
                    {name: "Low level: ASM, VHDL", level: 2},
                ],

                experience:[
                    {
                        title: "IT developer - Consultant [remote]",
                        subtitle: "Center for Multilateral Negotiations - <span class=\"font-weight-bold\">cemune.org</span>",
                        date_start: "09/2017",
                        date_end: "Today",
                        items: [
                            "Composed the software architecture on the gathered requirements",
                            "Implemented and managed a new platform under the latest technologies",
                            "Undergoing development of new educational media platform with secure access"
                        ],
                        spacing: 4
                    },
                    {
                        title: "IT Project consultancy on architecture and technologies",
                        subtitle: "Unnamed IT online Legal consultancy project - Alejando Luna Mesa",
                        date_start: "07/2019",
                        date_end: "Today",
                        spacing: 30
                    },
                    {
                        title: "IT Manager, Product Design and Lead Developer",
                        subtitle: "Wellstar Trading International Ltd. at Shanghai Office",
                        date_start: "10/2018",
                        date_end: "12/2019",
                        items: [
                            "Advised, implemented, and supported new company-wide software tools",
                            "Actively participated in a paradigm shift to new technologies that took under six months",
                            "Meticulously restructured and maintained a database for over hundred of users and tenths of thousands of products:" +
                            "<ul><li>Purge unused data/eliminate data redundancy/integrate new modules</li></ul>",
                            "Redesigned and implemented various tools with a heavy user oriented assessment",
                            "Operated the analysis and integration of new technologies and libraries for future solution developments",
                            "Successfully designed and developed various app-level modules with very specific user permissions archetypes, including:" +
                            "<ul><li>Chat system/File system/Erp progress tracking system</li></ul>",
                        ],
                        spacing: -78
                    },
                    {
                        title: "Full stack web developer [remote]",
                        subtitle: "Freelance web development - leadslide.com",
                        date_start: "10/2016",
                        date_end: "09/2018",
                        items: [
                            "General project modules implementation on Laravel and Angular with UI/UX focus"
                        ],
                        spacing:23
                    },
                    {
                        title: "Information Technology Consultant",
                        subtitle: "BANXICO - Mexico's Central Bank",
                        date_start: "08/2017",
                        date_end: "02/2018",
                        items: [
                            "Meticulously composed formal documentation on various existing projects",
                            "Conducted project-wide technology viability investigation for new solution developments",
                            "Managed the diagnosis, redesign, and development of support email system with automation tools"
                        ],
                        spacing: -6
                    },
                    {
                        title: "IT developer and consultant",
                        subtitle: "DSAN [Diseño de software Aplicado a los negocios]",
                        date_start: "2011 &",
                        date_end: "2013",
                        items: [
                            "Native Android application development",
                            "Viability and proof of concept of an AR application"
                        ],
                        spacing: 14
                    },
                ],

                education:[
                    {
                        title: "Computer Systems Engineering",
                        subtitle: "ESCOM - Institute Politécnico Nacional in Mexico",
                        date_start: "2014",
                        date_end: "2018",
                        items: [
                            "Computer systems project diagnosis and design",
                            "Current computer systems technologies and principles" +
                            "<ul><li>Natural Language Processing & Distributed Systems</li>",
                            "Computer Architecture",
                            "Economy, Finance, Probability & Statistics"
                        ],

                        spacing: -15
                    },
                    {
                        title: "Exchange semester at Beijing Institute of Technology",
                        subtitle: "Computer Science studies under Institutional Excellence Scholarship",
                        date_start: "2016",
                        spacing: 35
                    },


                ],

                certifications:[
                    {
                        title: "IELTS CERF C1 [Min score 7.5]",
                        subtitle: "British Council Mexico",
                        date_start: "02/2020",
                        spacing: 30
                    },
                    {
                        title: "Front-End JavaScript Frameworks: Angular",
                        subtitle: "by The Hong Kong University of Science and Technology on Coursera",
                        date_start: "08/2018",
                        spacing: 30
                    },
                    {
                        title: "Big Data - [Programming], [Computational Thinking]",
                        subtitle: "by University of Adelaide on EDx",
                        date_start: "04/2018",
                        date_end: "05/2018",
                        spacing: 30
                    },
                    {
                        title: "German intensive course: Level A2",
                        subtitle: "Deutschotek; Austria, Vienna",
                        date_start: "03/2018",
                        date_end: "05/2018",
                        spacing: 30
                    },


                ]

            },

        }),
        created(){

        },
        methods:{

        }
    }
</script>

<style lang="scss">




    #cv_page{
        position: relative;

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */

        &::-webkit-scrollbar {
            display: none;
        }

        width: 215.9mm;
        height: 279.4mm;
        background-color: white;

        p, h1, h2, h3, h4, h5, h6, span{
            color: #222;
        }

        h1{
            font-size: 9mm;
            line-height: 9.4mm;
            margin: 0 0 1mm 0;
        }

        h2{
            font-size: 6mm;
            line-height: 6.8mm;
            margin: .2mm 0 1mm 0;
        }

        h3{
            font-size: 4.5mm;
            line-height: 5.2mm;
            margin: 3mm 0 1mm 0;
        }

        h4{
            font-size: 3mm;
            line-height: 4mm;
            margin: .2mm 0 1mm 0;
        }

        h5{
            font-size: 3.6mm;
            line-height: 4.2mm;
            margin: .2mm 0 1mm 0;
        }

        h5{
            font-size: 3.4mm;
            line-height: 4mm;
            margin: .2mm 0 1mm 0;
        }

        h6{
            font-size: 3mm;
            line-height: 3.6mm;
            margin: .2mm 0 1mm 0;
        }

        span.subtitle{
            font-size: 2.6mm;
            font-weight: 700;
            color: #666;
            line-height: 3.6mm;
            margin: .2mm 0 1mm 0;
        }

        p{
            font-size: 3.2mm;
            font-weight: 400;
            letter-spacing: .02mm;
            margin: .2mm 0 1mm 0;
        }
        
    }

    .left_column{
        background-color: #CCCCCC;
        position: absolute;
        left:0;
        margin: 0;
        top:0;
        width: 76mm;
        height: 279.4mm;
        padding: 8mm 4mm 8mm 10mm;
    }

    .right_column{
        background-color: white;
        position: absolute;
        left:76mm;
        top:0;
        margin: 0;
        width: 140mm;
        height: 279.4mm;
        padding: 6mm 6mm 6mm 3mm;
    }

    span.small{
        font-size: 2.4mm !important;
        letter-spacing: .2mm !important;
        font-weight: 500;
    }

    span.medium{
        font-size: 2.8mm !important;
        letter-spacing: .2mm !important;
        font-weight: 500;
    }

    span.large{
        font-size: 3.2mm !important;
        letter-spacing: .2mm !important;
        font-weight: 500;
    }

 .mpy-s{
     padding-top: .5mm;
     padding-bottom: .5mm;
 }

 .mpx-s{
     padding-left: .5mm;
     padding-right: .5mm;
 }

</style>