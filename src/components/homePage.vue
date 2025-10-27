<template>
  <!-- Quiz Component -->
  <div>
    <h1>Quiz</h1>
    <p>In this component we'll create a quiz application.</p>
    <h3>Technology</h3>
    <label for="TechStack">Java</label>
    <input type="checkbox" id="Java" value="Java" v-model="TechStack" />
    <label for="TechStack">JavaScript</label>
    <input
      type="checkbox"
      id="JavaScript"
      value="JavaScript"
      v-model="TechStack"
    />
    <label for="TechStack">Python</label>
    <input type="checkbox" id="Python" value="Python" v-model="TechStack" />

    <h3>Profession</h3>
    <select v-model="profession">
      <option value="Developer">Developer</option>
      <option value="Designer">Designer</option>
      <option value="Manager">Manager</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "homePage",
  props: ["loginstate"],
};
</script>
<style scoped>
* {
  text-align: center;
  color: #9b9fa1;
  font-family: "helvetic", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
}

</style>
