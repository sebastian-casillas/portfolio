import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { useDataStore } from '@/store/Data'

export default store(function (/* { ssrContext } */) {
  const Store = createPinia({
    modules: {
      useDataStore
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
