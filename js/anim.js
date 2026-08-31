document.addEventListener('DOMContentLoaded', () => {
  // ЦІЛИМОСЯ САМЕ В НИЖНІЙ БЛОК (з модифікатором --green)
  const targetElement = document.querySelector('.s1__hero-line--green');
  if (!targetElement) return;

  // Ваші 4 кольори
  const colors = ['#91FF6A', '#D9A439', '#30D1E6', '#E630DE'];
  
  // Змінна для збереження поточного індексу кольору
  let lastColorIndex = -1;

  window.addEventListener('scroll', () => {
    // 1. Скільки пікселів проскролено зверху
    const scrolled = window.scrollY;
    
    // 2. Визначаємо поточний крок (кожні 20px)
    const step = Math.floor(scrolled / 40);
    
    // 3. Знаходимо індекс кольору (від 0 до 3)
    const colorIndex = step % colors.length;
    
    // 4. Оновлюємо колір, тільки якщо він змінився
    if (colorIndex !== lastColorIndex) {
      targetElement.style.color = colors[colorIndex];
      lastColorIndex = colorIndex;
    }
  }, { passive: true });
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



