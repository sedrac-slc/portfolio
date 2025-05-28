import { createApp } from 'vue'
import VueViewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import './style.css'
import App from './App.vue'

createApp(App).use(VueViewer).mount('#app')
