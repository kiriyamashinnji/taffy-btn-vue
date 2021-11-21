import { createApp } from 'vue'
import App from './App.vue'
import Player from './utils/player.js'

const app = createApp(App)
app.mount('#app')

const player = new Player()
app.config.globalProperties.$player = player