<template>


    <div id='cv_page' ref='cv_page'>
            <div class='left_column'>

                <div class='row  content-center'>
                    <q-avatar size='35mm' style='margin:2mm auto 2mm auto;'>
                        <q-img style='height: 40mm; width: 40mm; margin-top:-3mm;' src='/assets/profile_circle.png'/>
                    </q-avatar>
                </div>

                <p id="first_name">Sebastian</p>
                <p id="last_name">Casillas Perez</p>

                <table class='dense align-top'>
                    <template v-for="d in cv_data.contact" :key="d.content">
                        <tr v-if="d.show">
                            <th><img class="small_icon" :src="d.icon"/> </th>
                            <td><span>{{d.content}}</span></td>
                        </tr>
                    </template>
                </table>

                <h3>Languages</h3>

                <table class='dense'>
                    <tr v-for='language of cv_data.languages' :key='language'>
                        <th align='left'><span class="text-bold">{{language.name}}</span></th>
                        
                        <td v-if='language.note' align='right'><span class='subtitle'>{{language.note}}</span></td>
                        <td v-else align='right'><span class='subtitle' >In progress</span></td>

                        <td v-if='language.level' align='right' style='width:10mm;' >
                            <span v-for="l in language.level" :key="l" style="color: #444">★</span> 
                            <span v-for="l in 4-language.level" :key="l" style="color: #999">★</span> 
                        </td>
                        <td v-else align='left'><span style='margin-left: 1.5mm'>...</span></td>
                    </tr>
                </table>

                <h3>Capacity</h3>

                <table class='dense'>
                    <tr v-for='e of cv_data.expertise' :key='e'>
                        <th align='left'><p>{{e.name}}</p></th>
                    </tr>
                </table>

                <div style='width: 100%; border-bottom: .2mm solid #444;'></div>

                <table class='dense'>
                    <tr v-for='language of cv_data.p_languages' :key='language'>
                        <th align='left'><span class="text-bold">{{language.name}}</span></th>
                        <td v-if='language.level' align='right' style='width:10mm;'>
                            <span v-for="l in language.level" :key="l" style="color: #444">★</span> 
                            <span v-for="l in 4-language.level" :key="l" style="color: #999">★</span> 
                        </td>
                    </tr>
                </table>

                <h3>Certifications</h3>

                <table class='dense'>
                    <template v-for='item of cv_data.certifications' :key='item'>
                        <tr></tr>
                        <tr>
                            <th align='left'>
                                <span class="text-bold mr_small">{{item.title}}</span>
                                <span class='subtitle'>{{item.subtitle}}</span>
                            </th>
                        </tr>
                        <tr>
                            <th align='left'>

                                <template v-for='d of item.details' :key='d'>
                                    <img class="inline_icon" :src='d.icon' />
                                    <span style="vertical-align: middle;">{{d.content}}</span>
                                </template>
                                
                            </th>
                        </tr>
                    </template>
                </table>
            
            </div>

            <div class='right_column'>

                <div id='competence_wordcloud' ref='competence_wordcloud'></div>

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

    import MySection from '@components/MySection';
    import WordCloud from 'wordcloud'

    export default {
        name: 'Cv',
        components: {MySection},
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
                    {name: 'Spanish', level: 4, note: 'Mother-tongue'},
                    {name: 'English', level: 4, note: 'IELTS 2020 - CERF C1'},

                    {name: 'German', level: 2, note: 'Deutschotek: A2'},
                    {name: 'Chinese', level: 1, note: 'BIT:Mandarin Basic'},
                    {name: 'Dutch'},
                    {name: 'Finnish'}
                ],

                expertise:[
                    {name: 'Interactive & immersive experiences', level: 4},
                    {name: 'Data Visualization', level: 4},
                    {name: 'UI & UX research, design & development', level: 4},

                    {name: 'IT proj. architecture design & management', level: 4},
                    {name: 'Data architecture, storage, access', level: 4},
                ],

                competences:[

                    ['Virtual Reality', 4], 
                    ['Unity', 3],
                    ['UnrealEngine', 4],
                    ['Blender', 3],
                    ['C/C++', 1],

                    ['PhotoShop', 3],
                    ['Inkscape', 2],
                    ['Krita', 3],
                    ['AffinityDesign', 2],
                    ['SVG', 3],
                    ['Vector Graphics', 2],

                    ['Android', 3],
                    ['Vuforia', 2],

                    ['Natural Language Processing', 2],
                    ['ANTLR', 3],



                    ['NodeJS', 3],
                    ['TypeScript', 3],
                    ['ES6', 4],
                    ['Java Spring', 2],
                    ['Applet', 1],
                    ['Front End', 4],
                    ['Javascript', 4],
                    ['Angular', 3],
                    ['Vue', 4],
                    ['JQuery', 3],
                    ['CSS', 3],
                    ['SCSS', 2],
                    ['HTML', 3],
                    ['NPM', 2],

                    ['Data Visualization', 4],
                    ['D3', 4],
                    ['ChartJS', 3],

                    ['Relationship DB', 2],
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

                    ['Microservices', 1],

                    ['RESTFul', 2],
                    ['Django', 4],

                    ['PHP', 2],
                    ['Laravel', 3],

                    ['Wordpress', 2],
                    ['Cockpit', 3],
                    
                    ['Git', 2],
                    ['SVN', 2],
                    ['SSH', 2],
                    ['Docker', 2],

                    ['Windows', 2],
                    ['Linux', 2],
                    ['WSL', 1],


                ],

                p_languages:[
                    {name: 'Javascript', level: 4},
                    {name: 'Python', level: 4},
                    {name: 'PHP', level: 4},

                    {name: 'Java', level: 3},
                    {name: 'C#', level: 4},
                    {name: 'C/C++', level: 3},
                    {name: 'SQL', level: 3},

                    {name: 'R', level: 2},
                    {name: 'Low level: ASM, VHDL', level: 2},
                ],

                experience:[
                    {
                        title: 'Product Owner/Developer & IT Consultant',
                        subtitle: 'Center for Multilateral Negotiations',
                        date_start: '09/2017',
                        date_end: 'Today',
                        details: [
                            {content: 'cemune.org', icon: 'language'},
                            {content: 'Remote', icon: 'cloud_queue'},
                            {content: 'Volunteer', icon: 'coffee'},
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
                        date_end: '04/2021',
                        details: [
                            {content: 'Mexico', icon: 'map'},
                            {content: 'Remote', icon: 'cloud_queue'},
                            {content: 'Freelance', icon: 'coffee'},
                        ],
                        items: [
                            'Design & Implementation of web interface to create/navigate a SPARQL databank through OntoGraphs'
                        ]
                    },
                    {
                        title: 'Project design & IT consultancy',
                        subtitle: 'Unnamed project for private legal firm',
                        details: [
                            {content: 'Mexico', icon: 'map'},
                            {content: 'Freelance', icon: 'coffee'}
                        ],
                        date_start: '07/2019',
                        items: [
                            'Software architectural design for semi-automated online legal firm',
                            '○ Requirement specifications ○ Internal process outline and development plan ○ Viability research '
                        ]
                    },
                    {
                        title: 'IT Manager, Product Designer & Lead Developer',
                        subtitle: 'Wellstar Trading Int. Ltd.',
                        date_start: '10/2018',
                        date_end: '12/2019',
                        details: [
                            {content: 'erp.wellstartrading.com', icon: 'language'},
                            {content: 'Shanghai', icon: 'map'}
                        ],
                        items: [
                            'Design/Implement/Support company-wide tools with a heavy user oriented assessment',
                            '○ Chat system ○ File system ○ Erp progress tracking system',
                            'Actively participated in a paradigm shift to new technologies that took under six months',
                            'Restructure/Maintenance of Database servicing thousands of users'
                        ]
                    },
                    {
                        title: 'Full stack web developer',
                        subtitle: 'LeadSlide',
                        date_start: '10/2016',
                        date_end: '09/2018',
                        details: [
                            {content: 'leadslide.com', icon: 'language'},
                            {content: 'Remote', icon: 'cloud_queue'},
                            {content: 'Freelance', icon: 'coffee'},
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
                            {content: 'banxico.org.mx', icon: 'language'},
                            {content: 'Mexico', icon: 'map'},
                            {content: 'Internship', icon: 'sticky_note_2'},
                        ],
                        items: [
                            'Formal user-oriented documentation on existing projects',
                            'Viability research on future software solutions',
                            'Redesign & Development of email support system with custom automation tools'
                        ]
                    },
                    {
                        title: 'IT developer and consultant',
                        subtitle: 'DSAN - Diseño de software Aplicado a los negocios',
                        date_start: '2011 &',
                        date_end: '2013',
                        details: [
                            {content: 'dsan.com.mx', icon: 'language'},
                            {content: 'Mexico', icon: 'map'}
                        ],
                        items: [
                            'Native Android application development',
                            'Viability and proof of concept of an AR application'
                        ]
                    },
                ],

                education:[
                    {
                        title: 'Masters in Human Computer Interaction and Design',
                        subtitle: 'EIT Digital Masters School',
                        date_start: '2020',
                        date_end: '2022',
                        details: [
                            {content: 'Minor in Innovation and Entrepreneurship', icon: 'push_pin'},
                            {content: 'Aalto University', icon: 'place'},
                            {content: 'University of Twente', icon: 'place'},
                        ]
                    },

                    {
                        title: 'Masters in Information and Communication Technologies',
                        subtitle: 'Aalto University',
                        date_start: '➞',
                        items: [
                            '○ Explorative Information Visualization', 
                            '○ Machine Learning: Supervised methods',
                            '○ Computational User interfaces',
                            'Thesis project: Innovation in a real life scenario'
                        ]
                    },
                    {
                        title: 'Masters in Interactive Technology',
                        subtitle: 'University of Twente',
                        date_start: '➞',
                        details: [
                            {content: 'Focus in User research, user experience, & user interfaces', icon: 'push_pin'},
                        ],
                        items: [
                            '○ Immersive experiences: Human oriented design with a purpose',
                            '○ Virtual/Mixed Reality: use in training & education',
                            '○ Strategic technology & Innovation management'
                        ]
                    },
                    {
                        title: 'Media & democracy: Digital Methods Summer School 2021',
                        subtitle: 'University of Amsterdam',
                        date_start: '➞',
                        items: [
                            'Project ideation and Business plan: ',
                            '<i>\'Botblaster - An \'antivirus\' for your social media\'</i> - Machine learning as a virtual management assistant'
                        ]
                    },
                    {
                        title: 'Bsc. Computer Systems Engineering',
                        subtitle: 'ESCOM - National Polytechnic Institute of Mexico',
                        date_start: '2014',
                        date_end: '2018',
                        details: [
                            {content: 'Extensive 5 year  programme', icon: 'moving'},
                            {content: 'Focus in Software Engineering and I.T. Management', icon: 'push_pin'},
                        ],
                        items: [
                            '○ Natural Language Processing ○ Distributed Systems ○ Networks and Telecoms ○ Algorithmia',
                            '○ Computer Architecture & Hardware Components ○ Operating systems ○ Low-level programming',
                            '○ Business ○ Finance ○ Statistics',
                        ]
                    },
                    {
                        title: 'Exchange semester: BSc. Computer Science',
                        subtitle: 'Beijing Institute of Technology',
                        date_start: '➞',
                        details: [
                            {content: 'Institutional Excellence Scholarship', icon: 'star'}],
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
                            {content: 'Coursera', icon: 'https://api.casillas.dev/storage/uploads/2022/03/02/map-marker_uid_621f367f316d7.svg'},
                            {content: 'Angular', icon: 'https://api.casillas.dev/storage/uploads/2022/03/02/check-decagram_uid_621f90c9737cc.svg'},
                            // {content: '2018', icon: 'calendar'},
                        ]
                    },
                    {
                        title: 'German A2 intensive',
                        subtitle: 'Deutschotek',
                        details: [
                            {content: 'Vienna', icon: 'https://api.casillas.dev/storage/uploads/2022/03/02/map-marker_uid_621f367f316d7.svg'},
                            // {content: '2018', icon: 'calendar'},
                        ]
                    },
                    {
                        title: 'Big Data Micromasters',
                        subtitle: 'U. of Adelaide',
                        details: [
                            {content: 'EDx', icon: 'https://api.casillas.dev/storage/uploads/2022/03/02/map-marker_uid_621f367f316d7.svg'},
                            // {content: 'Programming', icon: 'verified'},
                            {content: 'Computational Thinking', icon: 'https://api.casillas.dev/storage/uploads/2022/03/02/check-decagram_uid_621f90c9737cc.svg'},
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

            let options = {
                list: this.cv_data.competences,
                gridSize: Math.round(18 * this.rate),
                weightFactor: size => (10 + Math.pow(size, 1.9)) * this.rate* 1.3,
                fontWeight: (word, weight) => [1,3].includes(weight)? 500: 600,
                shape: 'rectangle', 
                color: (word, weight) => (4 - weight) * 10,
                rotateRatio: 0,
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
        margin: .2mm 1mm;
        width: 125mm;
        height: 25mm;

    }



    #cv_page{
        position: relative;
        width: 210mm;
        height: 297mm;
        background-color: white;

        p, h1, h2, h3, span, i{
            color: #333;
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
            font-weight: 500;
        }

        h3{
            font-size: 5mm;
            line-height: 5.6mm;
            margin: 4mm 0 .8mm 0mm;
            font-weight: 500;
        }

        span{
            vertical-align: text-bottom;
            font-size: 3.5mm;
            line-height: 3.6mm;
            letter-spacing: .02mm;
            font-weight:400;
            color: #111;
        }

        span.text-bold{
            font-weight: 500;
        }

        span.subtitle{
            font-size: 2.9mm;
            font-weight: 700;
            color: #666;
            line-height: 3.6mm;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }

        *.mr_small{
            margin-right: 1mm;
        }

        #first_name, #last_name{
            font-size: 7mm;
            line-height: 9.4mm;
            margin: 0 0 1mm 0;
            font-weight: 500;
            line-height: 7.4mm;
        }

        #last_name{
            margin-bottom: 2mm;
        }

        p{
            font-size: 3.4mm;
            line-height: 3.6mm;
            font-weight: 400;
            letter-spacing: .02mm;
            margin: .2mm 0 1mm 0;
        }

        img.inline_icon{
            height: 3mm;
            width: 3mm;
            margin-right: .8mm;
            margin-left: .8mm;
        }

        img.small_icon{
            margin-right: 1mm;
            margin-bottom: .3mm;
            height: 4mm;
            width: 4mm;
        }

        img.big_icon{
            height: 4.5mm;
            width: 4.5mm;
            margin-right: 1.4mm;
        }


        .left_column{
            background-color: #C7C7CC;
            position: absolute;
            left:0;
            margin: 0;
            top:0;
            width: 77mm;
            height: 100%;
            padding: 8mm 5mm 8mm 10mm;

            table{
                width: 100%;
                margin-bottom: 2mm;
                margin-top:1mm;

                &.dense{
                    th{
                        font-size: 3.4mm;
                        color: #343434;
                        line-height: 5mm;
                        padding: 0;
                        vertical-align: text-bottom;
                    }
                    tr, td, span{
                        line-height: 2.4mm;
                        vertical-align: bottom;
                    }
                    span{
                        line-height: 2.4mm;
                        vertical-align: text-bottom;
                    }

                }

                &.align-top{
                    tr, td, span {
                        vertical-align: text-top;
                    }
                    
                }

            }

            
        }

        .right_column{
            background-color: white;
            position: absolute;
            left:77mm;
            top:0;

            margin: 0;
            width: 133mm;
            height: 100%;
            
            padding: 10mm 6mm 6mm 3mm;



            .right_col_title{
                margin-top: 3mm;

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