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
    customer,
    quote,
    book
} = storeToRefs(bookingStore);
</script>
<template>
    <main class="container">
        <div>
            <h1 class="text-center mb-4">Bitte bestätigen Sie die Reservation</h1>
            <div class="confirmation-details">
                <p><strong>Anzahl der Erwachsenen:</strong> {{ numAdults }}</p>
                <p><strong>Anzahl der Kinder:</strong> {{ numChildren }}</p>
                <div v-if="numChildren > 0">
                    <h4>Alter der Kinder:</h4>
                    <ul>
                        <li v-for="(age, index) in childAges" :key="index">Kind {{ index + 1 }}: {{ age }} Jahre</li>
                    </ul>
                </div>
                <p><strong>Anreisedatum:</strong> {{ startDate }}</p>
                <p><strong>Abreisedatum:</strong> {{ endDate }}</p>
                <h4>Kundendaten:</h4>
                <p><strong>Vorname:</strong> {{ customer.firstName }}</p>
                <p><strong>Nachname:</strong> {{ customer.lastName }}</p>
                <p><strong>E-Mail:</strong> {{ customer.email }}</p>
                <p><strong>Straße:</strong> {{ customer.address.street }}</p>
                <p><strong>Stadt:</strong> {{ customer.address.city }}</p>
                <p><strong>Postleitzahl:</strong> {{ customer.address.postalCode }}</p>
                <p><strong>Land:</strong> {{ customer.address.country }}</p>
            </div>
            <div>
                <h5><strong>Preis:</strong> {{ quote.amount }} {{ quote.currency }}</h5>
            </div>
        </div>
        <div @click="bookingStore.book()" class="btn btn-primary btn-lg btn-block">Kostenpflichtig buchen</div>
        <RouterLink class="btn btn-secondary btn-lg btn-block" to="/address">Zurück</RouterLink>
    </main>
</template>