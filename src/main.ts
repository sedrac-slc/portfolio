import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import VueViewer from 'v-viewer'
import App from './App.vue'
import 'viewerjs/dist/viewer.css'
import './style.css'
import en from './i18n/en';
import pt from './i18n/pt';

const i18n = createI18n({
    locale: 'pt',
    fallbackLocale: 'en',
    messages: {
        en, pt
    }
})

createApp(App)
    .use(i18n)
    .use(VueViewer)
    .mount('#app')
