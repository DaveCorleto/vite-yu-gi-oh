<script>
import { store } from '../store';
export default {
    name: "AppSearch",
    data() {
        return {
            store,
            searchtext: '',
        }
    }
}



</script>

<template>
    <div class="container">
        <div class="search">
            <input type="text" placeholder="search by archetype" v-model.trim="store.searchText" id="search-by-archetype">
            <button>SEARCH</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin-top: 100px;

    .search {
        display: flex;
        justify-content: center;
        align-items: center;

        #search-by-archetype {
            margin-right: 25px;
        }

        #search-by-archetype,
        button {
            height: 30px;
        }

        button {
            background-color: blue;
            color: white;
            border-radius: 5px;
        }
    }
}
</style>