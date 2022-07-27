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
    box-shadow: 0 0 30px #000000;
    margin: 0 20px 20px;
}
h1{
    font-size: 50px;
    margin-left: 10px;
}
</style>