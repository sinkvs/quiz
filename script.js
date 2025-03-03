document.addEventListener('DOMContentLoaded', function() {
    const continueButton = document.getElementById('continueButton');
    const initialContent = document.getElementById('initialContent');
    const welcomeContent = document.getElementById('welcomeContent');

    continueButton.addEventListener('click', function() {
        console.log('Button clicked'); // Отладочное сообщение

        initialContent.classList.add('hidden');

        setTimeout(() => {
            welcomeContent.classList.remove('hidden');
        }, 500);
    });
});
