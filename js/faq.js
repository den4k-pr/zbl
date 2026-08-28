document.addEventListener('DOMContentLoaded', () => {
  // Знаходимо всі кнопки акордеону в блоці .s7
  const accordionHeads = document.querySelectorAll('.s7__head');

  accordionHeads.forEach(head => {
    head.addEventListener('click', () => {
      // Отримуємо батьківський елемент (.s7__item)
      const currentItem = head.parentElement;
      
      // Перевіряємо, чи поточний елемент вже активний
      const isActive = currentItem.classList.contains('is-active');

      // Закриваємо всі питання
      document.querySelectorAll('.s7__item').forEach(item => {
        item.classList.remove('is-active');
      });

      // Якщо клікнули по неактивному елементу - відкриваємо його
      // Якщо клікнули по активному, він просто закриється (бо ми вже видалили клас)
      if (!isActive) {
        currentItem.classList.add('is-active');
      }
    });
  });
});