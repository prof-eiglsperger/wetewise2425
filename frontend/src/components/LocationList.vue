<script setup>
import LocationEntry from "./LocationEntry.vue"
import { ref, onMounted } from 'vue'
import axios from 'axios'

const locations = ref()
onMounted(() => {
  axios
    .get('/location')
    .then((response) => {
      locations.value = response.data
    })
})
</script>
<template>
  <div>
    <h1>Camping Locations</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <LocationEntry v-for="location in locations" :name="location.name" :id="location.id" />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
