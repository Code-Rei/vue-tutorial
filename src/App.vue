<template>
  <loginPage />
  <div v-if="!loginState" class="logout">
    <button @click="getLogout">Logout</button>
  </div>

  <homePage
    :key="loginState"
    :loginState="loginState"
    @update-login-state="loginState = $event"
  />
</template>

<script>
import homePage from "./components/homePage.vue";
import loginPage from "./components/loginPage.vue";

export default {
  name: "App",
  data() {
    return {
      loginState: JSON.parse(localStorage.getItem("loginState")) ?? true,
    };
  },
  components: {
    homePage,
    loginPage,
  },
  methods: {
    getLogout() {
      this.loginState = true;
      localStorage.setItem("loginState", JSON.stringify(this.loginState));
    },
  },
};
</script>

<style scoped>
.logout {
  text-align: right;
  padding: 10px;
}
</style>
