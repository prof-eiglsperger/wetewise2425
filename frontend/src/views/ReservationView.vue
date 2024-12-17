<script setup>
import { useBookingStore } from '@/stores/reservation';
import { storeToRefs } from "pinia";


// Access the booking store
const bookingStore = useBookingStore();

// Destructure state and actions from the store
const {
  numAdults,
  numChildren,
  childAges,
  startDate,
  endDate,
  quote,
  state,
  generateChildAges,
  getQuote
} = storeToRefs(bookingStore);
</script>
<template>
    <main class="container">
        <div v-if="state == 0">
            <h1 class="text-center mb-4">Angebot für Ihre Buchung einholen</h1>
            <form @submit.prevent="bookingStore.getQuote()" class="needs-validation" novalidate>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="numAdults">Anzahl der Erwachsenen</label>
                        <input type="number" v-model="numAdults" id="numAdults" class="form-control" required min="1">
                    </div>

                    <div class="form-group col-md-6">
                        <label for="numChildren">Anzahl der Kinder</label>
                        <input type="number" v-model="numChildren" id="numChildren" class="form-control"
                            @change="generateChildAges" required min="0">
                    </div>
                </div>

                <div v-if="numChildren > 0" class="form-group">
                    <h4>Alter der Kinder</h4>
                    <div class="form-row">
                        <div v-for="(age, index) in childAges" :key="index" class="form-group col-md-3">
                            <label :for="'childAge' + index">Kind {{ index + 1 }} Alter</label>
                            <input type="number" v-model="childAges[index]" :id="'childAge' + index"
                                class="form-control" required min="0">
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="startDate">Anreisedatum</label>
                        <input type="date" v-model="startDate" id="startDate" class="form-control" required>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="endDate">Abreisedatum</label>
                        <input type="date" v-model="endDate" id="endDate" class="form-control" required>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary btn-lg btn-block">Angebot einholen</button>
            </form>

            <div v-if="quote" class="mt-4 alert alert-success">
                <h4 class="alert-heading">Ihr Angebot</h4>
                <p><strong>Betrag:</strong> {{ quote.amount }} {{ quote.currency }}</p>
                <RouterLink class="btn btn-primary btn-lg btn-block" to="/address">Buchen</RouterLink>
            </div>
        </div>
    </main>
</template>