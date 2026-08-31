document.addEventListener('DOMContentLoaded', () => {
  // ❗ СПІЛЬНІ ДАНІ ДЛЯ TELEGRAM ❗
  const BOT_TOKEN = '8861347433:AAHHy3DfHI7bVDd1o2R7EnnwkltEq_8-trE';
  const CHAT_ID = '1017439546';

  // --- УТИЛІТИ ДЛЯ ВАЛІДАЦІЇ ТА БЕЗПЕКИ ---

  // Очищення HTML-тегів
  function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, match => {
      const escape = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
      return escape[match];
    });
  }

  // Перевірка формату Email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Відображення помилки (чистий JS, без CSS класів)
  function showError(element) {
    element.style.borderColor = '#ff4d4d';
    element.style.backgroundColor = 'rgba(255, 77, 77, 0.05)';
  }

  // Очищення візуальної помилки
  function clearError(element) {
    element.style.borderColor = '';
    element.style.backgroundColor = '';
  }

  // Додавання "слухачів" для зняття помилки при введенні тексту
  function addRealTimeValidation(inputsArray) {
    inputsArray.forEach(input => {
      if (input) {
        input.addEventListener('input', function() {
          clearError(this);
        });
      }
    });
  }


  /* =========================================================
     ФОРМА 1: MONETIZATION MAP (Головна сторінка - .s10)
     ========================================================= */
  const monetizationForm = document.getElementById('monetizationForm');
  
  if (monetizationForm) {
    const customSelect = document.getElementById('audienceSelect');
    const hiddenInput = document.getElementById('audienceInput');
    const selectValue = customSelect ? customSelect.querySelector('.s10__select-val') : null;
    const options = customSelect ? customSelect.querySelectorAll('.s10__option') : [];

    const inputs = monetizationForm.querySelectorAll('.s10__input');
    const nameInput = inputs[0];
    const emailInput = inputs[1];
    const handleInput = inputs[2];
    const teachInput = inputs[3];

    // Вішаємо події для очищення червоних рамок при введенні
    addRealTimeValidation([nameInput, emailInput, handleInput, teachInput]);

    if (customSelect) {
      // Відкрити/закрити дропдаун
      customSelect.addEventListener('click', function (e) {
        this.classList.toggle('is-open');
      });

      // Вибір опції
      options.forEach(option => {
        option.addEventListener('click', function (e) {
          e.stopPropagation();
          const value = this.textContent;
          selectValue.textContent = value;
          selectValue.classList.add('is-selected');
          hiddenInput.value = value;
          customSelect.classList.remove('is-open');
          
          // Очищаємо помилку, якщо вона була
          clearError(customSelect);
        });
      });

      // Закрити при кліку поза елементом
      document.addEventListener('click', function (e) {
        if (!customSelect.contains(e.target)) {
          customSelect.classList.remove('is-open');
        }
      });
    }

    const defaultText = document.getElementById('defaultText');
    const successText = document.getElementById('successText');
    const submitBtn = document.getElementById('submitBtn');

    monetizationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      let isFormValid = true;
      let firstErrorElement = null;

      // 1. Валідація Ім'я
      if (!nameInput.value.trim()) {
        showError(nameInput);
        isFormValid = false;
        if (!firstErrorElement) firstErrorElement = nameInput;
      }

      // 2. Валідація Email
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        showError(emailInput);
        isFormValid = false;
        if (!firstErrorElement) firstErrorElement = emailInput;
      }

      // 3. Валідація Нікнейму
      if (!handleInput.value.trim()) {
        showError(handleInput);
        isFormValid = false;
        if (!firstErrorElement) firstErrorElement = handleInput;
      }

      // 4. Валідація випадаючого списку (Аудиторія)
      if (hiddenInput && !hiddenInput.value.trim()) {
        showError(customSelect); // Фарбуємо сам блок селекта
        isFormValid = false;
        if (!firstErrorElement) firstErrorElement = customSelect;
      }

      // 5. Валідація Textarea
      if (!teachInput.value.trim()) {
        showError(teachInput);
        isFormValid = false;
        if (!firstErrorElement) firstErrorElement = teachInput;
      }

      // Якщо є помилки - зупиняємо відправку та скролимо до першої помилки
      if (!isFormValid) {
        if (firstErrorElement) {
          firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // --- ВІДПРАВКА ---
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      const name = escapeHTML(nameInput.value.trim());
      const email = escapeHTML(emailInput.value.trim());
      const handle = escapeHTML(handleInput.value.trim());
      const audience = hiddenInput ? escapeHTML(hiddenInput.value.trim()) : '';
      const teach = escapeHTML(teachInput.value.trim());

      const message = `<b>🔥 New Monetization Map Request</b>\n\n` +
                      `<b>👤 Name:</b> ${name}\n` +
                      `<b>📧 Email:</b> ${email}\n` +
                      `<b>📱 Handle:</b> ${handle}\n` +
                      `<b>📈 Audience:</b> ${audience}\n` +
                      `<b>🎓 Teaches:</b> ${teach}`;

      fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: 'HTML' })
      })
      .then(async response => {
        const resData = await response.json();
        if (!response.ok) throw new Error(resData.description || 'Network error');
        return resData;
      })
      .then(data => {
        if (defaultText) defaultText.style.display = 'none';
        if (successText) successText.style.display = 'flex';
        
        submitBtn.textContent = 'Request received!';
        submitBtn.classList.add('is-success');
        
        monetizationForm.reset();
        if (customSelect && selectValue) {
          selectValue.textContent = 'Select audience size'; // Або можна брати з перекладів
          selectValue.classList.remove('is-selected');
        }
        if (hiddenInput) hiddenInput.value = '';
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error sending message: ' + error.message);
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      });
    });
  }


  /* =========================================================
     ФОРМА 2: CONTACT US (Окрема сторінка контактів - .c-contact)
     ========================================================= */
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    const contactSubmitBtn = document.getElementById('contactSubmitBtn');
    const cDefaultText = document.getElementById('cDefaultText');
    const cSuccessText = document.getElementById('cSuccessText');

    const cNameInput = document.getElementById('cName');
    const cEmailInput = document.getElementById('cEmail');
    const cSocialInput = document.getElementById('cSocial');
    const cRoleInput = document.getElementById('cRole');
    const cMsgInput = document.getElementById('cMessage');

    // Вішаємо події для очищення помилок при введенні
    addRealTimeValidation([cNameInput, cEmailInput, cSocialInput, cRoleInput, cMsgInput]);

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let isFormValid = true;
      let firstErrorElement = null;

      // Валідація полів
      const fieldsToValidate = [
        { el: cNameInput, type: 'text' },
        { el: cEmailInput, type: 'email' },
        { el: cSocialInput, type: 'text' },
        { el: cRoleInput, type: 'text' },
        { el: cMsgInput, type: 'text' }
      ];

      fieldsToValidate.forEach(field => {
        const val = field.el.value.trim();
        if (!val || (field.type === 'email' && !isValidEmail(val))) {
          showError(field.el);
          isFormValid = false;
          if (!firstErrorElement) firstErrorElement = field.el;
        }
      });

      if (!isFormValid) {
        if (firstErrorElement) {
          firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // --- ВІДПРАВКА ---
      const originalBtnText = contactSubmitBtn.textContent;
      contactSubmitBtn.textContent = 'Sending...';
      contactSubmitBtn.disabled = true;

      const name = escapeHTML(cNameInput.value.trim());
      const email = escapeHTML(cEmailInput.value.trim());
      const social = escapeHTML(cSocialInput.value.trim());
      const role = escapeHTML(cRoleInput.value.trim());
      const messageText = escapeHTML(cMsgInput.value.trim());

      const message = `<b>📬 New Contact Request</b>\n\n` +
                      `<b>👤 Name:</b> ${name}\n` +
                      `<b>📧 Email:</b> ${email}\n` +
                      `<b>🌐 Social:</b> ${social}\n` +
                      `<b>💼 Role:</b> ${role}\n` +
                      `<b>📝 Message:</b>\n${messageText}`;

      fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: 'HTML' })
      })
      .then(async response => {
        const resData = await response.json();
        if (!response.ok) throw new Error(resData.description || 'Network error');
        return resData;
      })
      .then(data => {
        if (cDefaultText) cDefaultText.style.display = 'none';
        if (cSuccessText) cSuccessText.style.display = 'flex';
        
        contactForm.classList.add('is-success');
        
        contactSubmitBtn.textContent = 'Request received!';
        contactSubmitBtn.classList.add('is-success');
        
        contactForm.reset();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error sending message: ' + error.message);
        contactSubmitBtn.textContent = originalBtnText;
        contactSubmitBtn.disabled = false;
      });
    });
  }
});