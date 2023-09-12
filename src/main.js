import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'
import AppLoader from './components/AppLoader.vue';
import { router } from './router';

//inizializza un'app vue
const app =createApp(App);
//registra un componente globale
app.component('AppLoader', AppLoader);
// usa router
app.use(router);

//monta l'app
app.mount('#app')
