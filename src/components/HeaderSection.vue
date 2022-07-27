<template>
    <header class="header">
        <h1>Сharacters from Rick and Morty</h1>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    background: #000000;
    color: #ffffff;
    height: 200px;
    display: flex;
    align-items: center;
    background-image: url(@/assets/bg-header.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
}
h1{
    font-size: 50px;
}
</style>