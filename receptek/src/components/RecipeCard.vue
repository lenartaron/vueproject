<script setup>
import { recipies } from '../data/dummyData';


const getImageURL = (imageURL) => {
  return new URL(imageURL, import.meta.url).href;
};



</script>
<template>
  <div class="card h-100">
    <img :src="getImageURL(product.img)"><br>
    <h2>{{ recipies.name }}</h2><br>
    <p>Elkészítési idő: {{ recipies.cookTime }} perc</p>
    <div class="diff">
      <p>{{ recipies.difficulty }}</p>
    </div>
    <button type="button">Részletek</button>

  </div>



</template>
<style scoped>





</style>
