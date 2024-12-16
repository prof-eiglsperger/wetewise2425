<script setup>
import CategoryEntry from "./CategoryEntry.vue"
import { ref, onMounted } from 'vue'
import axios from 'axios'

const categories = ref()
onMounted(() => {
  axios
    .get('/category')
    .then((response) => {
      categories.value = response.data
    })
})
</script>
<template>
  <div class="list">
    <h1>Camping Categories</h1>
    <CategoryEntry v-for="category in categories" :name="category.name" :description="category.description" :id="category.id" />
  </div>
</template>

<style scoped>
.list {
  padding: 0.5rem;
}
</style>
