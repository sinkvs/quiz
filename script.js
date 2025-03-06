// script.js
document.addEventListener('DOMContentLoaded', () => {
    const startLeo = document.getElementById('start-leo');
    const buke = document.getElementById('buke');
    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const errorAudio = document.getElementById('errorAudio');
    const goodAudio = document.getElementById('goodAudio');
    const yesImage = document.getElementById('yesImage');
    const noImage = document.getElementById('noImage');
    const backgroundAudio = document.getElementById('backgroundAudio');

    const questions = [
        {
            question: "Какой продукт используют для приготовления бешамеля?",
            answers: ["A) Сметана", "B) Молоко", "C) Сливки"],
            correctAnswer: "C"
        },
        {
            question: "Какой оператор используется для выделения памяти под массив в языке C?",
            answers: ["A) `free`", "B) `malloc`", "C) `realloc`"],
            correctAnswer: "B"
        },
        {
            question: "Что такое утечка памяти и как ее избежать в языке C?",
            answers: ["A) Это когда память не освобождается после использования.", "B) Это когда используется слишком много памяти.", "C) Это когда память выделяется, но не используется."],
            correctAnswer: "A"
        },
        {
            question: "Как женщина решает, что надеть утром?",
            answers: ["A) Смотрит на погоду", "B) Перемеряет весь гардероб", "C) Спрашивает совета у подруги"],
            correctAnswer: "B"
        },
        {
            question: "Что такое \"фуа-гра\"?",
            answers: ["A) Вид сыра", "B) Паштет из утиной печени", "C) Десерт из фруктов"],
            correctAnswer: "B"
        },
        {
            question: "Какой напиток помогает женщинам справляться с любыми трудностями?",
            answers: ["A) Чай", "B) Кофе", "C) Вино"],
            correctAnswer: "C"
        },
        {
            question: "Как программист объясняет слово «рекурсия»?",
            answers: ["A) «Чтобы понять рекурсию, нужно понять рекурсию»", "B) «Это когда ты забыл, где начал»", "C) «Магия с стеком»"],
            correctAnswer: "A"
        },
        {
            question: "Что такое указатель на функцию в языке C?",
            answers: ["A) Это указатель, который хранит адрес переменной.", "B) Это указатель, который хранит адрес функции.", "C) Это указатель, который хранит значение функции."],
            correctAnswer: "B"
        },
        {
            question: "Почему женщины всегда правы?",
            answers: ["A) Потому что они всегда правы", "B) Потому что они так решили", "C) Потому что это закон природы"],
            correctAnswer: "A"
        },
        {
            question: "Какой символ используется для обозначения однострочного комментария в языке C?",
            answers: ["A) `//`", "B) `/* ... */`", "C) `--`"],
            correctAnswer: "A"
        },
        {
            question: "Какой тип данных используется для хранения целых чисел в языке C?",
            answers: ["A) `float`", "B) `int`", "C) `double`"],
            correctAnswer: "B"
        },
        {
            question: "Как объявить массив в языке C?",
            answers: ["A) `array[5] = {1, 2, 3, 4, 5};`", "B) `int array[] = {1, 2, 3, 4, 5};`", "C) `int array(5) = {1, 2, 3, 4, 5};`"],
            correctAnswer: "B"
        },
        {
            question: "Что программисты пьют, чтобы превратить мысли в код?",
            answers: ["A) Кровь врагов", "B) Энергетики", "C) Кофе (желательно тройной эспрессо)"],
            correctAnswer: "C"
        },
        {
            question: "Что говорит программист, когда код работает с первого раза?",
            answers: ["A) «Так не бывает!»", "B) «Я гений!»", "C) «Наверное, это сон»"],
            correctAnswer: "A"
        },
        {
            question: "Что делает женщина, когда мужчина говорит: \"Я все сделал\"?",
            answers: ["A) Верит", "B) Проверяет", "C) Хвалит"],
            correctAnswer: "B"
        },
        {
            question: "Какой супергерой мечты каждой женщины?",
            answers: ["A) Супермен", "B) Человек-паук", "C) Мужчина, который убирает за собой"],
            correctAnswer: "C"
        },
        {
            question: "Что такое \"идеальный отпуск\" для женщины?",
            answers: ["A) Поход в горы", "B) Шопинг в Париже", "C) Рыбалка на озере"],
            correctAnswer: "B"
        },
        {
            question: "Какого блюда не существует?",
            answers: ["A) Конь в пальто", "B) Цыпленок в рубашке", "C) Рулька в рубашке"],
            correctAnswer: "B"
        },
        {
            question: "Что такое \"чернина\"?",
            answers: ["A) Итальянская паста", "B) Испанский суп из черной фасоли", "C) Мексиканский соус"],
            correctAnswer: "B"
        },
        {
            question: "Почему кошки обожают клавиатуры?",
            answers: ["A) Хотят написать свой код", "B) Это тёплая подушка с кнопочками", "C) Мешают хозяину работать"],
            correctAnswer: "A"
        }
    ];

    let currentQuestionIndex = 0;

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
    }

    function checkAnswer(selectedAnswer) {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        if (selectedAnswer === correctAnswer) {
            goodAudio.play();
            document.querySelector('.correct').classList.remove('correct');
            yesImage.style.opacity = 1;
            yesImage.classList.add('slide-in-out');
            setTimeout(() => {
                yesImage.style.opacity = 0;
                yesImage.classList.remove('slide-in-out');
                currentQuestionIndex++;
                loadQuestion();
            }, 4000);
        } else {
            errorAudio.play();
            document.querySelector('.wrong').classList.remove('wrong');
            noImage.style.opacity = 1;
            noImage.classList.add('slide-in-out');
            setTimeout(() => {
                noImage.style.opacity = 0;
                noImage.classList.remove('slide-in-out');
            }, 4000);
        }
    }
});
