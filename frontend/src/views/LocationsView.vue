<script setup>
import LocationList from '@/components/LocationList.vue';
</script>

<template>
  <main class="container">
    <div class="list">
      <LocationList />
      <RouterLink to="newLocation"><button class="mt-4 btn btn-primary" type="submit">New Location</button></RouterLink>
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