import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { IonicVue } from '@ionic/vue';

import {
    createHuntersofbookEssential,
    loadDateFNSLocale
} from '@huntersofbook/core'

const locale = await loadDateFNSLocale({
    locale: 'tr-TR',
    storageKey: 'locale'
})


/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import {router} from './router';


const app = createApp(App).use(IonicVue)
app.use(router)

app.mount('#app')
