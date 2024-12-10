<script setup>
import { ref, computed } from 'vue';
import RecipieCard from './components/RecipeCard.vue';
import { recipies as allRecipies } from './data/dummyData';

const searchQuery = ref('');
const difficultyFilter = ref('');
const sortOption = ref('cookTime');

const filteredRecipies = computed(() => {
  let filtered = allRecipies.filter((recipie) =>
    recipie.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  if (difficultyFilter.value) {
    filtered = filtered.filter((recipie) =>
      recipie.difficulty.toLowerCase() === difficultyFilter.value.toLowerCase()
    );
  }

  if (sortOption.value === 'cookTime') {
    filtered.sort((a, b) => a.cookTime - b.cookTime);
  } else if (sortOption.value === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  return filtered;
});
</script>

<template>
  <ul>
    <li><a href="#">Receptköny</a></li>
    <li><a href="#">Receptek</a></li>
    <li><a href="#">Új receptek</a></li>
    <li><a href="#">Kedvencek</a></li>
  </ul>
      
      <RecipieCard :recipies="filteredRecipies" />
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  padding: 8px;
}
</style>
