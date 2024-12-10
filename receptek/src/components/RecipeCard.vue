<script setup>
import { recipies } from '../data/dummyData';


const getImageURL = (imageURL) => {
  return new URL(imageURL, import.meta.url).href;
};



</script>
<template>
  <div class="card h-100" v-for="recipie in recipies">
    <img :src="recipie.img" alt="Image of {{ recipie.name }}"><br>
    <h2>{{ recipie.name }}</h2><br>
    <p>Elkészítési idő: {{ recipie.cookTime }} perc</p>
    <div class="diff">
      <p>{{ recipie.difficulty }}</p>
    </div>
    <button type="button">Részletek</button>

  </div>



</template>
<style scoped>





</style>
