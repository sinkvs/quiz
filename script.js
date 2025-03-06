document.getElementById('start-image').addEventListener('dblclick', startQuiz);

let currentQuestion = 0;
let buttonsDisabled = false;

const questions = [
    { question: "Какой инструмент используется для создания объема у корней волос?", answers: ["Плойка", "Брашинг", "Фен с насадкой-диффузором"], correctAnswer: 1 },
    { question: "Какой тип стрижки лучше всего подходит для тонких волос?", answers: ["Каскад", "Пикси", "Боб"], correctAnswer: 0 },
    { question: "По какому документу вносятся изменения при корректировке КД?", answers: ["Протокол", "Решение", "Извещение"], correctAnswer: 2 },
    { question: "Какой продукт используется для фиксации прически и придания ей блеска?", answers: ["Мусс", "Лак для волос", "Воск"], correctAnswer: 1 },
    { question: "Какое обозначение или шифр извещений на изменение правильно?", answers: ["ОНИИ", "ЯИМЛ", "НИИП"], correctAnswer: 1 },
    { question: "Почему клиенты всегда просят \"что-то новенькое\", но не хотят ничего менять?", answers: ["Они боятся перемен", "Они не доверяют парикмахеру", "Они не знают, чего хотят"], correctAnswer: 2 },
    { question: "Какой инструмент используется для расчесывания волос перед мытьем?", answers: ["Расческа с редкими зубьями", "Щетка с натуральной щетиной", "Расческа с частыми зубьями"], correctAnswer: 0 },
    { question: "Какой тип укладки лучше всего подходит для кудрявых волос?", answers: ["Гладкая укладка", "Объемная укладка", "Естественные кудри"], correctAnswer: 2 },
    { question: "Какой продукт используется для придания волосам текстуры и объема?", answers: ["Мусс", "Сухой шампунь", "Кондиционер"], correctAnswer: 1 },
    { question: "Что делает парикмахер, когда клиент говорит: \"Сделайте что-нибудь\"?", answers: ["Предлагает стрижку под горшок", "Делает классический боб", "Спрашивает, какие примеры нравятся клиенту"], correctAnswer: 2 },
    { question: "Почему парикмахеры всегда спрашивают о планах на отпуск?", answers: ["Чтобы отвлечь клиента от стрижки", "Чтобы узнать, когда клиент вернется", "Чтобы порекомендовать уход для волос в поездке"], correctAnswer: 0 },
    { question: "Как расшифровывается ВГК?", answers: ["Вспомогательная горноспасательная команда", "Всемирный газетный конгресс", "Ведомость главного конструктора"], correctAnswer: 2 },
    { question: "Что делает женщина, когда хочет узнать мнение о своем наряде?", answers: ["Спрашивает у мужчины", "Смотрит в зеркало", "Спрашивает у подруги"], correctAnswer: 2 },
    { question: "Какой ингредиент не используется в классическом рецепте борща?", answers: ["Свекла", "Томатная паста", "Куркума"], correctAnswer: 2 },
    { question: "За какой предмет женской одежды прячутся трусливые мужчины?", answers: ["Сарафан", "Фартук", "Юбка"], correctAnswer: 2 },
    { question: "Какого блюда не существует?", answers: ["Конь в пальто", "Цыпленок в рубашке", "Рулька в рубашке"], correctAnswer: 1 },
    { question: "Что из перечисленного — не головной убор?", answers: ["Феска", "Порк-пай", "Пальто"], correctAnswer: 2 },
    { question: "Какой напиток поднимает настроение в любой ситуации?", answers: ["Мампоэр", "Мамахуана", "Шампанское"], correctAnswer: 2 },
    { question: "По какому документу заказывают изделие?", answers: ["По техническим условиям", "По спецификации", "По инструкции настройки"], correctAnswer: 0 },
    { question: "Что такое балаяж и как он отличается от обычного окрашивания?", answers: ["Это техника окрашивания, при которой краска наносится только на кончики волос.", "Это техника окрашивания, при которой краска наносится на отдельные пряди волос для создания эффекта выгоревших волос.", "Это техника окрашивания, при которой краска наносится только на корни волос."], correctAnswer: 1 }
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
