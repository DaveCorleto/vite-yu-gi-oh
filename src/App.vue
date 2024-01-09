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
          console.log(res.data.data);
          store.galleryCard = res.data.data;
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
  <div class="row">

    <!-- Itero le card dal componente padre per farle Apparire tramite Props nel componente AppMainGallery  -->

    <AppMainGallery v-for="(singleCard, i) in store.galleryCard" :key="i" :archetipo="singleCard.archetype"
      :singleCard.name="nameCard" :cardImg="singleCard.card_images[0].image_url" />

  </div>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials' as*;
</style>
