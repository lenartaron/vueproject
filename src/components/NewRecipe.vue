<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['add-recipe']);

const newRecipe = ref({
  name: '',
  cookTime: 0,
  difficulty: '',
  img: '',
});

const handleFileInput = (event) => {
  const file = event.target.files[0];
  newRecipe.value.img = URL.createObjectURL(file);
};

const submitRecipe = () => {
  if (newRecipe.value.name && newRecipe.value.cookTime && newRecipe.value.difficulty && newRecipe.value.img) {
    emit('add-recipe', newRecipe.value);
    newRecipe.value = { name: '', cookTime: 0, difficulty: '', img: '' };
    alert('Sikeresen feltöltötted ezt a receptet');
  } else {
    alert('Töltsed ki az összes mezőt!');
  }
};
</script>
newRecipe.cookTime
<template>
  <form @submit.prevent="submitRecipe">
    <input type="file" @change="handleFileInput" />
    <input v-model="newRecipe.name" type="text" placeholder="Recept neve" />
    <input v-model="newRecipe.cookTime" type="number" placeholder="Főzési idő (percekben)" />
    <select v-model="newRecipe.difficulty">
      <option value="">Minden nehézség</option>
      <option value="könnyű">Könnyű</option>
      <option value="közepes">Közepes</option>
      <option value="nehéz">Nehéz</option>
    </select>
    <button type="submit">Add Recipe</button>
  </form>
</template>

<style scoped>

</style>
