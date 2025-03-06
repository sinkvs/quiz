document.addEventListener('DOMContentLoaded', function() {
    const startImage = document.querySelector('.start-screen img');
    const startScreen = document.getElementById('startScreen');
    const quizContent = document.getElementById('quizContent');
    const backgroundAudio = document.getElementById('backgroundAudio');
    const finishImage = document.getElementById('finishImage');

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
            question: "Вопрос 1: Какой инструмент используется для создания объема у корней волос?",
            options: ["A) Плойка", "B) Утюжок", "C) Брашинг", "D) Фен с насадкой-диффузором"],
            correctAnswer: "C"
        },
        {
            question: "Вопрос 2: Какой тип стрижки лучше всего подходит для тонких волос?",
            options: ["A) Каскад", "B) Пикси", "C) Боб", "D) Лесенка"],
            correctAnswer: "A"
        },
        {
            question: "Вопрос 3: Какой продукт используется для фиксации прически и придания ей блеска?",
            options: ["A) Мусс", "B) Лак для волос", "C) Воск", "D) Гель"],
            correctAnswer: "B"
        },
        {
            question: "Вопрос 4: Какой инструмент используется для выпрямления волос?",
            options: ["A) Плойка", "B) Утюжок", "C) Бигуди", "D) Фен"],
            correctAnswer: "B"
        },
        {
            question: "Вопрос 5: Какой продукт помогает защитить волосы от термического воздействия?",
            options: ["A) Спрей для термозащиты", "B) Кондиционер", "C) Масло для волос", "D) Шампунь"],
            correctAnswer: "A"
        },
        {
            question: "Вопрос 6: Какой тип стрижки подходит для густых волос?",
            options: ["A) Каскад", "B) Пикси", "C) Боб", "D) Лесенка"],
            correctAnswer: "D"
        },
        {
            question: "Вопрос 7: Какой инструмент используется для создания локонов?",
            options: ["A) Плойка", "B) Утюжок", "C) Бигуди", "D) Фен с насадкой-диффузором"],
            correctAnswer: "A"
        },
        {
            question: "Вопрос 8: Какой продукт используется для укладки волос?",
            options: ["A) Мусс", "B) Лак для волос", "C) Воск", "D) Гель"],
            correctAnswer: "C"
        },
        {
            question: "Вопрос 9: Какой инструмент используется для создания объема на макушке?",
            options: ["A) Плойка", "B) Утюжок", "C) Брашинг", "D) Фен с насадкой-диффузором"],
            correctAnswer: "D"
        },
        {
            question: "Вопрос 10: Какой продукт помогает придать волосам объем?",
            options: ["A) Мусс", "B) Лак для волос", "C) Воск", "D) Гель"],
            correctAnswer: "A"
        },
        {
            question: "Вопрос 11: Какой инструмент используется для создания кудрей?",
            options: ["A) Плойка", "B) Утюжок", "C) Бигуди", "D) Фен с насадкой-диффузором"],
            correctAnswer: "C"
        },
        {
            question: "Вопрос 12: Какой продукт используется для увлажнения волос?",
            options: ["A) Спрей для термозащиты", "B) Кондиционер", "C) Масло для волос", "D) Шампунь"],
            correctAnswer: "B"
        },
        {
            question: "Вопрос 13: Какой тип стрижки подходит для круглого лица?",
            options: ["A) Каскад", "B) Пикси", "C) Боб", "D) Лесенка"],
            correctAnswer: "C"
        },
        {
            question: "Вопрос 14: Какой инструмент используется для создания пляжных волн?",
            options: ["A) Плойка", "B) Утюжок", "C) Бигуди", "D) Фен с насадкой-диффузором"],
            correctAnswer: "D"
        },
        {
            question: "Вопрос 15: Какой продукт помогает придать волосам блеск?",
            options: ["A) Мусс", "B) Лак для волос", "C) Воск", "D) Гель"],
            correctAnswer: "B"
        },
        {
            question: "Вопрос 16: Какой инструмент используется для создания гладких волос?",
            options: ["A) Плойка", "B) Утюжок", "C) Бигуди", "D) Фен с насадкой-диффузором"],
            correctAnswer: "B"
        },
        {
            question: "Вопрос 17: Какой продукт используется для фиксации прически?",
            options: ["A) Мусс", "B) Лак для волос", "C) Воск", "D) Гель"],
            correctAnswer: "B"
        },
        {
            question: "Вопрос 18: Какой инструмент используется для создания объема у корней волос?",
            options: ["A) Плойка", "B) Утюжок", "C) Брашинг", "D) Фен с насадкой-диффузором"],
            correctAnswer: "C"
        },
        {
            question: "Вопрос 19: Какой тип стрижки лучше всего подходит для тонких волос?",
            options: ["A) Каскад", "B) Пикси", "C) Боб", "D) Лесенка"],
            correctAnswer: "A"
        },
        {
            question: "Вопрос 20: Какой продукт используется для фиксации прически и придания ей блеска?",
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
            finishImage.classList.add('show');
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

            options.forEach(opt => opt.disabled = true);

            if (selectedAnswer === correctAnswer) {
                goodAudio.play();
                this.classList.add('correct');
                yesImage.classList.add('slide-in-out');
                setTimeout(() => {
                    yesImage.classList.remove('slide-in-out');
                    currentQuestionIndex++;
                    loadQuestion();
                    options.forEach(opt => opt.disabled = false);
                }, 4000);
            } else {
                errorAudio.play();
                this.classList.add('wrong');
                noImage.classList.add('slide-in-out');
                setTimeout(() => {
                    noImage.classList.remove('slide-in-out');
                    options.forEach(opt => opt.disabled = false);
                }, 4000);
            }
        });
    });

    loadQuestion();
});
