<template>
  <div class="quiz-page">
    <h1>Quiz</h1>

    <div class="quiz-container">
      <form>
        <!-- Question 1 -->
        <fieldset class="question-block">
          <legend>1. Which of these are primary colors?</legend>
          <label class="option" v-for="value in primaryColors" :key="value">
            <input type="checkbox" name="q1" :value="value" /> {{ value }}
          </label>
        </fieldset>

        <!-- Question 2 -->
        <fieldset class="question-block">
          <legend>2. What is the largest planet in our solar system?</legend>
          <label class="option" v-for="planet in ['Jupiter', 'Saturn', 'Earth']" :key="planet">
            <input type="radio" name="q2_planet" :value="planet" /> {{ planet }}
          </label>
        </fieldset>

        <!-- Question 3 -->
        <fieldset class="question-block">
          <legend>
            3. What is the name of the gas that plants breathe in and humans
            breathe out?
          </legend>
          <label for="q3_gas" class="text-input-label">Your Answer:</label>
          <input type="text" id="q3_gas" name="q3_gas" placeholder="Type your answer here" />
        </fieldset>

        <!-- Question 4 -->
        <fieldset class="question-block">
          <legend>4. The human skeleton is made of 500 bones.</legend>
          <label class="option">
            <input type="radio" name="q4_skeleton" value="true" /> True
          </label>
          <label class="option">
            <input type="radio" name="q4_skeleton" value="false" /> False
          </label>
        </fieldset>

        <!-- Question 5 -->
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
    </div>
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
/* html {
  overflow-y: auto;
} */

/* --- Page Base --- */
.quiz-page {
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: #f5f7fa;
  color: #333;
  min-height: 100vh;
  height: 100vh;
  padding: 40px 20px 80px;
  /* extra bottom padding for visual balance */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
}

/* --- Title --- */
h1 {
  text-align: center;
  color: #0056b3;
  margin-bottom: 30px;
  font-size: 2rem;
}

/* --- Quiz Container --- */
.quiz-container {
  max-width: 750px;
  width: 100%;
  background-color: #ffffff;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  max-height: none;
  /* let it grow naturally */
  overflow: visible;
  padding-bottom: 80px;

  /* Scroll behavior */
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;

  /* 👇 Inner padding to avoid bottom clipping */
  padding-bottom: 80px;
}

/* --- Question Blocks --- */
.question-block {
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 20px 25px;
  background-color: #fafafa;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
}

.question-block:hover {
  background-color: #fdfdfd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.question-block legend {
  font-weight: bold;
  font-size: 1.15rem;
  color: #0056b3;
  padding: 0 8px;
}

/* --- Options (checkboxes & radios) --- */
.option {
  display: flex;
  align-items: center;
  margin: 8px 0;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

.option:hover {
  background-color: #eef3fa;
}

.option input[type="checkbox"],
.option input[type="radio"] {
  margin-right: 10px;
  transform: scale(1.1);
}

/* --- Text Input --- */
.text-input-label {
  display: block;
  font-weight: 600;
  margin: 14px 0 8px 0;
}

input[type="text"] {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1em;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus {
  outline: none;
  border-color: #0056b3;
}

/* --- Matching Question (dropdowns) --- */
.match-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  padding: 6px 0;
  border-bottom: 1px solid #eee;
}

.match-item:last-child {
  border-bottom: none;
}

.match-item span {
  font-weight: 500;
  flex-basis: 45%;
}

.match-item select {
  flex-basis: 50%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.match-item select:focus {
  border-color: #0056b3;
}

/* --- Scrollbar Styling (for long quizzes) --- */
.quiz-container::-webkit-scrollbar {
  width: 8px;
}

.quiz-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.quiz-container::-webkit-scrollbar-thumb {
  background: #bbb;
  border-radius: 10px;
}

.quiz-container::-webkit-scrollbar-thumb:hover {
  background: #888;
}

/* --- Responsive --- */
@media (max-width: 600px) {
  .quiz-container {
    padding: 25px 20px 60px;
  }

  .match-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .match-item span,
  .match-item select {
    width: 100%;
  }
}
</style>
