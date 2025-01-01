<template>
  <div id="app">
    <nav>
      <router-link v-if="!isAuthenticated" to="/signup">Sign Up</router-link>
      <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
      <router-link v-if="isAuthenticated" to="/home">Home</router-link>
      <button v-if="isAuthenticated" @click="logout">Logout</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { auth } from "./auth";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "App",
  setup() {
    const router = useRouter();
    const user = ref(null);

    // Escucha los cambios de estado de autenticación
    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
    });

    // Computed para determinar si el usuario está autenticado
    const isAuthenticated = computed(() => !!user.value);

    const logout = async () => {
      try {
        await signOut(auth);
        router.push("/login");
      } catch (error) {
        console.error("Error al cerrar sesión:", error.message);
        alert("Hubo un problema al cerrar sesión. Intenta de nuevo.");
      }
    };

    return { isAuthenticated, logout };
  },
};
</script>

<style>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #42b983;
}

nav a:hover {
  text-decoration: underline;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #36a372;
}
</style>
