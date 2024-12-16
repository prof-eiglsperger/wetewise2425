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
  <div class="list">
    <h1>Camping Locations</h1>
    <LocationEntry v-for="location in locations" :name="location.name" :id="location.id" />
  </div>
</template>

<style scoped>
.list {
  padding: 0.5rem;
}
</style>
