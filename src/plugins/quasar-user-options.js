
import '@/styles/quasar.scss'
import '@quasar/extras/roboto-font/roboto-font.css'

import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v6'

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: {},
  cssAddon: true,
  extras: [
    'material-icons',
    'mdi-v6'
  ],
  framework: {
    iconSet: 'mdi-v6'
  }

}