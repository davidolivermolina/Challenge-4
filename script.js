const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which programming language is also known as the 'language of the web'?",
        options: ["Java", "JavaScript", "Python", "C++"],
        correctAnswer: "JavaScript"
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let timeRemaining = 60;
let score = 0;
let timerInterval;

function startQuiz() {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
    startTimer();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.correctAnswer === currentQuestion.options[selectedIndex]) {
        score += 10;
    } else {
        timeRemaining -= 10;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        document.getElementById("timer").textContent = timeRemaining;
        if (timeRemaining <= 0) {
            endQuiz();
        } else {
            timeRemaining--;
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("final-score").textContent = score;
}

function saveScore() {
    const initials = document.getElementById("initials").value;
    // You can save the score and initials in local storage or send it to a server
    alert("Score saved!");
}
