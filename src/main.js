import { createApp } from 'vue'
import App from './App.vue'
import ResourceCard from './components/UI/ResourceCard.vue'
import ResourceButton from "./components/UI/ResourceButton.vue";


createApp(App)
    .component('resource-card', ResourceCard)
    .component('resource-button', ResourceButton)
    .mount('#app')
