import { createApp } from 'vue'
import App from './App.vue'
import ResourceCard from './components/UI/ResourceCard.vue'

createApp(App)
    .component('resource-card', ResourceCard)
    .mount('#app')
