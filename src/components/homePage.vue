<template>
  <div class="button"><button @click="logout">Logout</button></div>
  <div class="pages">
    <div @click="goToQuiz()" class="page">Quiz</div>
    <div class="page">Other</div>
  </div>
</template>

<script>
export default {
  name: "homePage",
  // ... your data/props ...
  methods: {
    logout() {
      // 1. Update the state to 'logged out'
      localStorage.setItem("loginState", JSON.stringify(false));

      // 2. (REPLACE THE $EMIT) Use the router to navigate to the 'Login' page
      this.$router.push("/login");
    },
    goToQuiz() {
      this.$router.push("/quizPage");
    },
  },
};
</script>
<style scoped>
* {
  text-align: center;
  color: #9b9fa1;
  font-family: "helvetic", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.button {
  display: flex;
  justify-content: flex-end;
}
.page {
  margin: 5px;
}
</style>
