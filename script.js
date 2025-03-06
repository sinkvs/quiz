document.addEventListener('DOMContentLoaded', () => {
    const startLeo = document.getElementById('start-leo');
    const buke = document.getElementById('buke');
    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const errorAudio = document.getElementById('errorAudio');
    const goodAudio = document.getElementById('goodAudio');
    const backgroundAudio = document.getElementById('backgroundAudio');

    const questions = [
        // Ваши вопросы здесь
    ];

    let currentQuestionIndex = 0;
    let isInteractionAllowed = true; // Флаг для защиты от быстрого нажатия

    startLeo.addEventListener('dblclick', () => {
        startLeo.style.display = 'none';
        buke.style.display = 'block';
        quizContainer.style.display = 'block';
        backgroundAudio.play().catch(error => {
            console.error('Ошибка воспроизведения аудио:', error);
        });
        loadQuestion();
    });

    function loadQuestion() {
        if (currentQuestionIndex >= questions.length) {
            buke.style.display = 'none';
            quizContainer.style.display = 'none';
            return;
        }

        const currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        answersElement.innerHTML = '';
        currentQuestion.answers.forEach((answer, i) => {
            const answerElement = document.createElement('div');
            answerElement.classList.add('answer');
            answerElement.innerText = answer;
            answerElement.dataset.answer = answer[0]; // Устанавливаем значение для dataset
            answerElement.addEventListener('click', () => checkAnswer(answer[0]));
            answersElement.appendChild(answerElement);
        });
        isInteractionAllowed = true; // Сбрасываем флаг при загрузке нового вопроса
    }

    function checkAnswer(selectedAnswer) {
        if (!isInteractionAllowed) return; // Проверяем флаг

        isInteractionAllowed = false; // Устанавливаем флаг, чтобы предотвратить быстрое нажатие

        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        if (selectedAnswer === correctAnswer) {
            goodAudio.play();
            document.querySelectorAll('.answer').forEach(el => el.classList.remove('correct', 'wrong'));
            document.querySelector(`[data-answer="${selectedAnswer}"]`).classList.add('correct');
            showCorrectImage();
        } else {
            errorAudio.play();
            document.querySelectorAll('.answer').forEach(el => el.classList.remove('correct', 'wrong'));
            document.querySelector(`[data-answer="${selectedAnswer}"]`).classList.add('wrong');
            showIncorrectImage();
        }
    }

    function showCorrectImage() {
        let yesImage;
        if (currentQuestionIndex < 5) {
            yesImage = document.getElementById('alexYesImage');
        } else if (currentQuestionIndex < 10) {
            yesImage = document.getElementById('vladYesImage');
        } else if (currentQuestionIndex < 15) {
            yesImage = document.getElementById('kostyaYesImage');
        } else {
            yesImage = document.getElementById('vovaYesImage');
        }

        yesImage.style.opacity = 1;
        yesImage.classList.add('slide-in-out');
        setTimeout(() => {
            yesImage.style.opacity = 0;
            yesImage.classList.remove('slide-in-out');
            currentQuestionIndex++;
            loadQuestion();
        }, 4000);
    }

    function showIncorrectImage() {
        const noImage = currentQuestionIndex < 10 ? document.getElementById('alexEndImage') : document.getElementById('vovaEndImage');

        noImage.style.opacity = 1;
        noImage.classList.add('slide-in-out');
        setTimeout(() => {
            noImage.style.opacity = 0;
            noImage.classList.remove('slide-in-out');
            isInteractionAllowed = true; // Разрешаем взаимодействие после завершения анимации
        }, 4000);
    }
});
