  <script setup>
  import { ref } from 'vue'
  import { useUserStore } from "../stores/user";
  const userStore = useUserStore();
  let fullName =ref("");
  let email = ref("");
  let password =ref("");
  async function register() {
        userStore.signUp(fullName.value, email.value, password.value);
        if (useUserStore.user) {
          console.log("Logged in")
        }
  }
</script>
<template>
  <form @submit.prevent="register">
    <div>
      <label>Full name: </label>
      <input v-model="fullName" />
    </div>
    <div>
      <label>Email: </label>
      <input type="email" v-model="email" />
    </div>
    <div>
      <label>Password: </label>
      <input type="password" v-model="password" />
    </div>
    <button type="submit">SignUp</button>
  </form>
</template>
<style>
  form {
    margin-top:2rem;
  }
</style>