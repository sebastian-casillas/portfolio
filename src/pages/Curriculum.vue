<template>
    <q-scroll-area id="curriculum_scroll_widget">
        <div id="curriculum_scroll_area">
            <q-toolbar class="text-primary q-my-lg q-px-lg">
                <q-btn flat round color="white" icon="mdi-arrow-u-left-top-bold" size="1.2rem" to="/"/>
                <q-space />
                <q-btn  flat round color="white" icon="download" size="1.2rem" @click="downloadCV()"/>
            </q-toolbar>

            <curriculum/>
        </div>
        
    </q-scroll-area>
</template>

<script>
import cv from '@/components/cv.vue'
import { saveAs } from 'file-saver'

export default {
    name: 'MySection',
    components: {
        Curriculum: cv
    },
    data: () => ({

    }),
    methods:{
        downloadCV(){
            saveAs('https://casillas.dev/api/storage/uploads/2021/11/11/CV_SebastianCasillas_uid_618cc3b71d3de.pdf', 'cv_SebastianCasillas.pdf');
        }

    }

}
</script>

<style lang="scss">
#curriculum_scroll_widget{
    height: 100vh;
    width: 100vw;

    #curriculum_scroll_area{
        min-width: 100%;
        min-height: 100%;
        padding: 20px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        #curriculum_buttons{
            display:flex;
            align-items: flex-end;
            border-bottom: 1px solid white;
            width: 100%;
            margin: 40px 20px;
            padding: 10px 20px;
        }
    }

}
</style>