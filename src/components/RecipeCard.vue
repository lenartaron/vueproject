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
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card h-100">
        <img :src="recipe.img"  alt="Image of {{ recipe.name }}" class="col-md-4" />
          <h5 class="card-img-top">{{ recipe.name }}</h5>
          <p class="card-text">Elkészítési idő: {{ recipe.cookTime }} perc</p>
          <div class="diff">
            <p>{{ recipe.difficulty }}</p>
          </div>
          <button type="button" class="btn btn-primary">Részletek</button>
        </div>
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
