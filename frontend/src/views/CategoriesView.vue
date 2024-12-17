<script setup>
import CategoryList from '@/components/CategoryList.vue';
</script>

<template>
  <main class="container">
    <div class="list">
      <CategoryList />
      <RouterLink  to="new"><button class="btn btn-primary" type="submit">New Pitch</button></RouterLink>
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