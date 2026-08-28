document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.s5__slider-wrapper');
  const cards = document.querySelectorAll('.s5__card');
  const btnPrev = document.querySelector('.s5__nav-btn--prev');
  const btnNext = document.querySelector('.s5__nav-btn--next');
  let activeIndex = 0; // Перший слайд активний за замовчуванням

  // Функція перемикання активної картки
  function activateCard(index) {
    if (index < 0 || index >= cards.length) return;
    activeIndex = index;

    cards.forEach((card, i) => {
      if (i === activeIndex) {
        card.classList.add('is-active');
        
        // Плавний скрол контейнера до активної картки
        const offsetLeft = card.offsetLeft - wrapper.offsetLeft;
        wrapper.scrollTo({
          left: offsetLeft - 16, // 16px відступ для краси
          behavior: 'smooth'
        });

      } else {
        card.classList.remove('is-active');
      }
    });
  }

  // 1. Клік безпосередньо по самій картці
  cards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      activateCard(idx);
    });
  });

  // 2. Кнопки навігації (для мобайлу)
  if (btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => activateCard(activeIndex - 1));
    btnNext.addEventListener('click', () => activateCard(activeIndex + 1));
  }
});