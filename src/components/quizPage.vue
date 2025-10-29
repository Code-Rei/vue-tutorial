<template>
  <div class="quiz-container">
    <h1>Quiz</h1>

    <form>
      <fieldset class="question-block">
        <legend>1. Which of these are primary colors?</legend>

        <label class="option" v-for="value in primaryColors" :key="value">
          <input type="checkbox" name="q1" :value="value"> {{ value }}
        </label>
      </fieldset>

      <fieldset class="question-block">
        <legend>2. What is the largest planet in our solar system?</legend>

        <label class="option" v-for="planet in ['Jupiter', 'Saturn', 'Earth']" :key="planet">
          <input type="radio" name="q2_planet" value="earth"> {{ planet }}
        </label>
      </fieldset>

      <fieldset class="question-block">
        <legend>3. What is the name of the gas that plants breathe in and humans breathe out?</legend>

        <label for="q3_gas" class="text-input-label">Your Answer:</label>
        <input type="text" id="q3_gas" name="q3_gas" placeholder="Type your answer here">
      </fieldset>

      <fieldset class="question-block">
        <legend>4. The human skeleton is made of 500 bones.</legend>

        <label class="option">
          <input type="radio" name="q4_skeleton" value="true"> True
        </label>
        <label class="option">
          <input type="radio" name="q4_skeleton" value="false"> False
        </label>
      </fieldset>

      <fieldset class="question-block">
        <legend>5. Match the superhero to their real name.</legend>

        <div class="match-item">
          <span>1. Superman</span>
          <select name="q5_superman">
            <option value="">-- Select a name --</option>
            <option value="a">A. Bruce Wayne</option>
            <option value="b">B. Clark Kent</option>
            <option value="c">C. Peter Parker</option>
          </select>
        </div>

        <div class="match-item">
          <span>2. Spider-Man</span>
          <select name="q5_spiderman">
            <option value="">-- Select a name --</option>
            <option value="a">A. Bruce Wayne</option>
            <option value="b">B. Clark Kent</option>
            <option value="c">C. Peter Parker</option>
          </select>
        </div>

        <div class="match-item">
          <span>3. Batman</span>
          <select name="q5_batman">
            <option value="">-- Select a name --</option>
            <option value="a">A. Bruce Wayne</option>
            <option value="b">B. Clark Kent</option>
            <option value="c">C. Peter Parker</option>
          </select>
        </div>

      </fieldset>

    </form>
    <!-- other -->

  </div>
</template>
<script>
export default {
  name: "quizPage",
  data() {
    return {
      primaryColors: ["Red", "Blue", "Yellow"],
      largestPlanet: "jupiter",
      gasPlantsBreathe: "carbon dioxide",
      skeletonBones: 206,
      superheroNames: {
        superman: "b",
        spiderman: "c",
        batman: "a",
      },
    };
  },
};
</script>
<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: #f0f4f8;
  color: #333;
  margin: 0;
  padding: 20px;
}

/* --- Quiz Container --- */
.quiz-container {
  max-width: 700px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
}

h1 {
  text-align: center;
  color: #0056b3;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
}

/* --- Question Block Styles (Fieldset) --- */
.question-block {
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  margin-bottom: 25px;
  padding: 20px;
}

.question-block legend {
  font-weight: bold;
  font-size: 1.2em;
  color: #333;
  padding: 0 10px;
  /* Creates a gap in the border */
}

/* --- Option Styles (for Checkbox & Radio) --- */
.option {
  display: block;
  /* Makes each option its own line */
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.option:hover {
  background-color: #f9f9f9;
}

.option input[type="checkbox"],
.option input[type="radio"] {
  margin-right: 12px;
  /* Enlarge the buttons slightly */
  transform: scale(1.1);
}

/* --- Text Input Style (Q3) --- */
.text-input-label {
  display: block;
  font-weight: 500;
  margin: 15px 0 8px 0;
}

input[type="text"] {
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

/* --- Matching Question Styles (Q5) --- */
.match-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 8px;
  border-bottom: 1px solid #eee;
}

.match-item:last-child {
  border-bottom: none;
}

.match-item span {
  font-weight: 500;
  flex-basis: 45%;
  /* Give space to the name */
}

.match-item select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  flex-basis: 50%;
  /* Give space to the dropdown */
  cursor: pointer;
}
</style>