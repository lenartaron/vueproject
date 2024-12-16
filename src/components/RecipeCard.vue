<script setup>
import { defineProps } from 'vue';

defineProps({
  recipe: { // Accepts a single recipe object instead of "recipies"
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <div class="card h-100">
      <img :src="recipe.img" alt="Image of {{ recipe.name }}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ recipe.name }}</h5>
        <p class="card-text">Elkészítési idő: {{ recipe.cookTime }} perc</p>
        <div class="diff">
          <p>{{ recipe.difficulty }}</p>
        </div>
        <button type="button" class="btn btn-primary">Részletek</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 200px;
  width: 300px;
}

.card {
  border: 1px solid #0000006b;
  border-radius: 10px;
}

.card:hover {
  box-shadow: 1px 1px 10px dimgray;
}
</style>
