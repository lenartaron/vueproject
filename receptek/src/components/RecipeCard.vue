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
<div class="container">
  <div class="row">
    <div class="col-md-4" v-for="recipie in recipies" :key="recipie.id">
      <div class="card h-100">
        <img :src="recipie.img" alt="Image of {{ recipie.name }}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ recipie.name }}</h5>
          <p class="card-text">Elkészítési idő: {{ recipie.cookTime }} perc</p>
          <div class="diff">
            <p>{{ recipie.difficulty }}</p>
          </div>
          <button type="button" class="btn btn-primary">Részletek</button>
        </div>
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




</style>
