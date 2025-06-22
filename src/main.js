import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import ui from '@nuxt/ui/vue-plugin'
import router from './configs/router'
import i18n from './configs/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ui)

app.mount('#app')
