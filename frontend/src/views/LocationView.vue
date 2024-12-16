<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const name = ref();
const description = ref();
onMounted(() => {
  axios
    .get('/location/'+route.params.id)
    .then((response) => {
      const location = response.data
      name.value = location.name;
      description.value = location.description;
    })
})
function destroy() {
  axios
    .delete('/location/'+route.params.id)
    .then((response) => {
      router.push("/")
    })
}
</script>

<template>
  <div>
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
    </div>
   <button @click="destroy">Delete</button>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
