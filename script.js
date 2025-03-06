document.getElementById('start-image').addEventListener('dblclick', startQuiz);

let currentQuestion = 0;
const questions = [
    { question: "Вопрос 1?", correctAnswer: 1 },
    { question: "Вопрос 2?", correctAnswer: 2 },
    { question: "Вопрос 3?", correctAnswer: 3 },
    { question: "Вопрос 4?", correctAnswer: 4 }
];

function startQuiz() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showFinishScreen();
        return;
    }

    const questionText = document.getElementById('question-text');
    questionText.textContent = questions[currentQuestion].question;

    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((button, index) => {
        button.textContent = `Ответ ${index + 1}`;
        button.onclick = () => checkAnswer(index + 1);
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const feedbackImage = document.getElementById('feedback-image');
    feedbackImage.classList.remove('hidden');

    if (selectedAnswer === correctAnswer) {
        feedbackImage.src = 'yes.jpg';
        feedbackImage.style.animation = 'slide-from-right 1s forwards';
        document.querySelectorAll('.answer-btn')[selectedAnswer - 1].classList.add('blink-green');
    } else {
        feedbackImage.src = 'no.jpg';
        feedbackImage.style.animation = 'slide-from-left 1s forwards';
        document.querySelectorAll('.answer-btn')[selectedAnswer - 1].classList.add('blink-red');
    }

    setTimeout(() => {
        feedbackImage.classList.add('hidden');
        feedbackImage.style.animation = '';
        document.querySelectorAll('.answer-btn').forEach(button => button.classList.remove('blink-red', 'blink-green'));
        currentQuestion++;
        showQuestion();
    }, 3000);
}

function showFinishScreen() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('finish-screen').classList.remove('hidden');
}
