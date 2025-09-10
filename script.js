document.querySelectorAll('.code-item')
.forEach(span => {
    const targetId = this.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
        behavior: 'smooth', // ПЛАВНАЯ прокрутка
        block: 'start'      // Прокрутить к ВЕРХУ раздела
    });
});