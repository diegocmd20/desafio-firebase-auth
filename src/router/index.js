import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import SignUpView from "../views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/signup", name: "SignUp", component: SignUpView },
  { path: "/login", name: "Login", component: LoginView },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Ajuste moderno para Vite o Vue CLI con ESM
  routes,
});

// Configurar redirección global antes de cada cambio de ruta
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  // Escuchar estado de autenticación de Firebase
  onAuthStateChanged(auth, (user) => {
    const isAuthenticated = !!user;

    if (requiresAuth && !isAuthenticated) {
      next("/signup"); // Redirige a SignUp si no está autenticado
    } else if (!requiresAuth && isAuthenticated && (to.path === "/signup" || to.path === "/login")) {
      next("/home"); // Redirige a Home si ya está autenticado
    } else {
      next(); // Continua normalmente
    }
  });
});

export default router;
