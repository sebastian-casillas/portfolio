<template>


    <div id='cv_page' ref='cv_page'>



            <div class='left_column'>

                <!-- <div class='row content-center'>
                    <q-avatar size='35mm' style='margin:2mm auto 2mm auto;'>
                        <q-img style='height: 40mm; width: 40mm; margin-top:-3mm;' src='/assets/profile_circle.png'/>
                    </q-avatar>
                </div> -->


                <p class="first_name">Sebastian</p>
                <p class="last_name">Casillas Perez</p>

                <div name="contact_information" class="leftside_section">
                    <template v-for="d in cv_data.contact" :key="d.content">
                        <div v-if="d.show" >
                            <img class="small_icon" :src="d.icon"/> 
                            <span>{{d.content}}</span>
                        </div>
                    </template>
                </div>

                <h3>Languages</h3>

                <div name="spoken_languages" class="leftside_section">
                    <template v-for='language of cv_data.languages' :key='language'>
                        <div>
                            <span>{{language.name}}</span>
                            <div class="spacer" style="flex-grow: 1;"></div>

                            <template v-if="language.level > 0">
                                <span class='subtitle'>{{language.note}}</span>
                                <div v-if='language.level' align='right' style='width:10mm;' >
                                    <span v-for="l in language.level" :key="l" style="color: #444">★</span> 
                                    <span v-for="l in 3-language.level" :key="l" style="color: #999">★</span> 
                                </div>
                            </template>
                            <template v-else>
                                <span class='subtitle'>- In progress -</span>
                            </template>
                        
                        </div>
                    </template>
                </div>

                <h3>Technology Stack</h3>

                <div name="programming_languages" class="leftside_section">
                    <template v-for='language of cv_data.p_languages' :key='language'>

                        <div>
                            <span>{{language.name}}</span>
                        </div>
                    </template>
                </div>

                <div style="display: flex; justify-content: center; width: 100%;">
                    <div id='competence_wordcloud' ref='competence_wordcloud'></div>
                </div>

                <h3>Capacity</h3>

                <div name="capacity" class="leftside_section">
                    <template v-for='e of cv_data.expertise' :key='e'>
                        <div>
                            <span>{{e.name}}</span>
                        </div>
                    </template>
                </div>
                
            </div>

            <div class='right_column'>

                
                <div class='right_col_title'>
                    <img class="big_icon" src="https://api.casillas.dev/storage/uploads/2022/03/02/briefcase_uid_621f2d01ed702.svg">
                    <h2>Work</h2>
                </div>

                <template  v-for='job of cv_data.experience' :key='job'>
                    <my-section :experience='job'/>
                </template>


                <div class='right_col_title'>
                    <img class="big_icon" src="https://api.casillas.dev/storage/uploads/2022/03/02/school_uid_621f3281cf784.svg">
                    <h2>Education</h2>
                </div>

                <template v-for='item of cv_data.education' :key='item'>
                    <my-section :experience='item'/>
                </template>

                

            </div>

            
    </div>

</template>

