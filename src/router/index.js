import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/homePage.vue";
import LoginPage from "../components/loginPage.vue";
import QuizPage from "@/components/quizPage.vue";
import randomWebPage from "@/components/randomWebPage.vue";

// 1. Define your routes
const routes = [
  {
    path: "/",
    redirect: "/login", // Redirect the root path to the login page
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
    meta: { requiresAuth: true }, // <-- We'll use this to protect the route
  },
  {
    path: "/quiz",
    name: "quiz",
    component: QuizPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/randomWebPage",
    name: "randomWebPage",
    component: randomWebPage,
    meta: { requiresAuth: true },
  },
];

// 2. Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

// 3. (IMPORTANT) Create a Navigation Guard
// This function runs BEFORE every navigation.
router.beforeEach((to, from, next) => {
  // Check if the route the user is going TO requires authentication
  if (to.meta.requiresAuth) {
    // Check our 'database' (localStorage) to see if the user is logged in
    const isLoggedIn = JSON.parse(localStorage.getItem("loginState")) === true; // 'false' means they are logged in

    if (isLoggedIn) {
      // User is logged in, so proceed to the page
      next();
    } else {
      // User is NOT logged in, redirect them to the login page
      alert("You must log in to see that page.");
      next("/login");
    }
  } else {
    // This route (like /login) does not require auth, so let them go
    next();
  }
});

export default router;
