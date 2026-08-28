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


  // --- 2. Логіка форми та відправка на Telegram Bot ---
  const form = document.getElementById('monetizationForm');
  const defaultText = document.getElementById('defaultText');
  const successText = document.getElementById('successText');
  const submitBtn = document.getElementById('submitBtn');

  // ❗ ПЕРЕВІР СВОЇ ДАНІ ❗
  // Токен має бути БЕЗ слова "bot" на початку, тільки цифри, двокрапка та букви
  const BOT_TOKEN = '8861347433:AAHHy3DfHI7bVDd1o2R7EnnwkltEq_8-trE';
  const CHAT_ID = '1017439546';

  // Функція для безпечного очищення спецсимволів HTML
  function escapeHTML(str) {
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

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    if (!hiddenInput.value) {
      alert("Please select your audience size.");
      return;
    }

    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Збираємо дані з полів та очищаємо їх від опасних тегів
    const inputs = form.querySelectorAll('.s10__input');
    const name = escapeHTML(inputs[0].value);
    const email = escapeHTML(inputs[1].value);
    const handle = escapeHTML(inputs[2].value);
    const audience = escapeHTML(hiddenInput.value);
    const teach = escapeHTML(inputs[3].value);

    // Формуємо повідомлення з використанням HTML-тегів <b>
    const message = `<b>🔥 New Monetization Map Request</b>\n\n` +
                    `<b>👤 Name:</b> ${name}\n` +
                    `<b>📧 Email:</b> ${email}\n` +
                    `<b>📱 Handle:</b> ${handle}\n` +
                    `<b>📈 Audience:</b> ${audience}\n` +
                    `<b>🎓 Teaches:</b> ${teach}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML' // Перемкнули на HTML, тепер символи @ та _ не ламають запит
      })
    })
    .then(async response => {
      const resData = await response.json();
      
      // Якщо Telegram дав помилку — виводимо її в консоль для точної діагностики
      if (!response.ok) {
        console.error('Telegram API Error details:', resData);
        throw new Error(resData.description || 'Network response was not ok');
      }
      return resData;
    })
    .then(data => {
      // УСПІХ
      defaultText.style.display = 'none';
      successText.style.display = 'flex';

      submitBtn.textContent = 'Request received!';
      submitBtn.classList.add('is-success');
      
      form.reset();
      selectValue.textContent = 'Select audience size';
      selectValue.classList.remove('is-selected');
      hiddenInput.value = '';
    })
    .catch(error => {
      // ПОМИЛКА
      console.error('Error:', error);
      alert('Error sending message: ' + error.message);
      
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    });
  });
});