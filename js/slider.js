document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.s5__slider-wrapper');
  const cards = document.querySelectorAll('.s5__card');
  const btnPrev = document.querySelector('.s5__nav-btn--prev');
  const btnNext = document.querySelector('.s5__nav-btn--next');
  let activeIndex = 0;

  function activateCard(index) {
    if (index < 0 || index >= cards.length) return;
    activeIndex = index;

    // 1. Оновлюємо класи
    cards.forEach((card, i) => {
      if (i === activeIndex) {
        card.classList.add('is-active');
      } else {
        card.classList.remove('is-active');
      }
    });

    // 2. Жорстка прив'язка до лівого краю
    // Знаходимо ширину будь-якої НЕАКТИВНОЇ картки
    const inactiveCard = Array.from(cards).find(c => !c.classList.contains('is-active')) || cards[0];
    const inactiveWidth = inactiveCard.offsetWidth;
    
    // Отримуємо поточний gap з CSS
    const gap = parseFloat(window.getComputedStyle(wrapper).gap) || 0;

    // Рахуємо точний зсув: (кількість попередніх карток) * (ширина неактивної + gap)
    const shift = activeIndex * (inactiveWidth + gap);

    // Зсуваємо весь контейнер
    wrapper.style.transform = `translateX(-${shift}px)`;
  }

  // Клік по картці
  cards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      activateCard(idx);
    });
  });

  // Кнопки навігації
  if (btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => activateCard(activeIndex - 1));
    btnNext.addEventListener('click', () => activateCard(activeIndex + 1));
  }

  // Логіка свайпів
  let startX = 0;
  let isDragging = false;
  const swipeThreshold = 50;

  wrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    handleSwipe(startX, e.clientX);
  });

  wrapper.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].screenX;
  }, { passive: true });

  wrapper.addEventListener('touchend', (e) => {
    handleSwipe(startX, e.changedTouches[0].screenX);
  }, { passive: true });

  function handleSwipe(start, end) {
    const difference = start - end;
    if (Math.abs(difference) >= swipeThreshold) {
      if (difference > 0) {
        activateCard(activeIndex + 1); // Вліво
      } else {
        activateCard(activeIndex - 1); // Вправо
      }
    }
  }

  // Оновлюємо позицію при ресайзі вікна (щоб адаптив не ламався)
  window.addEventListener('resize', () => {
    activateCard(activeIndex);
  });

  // Ініціалізація першого слайду
  setTimeout(() => activateCard(0), 50);
});