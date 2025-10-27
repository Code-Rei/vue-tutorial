<template>
  <div v-if="loginState" class="logout"> <button @click="getLogout()"> Logout </button>
  </div>
  <homePage />
</template>

<script>
import homePage from './components/homePage.vue'


export default {
  name: 'App',
  components: {
    homePage,
  }
}
</script>

<style>
#app {
  text-align: center;
}

.logout {
  text-align: right;
  padding: 10px;
}
</style>
