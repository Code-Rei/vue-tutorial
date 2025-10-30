<template>
  <div class="page">
    <router-link to="/quiz" class="button">Quiz</router-link>
    <router-link to="/randomWebPage" class="button">Random Topics</router-link>
  </div>
</template>

<script>

export default {
  name: "homePage",
  // ... your data/props ...
  methods: {

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

/* From Uiverse.io by ke1221 */
.button {
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  text-decoration: none;
  margin: .5rem;
}

.button:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #919191, inset -4px -4px 12px #c0c0c0;
}

.logout {
  display: flex;
  justify-content: flex-end;
}

.logout>button {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: white;
  background: rgb(73, 72, 72);

}

.page {
  margin: 1rem;
}
</style>
