<template>
  <Navbar v-if="$route.name !== 'Login'" />
  <RouterView />
</template>

<script>
import Navbar from './components/other/navBar.vue';
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* --- NEW LAYOUT STYLES --- */
.app-container {
  display: flex;
  flex-direction: column;
  /* Ensures the app is at least the full height of the screen */
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  /* This is the magic: makes this element fill all remaining space */

  /* These ensure the child page (like quizpage) also fills this area */
  display: flex;
  flex-direction: column;
}

/* --- END NEW --- */

/* This global style is no longer needed here, as the container handles it */
/*
html {
  overflow-y: auto;
}
*/
</style>
