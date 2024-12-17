<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const name = ref();
const description = ref();
const location = ref();
onMounted(() => {
  axios
    .get('/category/' + route.params.id)
    .then((response) => {
      const category = response.data
      name.value = category.name;
      description.value = category.description;
      location.value = category.location.name;
    })
})
function destroy() {
  axios
    .delete('/category/' + route.params.id)
    .then((response) => {
      router.push("/")
    })
}
</script>

<template>
  <main class="container">
    <div class="list">
      <h2>{{ name }}</h2>
      <h5>Description</h5>
      <p>{{ description }}</p>
      <h5>Location</h5>
       <p>
         {{ location }}
       </p>
      <button class="btn btn-primary" @click="destroy">Delete</button>
    </div>
  </main>
</template>

<style scoped>
.list {
  margin: 20px 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  /** background-color: #f9f9f9; */
}
</style>
