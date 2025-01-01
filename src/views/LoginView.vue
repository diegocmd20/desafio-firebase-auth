<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { signInWithEmailAndPassword, auth } from "@/auth";
  
  export default {
    name: "LoginView",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async login() {
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push("/home");
        } catch (error) {
          console.error("Error al iniciar sesión:", error.message);
          alert("Error al iniciar sesión. Verifica tus credenciales.");
        }
      },
    },
  };
  </script>
  
  <style scoped></style>
  