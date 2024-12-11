<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
let secret = ref("");
function getSecret() {
  axios.get('/restricted/').then((response) => {
      secret.value = response.data.message;
    })
};
</script>

<template>
  <main>
    <h1>Restricted Area</h1>
    <p>
      for {{ userStore.user.fullName }} ( {{ userStore.user.emailAddress }} )
    </p>
    This is a restriced e.g. for registered customeres or admins
    <h2 @click="getSecret">Click here to see Protected Message: {{ secret }}</h2>
  </main>
</template>
