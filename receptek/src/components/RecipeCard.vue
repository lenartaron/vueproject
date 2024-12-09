<script setup>

const getImageURL = (imageURL) => {
  return new URL(imageURL, import.meta.url).href;
};



</script>
<template>
<div class="card h-100">
    <img :src="getImageURL(product.img)" alt="">
</div>



</template>
<style scoped>





</style>
