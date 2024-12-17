import { defineStore } from 'pinia';
import axios from 'axios';
import router from "@/router"; 

export const useBookingStore = defineStore('booking', {
  state: () => ({
    numAdults: 1,
    numChildren: 0,
    childAges: [],
    startDate: '',
    endDate: '',
    quote: null,
    error: null,
    state: 0,
    resNr: -1,
    customer: {
      firstName: '',
      lastName: '',
      email: '',
      address: {
        street: '',
        city: '',
        postalCode: '',
        country: ''
      }
    }
  }),

  actions: {
    generateChildAges() {
      this.childAges = Array.from({ length: this.numChildren }, () => 0);
    },

    async getQuote() {
      try {
        const payload = {
          paxList: {
            numAdults: this.numAdults,
            childAges: this.childAges
          },
          startDate: this.startDate,
          endDate: this.endDate
        };

        const response = await axios.post("/quote", payload);
        this.quote = response.data;
      } catch (err) {
        this.quote = null;
        console.error(err);
      }
    },

    async book() {
      try {
        const payload = {
          customer: this.customer,
          occupancy: {
            paxList: {
              numAdults: this.numAdults,
              childAges: this.childAges
            },
            startDate: this.startDate,
            endDate: this.endDate
          }
        };

        const response = await axios.post("/book", payload);
        this.resNr = response.data;
        router.push("/confirmation");
      } catch (err) {
        console.error(err);
      }
    }
  }
});