const giftCard = document.querySelector('.gift-card');

window.addEventListener('scroll', () => {
  const position = giftCard.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (position < screenPosition) {
    giftCard.classList.add('show');
  }
});