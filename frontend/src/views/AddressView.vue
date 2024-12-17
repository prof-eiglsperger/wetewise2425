<script setup>
import { useBookingStore } from '@/stores/reservation';
import { storeToRefs } from "pinia";


// Access the booking store
const bookingStore = useBookingStore();

// Destructure state and actions from the store
const {
    customer
} = storeToRefs(bookingStore);
</script>
<template>
    <main class="container">
        <div>
            <h1 class="text-center mb-4">Ihre Daten</h1>
            <form>
                <div>
                    <label for="firstName">Vorname:</label>
                    <input type="text" id="firstName" v-model="customer.firstName" required/>
                </div>
                <div>
                    <label for="lastName">Nachname:</label>
                    <input type="text" id="lastName" v-model="customer.lastName" required/>
                </div>
                <div>
                    <label for="email">E-Mail:</label>
                    <input type="email" id="email" v-model="customer.email" required/>
                </div>
                <div>
                    <label for="street">Straße:</label>
                    <input type="text" id="street" v-model="customer.address.street" required/>
                </div>
                <div>
                    <label for="city">Stadt:</label>
                    <input type="text" id="city" v-model="customer.address.city" required/>
                </div>
                <div>
                    <label for="postalCode">Postleitzahl:</label>
                    <input type="text" id="postalCode" v-model="customer.address.postalCode" required/>
                </div>
                <div>
                    <label for="country">Land:</label>
                    <input type="text" id="country" v-model="customer.address.country" required/>
                </div>
            </form>
            <RouterLink  class="btn btn-primary btn-lg btn-block" to="/summary">Buchen</RouterLink>
            <RouterLink  class="btn btn-secondary btn-lg btn-block" to="/restricted">Zurück</RouterLink>
        </div>
    </main>
</template>