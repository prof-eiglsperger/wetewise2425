<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios'
const newPitch = ref({
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
const pitchAdded = ref(false);

// Function to handle form submission
const submitForm = () => {
  axios.post('/category', newPitch.value)
    .then((response) => {
      console.log("New Pitch Added:", newPitch.value);

      // Reset the form
      newPitch.value = {
        name: "",
        description: "",
      };

      // Show success message
      pitchAdded.value = true;

      // Hide the success message after 3 seconds
      setTimeout(() => {
        pitchAdded.value = false;
      }, 3000);
    })
};
</script>
<template>
  <div class="pitch-form">
    <h2>Add New Pitch</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="pitchName">Pitch Name:</label>
        <input type="text" id="pitchName" v-model="newPitch.name" placeholder="Enter pitch name" required />
      </div>
      <div class="form-group">
        <label for="pitchDescription">Description:</label>
        <textarea id="pitchDescription" v-model="newPitch.description" placeholder="Enter pitch description" rows="4"
          required></textarea>
      </div>
      <div class="form-group">
        <label for="pitchDescription">Location:</label>
        <select class="custom-select" name="location" v-model="newPitch.location">
          <option v-for="location in locations" :value="location.id">{{ location.name }}</option>
        </select>
      </div>
      <button class="btn btn-primary" type="submit">Add Pitch</button>
    </form>
    <div v-if="pitchAdded" class="success-message">
      <p>Pitch added successfully!</p>
    </div>
  </div>
</template>

<style scoped>
.pitch-form {
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