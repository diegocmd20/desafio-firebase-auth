<template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="signUp">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import { createUserWithEmailAndPassword, auth } from "@/auth";
  
  export default {
    name: "SignUpView",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async signUp() {
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push("/home");
        } catch (error) {
          console.error("Error al registrarse:", error.message);
          alert("Error al registrarse. Intenta de nuevo.");
        }
      },
    },
  };
  </script>
  
  <style scoped></style>
  