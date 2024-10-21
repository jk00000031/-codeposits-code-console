import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersistedState from 'pinia-plugin-persistedstate'
import { Icon } from '@iconify/vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia().use(piniaPersistedState))
app.use(router)
app.component('Icon', Icon)

app.mount('#app')
