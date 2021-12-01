import { boot } from 'quasar/wrappers';
import Markdown from 'vue3-markdown-it';


export default boot(({ app }) => {
    app.use(Markdown)
});
