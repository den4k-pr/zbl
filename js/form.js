document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Логіка Custom Select ---
  const customSelect = document.getElementById('audienceSelect');
  const dropdown = customSelect.querySelector('.s10__dropdown');
  const selectValue = customSelect.querySelector('.s10__select-val');
  const options = customSelect.querySelectorAll('.s10__option');
  const hiddenInput = document.getElementById('audienceInput');

  // Відкрити/закрити дропдаун
  customSelect.addEventListener('click', function (e) {
    this.classList.toggle('is-open');
  });

  // Вибір опції
  options.forEach(option => {
    option.addEventListener('click', function (e) {
      e.stopPropagation(); // Зупиняємо клік, щоб не спрацював батьківський
      
      const value = this.textContent;
      selectValue.textContent = value;
      selectValue.classList.add('is-selected'); // Міняє колір тексту на білий
      hiddenInput.value = value; // Передаємо в прихований інпут для форми
      
      customSelect.classList.remove('is-open');
    });
  });

  // Закрити при кліку поза елементом
  document.addEventListener('click', function (e) {
    if (!customSelect.contains(e.target)) {
      customSelect.classList.remove('is-open');
    }
  });


  // --- 2. Логіка форми та Success State ---
  const form = document.getElementById('monetizationForm');
  const defaultText = document.getElementById('defaultText');
  const successText = document.getElementById('successText');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Зупиняємо стандартну відправку форми
    
    // Перевірка, чи вибрано аудиторію (оскільки інпут прихований)
    if (!hiddenInput.value) {
      alert("Please select your audience size.");
      return;
    }

    // Зміна текстового блоку на Success
    defaultText.style.display = 'none';
    successText.style.display = 'flex';

    // Зміна стану кнопки
    submitBtn.textContent = 'Request received!';
    submitBtn.classList.add('is-success');

    // Формування mailto (відкриття поштової програми клієнта)
    // Збираємо дані з полів (опціонально можна додати в тіло листа)
    const inputs = form.querySelectorAll('.s10__input');
    const name = inputs[0].value;
    const email = inputs[1].value;
    const handle = inputs[2].value;
    const audience = hiddenInput.value;
    const teach = inputs[3].value;

    const subject = encodeURIComponent("Monetization Map Request");
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Handle: ${handle}\n` +
      `Audience Size: ${audience}\n` +
      `Teaches: ${teach}`
    );

    // Відкриваємо поштовий клієнт
    window.location.href = `mailto:info@zbl.agency?subject=${subject}&body=${body}`;
  });
});