document.addEventListener('DOMContentLoaded', function() {
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
    const backgroundImage = document.getElementById('backgroundImage');

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        options.forEach((option, index) => {
            option.textContent = currentQuestion.options[index];
            option.dataset.answer = currentQuestion.options[index].charAt(0);
        });
    }

    options.forEach(option => {
        option.addEventListener('click', function() {
            const selectedAnswer = this.dataset.answer;
            const correctAnswer = questions[currentQuestionIndex].correctAnswer;

            if (selectedAnswer === correctAnswer) {
                goodAudio.play();
                backgroundImage.classList.add('slide-in');
                setTimeout(() => {
                    backgroundImage.classList.remove('slide-in');
                    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
                    loadQuestion();
                }, 3000);
            } else {
                errorAudio.play();
                backgroundImage.classList.add('slide-in');
                setTimeout(() => {
                    backgroundImage.classList.remove('slide-in');
                }, 3000);
            }
        });
    });

    loadQuestion();
});
