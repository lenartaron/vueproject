<script setup>
import { defineProps } from 'vue';

defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="col-md-4 mb-4">
    <div class="card h-100">
      <img :src="recipe.img" alt="Image of {{ recipe.name }}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ recipe.name }}</h5>
        <p class="card-text">Elkészítési idő: {{ recipe.cookTime }} perc</p>
        <span
          class="badge"
          :class="{
            'bg-success': recipe.difficulty === 'könnyű',
            'bg-warning': recipe.difficulty === 'közepes',
            'bg-danger': recipe.difficulty === 'nehéz',
          }"
        >
          {{ recipe.difficulty }}
        </span>
        <button class="btn btn-primary mt-2">Részletek</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card {
  border: 1px solid #ddd;
  border-radius: 10px;
}

.badge {
  font-size: 14px;
  padding: 5px 10px;
}
</style>
