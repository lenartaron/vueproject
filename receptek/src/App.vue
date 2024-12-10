<script setup>
import HelloWorld from './components/RecipeCard.vue'
</script>

<template>
  <form action="navbar">
    <input type="text">
    <select id="difficult">
      <option value="all">Minden nehézség</option>
      <option value="easy">Könnyű</option>
      <option value="medium">Közepes</option>
      <option value="hard">Nehéz</option>
    </select>
    <select id="time">
      <option value="start">Elkészítési idő szerint</option>
      <option value="30">30 perc</option>
      <option value="45">45perc</option>
      <option value="60">60 perc</option>
      <option value="120">120 perc</option>
    </select>
  </form>
  <HelloWorld/>
</template>

<style scoped>

</style>
