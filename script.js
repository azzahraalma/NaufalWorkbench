const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    observer.unobserve(entry.target); 
    }
});
}, {
threshold: 0.15
});

items.forEach(item => {
observer.observe(item);
});

const cards = document.querySelectorAll('.work-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});
