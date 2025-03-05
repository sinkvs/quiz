document.addEventListener('DOMContentLoaded', function() {
    const startImage = document.querySelector('.start-screen img');
    const startScreen = document.getElementById('startScreen');
    const quizContent = document.getElementById('quizContent');
    const backgroundAudio = document.getElementById('backgroundAudio');
    const finalButton = document.createElement('button');
    finalButton.id = 'finalButton';
    finalButton.textContent = 'И в завершение';
    document.body.appendChild(finalButton);

    startImage.addEventListener('dblclick', function() {
        startScreen.style.display = 'none';
        quizContent.style.display = 'flex';
        backgroundAudio.play().catch(error => {
            console.error('Ошибка воспроизведения аудио:', error);
        });
        loadQuestion();
    });

    const questions = [
        {
            question: "Какой инструмент используется для создания объема у корней волос?",
            options: ["A) Плойка", "B) Утюжок", "C) Брашинг", "D) Фен с насадкой-диффузором"],
            correctAnswer: "C"
        },
        {
            question: "Какой тип стрижки лучше всего подходит для тонких волос?",
            options: ["A) Каскад", "B) Пикси", "C) Боб", "D) Лесенка"],
            correctAnswer: "A"
        },
        {
            question: "Какой продукт используется для фиксации прически и придания ей блеска?",
            options: ["A) Мусс", "B) Лак для волос", "C) Воск", "D) Гель"],
            correctAnswer: "B"
        }
    ];

    let currentQuestionIndex = 0;
    const questionText = document.getElementById('questionText');
    const options = document.querySelectorAll('.option');
    const errorAudio = document.getElementById('errorAudio');
    const goodAudio = document.getElementById('goodAudio');
    const yesImage = document.getElementById('yesImage');
    const noImage = document.getElementById('noImage');

    function loadQuestion() {
        if (currentQuestionIndex >= questions.length) {
            quizContent.style.display = 'none';
            finalButton.style.display = 'flex';
            return;
        }
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        options.forEach((option, index) => {
            option.textContent = currentQuestion.options[index];
            option.dataset.answer = currentQuestion.options[index].charAt(0);
            option.classList.remove('wrong', 'correct');
        });
    }

    options.forEach(option => {
        option.addEventListener('click', function() {
            const selectedAnswer = this.dataset.answer;
            const correctAnswer = questions[currentQuestionIndex].correctAnswer;

            if (selectedAnswer === correctAnswer) {
                goodAudio.play();
                this.classList.add('correct');
                yesImage.classList.add('slide-in-out');
                setTimeout(() => {
                    yesImage.classList.remove('slide-in-out');
                    currentQuestionIndex++;
                    loadQuestion();
                }, 4000);
            } else {
                errorAudio.play();
                this.classList.add('wrong');
                noImage.classList.add('slide-in-out');
                setTimeout(() => {
                    noImage.classList.remove('slide-in-out');
                }, 4000);
            }
        });
    });

    loadQuestion();
});
