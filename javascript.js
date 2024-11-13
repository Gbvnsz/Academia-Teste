// Animação de rolar a pági
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});
