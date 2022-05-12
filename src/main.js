import { createApp } from 'vue'
import App from './App.vue'
import ResourceCard from './components/UI/ResourceCard.vue'
import ResourceButton from "./components/UI/ResourceButton.vue";
import ResourceModale from "./components/UI/ResourceModale.vue";


createApp(App)
    .component('resource-card', ResourceCard)
    .component('resource-button', ResourceButton)
    .component('resource-modale', ResourceModale)
    .mount('#app')
