// script.js
document.addEventListener('DOMContentLoaded', () => {
    const startLeo = document.getElementById('start-leo');
    const buke = document.getElementById('buke');
    const code = document.getElementById('code');
    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    const questions = [
        {
            question: "Какой продукт используют для приготовления бешамеля?",
            answers: ["A) Сметана", "B) Молоко", "C) Сливки"],
            correct: 2
        },
        {
            question: "Какой оператор используется для выделения памяти под массив в языке C?",
            answers: ["A) free", "B) malloc", "C) realloc"],
            correct: 1
        },
        {
            question: "Что такое утечка памяти и как ее избежать в языке C?",
            answers: ["A) Это когда память не освобождается после использования.", "B) Это когда используется слишком много памяти.", "C) Это когда память выделяется, но не используется."],
            correct: 0
        }
    ];

    let currentQuestion = 0;

    startLeo.addEventListener('dblclick', () => {
        startLeo.style.display = 'none';
        buke.style.display = 'block';
        quizContainer.style.display = 'block';
        showQuestion(currentQuestion);
    });

    function showQuestion(index) {
        if (index >= questions.length) {
            buke.style.display = 'none';
            code.style.display = 'block';
            quizContainer.style.display = 'none';
            return;
        }

        questionElement.innerText = questions[index].question;
        answersElement.innerHTML = '';
        questions[index].answers.forEach((answer, i) => {
            const answerElement = document.createElement('div');
            answerElement.classList.add('answer');
            answerElement.innerText = answer;
            answerElement.addEventListener('click', () => checkAnswer(i));
            answersElement.appendChild(answerElement);
        });
    }

    function checkAnswer(selected) {
        if (selected === questions[currentQuestion].correct) {
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    }
});
