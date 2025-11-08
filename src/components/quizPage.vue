<template>
  <div class="quiz-page">
    <h1>Quiz</h1>
    <transition name="fade">
      <div class="type-container" v-if="showSetupPanel">
        <fieldset class="type-block">
          <legend>No. of Questions</legend>
          <input type="number" min="1" v-model="noOfQuestions">
        </fieldset>

        <fieldset class="type-block">
          <legend>Select Category</legend>
          <select name="Category" id="Category" v-model="selectedCategory">
            <option v-for="category in selectCategory" :key="category.value" :value="category.value">
              {{ category.name }}
            </option>
          </select>
        </fieldset>
        <fieldset class="type-block">
          <legend>Select Difficulty</legend>
          <select name="Difficulty" id="Difficulty" v-model="selectedDifficulty">
            <option value="any">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </fieldset>

        <fieldset class="type-block">
          <legend>Select Type</legend>
          <select name="Type" id="Type" v-model="selectedType">
            <option value="any">Any</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </fieldset>
        <div v-if="loadingQuiz" class="loading">Loading questions…</div>
        <div v-if="fetchError" class="error-message">
          {{ fetchError }}
        </div>
        <button type="button" @click="getQuiz" :disabled="loadingQuiz">Submit</button>
      </div>
    </transition>
    <!-- Error fetch -->

    <transition name="fade">
      <div v-if="fetchError" class="error-message">
        <p>Error fetching quiz: {{ fetchError }}</p>
      </div>
    </transition>

    <transition name="fade">
      <div class="quiz-container" v-if="!showSetupPanel">
        <form @submit.prevent="submitQuiz">
          <!-- Question-->
          <fieldset v-for="(q, index) in quizData" :key="index" class="question-block">
            <legend>{{ index + 1 }}. {{ q.question }}</legend>

            <!-- show correct + incorrect answers exactly as API gives -->
            <label v-for="answer in [q.correct_answer, ...q.incorrect_answers]" :key="answer" class="option">
              <input type="radio" :name="'q' + index" :value="answer">
              {{ answer }}
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>

export default {

  name: "quizPage",
  data() {
    return {
      showSetupPanel: true,
      noOfQuestions: 5,
      selectedCategory: "any",
      selectCategory: [
        { value: "any", name: "Any Category" },
        { value: "9", name: "General Knowledge" },
        { value: "10", name: "Entertainment: Books" },
        { value: "11", name: "Entertainment: Film" },
        { value: "12", name: "Entertainment: Music" },
        { value: "13", name: "Entertainment: Musicals & Theatres" },
        { value: "14", name: "Entertainment: Television" },
        { value: "15", name: "Entertainment: Video Games" },
        { value: "16", name: "Entertainment: Board Games" },
        { value: "17", name: "Science & Nature" },
        { value: "18", name: "Science: Computers" },
        { value: "19", name: "Science: Mathematics" },
        { value: "20", name: "Mythology" },
        { value: "21", name: "Sports" },
        { value: "22", name: "Geography" },
        { value: "23", name: "History" },
        { value: "24", name: "Politics" },
        { value: "25", name: "Art" },
        { value: "26", name: "Celebrities" },
        { value: "27", name: "Animals" },
        { value: "28", name: "Vehicles" },
        { value: "29", name: "Entertainment: Comics" },
        { value: "30", name: "Science: Gadgets" },
        { value: "31", name: "Entertainment: Japanese Anime & Manga" },
        { value: "32", name: "Entertainment: Cartoon & Animations" }
      ],
      selectedDifficulty: "any",
      selectedType: "any",
      quizData: [],
      loadingQuiz: false,
      fetchError: null,
    };
  },
  methods: {
    // Your methods here
    getQuiz() {
      this.fetchError = null;
      this.loadingQuiz = true;
      this.showSetupPanel = false;
      const quizUrl = `https://opentdb.com/api.php?amount=${this.noOfQuestions}` +
        (this.selectedCategory !== "any" ? `&category=${this.selectedCategory}` : "") +
        (this.selectedDifficulty !== "any" ? `&difficulty=${this.selectedDifficulty}` : "") +
        (this.selectedType !== "any" ? `&type=${this.selectedType}` : "");

      fetch(quizUrl)
        .then(response => response.json())
        .then(data => {
          this.loadingQuiz = false;

          if (data.response_code !== 0 || !data.results || data.results.length === 0) {
            this.fetchError = 'No questions were returned by the API. Try different settings.';
            return; // keep setup visible so user can change values
          }

          console.log("Quiz Data:", data.results);
          this.quizData = data.results;
        });


    },


    submitQuiz() {
      let score = 0;
      this.quizData.forEach(q => {
        if (q._userAnswer === q.correct_answer) score++;
      });
      // show result (replace alert with better UI in the future)
      this.fetchError = null; // clear any previous error
      alert(`You scored ${score} out of ${this.quizData.length}`);

      this.showSetupPanel = true;
    }

  },
}
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
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* --- Title --- */
.quiz-page h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 24px;
  font-weight: 600;
}

/* Type Block */
.type-container {
  width: 90%;
  max-width: 800px;

  background-color: #ffffff;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  /* Scroll behavior (from your CSS) */
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* --- Fieldset Blocks (Your Original CSS) --- */
.type-block {
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 20px 25px;
  background-color: #fafafa;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  margin-bottom: 30px;
  flex-basis: calc(50% - 15px);
  box-sizing: border-box;
}

.type-block:hover {
  background-color: #fdfdfd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.type-block legend {
  font-weight: bold;
  font-size: 1.15rem;
  color: #0056b3;
  padding: 0 8px;
}

/* --- NEW: Form Inputs (input, select) --- */
.type-block input[type="number"],
.type-block select {
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  /* Ensures padding doesn't break width */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Custom arrow for select dropdown */
.type-block select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23333' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 1em;
  padding-right: 40px;
}

/* Focus state for inputs */
.type-block input[type="number"]:focus,
.type-block select:focus {
  outline: none;
  border-color: #0056b3;
  box-shadow: 0 0 8px rgba(0, 86, 179, 0.2);
}

/* --- NEW: Submit Button --- */
button {
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  background-color: #0056b3;
  /* Match legend color */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  /* The margin-bottom on the last .type-block gives this button space */
}

button:hover {
  background-color: #004494;
  /* Darker shade */
}

button:active {
  transform: scale(0.99);
  width: 100%;
  margin-top: 10px;
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

/* --- type Blocks --- */
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
