// /store/user.js
import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router"; // Import the router

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async signIn(email, password) {
      let loginInformation = { emailAddress: email, password: password };
      axios
        .post("/login", loginInformation)
        .then((response) => {
          this.user = response.data;
          router.push("/restricted");
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    },
    async signUp(fullName, email, password) {
      let registerInformation = {
        fullName: fullName,
        emailAddress: email,
        password: password,
      };
      axios
        .post("/register", registerInformation)
        .then((response) => {
          this.user = response;
          router.push("/restricted");
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    },
    logout() {
        this.user = null;
    }
  },
});
