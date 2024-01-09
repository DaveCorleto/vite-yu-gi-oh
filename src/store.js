import { reactive } from 'vue'

export const store = reactive({
    galleryCard: [],
    // console.log(store.galleryCard);
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    num: 30, // Numero di elementi per pagina
    offset: 0, // Indice di partenza
    searchText: ""

});