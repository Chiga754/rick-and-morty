<template>
  <header-section />
  <character-list />
</template>

<script>
import CharacterList from './components/CharacterList.vue'
import HeaderSection from './components/HeaderSection.vue'
export default {
  components: {
    HeaderSection,
    CharacterList,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: #999999;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
