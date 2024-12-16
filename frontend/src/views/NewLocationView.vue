<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios'
const newLocation = ref({
  name: "",
  description: "",
});
let locations = ref([]);
onMounted(() => {
  axios
    .get('/location')
    .then((response) => {
      locations.value = response.data
    })
})

// State to show success message
const locationAdded = ref(false);

// Function to handle form submission
const submitForm = () => {
  axios.post('/location', newLocation.value)
    .then((response) => {
      console.log("New Locatin Added:", newLocation.value);

      // Reset the form
      newLocation.value = {
        name: "",
        description: "",
      };

      // Show success message
      locationAdded.value = true;

      // Hide the success message after 3 seconds
      setTimeout(() => {
        locationAdded.value = false;
      }, 3000);
    })
};
</script>
<template>
  <div class="location-form">
    <h2>Add New Location</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Location Name:</label>
        <input type="text" id="name" v-model="newLocation.name" placeholder="Enter location name" required />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="newLocation.description" placeholder="Enter location description" rows="4"
          required></textarea>
      </div>
      <button class="btn btn-primary" type="submit">Add Location</button>
    </form>
    <div v-if="locationAdded" class="success-message">
      <p>Location added successfully!</p>
    </div>
  </div>
</template>

<style scoped>
.location-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  /** background-color: #f9f9f9; */
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

.success-message {
  margin-top: 15px;
  padding: 10px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  color: #155724;
}
</style>