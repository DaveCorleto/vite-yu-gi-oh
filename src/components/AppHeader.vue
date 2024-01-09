<script>
export default {
    name: "AppHeader",

}



</script>

<template>
    <header>
        <div class="logo">
            <img src="../../src/img/yugioh.png" alt="yu-gi-oh logo">
        </div>
        <h1>YU-GI-OH API</h1>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: white;
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    margin-bottom: 100px;
    padding-left: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.logo {
    width: 50px;
    padding-right: 25px;

    img {
        width: 100%;
    }
}
</style>
