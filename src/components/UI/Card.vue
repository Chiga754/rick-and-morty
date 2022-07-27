<template>
  <div class="card">
    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
    <h3>Rick Sanchez</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.card {
    width: 300px;
    padding: 10px;
    background: #f3f3f3;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all .5s;
}
.card:hover{
    box-shadow: 0 0 15px #000000;
}
.card img{
    width: 100%;
    box-shadow: 0 0 3px #000000;
    border-radius: 15px;
}
h3{
    margin: 10px 0;
}
p {
    margin-bottom: 20px;
}
.card-btn{
    border: none;
    max-width: 100px;
    height: 30px;
    border-radius: 15px;
    color: #ffffff;
    cursor: pointer;
    background: rgb(16,36,0);
    background: -moz-linear-gradient(90deg, rgba(16,36,0,1) 0%, rgba(0,39,115,1) 0%, rgba(0,212,255,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(16,36,0,1) 0%, rgba(0,39,115,1) 0%, rgba(0,212,255,1) 100%);
    background: linear-gradient(90deg, rgba(16,36,0,1) 0%, rgba(0,39,115,1) 0%, rgba(0,212,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#102400",endColorstr="#00d4ff",GradientType=1);
    transition: all .5s;
}
.card-btn:hover {
    box-shadow: 0 0 5px #000000;
}
</style>