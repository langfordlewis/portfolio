document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('highlight'));
    card.addEventListener('mouseleave', () => card.classList.remove('highlight'));
});