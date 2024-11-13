// Animação de rolar a pági
document.addEventListener('scroll', function() {
    const section = document.querySelector('.parte3');
    if (window.scrollY > 100) {
        section.classList.add('animate');
    } else {
        section.classList.remove('animate');
    }
});
