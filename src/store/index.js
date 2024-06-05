import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { useDataStore } from '@/store/Data'

export default store(function () {
  const Store = createPinia({
    modules: {
      useDataStore
    },
    strict: process.env.DEBUGGING
  })

  return Store
})
