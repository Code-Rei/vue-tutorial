<template>
  <div class="page-container">
    <h1>Random Word Generator</h1>

    <div class="controls">
      <input type="number" v-model.number="wordCount" min="1" />
      <select v-model="lang" name="language" id="languageSelect">
        <option value="">Select a language...</option>
        <option
          v-for="option in languageSelect"
          :key="option.code"
          :value="option"
        >
          {{ option.label }}
        </option>
      </select>
      <button @click="fetchWords">Get Words</button>
    </div>

    <div v-if="randomWords.length > 0" class="word-list">
      <div v-for="words in randomWords" :key="words">
        {{ words }}
      </div>
    </div>
    <!-- <ul v-if="randomWords.length > 0" class="word-list">
            <li v-for="word in randomWords" :key="word">
                {{ word }}
            </li>
        </ul> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "randomWebPage",
  data() {
    return {
      wordCount: 5,
      randomWords: [],
      lang: "",
      languageSelect: [
        { label: "English", code: "en" },
        { label: "Spanish", code: "es" },
        { label: "French", code: "fr" },
        { label: "German", code: "de" },
        { label: "Italian", code: "it" },
        { label: "Brazilian Portuguese", code: "pt-br" },
        { label: "Chinese", code: "zh" },
      ],
      loading: false,
    };
  },
  methods: {
    async fetchWords() {
      this.randomWords = [];
      try {
        const response = await axios.get(
          "https://random-word-api.herokuapp.com/word",
          {
            params: {
              number: this.wordCount,
              lang: this.lang ? this.lang.code : undefined,
            },
          }
        );
        this.randomWords = response.data;
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    },
    // async fetchWords() {
    //     this.randomWords = [];
    //     let url = `https://random-word-api.herokuapp.com/word?number=${this.wordCount}`;
    //     if (this.lang) {
    //         url += `&lang=${this.lang.code}`;
    //     }
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         this.randomWords = data;
    //     } catch (error) {
    //         console.error("Error fetching words:", error);
    //     }
    // },
    // async fetchWords() {
    //     this.randomWords = [];
    //     if (!this.lang) {
    //         try {
    //             const url = `https://random-word-api.herokuapp.com/word?number=${this.wordCount}`;
    //             const response = await fetch(url);
    //             const data = await response.json();
    //             this.randomWords = data;
    //         } catch (error) {
    //             console.error("Error fetching words:", error);
    //         }
    //     }
    //     else {
    //         try {
    //             const url = `https://random-word-api.herokuapp.com/word?number=${this.wordCount}&lang=${this.lang.code}`;
    //             const response = await fetch(url);
    //             const data = await response.json();
    //             this.randomWords = data;
    //         } catch (error) {
    //             console.error("Error fetching words:", error);
    //         }
    //     }
    // }
  },
};
</script>
<style scoped>
/* This is a container for our component */
.page-container {
  width: 90%;
  max-width: 600px;
  margin: 20px auto;
  /* Center the container */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  font-family: "helvetica", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

/* Style for the input/button area */
.controls {
  display: flex;
  /* Use flexbox *here* */
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* Adds space between items */
  margin-bottom: 20px;
}

input {
  padding: 8px;
  font-size: 1rem;
}

select {
  padding: 8px;
  font-size: 1rem;
}

button {
  padding: 8px 12px;
  font-size: 1rem;
  cursor: pointer;
}

/* Style for the results list */
.word-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.word-list div {
  margin: 6px 6px;
  padding: 0.5rem;
  font-size: 1.1rem;
  border-radius: 5%;
  border: #333 1px solid;
}
</style>
