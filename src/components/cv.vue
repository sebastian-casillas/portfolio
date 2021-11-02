<template>


    <div id='cv_page' ref='cv_page'>
            <div class='left_column'>

                <h1 style='text-align: center;'>Sebastian</h1>
                <h2 style='text-align: center; letter-spacing: .3mm;'>Casillas Perez</h2>

                <div class='row  content-center'>
                    <q-avatar size='40mm' style='margin:1.5mm auto 1.5mm auto;'>
                        <q-img style='height: 50mm; width: 50mm; margin-top:-5mm;' src='/assets/profile_circle.png'

                        />
                    </q-avatar>
                </div>

                <table class='dense'>
                    <tr>
                        <td><q-icon name='mail' color='grey-10'/></td>
                        <td><span class='small'>Sebastian.Casillas@outlook.com</span></td>
                    </tr>
                    <tr>
                        <td><q-icon name='phone' color='grey-10'/></td>
                        <td><span class='small'>+358 041 496 1148</span></td>
                    </tr>
                    <tr>
                        <td><q-icon name='phone' color='grey-10'/></td>
                        <td><span class='small'>+31 06 82777956</span></td>
                    </tr>

                    <tr>
                        <td><q-icon name='map' color='grey-10'/></td>
                        <td><span class='small'>Espoo, Finland</span></td>
                    </tr>
                    <tr>
                        <td><q-icon name='linkedin' color='grey-10'/></td>
                        <td><span class='small'>/in/sebastian-casillas</span></td>
                    </tr>
                    <tr>
                        <td><q-icon name='language' color='grey-10'/></td>
                        <td><span class='small'>casillas.dev</span></td>
                    </tr>
                </table>

                <h3>Languages</h3>

                <table class='dense'>
                    <tr v-for='language of cv_data.languages' :key='language'>
                        <th align='left'>{{language.name}}</th>
                        
                        <td v-if='language.note' align='right'><span class='subtitle' >{{language.note}}</span></td>
                        <td v-else align='right'><span class='subtitle' >In progress</span></td>
                        <td v-if='language.level' align='right' style='width:13mm;'><q-rating v-model='language.level' size='2.5mm' color='grey-10' :max='4'/></td>
                        <td v-else align='left'><span style='margin-left: 2.5mm'>...</span></td>
                    </tr>
                </table>

                <h3>Capacity</h3>

                <table class='dense'>
                    <tr v-for='e of cv_data.expertise' :key='e'>
                        <th align='left'>{{e.name}}</th>
                    </tr>
                </table>

                <div style='width: 100%; border-bottom: .2mm solid #444;'></div>

                <table class='dense'>
                    <tr v-for='language of cv_data.p_languages' :key='language'>
                        <th align='left'>{{language.name}}</th>
                        <td align='right'><q-rating v-model='language.level' size='2.5mm' color='grey-9' :max='4'/></td>
                    </tr>
                </table>

                <h3>Certifications</h3>

                <table class='dense'>
                    <template v-for='item of cv_data.certifications' :key='item'>
                        <tr>
                            <th align='left'>{{item.title}}<span class='cert_subtitle'>{{item.subtitle}}</span></th>
                        </tr>
                        <tr>
                            <th align='left' class='cert_details'>

                                <template v-for='d of item.details' :key='d'>
                                    <q-icon size='2.5mm' :name='d.icon' color='grey-9'/><span>{{d.content}}</span>
                                </template>
                                
                            </th>
                        </tr>
                    </template>
                </table>
            
            </div>

            <div class='right_column'>

                <div class='right_col_title'>
                    <q-icon name='work' size='5.2mm' color='dark'></q-icon>
                    <h2>Work</h2>
                </div>

                <template  v-for='job of cv_data.experience' :key='job'>
                    <my-section :experience='job' :x_spacing='job.spacing'/>
                </template>


                <div class='right_col_title'>
                    <q-icon name='book' size='5.2mm' color='dark'></q-icon>
                    <h2>Education</h2>
                </div>

                <template v-for='item of cv_data.education' :key='item'>
                    <my-section :experience='item' :x_spacing='item.spacing'/>
                </template>

                <div class='right_col_title'>
                    <q-icon name='fitness_center' size='5.2mm' color='dark'></q-icon>
                    <h2>Expertise</h2>
                </div>

                

                <div id='competence_wordcloud' ref='competence_wordcloud'></div>

            </div>
    </div>