<script>

    import MySection from '@components/cv/MySection';
    // import MyTag from '@components/cv/tags';
    import WordCloud from 'wordcloud'

    export default {
        name: 'CurriculuVitae',
        components: {
            MySection, 
            //MyTag
        },
        data: () => ({
            cv_data :{

                contact:[
                    {
                        show: true,
                        icon: 'https://api.casillas.dev/storage/uploads/2022/03/02/email-outline_uid_621f377a08e96.svg',
                        content: 'Sebastian.Casillas@outlook.com'
                    },
                    {
                        show: true,
                        icon: 'https://api.casillas.dev/storage/uploads/2022/03/02/phone_uid_621f367f96581.svg',
                        content: '(+358) 041 496 1148'
                    },
                    {
                        show: true,
                        icon: 'https://api.casillas.dev/storage/uploads/2022/03/02/phone_uid_621f367f96581.svg',
                        content: '(+31) 06 8277 7956'
                    },
                    {
                        show: false,
                        icon: 'https://api.casillas.dev/storage/uploads/2022/03/02/map-marker-outline_uid_621f380d1de41.svg',
                        content: 'Espoo, Finland'
                    },
                    {
                        show: true,
                        icon: 'https://api.casillas.dev/storage/uploads/2022/03/02/at_uid_621f377a631a5.svg',
                        content: 'casillas.dev'
                    },
                    {
                        show: true,
                        icon: 'https://api.casillas.dev/storage/uploads/2022/03/02/icons8-linkedin-2_uid_621f3ae64f634.svg',
                        content: '/in/sebastian-casillas'
                    },
                    {
                        icon: 'https://api.casillas.dev/storage/uploads/2022/03/02/icons8-git_uid_621f3b197b9f3.svg',
                        content: 'github.com/Bastian-Kass'
                    }
                ],

                languages:[
                    {name: 'Spanish', level: 3, note: 'Mother-tongue'},
                    {name: 'English', level: 3, note: 'IELTS 2020 - CERF C1'},

                    {name: 'German', level: 2, note: 'Deutschotek: A2'},
                    {name: 'Chinese', level: 1, note: 'BIT:Mandarin Basic'},
                    {name: 'Dutch', level: 0, note: ''},
                    {name: 'Finnish', level: 0, note: ''}
                ],

                expertise:[
                    {name: 'Comp. Systems Engineer', level: 4},
                    {name: 'Interactive & immersive experiences', level: 4},
                    {name: 'Data mining, viz., & architecture', level: 4},
                    {name: 'UI & UX research, design & development', level: 4},
                    {name: 'Low & high fidelity prototyping', level: 4},
                    {name: 'IT proj. architecture design & implementation', level: 4},
                ],

                competences:[

                    ['Virtual Reality', 4], 
                    ['Unity', 4],
                    ['UnrealEngine', 3],
                    ['Blender', 3],
                    ['C/C++', 2],
                    ['C/C#', 4],

                    ['PhotoShop', 3],
                    ['Inkscape', 2],
                    ['Krita', 3],
                    ['Figma', 3],
                    ['AffinityDesign', 2],
                    ['SVG', 3],
                    ['Vector Graphics', 2],

                    ['Android', 3],
                    ['Java', 3],
                    ['Vuforia', 2],

                    ['Natural Language Processing', 1],
                    ['ANTLR', 3],




                    ['ES6', 4],
                    ['Front End', 4],
                    ['Javascript', 4],
                    ['Angular', 3],
                    ['Vue', 4],
                    ['CSS', 3],
                    ['HTML', 3],
                    ['NPM', 2],

                    ['Data Visualization', 4],
                    ['D3', 4],
                    ['ChartJS', 3],


                    ['MySQL', 3],
                    ['MariaDB', 2],
                    ['Distributed DB', 2],
                    ['Galera', 3],

                    ['VSCode', 3],

                    ['Python', 4],
                    ['Data Science', 3],
                    ['Pandas', 3],
                    ['Matplotlib', 3],
                    ['Seaborn', 3],
                    ['NumPy', 3],

                    ['R', 2],

                    ['RESTFul', 2],

                    ['Django', 4],

                    ['PHP', 2],
                    ['Laravel', 3],
                    
                    ['Git', 2],
                    ['SVN', 2],
                    ['SSH', 2],
                    ['Docker', 2],

                    ['Windows', 2],
                    ['Linux', 2],
                    ['Android', 2],
                    ['WSL', 1],

                    ['ASM', 1],
                    ['VHDL', 1],
                ],

                p_languages:[
                    {name: 'Javascript', level: 4},
                    {name: 'Python', level: 4},
                    {name: 'PHP', level: 4},
                    {name: 'C#', level: 4},
                    {name: 'C/C++', level: 3},
                    {name: 'SQL', level: 3},

                ],

                experience:[
                    {
                        title: 'Product Owner & IT Consultant',
                        subtitle: 'Center for Multilateral Negotiations',
                        date_start: '09/2017',
                        date_end: 'Today',
                        details: [
                            {content: 'cemune.org', icon: 'language', img:'https://api.casillas.dev/storage/uploads/2022/03/02/web_uid_621f367e7508e.svg'},
                            {content: 'Remote', icon: 'cloud_queue', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/cloud-outline_uid_621f367d602bb.svg'},
                            {content: 'Volunteer', icon: 'coffee', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/coffee_uid_621f367d0937c.svg'},
                        ],
                        items: [
                            'Software architecture and implementation for custom media platform',
                            '○ Requirements specification ○ Web implementation ○ General I.T. Management'
                        ]
                    },
                    {
                        title: 'Explorative Designer & Lead Developer',
                        subtitle: 'CONACyT & CNB ',
                        date_start: '09/2020',
                        date_end: '04/2022',
                        details: [
                            {content: 'Mexico', icon: 'map', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/map-marker_uid_621f367f316d7.svg'},
                            {content: 'Remote', icon: 'cloud_queue', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/cloud-outline_uid_621f367d602bb.svg'},
                            {content: 'Freelance', icon: 'coffee', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/coffee_uid_621f367d0937c.svg'},
                        ],
                        items: [
                            'Design & Implementation of web interface to create/navigate a SPARQL databank through OntoGraphs',
                            'Workflow process analysis and user research to support a more efficient interface redisign'
                        ]
                    },
                    {
                        title: 'Project design & IT consultancy',
                        subtitle: 'Private legal firm',
                        details: [
                            {content: 'Mexico', icon: 'map', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/map-marker_uid_621f367f316d7.svg'},
                            {content: 'Freelance', icon: 'coffee', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/coffee_uid_621f367d0937c.svg'}
                        ],
                        date_start: '07/2019',
                        items: [
                            'Software architectural design for semi-automated online legal firm',
                            '○ Requirement specifications ○ Internal process outline ○ Viability research '
                        ]
                    },
                    {
                        title: 'IT Manager, Product Designer & Lead Developer',
                        subtitle: 'Wellstar Trading Int. Ltd.',
                        date_start: '10/2018',
                        date_end: '12/2019',
                        details: [
                            {content: 'erp.wellstartrading.com', icon: 'language', img:'https://api.casillas.dev/storage/uploads/2022/03/02/web_uid_621f367e7508e.svg'},
                            {content: 'Shanghai', icon: 'map', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/map-marker_uid_621f367f316d7.svg'}
                        ],
                        items: [
                            'Design/Implement company-wide tools with a heavy user oriented assessment',
                            '○ Chat system ○ File system ○ Erp progress tracking system',
                            'Paradigm shift to new technologies that took under six months',
                            'Restructure/Maintenance of Database servicing thousands of users'
                        ]
                    },
                    {
                        title: 'Full stack web developer',
                        subtitle: 'LeadSlide',
                        date_start: '10/2016',
                        date_end: '09/2018',
                        details: [
                            {content: 'leadslide.com', icon: 'language', img:'https://api.casillas.dev/storage/uploads/2022/03/02/web_uid_621f367e7508e.svg'},
                            {content: 'Remote', icon: 'cloud_queue', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/cloud-outline_uid_621f367d602bb.svg'},
                            {content: 'Freelance', icon: 'coffee', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/coffee_uid_621f367d0937c.svg'},
                        ],
                        items: [
                            'General project modules implementation on Laravel and Angular with UI/UX focus'
                        ]
                    },
                    {
                        title: 'Information Technology Consultant',
                        subtitle: 'BANXICO - Mexico\'s Central Bank',
                        date_start: '08/2017',
                        date_end: '02/2018',
                        details: [
                            {content: 'banxico.org.mx', icon: 'language', img:'https://api.casillas.dev/storage/uploads/2022/03/02/web_uid_621f367e7508e.svg'},
                            {content: 'Mexico', icon: 'map', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/map-marker_uid_621f367f316d7.svg'},
                            {content: 'Internship', icon: 'sticky_note_2', img:'https://api.casillas.dev/storage/uploads/2022/03/03/notebook_uid_62207bca8914d.svg'},
                        ],
                        items: [
                            'Formal user-oriented documentation on existing projects',
                            'Viability research on future software solutions',
                            'Redesign & Development of email support system with custom automation tools'
                        ]
                    },
                    {
                        title: 'IT developer and consultant',
                        subtitle: 'DSAN - Diseño de software Aplicado a negocios',
                        date_start: '2011 &',
                        date_end: '2013',
                        details: [
                            {content: 'dsan.com.mx', icon: 'language', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/web_uid_621f367e7508e.svg'},
                            {content: 'Mexico', icon: 'map', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/map-marker_uid_621f367f316d7.svg'}
                        ],
                        items: [
                            'Native Android application development',
                            'Viability and proof of concept of an AR application'
                        ]
                    },
                ],

                education:[
                    {
                        title: 'Masters in Human Computer Interaction & Design',
                        subtitle: 'EIT Digital Masters School',
                        date_start: '2020',
                        date_end: '2022',
                        details: [
                            {content: 'Minor in Innovation and Entrepreneurship', icon: 'push_pin', img:'https://api.casillas.dev/storage/uploads/2022/03/02/pin_uid_621f367db8a25.svg'},
                            // {content: 'Aalto U.', icon: 'place'},
                            // {content: 'U. of Twente', icon: 'place'},
                        ]
                    },

                    {
                        title: 'Masters in Information & Communication Technologies',
                        subtitle: 'Aalto University',
                        date_start: '☌',
                        details: [
                        ],
                        items: [
                            
                            '○ Explorative Information Visualization  ○ Computational User interfaces', 
                            '○ Machine Learning: Supervised methods',
                            'Thesis project: Innovation in a real life scenario'
                        ]
                    },
                    {
                        title: 'Masters in Interactive Technology',
                        subtitle: 'University of Twente',
                        date_start: '☌',
                        details: [
                            {content: 'Focus in User research, UX. and UI', icon: 'push_pin', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/pin_uid_621f367db8a25.svg'},
                        ],
                        items: [
                            '○ Immersive experiences: Human oriented design with a purpose',
                            '○ Virtual/Mixed Reality: use in training & education',
                            '○ Strategic technology & Innovation management'
                        ]
                    },
                    {
                        title: 'Media & democracy: Digital Methods Summer School 21',
                        subtitle: 'U. of Amsterdam',
                        date_start: '☌',
                        details: [],
                        items: [
                            'Project ideation and Business plan: ',
                            '<i>\'Botblaster - An \'antivirus\' for your social media\'</i> - Machine learning as a virtual management assistant'
                        ]
                    },
                    {
                        title: 'Bsc. Computer Systems Engineering',
                        subtitle: 'ESCOM - National Polytechnic Institute',
                        date_start: '2014',
                        date_end: '2018',
                        details: [
                            {content: 'Extensive 5yr. program', icon: 'moving', img: 'https://api.casillas.dev/storage/uploads/2022/03/03/trending-up_uid_62207bcae96ed.svg'},
                        ],
                        items: [
                            '○ Natural Lang. Processing ○ Distributed Systems ○ Networks and Telecoms',
                            '○ Comp. Architecture & Hardware ○ Operating systems ○ Low-level programming',
                            '○ Business ○ Finance ○ Statistics ○ I.T. Management',
                        ]
                    },
                    {
                        title: 'Exchange semester: BSc. Computer Science',
                        subtitle: 'Beijing Institute of Technology',
                        date_start: '☌',
                        details: [
                            {content: 'Institutional Excellence Scholarship', icon: 'star', img: 'https://api.casillas.dev/storage/uploads/2022/03/03/star_uid_62207bcb51d51.svg'}],
                        items: [
                            '○ Computer Graphics ○ Software systems design'
                        ]
                    },


                ],

                certifications:[
                    {
                        title: 'IELTS CERF C1',
                        subtitle: 'British Council',
                        details: []
                    },
                    {
                        title: 'Front-End JS Framework',
                        subtitle: 'Hong Kong U.',
                        details: [
                            {content: 'Coursera', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/map-marker_uid_621f367f316d7.svg'},
                            {content: 'Angular', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/check-decagram_uid_621f90c9737cc.svg'},
                            // {content: '2018', icon: 'calendar'},
                        ]
                    },
                    {
                        title: 'German A2 intensive',
                        subtitle: 'Deutschotek',
                        details: [
                            {content: 'Vienna', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/map-marker_uid_621f367f316d7.svg'},
                            // {content: '2018', icon: 'calendar'},
                        ]
                    },
                    {
                        title: 'Big Data Micromasters',
                        subtitle: 'U. of Adelaide',
                        details: [
                            {content: 'EDx', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/map-marker_uid_621f367f316d7.svg'},
                            // {content: 'Programming', icon: 'verified'},
                            {content: 'Computational Thinking', img: 'https://api.casillas.dev/storage/uploads/2022/03/02/check-decagram_uid_621f90c9737cc.svg'},
                            // {content: '2018', icon: 'calendar'},
                        ]
                    },
 


                ]

            },
        }),
        computed:{
            rate: function (){
                return this.$refs.competence_wordcloud.clientWidth / 1024;
            }
        },

        mounted(){

            const options = {
                list: this.cv_data.competences,
                gridSize: Math.round(7 * this.rate),
                weightFactor: size => (60 + Math.pow(size, 1.9)) * this.rate,
                fontWeight: (word, weight) => [1,3].includes(weight)? 500: 600,
                shape: 'circle', 
                fontFamily: 'Times, serif',
                color: (word, weight) =>  (weight ===4)? '#282828' : '#383838' ,
                rotateRatio: 0,
                rotationSteps: 2,
                backgroundColor: '#fff0',
                shuffle: true
            }

            WordCloud(document.getElementById('competence_wordcloud'), options );
        }
    }
</script>

<style lang='scss'>

    @page {
        size: A4 portrait;
        margin: 0;
        break-inside: always;
        display: none;

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    #competence_wordcloud{
        margin: 2mm 0 2mm 0;
        width: 60mm;
        height: 60mm;
    }

    #cv_page{
        position: relative;

        // Measurments of an A4 paper
        width: 210mm;
        height: 297mm;

        background-color: white;
        font-family: 'Roboto';
        line-height: 105%;
        
        color: red;

        p, span, i{
            color: #363636;
        }

        h1, h2, h3, h4, .first_name, .last_name{
            color: #222;
            font-family: 'Helvetica';
        }

        h1{
            font-size: 7mm;
            line-height: 9.4mm;
            margin: 0 0 .8mm 0mm;
            font-weight: 500;
        }

        h2{
            font-size: 5.4mm;
            line-height: 5.8mm;
            margin: 2.4mm 0 0 0;
            font-weight: 600;
        }

        h3{
            font-size: 5mm;
            line-height: 5.6mm;
            margin: 4mm 0 2mm 0mm;
            font-weight: 600;
            
            
        }


        span{
            vertical-align: text-bottom;
            font-size: 3.5mm;
            line-height: 3.6mm;
            letter-spacing: .02mm;
            font-weight:400;
        }

        span.text-bold{
            font-weight: 500;
        }

        span.subtitle{
            font-size: 2.9mm !important;
            line-height: 3.8mm !important;
            letter-spacing: -.08mm !important;

            vertical-align: text-bottom;

            font-weight: 700;
            margin-left: 1.2mm;
            color: #454545;
            letter-spacing: .005mm;
        }

        p{
            font-size: 3.4mm;
            line-height: 3.6mm;
            font-weight: 400;
            letter-spacing: .02mm;
            margin: .2mm 0 1mm 0;
        }

        .first_name{
            font-size: 6.5mm;
            line-height: 6.7mm;
            margin: 0 0 1mm 0;
            font-weight: 600;
            text-align: center;
        }

        .last_name{
            font-size: 5.5mm;
            line-height: 5.6mm;
            margin: 0 0 6mm 0;
            font-weight: 600;
            text-align: center;
        }


        img.inline_icon{
            height: 3mm;
            width: 3mm;
            margin-right: .8mm;
            margin-left: .8mm;
        }

        img.small_icon, svg.small_icon{
            margin-right: 1.4mm;
            margin-bottom: .3mm;
            height: 4mm;
            width: 4mm;
            fill: pink;
            stroke: pink;
            
        }

        img.big_icon{
            height: 4.5mm;
            width: 4.5mm;
            margin-right: 1.8mm;
            margin-left: 1mm;
        }


        .left_column{
            background-color: #d0d0d9;
            
            position: absolute;
            left:0;
            margin: 0;
            top:0;
            width: 77mm;
            height: 100%;
            padding: 20mm 5mm 8mm 10mm;

            .leftside_section{
                
                .small_icon{
                    fill: pink;
                }

                & > div{
                    display:flex; 
                    align-content: middle; 
                    margin-bottom: 2mm;
                }

                span{
                    
                    font-size: 3.6mm;
                    line-height: 4mm;
                }
            }
            
        }

        .right_column{
            position: absolute;

            left:77mm;
            top:0;

            margin: 0;
            width: 133mm;
            height: 100%;
            
            padding: 10mm 6mm 6mm 3mm;



            .right_col_title{
                margin-left: 8mm;
                margin-bottom: 2mm;

                &:first-child {
                    margin-top: 0;
                }

                & > *{
                    display: inline-block;
                }
            }
        }
        
    }










</style>