import { boot } from 'quasar/wrappers';
import VueEasyLightbox from 'vue-easy-lightbox/external-css'
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

export default boot(({ app }) => {
    app.use(VueEasyLightbox)
});
