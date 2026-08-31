document.addEventListener('DOMContentLoaded', () => {
  // ❗ СПІЛЬНІ ДАНІ ДЛЯ TELEGRAM ❗
  const BOT_TOKEN = '8861347433:AAHHy3DfHI7bVDd1o2R7EnnwkltEq_8-trE';
  const CHAT_ID = '1017439546';

  // Функція для безпечного очищення спецсимволів HTML (щоб не ламався запит)
  function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, match => {
      const escape = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return escape[match];
    });
  }

  /* =========================================================
     ФОРМА 1: MONETIZATION MAP (Головна сторінка)
     ========================================================= */
  const monetizationForm = document.getElementById('monetizationForm');
  
  if (monetizationForm) {
    // --- Логіка Custom Select ---
    const customSelect = document.getElementById('audienceSelect');
    if (customSelect) {
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
          e.stopPropagation();
          const value = this.textContent;
          selectValue.textContent = value;
          selectValue.classList.add('is-selected');
          hiddenInput.value = value;
          customSelect.classList.remove('is-open');
        });
      });

      // Закрити при кліку поза елементом
      document.addEventListener('click', function (e) {
        if (!customSelect.contains(e.target)) {
          customSelect.classList.remove('is-open');
        }
      });
    }

    // --- Логіка відправки форми ---
    const defaultText = document.getElementById('defaultText');
    const successText = document.getElementById('successText');
    const submitBtn = document.getElementById('submitBtn');
    const hiddenInput = document.getElementById('audienceInput');

    monetizationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      if (!hiddenInput.value) {
        alert("Please select your audience size.");
        return;
      }

      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      const inputs = monetizationForm.querySelectorAll('.s10__input');
      const name = escapeHTML(inputs[0].value);
      const email = escapeHTML(inputs[1].value);
      const handle = escapeHTML(inputs[2].value);
      const audience = escapeHTML(hiddenInput.value);
      const teach = escapeHTML(inputs[3].value);

      const message = `<b>🔥 New Monetization Map Request</b>\n\n` +
                      `<b>👤 Name:</b> ${name}\n` +
                      `<b>📧 Email:</b> ${email}\n` +
                      `<b>📱 Handle:</b> ${handle}\n` +
                      `<b>📈 Audience:</b> ${audience}\n` +
                      `<b>🎓 Teaches:</b> ${teach}`;

      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      })
      .then(async response => {
        const resData = await response.json();
        if (!response.ok) {
          console.error('Telegram API Error details:', resData);
          throw new Error(resData.description || 'Network response was not ok');
        }
        return resData;
      })
      .then(data => {
        defaultText.style.display = 'none';
        successText.style.display = 'flex';
        submitBtn.textContent = 'Request received!';
        submitBtn.classList.add('is-success');
        
        monetizationForm.reset();
        if (customSelect) {
          const selectValue = customSelect.querySelector('.s10__select-val');
          selectValue.textContent = 'Select audience size';
          selectValue.classList.remove('is-selected');
        }
        hiddenInput.value = '';
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
     ФОРМА 2: CONTACT US (Сторінка контактів)
     ========================================================= */
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    const contactSubmitBtn = document.getElementById('contactSubmitBtn');
    const contactSuccessMsg = document.getElementById('contactSuccessMsg');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const originalBtnText = contactSubmitBtn.textContent;
      contactSubmitBtn.textContent = 'Sending...';
      contactSubmitBtn.disabled = true;

      const name = escapeHTML(document.getElementById('cName').value);
      const email = escapeHTML(document.getElementById('cEmail').value);
      const social = escapeHTML(document.getElementById('cSocial').value);
      const role = escapeHTML(document.getElementById('cRole').value);
      const messageText = escapeHTML(document.getElementById('cMessage').value);

      const message = `<b>📬 New Contact Request</b>\n\n` +
                      `<b>👤 Name:</b> ${name}\n` +
                      `<b>📧 Email:</b> ${email}\n` +
                      `<b>🌐 Social:</b> ${social}\n` +
                      `<b>💼 Role:</b> ${role}\n` +
                      `<b>📝 Message:</b>\n${messageText}`;

      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      })
      .then(async response => {
        const resData = await response.json();
        if (!response.ok) {
          throw new Error(resData.description || 'Network response was not ok');
        }
        return resData;
      })
      .then(data => {
        contactSuccessMsg.style.display = 'block';
        contactSubmitBtn.textContent = 'Sent!';
        contactForm.reset();
        
        // Повертаємо кнопку до початкового стану через 3 секунди
        setTimeout(() => {
          contactSubmitBtn.textContent = originalBtnText;
          contactSubmitBtn.disabled = false;
          contactSuccessMsg.style.display = 'none';
        }, 3000);
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