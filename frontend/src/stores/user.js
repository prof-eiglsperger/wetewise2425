// /store/user.js
import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router"; // Import the router

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      if (this.user == null) {
        const response = await axios.get("/sessionUser")
        const user = response.data;
        this.user = user;
        return user;
      }
    },

    async signIn(email, password) {
      let loginInformation = { emailAddress: email, password: password };
      axios
        .post("/login", loginInformation)
        .then((response) => {
          this.user = response.data;
          if (this.user.isSuperAdmin) {
            router.push("/admin");
          } else {
            router.push("/restricted");
          }
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
    async logout() {
        const response = await axios.get("/logout")
        this.user = null;
    }
  },
});
