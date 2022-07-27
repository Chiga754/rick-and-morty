<template>
  <div class="character-list">
    <card 
      v-for="character in characters"
      :key="character.id"
      :name="character.name"
      :image="character.image"
    />
  </div>
</template>

<script>
import { useCharacters } from '@/hooks/useCaracters'
import Card from './UI/Card.vue'
export default {
  components: {
    Card,
  },
  setup() {
    const {characters} = useCharacters();
    return {characters};
  }
}
</script>

<style>
.character-list {
  width: 80%;
  margin: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>