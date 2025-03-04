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
    const slideImage = document.getElementById('slideImage');

    function loadQuestion() {
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
                setTimeout(() => {
                    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
                    loadQuestion();
                }, 1000);
            } else {
                errorAudio.play();
                this.classList.add('wrong');
                slideImage.classList.add('slide-in-out');
                setTimeout(() => {
                    slideImage.classList.remove('slide-in-out');
                }, 2000);
            }
        });
    });

    loadQuestion();
});
