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
            answers: ["A) `free`", "B) `malloc`", "C) `realloc`"],
            correct: 1
        },
        {
            question: "Что такое утечка памяти и как ее избежать в языке C?",
            answers: ["A) Это когда память не освобождается после использования.", "B) Это когда используется слишком много памяти.", "C) Это когда память выделяется, но не используется."],
            correct: 0
        },
        {
            question: "Как женщина решает, что надеть утром?",
            answers: ["A) Смотрит на погоду", "B) Перемеряет весь гардероб", "C) Спрашивает совета у подруги"],
            correct: 1
        },
        {
            question: "Что такое \"фуа-гра\"?",
            answers: ["A) Вид сыра", "B) Паштет из утиной печени", "C) Десерт из фруктов"],
            correct: 1
        },
        {
            question: "Какой напиток помогает женщинам справляться с любыми трудностями?",
            answers: ["A) Чай", "B) Кофе", "C) Вино"],
            correct: 2
        },
        {
            question: "Как программист объясняет слово «рекурсия»?",
            answers: ["A) «Чтобы понять рекурсию, нужно понять рекурсию»", "B) «Это когда ты забыл, где начал»", "C) «Магия с стеком»"],
            correct: 0
        },
        {
            question: "Что такое указатель на функцию в языке C?",
            answers: ["A) Это указатель, который хранит адрес переменной.", "B) Это указатель, который хранит адрес функции.", "C) Это указатель, который хранит значение функции."],
            correct: 1
        },
        {
            question: "Почему женщины всегда правы?",
            answers: ["A) Потому что они всегда правы", "B) Потому что они так решили", "C) Потому что это закон природы"],
            correct: 0
        },
        {
            question: "Какой символ используется для обозначения однострочного комментария в языке C?",
            answers: ["A) `//`", "B) `/* ... */`", "C) `--`"],
            correct: 0
        },
        {
            question: "Какой тип данных используется для хранения целых чисел в языке C?",
            answers: ["A) `float`", "B) `int`", "C) `double`"],
            correct: 1
        },
        {
            question: "Как объявить массив в языке C?",
            answers: ["A) `array[5] = {1, 2, 3, 4, 5};`", "B) `int array[] = {1, 2, 3, 4, 5};`", "C) `int array(5) = {1, 2, 3, 4, 5};`"],
            correct: 1
        },
        {
            question: "Что программисты пьют, чтобы превратить мысли в код?",
            answers: ["A) Кровь врагов", "B) Энергетики", "C) Кофе (желательно тройной эспрессо)"],
            correct: 2
        },
        {
            question: "Что говорит программист, когда код работает с первого раза?",
            answers: ["A) «Так не бывает!»", "B) «Я гений!»", "C) «Наверное, это сон»"],
            correct: 0
        },
        {
            question: "Что делает женщина, когда мужчина говорит: \"Я все сделал\"?",
            answers: ["A) Верит", "B) Проверяет", "C) Хвалит"],
            correct: 1
        },
        {
            question: "Какой супергерой мечты каждой женщины?",
            answers: ["A) Супермен", "B) Человек-паук", "C) Мужчина, который убирает за собой"],
            correct: 2
        },
        {
            question: "Что такое \"идеальный отпуск\" для женщины?",
            answers: ["A) Поход в горы", "B) Шопинг в Париже", "C) Рыбалка на озере"],
            correct: 1
        },
        {
            question: "Какого блюда не существует?",
            answers: ["A) Конь в пальто", "B) Цыпленок в рубашке", "C) Рулька в рубашке"],
            correct: 1
        },
        {
            question: "Что такое \"чернина\"?",
            answers: ["A) Итальянская паста", "B) Испанский суп из черной фасоли", "C) Мексиканский соус"],
            correct: 1
        },
        {
            question: "Почему кошки обожают клавиатуры?",
            answers: ["A) Хотят написать свой код", "B) Это тёплая подушка с кнопочками", "C) Мешают хозяину работать"],
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
