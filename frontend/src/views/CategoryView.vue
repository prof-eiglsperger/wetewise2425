<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const name = ref();
const description = ref();
const location = ref();
onMounted(() => {
  axios
    .get('/category/'+route.params.id)
    .then((response) => {
      const category = response.data
      name.value = category.name;
      description.value = category.description;
      location.value = category.location.name;
    })
})
function destroy() {
  axios
    .delete('/category/'+route.params.id)
    .then((response) => {
      router.push("/")
    })
}
</script>

<template>
  <div>
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      <p>Location: {{ location }}</p>
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
