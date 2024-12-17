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
      <button class="btn btn-sm btn-primary" >More Info</button>
    </td>
  </tr>
</template>

<style scoped>
</style>
