<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['add-recipe']);

const newRecipe = ref({
  name: '',
  cookTime: 0,
  difficulty: '',
  img: '',
});

const message = ref('');

const handleFileInput = (event) => {
  const file = event.target.files[0];
  newRecipe.value.img = URL.createObjectURL(file);
};

const submitRecipe = () => {
  if (newRecipe.value.name && newRecipe.value.cookTime && newRecipe.value.difficulty && newRecipe.value.img) {
    emit('add-recipe', newRecipe.value);
    newRecipe.value = { name: '', cookTime: 0, difficulty: '', img: '' };
    message.value = 'Sikeresen feltöltötted ezt a receptet';
  } else {
    message.value = 'Töltsd ki az összes mezőt!';
  }
};

const goToHomePage = () => {
  window.location.href = '/';
};
</script>

<template>
  <form @submit.prevent="submitRecipe" class="container mt-4 text-center">
    <div class="mb-3">
      <label for="recipeFile" class="form-label">Fájl feltöltése</label>
      <input id="recipeFile" type="file" @change="handleFileInput" class="form-control w-50" />
    </div>

    <div class="mb-3">
      <label for="recipeName" class="form-label">Recept neve</label>
      <input id="recipeName" v-model="newRecipe.name" type="text" placeholder="Recept neve" class="form-control w-50" />
    </div>

    <div class="mb-3">
      <label for="cookTime" class="form-label">Főzési idő (percekben)</label>
      <input id="cookTime" v-model="newRecipe.cookTime" type="number" placeholder="Főzési idő (percekben)" class="form-control w-50" />
    </div>

    <div class="mb-3">
      <label for="difficulty" class="form-label">Nehézség</label>
      <select id="difficulty" v-model="newRecipe.difficulty" class="form-select w-50">
        <option value="">Minden nehézség</option>
        <option value="könnyű">Könnyű</option>
        <option value="közepes">Közepes</option>
        <option value="nehéz">Nehéz</option>
      </select>
    </div>

    <div class="d-flex justify-content-center gap-3">
      <button type="submit" class="btn btn-primary">Add Recipe</button>
      <button type="button" class="btn btn-secondary" @click="goToHomePage">Vissza a főoldalra</button>
    </div>
  </form>

  <div v-if="message" class="mt-3 alert" :class="message.includes('Sikeresen') ? 'alert-success' : 'alert-danger'">
    {{ message }}
  </div>
</template>

<style scoped>
.alert {
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
  text-align: center;
}

.alert-success {
  color: green;
  background-color: #d4edda;
}

.alert-danger {
  color: red;
  background-color: #f8d7da;
}
</style>