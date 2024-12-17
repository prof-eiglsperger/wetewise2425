<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
})
function showDetails() {
  router.push({ name: 'category', params: { "id": props.id } })
}
</script>

<template>
  <tr>
    <th scope="th">
      {{ id  }}
    </th>
    <td>
      {{ name }}
    </td>
    <td>
      <button class="btn btn-sm btn-primary" @click="showDetails">More Info</button>
    </td>
  </tr>
</template>

<style scoped>
</style>
