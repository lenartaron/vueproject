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
  <div>
    <input v-model="searchQuery" type="text" placeholder="Keresés receptek között..." />
    <br />
    <select v-model="difficultyFilter">
      <option value="">Minden nehézség</option>
      <option value="könnyű">Könnyű</option>
      <option value="közepes">Közepes</option>
      <option value="nehéz">Nehéz</option>
    </select>
    <br />
    <select v-model="sortOption">
      <option value="cookTime">Elkészítési idő</option>
      <option value="name">Név</option>
    </select>
    <br />
    <RecipieCard :recipies="filteredRecipies" />
  </div>
</template>

<style scoped>
</style>
