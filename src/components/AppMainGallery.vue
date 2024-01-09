<script>
import axios from 'axios';
// Importo lo Store! 
import { store } from '../store';
export default {
    name: "AppMainGallery",
    data() {
        return {
            store,
        }
    },
    props: {
        cardImg: String,
        nameCard: String,
        archetipo: String,
    },
}

</script>

<template>
    <div class="card">
        <img :src="cardImg" alt="none">
        <div class="title"> {{ nameCard }} </div>
        <div class="type"> {{ archetipo }} </div>
    </div>
</template>

<style lang="scss">
.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: white;
    width: 80%;
    margin: auto;
    margin-top: 100px;
    padding: 40px;

    .card {
        width: calc(100% / 5 - 10px);
        background-color: rgb(151, 151, 24);
        margin-bottom: 20px;
    }

    img {
        width: 100%;
    }

    .title,
    .type {
        text-align: center;
        padding: 10px;
    }

    .title {
        color: white;
        font-weight: 600;
        font-size: 25px;
    }

    .type {
        color: black;
        font-style: italic;
    }
}
</style>