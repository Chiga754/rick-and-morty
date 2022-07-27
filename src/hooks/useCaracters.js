import axios from "axios";
import { ref, onMounted } from 'vue';

export function useCharacters() {
    const characters = ref([]);
    const getCharacters = async function () {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            characters.value = response.data.results;
        } catch (error) {
            console.log(error);
        }
    };
    onMounted(getCharacters);

    return {characters}
}