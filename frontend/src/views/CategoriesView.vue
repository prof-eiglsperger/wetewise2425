<script setup>
import CategoryList from '@/components/CategoryList.vue';
</script>

<template>
  <main>
    <CategoryList />
    <RouterLink  to="new"><button class="btn btn-primary" type="submit">New Pitch</button></RouterLink>
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