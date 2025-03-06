document.getElementById('start-image').addEventListener('dblclick', startQuiz);

let currentQuestion = 0;
let buttonsDisabled = false;

const questions = [
    { question: "Какой оператор используется для освобождения памяти в языке C?", answers: ["malloc", "free", "realloc"], correctAnswer: 1 },
    { question: "Что такое переполнение буфера в языке C?", answers: ["Это когда память не освобождается после использования.", "Это когда записывается больше данных, чем может вместить буфер.", "Это когда используется слишком много памяти."], correctAnswer: 1 },
    { question: "Что делает программист, обнаружив баг в своём коде?", answers: ["Взывает к богам", "Называет его «фичей»", "Плачет в уголке"], correctAnswer: 1 },
    { question: "Что такое указатель на указатель в языке C?", answers: ["Это указатель, который хранит адрес переменной.", "Это указатель, который хранит адрес другого указателя.", "Это указатель, который хранит значение переменной."], correctAnswer: 1 },
    { question: "Что такое «Git» на самом деле?", answers: ["Магическая машина времени для кода", "Способ вызвать хаос в проекте", "Игра в «найди отличия»"], correctAnswer: 0 },
    { question: "Какой символ используется для обозначения многострочного комментария в языке C?", answers: ["//", "/* ... */", "--"], correctAnswer: 1 },
    { question: "Какой тип данных используется для хранения символов в языке C?", answers: ["float", "char", "double"], correctAnswer: 1 },
    { question: "Как объявить переменную типа `double` в языке C?", answers: ["float x;", "char x;", "double x;"], correctAnswer: 2 },
    { question: "Как выбраться из бесконечного цикла?", answers: ["Перезагрузить всё, включая свою жизнь", "Ждать апокалипсиса", "Смириться и жить в нём"], correctAnswer: 0 },
    { question: "Почему все переменные называются «temp»?", answers: ["Потому что лень придумывать имена", "Это секретный код", "«Temp» — это стильно"], correctAnswer: 0 },
    { question: "Что такое \"севиче\"?", answers: ["Перуанское блюдо из сырой рыбы", "Мексиканский суп", "Испанский десерт"], correctAnswer: 0 },
    { question: "Как женщина выбирает ресторан для ужина?", answers: ["По отзывам в интернете", "По количеству лайков в Instagram", "По рекомендации подруги"], correctAnswer: 2 },
    { question: "Что делает женщина, когда хочет узнать новости?", answers: ["Читает газету", "Спрашивает у подруги", "Смотрит телевизор"], correctAnswer: 1 },
    { question: "Какой фильм женщина может смотреть бесконечно?", answers: ["Титаник", "Терминатор", "Звездные войны"], correctAnswer: 0 },
    { question: "Что такое \"рататуй\"?", answers: ["Французское овощное рагу", "Итальянский суп", "Мексиканский десерт"], correctAnswer: 0 },
    { question: "Как женщина понимает, что пора менять гардероб?", answers: ["Когда начинается новый сезон", "Когда подруга купила новую вещь", "Когда в шкафу нет места"], correctAnswer: 2 },
    { question: "Какой аксессуар никогда не будет лишним?", answers: ["Шарф", "Сумка", "Очки"], correctAnswer: 1 },
    { question: "Какого блюда не существует?", answers: ["Конь в пальто", "Цыпленок в рубашке", "Рулька в рубашке"], correctAnswer: 1 },
    { question: "Какой напиток поднимает настроение в любой ситуации?", answers: ["Мампоэр", "Мамахуана", "Шампанское"], correctAnswer: 2 },
    { question: "Что делает женщина, когда хочет изменить интерьер?", answers: ["Переставляет мебель", "Покупает новые шторы", "Меняет обои"], correctAnswer: 0 }
];

function startQuiz() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');

    // Предварительная загрузка изображений
    const images = ['yes.jpg', 'no.jpg', 'finish_capture.png'];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Start background music
    const backgroundAudio = document.getElementById('background-audio');
    backgroundAudio.play();

    showQuestion();
}

function showQuestion() {
    const questionText = document.getElementById('question-text');
    questionText.textContent = questions[currentQuestion].question;

    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((button, index) => {
        button.textContent = questions[currentQuestion].answers[index];
        button.onclick = () => checkAnswer(index);
    });

    buttonsDisabled = false;
}

function checkAnswer(selectedAnswer) {
    if (buttonsDisabled) return;

    buttonsDisabled = true;
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const feedbackImage = document.getElementById('feedback-image');
    feedbackImage.classList.remove('hidden');

    if (selectedAnswer === correctAnswer) {
        feedbackImage.src = 'yes.jpg';
        feedbackImage.style.animation = 'slide-from-right 1s forwards';

        // Добавляем класс для мигания зеленым
        const selectedButton = document.querySelectorAll('.answer-btn')[selectedAnswer];
        selectedButton.classList.add('blink-green');
        console.log('Added blink-green to:', selectedButton);

        // Проигрываем звук правильного ответа
        const goodAudio = document.getElementById('good-audio');
        goodAudio.play();

        setTimeout(() => {
            feedbackImage.classList.add('hidden');
            feedbackImage.style.animation = '';

            // Удаляем классы мигания
            document.querySelectorAll('.answer-btn').forEach(button => button.classList.remove('blink-red', 'blink-green'));

            currentQuestion++;
            if (currentQuestion >= questions.length) {
                showFinishScreen();
            } else {
                showQuestion();
            }
        }, 3000);
    } else {
        feedbackImage.src = 'no.jpg';
        feedbackImage.style.animation = 'slide-from-left 1s forwards';

        // Добавляем класс для мигания красным
        const selectedButton = document.querySelectorAll('.answer-btn')[selectedAnswer];
        selectedButton.classList.add('blink-red');
        console.log('Added blink-red to:', selectedButton);

        // Проигрываем звук неправильного ответа
        const errorAudio = document.getElementById('error-audio');
        errorAudio.play();

        setTimeout(() => {
            feedbackImage.classList.add('hidden');
            feedbackImage.style.animation = '';

            // Удаляем классы мигания
            document.querySelectorAll('.answer-btn').forEach(button => button.classList.remove('blink-red'));

            buttonsDisabled = false;
        }, 3000);
    }
}

function showFinishScreen() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('finish-screen').classList.remove('hidden');
}
