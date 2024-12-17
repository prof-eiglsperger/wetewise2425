<script setup>
import { useBookingStore } from '@/stores/reservation';
import { storeToRefs } from "pinia";


// Access the booking store
const bookingStore = useBookingStore();

// Destructure state and actions from the store
const { resNr } = storeToRefs(bookingStore);
</script>
<template>
    <main class="container">
        <h1 class="text-center mb-4">Vielen Dank für die Reservation</h1>
        Ihre Reservationsnummer lautet {{ resNr }}
    </main>
</template>