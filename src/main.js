import { createApp } from 'vue';
import App from './App.vue';
import AppHeader from './components/AppHeader.vue';
import AppMainGallery from './component/AppMainGallery.vue';
import Loader from './component/Loader.vue';


const app = createApp(App);

app.component('AppHeader', AppHeader);
app.component('AppMainGallery', AppMainGallery);
app.component('Loader', Loader);

