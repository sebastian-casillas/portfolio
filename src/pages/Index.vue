<template>
  <div id="home">
    <q-scroll-area style="height: 100vh; max-width: 100vw;">
      <div class="row justify-center q-py-xl">
        <contact-card/>
      </div>

      <div class="row justify-center" style="width: 100%;">
        <q-tabs>
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

          <q-btn name="tab5" label="CV" 
            color="primary"
            unelevated   
            size="small"
            round
            class="q-mx-sm"
            to="/cv"
            />
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

export default {
  name: 'Home',
  components: {
    ContactCard: ContactCard
  }
}

</script>

<style lang="scss">
// #home{
//   overflow-x: hidden;
// }
</style>