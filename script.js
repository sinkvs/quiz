document.getElementById('continueButton').addEventListener('click', function() {
    const initialContent = document.getElementById('initialContent');
    const welcomeContent = document.getElementById('welcomeContent');

    initialContent.classList.add('hidden');

    setTimeout(() => {
        welcomeContent.classList.remove('hidden');
    }, 500);
});
