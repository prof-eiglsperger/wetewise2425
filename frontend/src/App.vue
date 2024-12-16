<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
import { useUserStore } from './stores/user';
const userStore = useUserStore();
</script>

<template>
  <Menu></Menu>
  <RouterView />
</template>

<style scoped>
</style>
