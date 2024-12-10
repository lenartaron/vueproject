<script setup>
import { defineProps } from 'vue';

defineProps({
  recipies: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="card h-100" v-for="recipie in recipies" :key="recipie.id">
      <img :src="recipie.img" alt="Image of {{ recipie.name }}" /><br />
      <h2>{{ recipie.name }}</h2><br />
      <p>Elkészítési idő: {{ recipie.cookTime }} perc</p>
      <div class="diff">
        <p>{{ recipie.difficulty }}</p>
      </div>
      <button type="button">Részletek</button>
    </div>
<<<<<<< Updated upstream
=======
    <button type="button">Részletek</button>
>>>>>>> Stashed changes
  </div>
</template>

<style scoped>
</style>