</template>

<script>

    import MySection from './MySection';
    import WordCloud from 'wordcloud'

    export default {
        name: 'Cv',
        components: {MySection},
        data: () => ({
            WordCloud: WordCloud,

            cv_data :{

                languages:[
                    {name: 'Spanish', level: 4, note: 'Mother-tongue'},
                    {name: 'English', level: 4, note: 'IELTS 2020 - CERF C1'},

                    {name: 'German', level: 2, note: 'Deutschotek: A2'},
                    {name: 'Chinese', level: 1, note: 'BIT:Mandarin Basic'},
                    {name: 'Dutch'},
                    {name: 'Finnish'}
                ],

                expertise:[
                    {name: 'Interactive experiences & Data Visualization', level: 4},

                    {name: 'User oriented research and design', level: 4},
                    {name: 'UI & UX design and development', level: 4},

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

                    {name: 'Java', level: 4},
                    {name: 'C/C++', level: 3},
                    {name: 'SQL', level: 3},

                    {name: 'R', level: 2},
                    {name: 'Low level: ASM, VHDL', level: 2},
                ],

                experience:[
                    {
                        title: 'Product Owner/Developer & IT Consultant',
                        subtitle: 'The Center for Multilateral Negotiations',
                        date_start: '09/2017',
                        date_end: 'Today',
                        details: [
                            {content: 'cemune.org', icon: 'language'},
                            {content: 'Remote', icon: 'cloud_queue'},
                            {content: 'Volunteer', icon: 'coffee'},
                        ],
                        items: [
                            'Software architecture and implementation for custom media platform',
                            '○ Requiremenets gathering ○ Web implementation ○ General I.T. Management'
                        ]
                    },
                    {
                        title: 'Explorative Designer & Developer',
                        subtitle: 'CONACyT: National Council of Science and Technology',
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
                        subtitle: 'Unnamed project for legal firm',
                        details: [
                            {content: 'Mexico', icon: 'map'},
                            {content: 'Freelance', icon: 'coffee'}
                        ],
                        company: 'Alejando Luna Mesa',
                        date_start: '07/2019',
                        items: [
                            'Software architectural design for semi-automated online legal firm',
                            '○ Requirement specifications ○ Internal process outline and development plan ○ Viability research '
                        ]
                    },
                    {
                        title: 'IT Manager, Product Designer & Lead Developer',
                        subtitle: 'Wellstar Trading International Ltd.',
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
                            'Restructure/Maintainance of Database servicing thousands of users'
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
                        webpage: 'banxico.org.mx',
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
                        title: 'Master\'s in Human Computer Interaction and Design',
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
                        title: 'Master\'s in Information and Communication Technologies',
                        subtitle: 'Aalto University',
                        date_start: '➞',
                        items: [
                            '○ Explorative Information Visualization ○ Machine Learning: Supervised methods',
                            'Thesis project in a real life scenario'
                        ]
                    },
                    {
                        title: 'Master\'s in Interactive Technology',
                        subtitle: 'University of Twente',
                        date_start: '➞',
                        details: [
                            {content: 'Focus in User research, user experience, & user interfaces', icon: 'push_pin'},
                        ],
                        items: [
                            'Immersive experiences: Human oriented design with a purpose',
                            'Virtual/Mixed Reality: use in training & education',
                            'Strategic technology & Innovation management'
                        ]
                    },
                    {
                        title: 'Media and democracy: Digital Methods Summer School 2021',
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
                            '',
                            '○ Natural Language Processing ○ Distributed Systems ○ Networks and Telecoms ○ Algorithmia',
                            '○ Computer Architecture & Hardware Components ○ Operating systems ○ Low-level programing',
                            '○ Business ○ Finance ○ Statistics',
                        ]
                    },
                    {
                        title: 'Exchange semester: BSc. Computer Science ',
                        subtitle: ' Beijing Institute of Technology',
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
                        details: [
                            {content: 'Mexico', icon: 'place'},
                            // {content: '2020', icon: 'calendar'}
                        ]
                    },
                    {
                        title: 'Front-End JavaScript Frameworks',
                        subtitle: 'Hong Kong U.',
                        details: [
                            {content: 'Coursera', icon: 'place'},
                            {content: 'Angular', icon: 'verified'},
                            // {content: '2018', icon: 'calendar'},
                        ]
                    },
                    {
                        title: 'German A2 intensive',
                        subtitle: 'Deutschotek',
                        details: [
                            {content: 'Vienna', icon: 'place'},
                            // {content: '2018', icon: 'calendar'},
                        ]
                    },
                    {
                        title: 'Big Data Micromasters',
                        subtitle: 'U. of Adelaide',
                        details: [
                            {content: 'EDx', icon: 'place'},
                            {content: 'Programming', icon: 'verified'},
                            {content: 'Computational Thinking', icon: 'verified'},
                            // {content: '2018', icon: 'calendar'},
                        ]
                    },
 


                ]

            },
        }),
        mounted(){
            let competence_wc = this.$refs.competence_wordcloud

            let rate = competence_wc.clientWidth / 1024;

            let options = {
                list: this.cv_data.competences,
                gridSize: Math.round(18 * rate),
                weightFactor: size => (10 + Math.pow(size, 1.9)) * rate* 1.3,
                fontWeight: (word, weight) => {
                    switch(weight) {
                        case 1:return 500
                        case 2: return 600
                        case 3:return 500
                        case 4: return 600
                        default: return 500
                    }
                },
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

    #competence_wordcloud{
        margin: .2mm 1mm;
        width: 130mm;
        height: 30mm;

    }

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


        p, h1, h2, h3, h4, h5, h6, span, i{
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

        span{
            font-size: 2.6mm;
            line-height: 2.4;   
        }

        span.small{
            font-size: 2.2mm;
            line-height: 2.4; 
            letter-spacing: .2mm;
            font-weight: 500;
        }

        span.subtitle{
            font-size: 2.2mm;
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


        .left_column{
            background-color: #CCCCCC;
            position: absolute;
            left:0;
            margin: 0;
            top:0;
            width: 76mm;
            height: 279.4mm;
            padding: 8mm 5mm 8mm 10mm;

            table{
                width: 100%;
                margin-bottom: 2mm;
                margin-top:1mm;

                &.dense{
                    th{
                        font-size: 2.9mm;
                        color: #444;
                        line-height: 3.8mm;
                    }
                    tr, td, span{
                        line-height: 2mm;
                    }
                }

                .cert_details{
                    display:flex;
                    align-items:center;
                    height: 3mm;
                    margin: 0 0 1.2mm 0;

                    & > span{
                        margin-right: .4mm;
                        margin-left: .2mm;
                        font-weight: 400;
                    }
                }

                .cert_subtitle{
                    color: #666;
                    font-size: 2.2mm; 
                    line-height: 2.4mm;
                    font-weight: 600;
                    margin-left: 1mm;
                    
                }
            }
            
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

            .right_col_title{
                display: flex;
                align-items: center;
                margin-bottom: 3mm;

                & > *{
                    margin-bottom: 0 !important;
                }

                & > i{
                    margin:0 1.2mm 0 0.8mm
                }
            }
        }
        
    }










</style>