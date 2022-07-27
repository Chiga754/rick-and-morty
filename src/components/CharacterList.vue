<template>
  <div class="character-list">
    <card/>
  </div>
</template>

<script>
import Card from './UI/Card.vue'
export default {
  components: {
    Card,
  }
}
</script>

<style>
.character-list {
  padding: 20px;
}
</style>