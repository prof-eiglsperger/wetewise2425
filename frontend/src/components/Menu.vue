<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from "../stores/user";
import { onMounted } from 'vue';
const userStore = useUserStore();
onMounted(() => userStore.fetchUser());
</script>

<template>
  <header class="navbar navbar-expand-sm  flex-column flex-md-row justify-content-between" purpose="page-header">
    <a v-if="userStore.user == null || !userStore.user.isSuperAdmin" style="cursor: pointer;" class="navbar-brand mr-0" href="/"><img style="height: 40px;" class="logo"
        alt="NEW_APP_NAME logo" src="/images/logo.png" /></a>
    <RouterLink v-if="userStore.user != null && userStore.user.isSuperAdmin" style="cursor: pointer;" class="navbar-brand mr-0" to="/admin"><img style="height: 40px;" class="logo"
      alt="NEW_APP_NAME logo" src="/images/logo.png" /></RouterLink>
    <div v-if="userStore.user == null" class="navbar-nav flex-row">
      <RouterLink class="btn btn-outline-primary nav-link ml-2 ml-md-0 mr-2" to="/login">Login</RouterLink>
      <RouterLink class="btn  btn-outline-primary" to="/signup">Sign up</RouterLink>
    </div>
    <div v-if="userStore.user != null && !userStore.user.isSuperAdmin" class="navbar-nav flex-row">
       {{ userStore.user.fullName }} 
       <a class="btn btn-outline-primary nav-link ml-2 ml-md-0 mr-2" @click="userStore.logout()">Logout</a>
    </div>
    <div v-if="userStore.user != null && userStore.user.isSuperAdmin" class="navbar-nav flex-row">
       <RouterLink  class="btn btn-outline-primary nav-link ml-2 ml-md-0 mr-2" to="/categories">Categories</RouterLink>
       <RouterLink  class="btn btn-outline-primary nav-link ml-2 ml-md-0 mr-2" to="/location">Locations</RouterLink>
       <a class="btn btn-outline-primary nav-link ml-2 ml-md-0 mr-2" @click="userStore.logout()">Logout</a>
    </div>
  </header>
</template>
<style scoped></style>
