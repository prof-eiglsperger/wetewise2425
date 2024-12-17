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
  <div>
    <h1>Camping Categories</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <CategoryEntry v-for="category in categories" :name="category.name" :description="category.description" :id="category.id" />
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>
