<script>
import axios from 'axios';
// Importo lo Store! 
import { store } from '../store';
export default {
    name: "AppMainGallery",
}

</script>

<template>
    <div class="card" v-for="(singleCard, id) in store.data.galleryCard[id]" :key="id">
        <img src="" alt="">
        <div class="title"> Descrizione</div>
        <div class="type"> Tipo di carta </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc(100% / 5 - 10px);
}
</style>