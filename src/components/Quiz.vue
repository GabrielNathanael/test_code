<template>
  <div class="p-4 sm:p-8">
    <!-- Add padding to the entire container, increase padding on small screens (sm) -->
    <div v-if="currentQuestionIndex < questions.length" class="text-center">
      <h1 class="text-3xl sm:text-4xl font-semibold mb-4">HTML Quiz</h1>
      <!-- Increase font size on small screens -->
      <p class="mb-2">Question {{ currentQuestionIndex + 1 }}:</p>
      <p class="text-lg sm:text-xl mb-4">
        {{ questions[currentQuestionIndex].question }}
      </p>
      <!-- Increase font size on small screens -->
      <ul>
        <li
          v-for="(option, index) in questions[currentQuestionIndex].options"
          :key="index"
          class="mb-2"
        >
          <input
            type="radio"
            :id="'option' + index"
            :value="option"
            v-model="selectedAnswer"
            class="mr-2"
          />
          <label :for="'option' + index" class="text-base">{{ option }}</label>
        </li>
      </ul>
      <div class="space-x-4 mt-4">
        <!-- Add space between buttons -->
        <button
          @click="goBack"
          :disabled="currentQuestionIndex === 0"
          class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Back
        </button>
        <button
          @click="saveAnswer"
          class="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Save Answer
        </button>
        <button
          @click="checkAnswer"
          class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
    <div v-else class="text-center">
      <h1 class="text-3xl sm:text-4xl font-semibold mb-4">Quiz Completed!</h1>
      <p class="text-lg sm:text-xl mb-4">
        Your score is {{ score }} out of {{ questions.length }}.
      </p>
      <ul>
        <li v-for="(question, index) in questions" :key="index">
          <p class="font-semibold mb-2">Question {{ index + 1 }}:</p>
          <p class="mb-2">{{ question.question }}</p>
          <p class="mb-2">Correct answer: {{ question.correctAnswer }}</p>
          <p class="mb-2">Your answer: {{ userAnswers[index] }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentQuestionIndex: 0,
      selectedAnswer: null,
      score: 0,
      questions: [
        {
          question: "What does HTML stand for?",
          options: [
            " Home Tool Markup Language",
            " Hyperlinks and Text Markup Language",
            "Hyper Text Markup Language",
          ],
          correctAnswer: "Hyper Text Markup Language",
        },
        {
          question: "Choose the correct HTML element for the largest heading?",
          options: ["<h1>", "<h6>", "<head>"],
          correctAnswer: "<h1>",
        },
      ],
    };
  },
  methods: {
    checkAnswer() {
      if (
        this.selectedAnswer ===
        this.questions[this.currentQuestionIndex].correctAnswer
      ) {
        this.score++;
      }
      this.selectedAnswer = null;
      this.currentQuestionIndex++;
    },
    goBack() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
    saveAnswer() {
      this.userAnswers[this.currentQuestionIndex] = this.selectedAnswer;
    },
  },
};
</script>
