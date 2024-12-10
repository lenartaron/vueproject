<script setup>
import { ref, computed } from 'vue';
import RecipieCard from './components/RecipeCard.vue';
import NewRecipe from './components/NewRecipe.vue';
import { recipies as dummyRecipies } from './data/dummyData';

const localRecipes = ref([]);
const searchQuery = ref('');
const difficultyFilter = ref('');
const sortOption = ref('cookTime');
const currentView = ref('recipes');

const addNewRecipe = (newRecipe) => {
  localRecipes.value.push({
    id: dummyRecipies.length + localRecipes.value.length + 1,
    ...newRecipe,
  });
};

const filteredRecipies = computed(() => {
  const allRecipes = [...dummyRecipies, ...localRecipes.value];

  let filtered = allRecipes.filter((recipie) =>
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

const switchView = (view) => {
  currentView.value = view;
};
</script>

<template>
  <ul>
    <li><a href="#" @click.prevent="switchView('recipes')">Receptköny</a></li>
    <li><a href="#" @click.prevent="switchView('recipes')">Receptek</a></li>
    <li><a href="#" @click.prevent="switchView('new')">Új receptek</a></li>
    <li><a href="#">Kedvencek</a></li>
  </ul>
  <div v-if="currentView === 'recipes'">
    <RecipieCard :recipies="filteredRecipies" />
  </div>
  <div v-if="currentView === 'new'">
    <NewRecipe @add-recipe="addNewRecipe" />
  </div>
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
  cursor: pointer;
}

li a:hover {
  background-color: #ddd;
}
</style>
