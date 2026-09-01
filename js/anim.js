document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. АНІМАЦІЯ КОЛЬОРІВ (Скрол)
  // ==========================================
  const colorElement = document.querySelector('.s1__hero-line--green');
  
  if (colorElement) {
    const colors = ['#91FF6A', '#D9A439', '#30D1E6', '#E630DE'];
    let colorIndex = 0;
    let cycleTimer = null;

    function startColorCycling() {
      if (cycleTimer) return; // Вже запущено
      cycleTimer = setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        colorElement.style.color = colors[colorIndex];
      }, 200);
    }

    function stopColorCycling() {
      if (!cycleTimer) return;
      clearInterval(cycleTimer);
      cycleTimer = null;
      // За бажанням: можна скинути на дефолтний колір, розкоментувавши рядок нижче
      // colorElement.style.color = colors[0]; 
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        startColorCycling(); // Скролимо вниз — крутимо кольори
      } else {
        stopColorCycling();  // Дійшли до верху — зупиняємо
      }
    }, { passive: true });
  }

  // ==========================================
  // 2. АНІМАЦІЯ ІКОНКИ (Обертання щоразу)
  // ==========================================
  const iconElement = document.querySelector('.s1__hero-icon');
  
  if (iconElement) {
    let currentAngle = 0;

    const rotateIcon = () => {
      currentAngle += 360; // Щоразу додаємо 360 градусів
      iconElement.style.transform = `rotate(${currentAngle}deg)`;
    };

    // Спрацьовує при наведенні мишкою (ПК)
    iconElement.addEventListener('mouseenter', rotateIcon);
    // Спрацьовує при тапі/кліку (Мобайл/ПК)
    iconElement.addEventListener('click', rotateIcon);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const magneticElements = document.querySelectorAll('.magnetic');

  magneticElements.forEach((elem) => {
    elem.addEventListener('mousemove', (e) => {
      // Отримуємо координати та розміри елемента
      const rect = elem.getBoundingClientRect();
      
      // Визначаємо центр елемента
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Вираховуємо відстань від курсора до центру
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // Сила магніту (чим менше число, тим менший радіус руху). 
      // 0.3 означає, що елемент зсунеться на 30% від відстані до курсора.
      const strength = 0.3; 
      
      const moveX = distanceX * strength;
      const moveY = distanceY * strength;

      // Додаємо клас для швидкого руху і застосовуємо трансформацію
      elem.classList.add('is-moving');
      elem.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // Коли курсор залишає елемент — скидаємо позицію
    elem.addEventListener('mouseleave', () => {
      elem.classList.remove('is-moving');
      elem.style.transform = `translate(0px, 0px)`;
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const statsContainer = document.querySelector(".s2");
  if (!statsContainer) return;

  const animateNumbers = (element) => {
    // --- ФІКС СТРИБКІВ ТЕКСТУ ---
    // Оскільки фінальний текст (наприклад "100+") вже є в HTML, 
    // ми вимірюємо його ширину і жорстко її фіксуємо ДО того, як почнемо рахувати з нуля.
    const rect = element.getBoundingClientRect();
    element.style.display = "inline-block"; // Щоб min-width гарантовано спрацював
    element.style.minWidth = `${Math.ceil(rect.width)}px`;
    // ----------------------------

    const targetText = element.textContent.trim();
    
    const numericMatch = targetText.match(/[\d.,]+/);
    if (!numericMatch) return;

    const numericString = numericMatch[0];
    const hasDot = numericString.includes('.');
    
    const targetValue = parseFloat(numericString.replace(/\./g, '').replace(/,/g, '.'));
    
    const prefix = targetText.split(numericString)[0] || "";
    const suffix = targetText.split(numericString)[1] || "";

    const duration = 2000; 
    const startTime = performance.now();

    const updateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = progress * (2 - progress);
      const currentValue = easeProgress * targetValue;

      let formattedValue;
      if (hasDot) {
        formattedValue = Math.floor(currentValue).toString().replace(/\B(?=(\d{3})+(?!\n))/g, ".");
      } else {
        formattedValue = Math.floor(currentValue).toString();
      }

      element.textContent = `${prefix}${formattedValue}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        element.textContent = targetText;
      }
    };

    requestAnimationFrame(updateNumber);
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numbers = entry.target.querySelectorAll(".s2__num");
        numbers.forEach(num => animateNumbers(num));
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(statsContainer);
});





document.addEventListener("DOMContentLoaded", () => {
  // Вибираємо всі класи блоків-заголовків, які ви вказали
  const animatedHeaders = document.querySelectorAll(
    '.s3__header, .s5__timeline-header, .s6__header, .s9__header-left, .s10__text-default'
  );

  if (animatedHeaders.length === 0) return;

  // Налаштування для відстеження скролу
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px", // Анімація почнеться трохи вище нижнього краю екрана
    threshold: 0.15 // Спрацює, коли 15% елемента буде в зоні видимості
  };

  const headerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Додаємо клас, який активує CSS-анімацію
        entry.target.classList.add('is-visible');
        
        // Припиняємо відстеження, щоб анімація програлася лише один раз
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Вішаємо спостерігач на кожен заголовок
  animatedHeaders.forEach(header => {
    headerObserver.observe(header);
  });
});




document.addEventListener("DOMContentLoaded", () => {
  // 1. Вибираємо всі картки та картинки всередині вашого гріда
  const elements = document.querySelectorAll('.s3__grid .s3__card, .s3__grid .s3__pic');

  // 2. Одразу додаємо їм базовий клас для початкового стану (щоб не правити HTML руками)
  elements.forEach(el => el.classList.add('fade-element'));

  // 3. Налаштування обзервера
  const observerOptions = {
    root: null,
    // Анімація почнеться, коли елемент перетне нижню межу екрана на 10%
    rootMargin: '0px 0px -10% 0px', 
    threshold: 0.1 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    // Відфільтровуємо лише ті елементи, які зараз з'явилися на екрані
    const visibleEntries = entries.filter(entry => entry.isIntersecting);

    visibleEntries.forEach((entry, index) => {
      // Додаємо затримку (stagger effect), щоб елементи з'являлися по черзі, 
      // якщо вони одночасно потрапили у viewport (наприклад, цілий ряд гріда)
      setTimeout(() => {
        entry.target.classList.add('is-visible');
      }, index * 150); // 150 мс — інтервал між появою сусідніх елементів

      // Зупиняємо спостереження, щоб анімація програвалася лише один раз
      observer.unobserve(entry.target);
    });
  }, observerOptions);

  // 4. Запускаємо спостереження для кожного елемента
  elements.forEach(el => observer.observe(el));
});









document.addEventListener("DOMContentLoaded", () => {
  const s4Section = document.querySelector('.s4');
  
  if (!s4Section) return;

  // 1. Собираем все нужные элементы внутри секции
  const elementsToAnimate = s4Section.querySelectorAll(
    '.s4__title, .s4__subtitle, .s4__text, .s4__visual, .s4__stats, .s4__footer-text'
  );

  // 2. Добавляем им базовый класс скрытия (чтобы не менять HTML)
  elementsToAnimate.forEach(el => el.classList.add('s4-anim'));

  // 3. Настраиваем Observer
  const observerOptions = {
    root: null,
    // Анимация начнется, когда верхний край секции пересечет нижнюю часть экрана на 15%
    rootMargin: '0px 0px -15% 0px', 
    threshold: 0
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Как только секция в зоне видимости — запускаем каскадную анимацию
        elementsToAnimate.forEach(el => el.classList.add('is-visible'));
        
        // Отключаем слежение, чтобы анимация проигралась только один раз
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 4. Следим за всей секцией целиком
  observer.observe(s4Section);
});






document.addEventListener("DOMContentLoaded", () => {
  // 1. Знаходимо всі елементи списку
  const s7Items = document.querySelectorAll('.s7__item');
  if (!s7Items.length) return;

  // 2. Додаємо всім елементам базовий клас для анімації
  s7Items.forEach(item => item.classList.add('s7__item-anim'));

  // 3. Налаштовуємо Observer
  const observerOptions = {
    root: null,
    // Анімація спрацює, коли елемент з'явиться знизу хоча б на 10%
    rootMargin: '0px 0px -10% 0px', 
    threshold: 0
  };

  const observer = new IntersectionObserver((entries, observer) => {
    // Відбираємо тільки ті елементи, які перетнули межу екрана
    const visibleEntries = entries.filter(entry => entry.isIntersecting);

    visibleEntries.forEach((entry, index) => {
      // Додаємо затримку 150мс між появою сусідніх елементів (ефект "драбинки")
      setTimeout(() => {
        entry.target.classList.add('is-visible');
      }, index * 150);

      // Припиняємо стежити за елементом, щоб анімація програлась лише один раз
      observer.unobserve(entry.target);
    });
  }, observerOptions);

  // 4. Запускаємо стеження для кожного елемента
  s7Items.forEach(item => observer.observe(item));
});



document.addEventListener("DOMContentLoaded", () => {
  const s8Section = document.querySelector('.s8');
  if (!s8Section) return;

  // 1. Знаходимо всі елементи, які треба анімувати
  const elementsToAnimate = s8Section.querySelectorAll('.s8__tag, .s8__title, .s8__desc, .s8__btn');

  // 2. Додаємо їм базовий клас скриття
  elementsToAnimate.forEach(el => el.classList.add('s8-anim'));

  // 3. Налаштовуємо Observer
  const observerOptions = {
    root: null,
    // Анімація спрацює, коли секція перетне нижню межу екрана на 15%
    rootMargin: '0px 0px -15% 0px', 
    threshold: 0
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Запускаємо каскадну анімацію для всіх елементів
        elementsToAnimate.forEach(el => el.classList.add('is-visible'));
        
        // Зупиняємо спостереження
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 4. Починаємо стежити за секцією
  observer.observe(s8Section);
});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.s9__card');
  if (!cards.length) return;

  // Функція для визначення центральної картки
  const checkCenterCard = () => {
    // Якщо це ПК (ширина екрана більша за 864px), вимикаємо логіку і прибираємо класи
    if (window.innerWidth >= 864) {
      cards.forEach(card => card.classList.remove('is-active'));
      return;
    }

    // Знаходимо координату центру видимого вікна (viewport)
    const viewportCenter = window.innerHeight / 2;
    
    let closestCard = null;
    let minDistance = Infinity;

    // Перевіряємо кожну картку
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      // Знаходимо центр самої картки
      const cardCenter = rect.top + (rect.height / 2);
      // Обчислюємо відстань від центру картки до центру екрана
      const distance = Math.abs(viewportCenter - cardCenter);

      // Якщо ця картка ближче, ніж попередні — запам'ятовуємо її
      if (distance < minDistance) {
        minDistance = distance;
        closestCard = card;
      }
    });

    // Додаємо клас найближчій картці, у решти - забираємо
    cards.forEach(card => {
      if (card === closestCard) {
        card.classList.add('is-active');
      } else {
        card.classList.remove('is-active');
      }
    });
  };

  // Оптимізація скролу через requestAnimationFrame, щоб не перевантажувати телефон
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        checkCenterCard();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Також перевіряємо при зміні розміру вікна
  window.addEventListener('resize', checkCenterCard, { passive: true });

  // Запускаємо один раз при завантаженні сторінки, щоб активувати першу картку, якщо ми вже доскролили
  checkCenterCard();
});



document.addEventListener("DOMContentLoaded", () => {
  // ТЕПЕР ВІДСТЕЖУЄМО ЗАГАЛЬНУ ОБГОРТКУ
  const contactSection = document.querySelector('.c-contact__inner'); 

  if (!contactSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-animated');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1 // Поставив 0.1, щоб анімація починалась трохи раніше
  });

  observer.observe(contactSection);
});