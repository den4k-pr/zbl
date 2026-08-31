document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.s5__slider-wrapper');
  const cards = document.querySelectorAll('.s5__card');
  const timeline = document.querySelector('.s5__timeline');
  const btnPrev = document.querySelector('.s5__nav-btn--prev');
  const btnNext = document.querySelector('.s5__nav-btn--next');
  let activeIndex = 0;
  let isAnimating = false;

  function activateCard(index) {
    if (index < 0 || index >= cards.length) return;
    
    // Рахуємо ширину ДО того, як зміняться класи (важливо для мобайлу)
    const inactiveCard = Array.from(cards).find(c => !c.classList.contains('is-active'));
    const inactiveWidth = inactiveCard ? inactiveCard.offsetWidth : 0;
    const gap = parseFloat(window.getComputedStyle(wrapper).gap) || 0;

    activeIndex = index;

    // 1. Оновлюємо класи (додано is-passed для ефекту стопки на ПК)
    cards.forEach((card, i) => {
      if (i === activeIndex) {
        card.classList.add('is-active');
        card.classList.remove('is-passed');
      } else if (i < activeIndex) {
        card.classList.remove('is-active');
        card.classList.add('is-passed');
      } else {
        card.classList.remove('is-active');
        card.classList.remove('is-passed');
      }
    });

    // 2. Зсув (ТІЛЬКИ ДЛЯ МОБАЙЛУ). На ПК обгортка стоїть на місці.
    if (window.innerWidth < 864) {
      const shift = activeIndex * (inactiveWidth + gap);
      wrapper.style.transform = `translateX(-${shift}px)`;
    } else {
      wrapper.style.transform = `translateX(0)`;
    }
  }

  // Клік по картці
  cards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      activateCard(idx);
    });
  });

  // Кнопки навігації (тільки мобайл)
  if (btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => activateCard(activeIndex - 1));
    btnNext.addEventListener('click', () => activateCard(activeIndex + 1));
  }

  // СВАЙПИ (тільки для телефонів)
  let startX = 0;
  let isDragging = false;
  const swipeThreshold = 50;

  wrapper.addEventListener('mousedown', (e) => {
    if (window.innerWidth >= 864) return;
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
      if (difference > 0) activateCard(activeIndex + 1); // Вліво
      else activateCard(activeIndex - 1); // Вправо
    }
  }

  // СКРОЛ МИШКОЮ З ФІКСАЦІЄЮ ЕКРАНА (тільки для ПК)
  window.addEventListener('wheel', (e) => {
    if (window.innerWidth < 864 || !timeline) return;

    const rect = timeline.getBoundingClientRect();
    const vh = window.innerHeight;
    
    // Перевіряємо, чи слайдер знаходиться в зоні видимості (наприклад, зверху екрана)
    if (rect.top >= -50 && rect.top <= vh * 0.35) {
      const dir = e.deltaY > 0 ? 1 : (e.deltaY < 0 ? -1 : 0);
      if (dir === 0) return;

      // Скрол вниз (гортаємо вперед)
      if (dir > 0 && activeIndex < cards.length - 1) {
        e.preventDefault(); // Блокуємо скрол сторінки
        if (!isAnimating) {
          snapToSlider(rect.top, vh * 0.1); // Центруємо слайдер
          activateCard(activeIndex + 1);
          lockAnimation();
        }
      } 
      // Скрол вгору (гортаємо назад)
      else if (dir < 0 && activeIndex > 0) {
        e.preventDefault(); // Блокуємо скрол сторінки
        if (!isAnimating) {
          snapToSlider(rect.top, vh * 0.1); // Центруємо слайдер
          activateCard(activeIndex - 1);
          lockAnimation();
        }
      }
      // Якщо дійшли до кінця - e.preventDefault() не викликається, сторінка скролиться далі
    }
  }, { passive: false });

  // Допоміжна функція для ідеальної фіксації (snap) секції при скролі
  function snapToSlider(currentTop, targetOffset) {
    if (Math.abs(currentTop - targetOffset) > 5) {
      window.scrollBy({ top: currentTop - targetOffset, behavior: 'auto' });
    }
  }

  // Блокування на час анімації, щоб картки не пролітали за мілісекунду
  function lockAnimation() {
    isAnimating = true;
    setTimeout(() => { isAnimating = false; }, 600); // 600ms = час CSS transition
  }

  window.addEventListener('resize', () => { activateCard(activeIndex); });
  
  setTimeout(() => activateCard(0), 50);
});