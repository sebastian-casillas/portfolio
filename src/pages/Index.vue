<template>
  <div id="home">
    <q-scroll-area style="height: 100dvh; max-width: 100dvw;">
      <div class="row justify-center q-mt-xl q-mb-lg">
        <contact-card/>
      </div>





      <div class="row justify-center" style="width: 100%;">
        <q-tabs class="text-white">
          <q-route-tab
            icon="mdi-console-network"
            to="/"
            exact
          />
          <q-route-tab
            icon="mdi-check-network"
            to="/background"
            exact
          />
          <q-route-tab
            icon="mdi-folder-network"
            to="/portfolio"
          />

          <q-btn name="tab5"
            color="blue-grey-1"  
            text-color="dark" 
            size="small"
            round
            class="q-mx-sm"
            :disable="link_to_cv_pdf === ''"
            target="_blank"
            :href="link_to_cv_pdf"
            >
            <span class="text-weight-bolder">CV</span>
            </q-btn>
        </q-tabs>
      </div>


      <router-view v-slot="{ Component }">
        <transition name="slide-fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-scroll-area>




  </div>
</template>

<script>

import ContactCard from '@/components/home/ContactCard.vue'
import { useDataStore } from '@/store/Data';

export default {
  name: 'Home',
  data: () => ({
        generalCVData: undefined,
    }),
  components: {
    ContactCard: ContactCard
  },
  created(){
    this.init()
  },
  methods: {
      async init(){
          this.generalCVData = await useDataStore().getDataGeneral
          console.log(this.generalCVData)
      }
  },
  computed:{
    link_to_cv_pdf() {
      if(this.generalCVData && this.generalCVData.cv_pdf_link)
        return 'https://api.casillas.dev/storage/uploads' + this.generalCVData.cv_pdf_link.path
      else
        return ''
    }
  }

}

</script>

<style lang="scss">
// #home{
//   overflow-x: hidden;
// }
</style>