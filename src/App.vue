<script>
import AppHeader from './components/AppHeader.vue';
import AppMainGallery from './components/AppMainGallery.vue';
import Loader from './components/Loader.vue';
import axios from 'axios';
// Importo lo Store!  
import { store } from './store';

export default {
  name: "App",
  components: {
    AppHeader,
    AppMainGallery,
    Loader
  },
  data() {
    return {
      store,
    }
  },
  methods: {

    getCallApi() {
      axios
        // Uso i parametri num e offset per snellire la risposta dell'api 
        .get(`${store.apiUrl}?num=${store.num}&offset=${store.offset}`)
        .then((res => {
          console.log(res.data);
          store.galleryCard = res.data;
        }))
        .catch((err) => {
          console.log("Errori", err);
        }
        );
    }
  },
  created() {
    this.getCallApi();
  }

};


</script>

<template>
  <AppHeader />
  <Loader />
  <AppMainGallery />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials' as*;
</style>
