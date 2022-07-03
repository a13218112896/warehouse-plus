import { createApp } from 'vue'
createApp(App).mount('#app')
import App from './App.vue'
import router from './router/index.js'
createApp(App).use(router).mount('#app')