document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openMobileMenu');
  const closeBtn = document.getElementById('closeMobileMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.s1__mobile-link');

  // Відкриття меню
  openBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Блокуємо скрол сторінки
  });

  // Закриття меню
  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = ''; // Повертаємо скрол
  });

  // Закриття меню при кліку на будь-яке посилання (якщо це якірні посилання)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
});