<script setup>
import LocationList from '@/components/LocationList.vue';
</script>

<template>
  <main>
    <LocationList />
    <RouterLink to="newLocation"><button class="btn btn-primary" type="submit">New Location</button></RouterLink>
  </main>
</template>
<style scoped>
main {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  /** background-color: #f9f9f9; */
}
</style>