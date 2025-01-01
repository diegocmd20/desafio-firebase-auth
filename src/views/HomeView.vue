<script setup>
import { auth } from "@/firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const logout = async () => {
  try {
    await signOut(auth);
    router.push("/login");
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message);
    alert("Error al cerrar sesión. Intenta de nuevo.");
  }
};
</script>

<template>
  <div>
    <h1>Bienvenido a HomeView</h1>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>
