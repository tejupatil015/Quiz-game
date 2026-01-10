const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answer-container");

const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");
const scoreEl = document.getElementById("score");

const finalScoreEl = document.getElementById("final-score");
const maxScoreEl = document.getElementById("max-score");
const progressBar = document.getElementById("progress");

const questions = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Paris", "Berlin", "Madrid"],
    correct: 1
  },
  {
    question: "Which language runs in browser?",
    answers: ["Python", "Java", "C", "JavaScript"],
    correct: 3
  },
  {
    question: "HTML stands for?",
    answers: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Markup", "None"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

totalQuestionsEl.innerText = questions.length;

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  loadQuestion();
}

function loadQuestion() {
  answerContainer.innerHTML = "";

  const q = questions[currentQuestion];
  questionText.innerText = q.question;
  currentQuestionEl.innerText = currentQuestion + 1;
  scoreEl.innerText = score;

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => checkAnswer(index);
    answerContainer.appendChild(btn);
  });

  progressBar.style.width =
    ((currentQuestion + 1) / questions.length) * 100 + "%";
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreEl.innerText = score;
  maxScoreEl.innerText = questions.length;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
}