(function () {
  'use strict';

  // ── ПЕРЕКЛАДИ ────────────────────────────────────────────────────────────────
  const TRANSLATIONS = {
    en: {
      // Nav
      nav_how:     'How it works',
      nav_careers: 'Careers',
      nav_who:     "Who it's for",
      nav_faq:     'FAQ',
      nav_company: 'Company',
      btn_consult: 'Free consultation',

      // S1 hero
      s1_row_right:   'We work with the <br class="s1__mobile-br"><strong>best influencers</strong> in <br class="s1__mobile-br">the industry',
      s1_hero_1:      'YOU BRING THE AUDIENCE',
      s1_hero_2:      'WE BUILD THE BUSINESS',
      s1_row_left:    '<strong>70k+</strong> students on one creator\'s products',
      s1_desc_strong: 'Followers and recognition are your asset. Expertise and skills are your product.',
      s1_desc_span:   'You have the audience and the method. We build everything in between: the products, the funnels, the ads strategy, the platform, the payments. With us, it becomes a business that makes money',

      // Mobile menu
      mob_contact:     'Contact us',
      mob_how:         'How it works',
      mob_careers:     'Careers',
      mob_who:         "Who it's for",
      mob_faq:         'FAQ',
      mob_company:     'Company',

      // S2
      s2_1_num:  '30+',
      s2_1_text: 'products<br class="s2__br-desk">built and sold',
      s2_2_num:  '100+',
      s2_2_text: 'countries with<br class="s2__br-desk">paying students',
      s2_3_num:  '50M+',
      s2_3_text: 'monthly views<br class="s2__br-desk">on creator channels',
      s2_4_num:  '1M€+',
      s2_4_text: 'in ads budgets<br class="s2__br-desk">managed',

      // S3
      s3_tag:   '//what we do',
      s3_title: 'A monetization system, <br>not a service list',
      s3_desc:  'Five things we do differently from an agency. Each one grows the same number: your recurring profit',
      s3_c1_title: 'Demand first, product second',
      s3_c1_text:  'We start with the problem your audience is already paying someone else to solve. Not what\'s easy to package into a course, but what they keep asking you for',
      s3_c2_title: 'Hypotheses get tested with money',
      s3_c2_text:  'A ladder of offers from entry to premium, run through paid traffic by our own media buyers. Real budget, real buyers, an answer in weeks',
      s3_c3_title: 'One method, a full line',
      s3_c3_text:  'Once a product and an audience match, we build the rest of the line around it: entry, core, recurring. Every launch compounds on the last instead of starting over',
      s3_c4_title: 'We build for the second purchase',
      s3_c4_text:  'The first sale pays for the ads. The second, third and fourth are the business. Funnels and lifecycle marketing keep students inside the ecosystem and buying',
      s3_c5_title: 'Content is yours. Everything else is ours',
      s3_c5_text:  "Payments, platform, analytics, support, legal, finance. If it isn't filming or teaching, it's on our side",

      // S4
      s4_title:    'Zubalenok.',
      s4_subtitle: 'A world-class method, turned into a company',
      s4_p1: 'Zubalenok teaches mobility and flexibility with <strong>a method that visibly changes a body in weeks</strong>. Every day her audience sent thousands of messages asking the same question: how. The method worked and <strong>the demand was there</strong>. What was missing was a company to sell it',
      s4_p2: '<strong>ZBL Company built it:</strong> <strong>a product line</strong> running from a 7-day splits challenge to flagship programs and a nutrition portal, <strong>a growth engine</strong> across paid and owned channels, and <strong>a platform</strong> that keeps students learning for years',
      s4_stat1_title: 'Product line',
      s4_stat1_val:   '10+ products, <br>one method',
      s4_stat2_title: 'Growth engine',
      s4_stat2_val:   '50k to 2.2M followers <br>in a year',
      s4_stat3_title: 'Retention platform',
      s4_stat3_val:   '250k+ students, <br>50M+ monthly views',
      s4_footer: 'Today her method reaches <strong>people in 100+ countries</strong> and generates predictable recurring revenue. <strong>That is the system we bring to the next creator</strong>',

      // S5
      s5_cta_title: 'Want the same system for your audience?',
      s5_cta_desc:  'Leave your contacts. We reply within two working days',
      s5_btn:       'Free consultation',
      s5_tl_tag:    '//How it works',
      s5_tl_title:  'Eight weeks to your <span class="s5__text-green">first paying cohort</span>',
      s5_tl_desc:   'Five stages, each with a deliverable and a deadline, so you always know where we are',
      s5_sl1_step:  '01 / week 1',
      s5_sl1_title: 'Diagnose',
      s5_sl1_text:  'Audience and demand audit: what your followers already ask for, what they pay for elsewhere, where the money is in your niche',
      s5_sl1_out_t: 'Output:',
      s5_sl1_out:   'A monetization map with two or three product hypotheses and a revenue forecast',
      s5_sl2_step:  '02 / weeks 2 to 3',
      s5_sl2_title: 'Design',
      s5_sl3_step:  '03 / weeks 3 to 6',
      s5_sl3_title: 'Build',
      s5_sl4_step:  '04 / weeks 6 to 8',
      s5_sl4_title: 'Launch',
      s5_sl5_step:  '05 / ongoing',
      s5_sl5_title: 'Scale and retain',

      // S6
      s6_tag:        "//who it's for",
      s6_title:      'A handful of partners a <br class="br-g"> year. The right ones',
      s6_desc:       'Five stages, each with a deliverable and a deadline, so you always know where we are',
      s6_for_title:  'This is for you if',
      s6_for_1:      'Your method produces a result people can see, in their body, their skill or their income',
      s6_for_2:      'In comments and DMs your audience asks you how to do it, every week',
      s6_for_3:      'You post regularly and you\'re building something for the next five years',
      s6_not_title:  'This is not for you if',
      s6_not_1:      'You want to sell one course once and move on',
      s6_not_2:      "You don't want to keep making content",
      s6_not_3:      'You have an audience but no method yet',

      // В блоці "en" (англійська)
c_thanks: 'Thank you!',
c_thanks_desc: 'Your email app should open with the request prefilled. If it didn\'t, write to <a href="mailto:info@zbl.agency" class="c-contact__link">info@zbl.agency</a>',

// В блоці "ua" (українська)
c_thanks: 'Дякуємо!',
c_thanks_desc: 'Ваш поштовий клієнт відкриється із заповненою заявкою. Якщо ні — напишіть на <a href="mailto:info@zbl.agency" class="c-contact__link">info@zbl.agency</a>',

      // S7 FAQ
      s7_title: 'FAQ',
      s7_q1: 'Will I lose control of my brand?',
      s7_a1: "No. Your name, face and voice stay yours. Every product, offer and creative comes to you for approval before it goes live, and when we disagree about direction, your call is the one that ships",
      s7_q2: 'What does it cost me?',
      s7_a2: "We work on a performance basis. We cover the team, the platform, and the operations. You cover the ad spend (which pays for itself) and we share the profit. Details depend on your current audience size.",
      s7_q3: 'How much of my time will it take?',
      s7_a3: "About 2-4 hours a week for content creation and approvals. We handle all the heavy lifting: strategy, funnel building, media buying, customer support, and technical setup.",
      s7_q4: 'What happens to my audience if we part ways?',
      s7_a4: "Your audience remains 100% yours. You keep your social media accounts, your email list, and your brand IP. We make sure the transition is smooth and you own your data.",
      s7_q5: 'How fast will I see results?',
      s7_a5: "Our standard timeline is eight weeks to your first paying cohort. We spend the first weeks diagnosing and building, then launch. You'll see initial revenue in month two.",

      // S8
      s8_tag:   'Under 50k?',
      s8_title: 'Becoming a name in your niche is a skill',
      s8_desc:  'If you have real expertise and a result you can prove, the audience is the part we can help you build. We keep a short list and get in touch when we have room',
      s8_btn:   'Join the waitlist',

      // S9
      s9_tag:    '//careers',
      s9_title:  'Build products for millions of students',
      s9_desc:   'A product team, mostly remote, working out of Belgium and Ukraine. Every person owns a number, the rules are written down, and we ship every week',
      s9_roles:  '#Open roles',
      s9_c1_title: 'Subscription marketer',
      s9_c1_desc:  'Own the subscription product end to end: retention, pricing, lifecycle, LTV',
      s9_c2_title: 'Frontend developer',
      s9_c2_desc:  'Build and evolve the learning platform, quiz funnels and landing pages. React or vanilla, taste for motion and detail',
      s9_c3_title: 'Media buyer',
      s9_c3_desc:  'Meta and TikTok at scale across several markets, weekly creative testing, unit economics as the only scoreboard',
      s9_remote: 'Remote, full-time',
      s9_apply:  'Apply',
      s9_no_role_title: "Don't see your role?",
      s9_no_role_desc:  'Write to us anyway with what you\'ve built. We hire when we meet the right person',
      s9_write: 'Write',

      // S10
      s10_tag:    '//start here',
      s10_title:  'Get your monetization map',
      s10_desc:   'Leave a request and we\'ll set up a call with the team. We look at your audience and your expertise and tell you what a product line and a business could look like, with numbers. Free, and no obligation on either side',
      s10_l_name: 'Your name',
      s10_l_email:'Email',
      s10_l_handle:'Instagram or TikTok handle',
      s10_l_aud: 'Your audience',
      s10_sel_ph: 'Select audience size',
      s10_opt1:   'Under 50k',
      s10_opt2:   '50k to 200k',
      s10_opt3:   '200k to 1M',
      s10_opt4:   'Over 1M',
      s10_ta_ph:  'What do you teach and who is it for?',
      s10_btn:    'Get your monetization map',
      s10_thanks: 'Thank you!',
      s10_thanks_desc: 'Your email app should open with the request prefilled. If it didn\'t, write to <a href="mailto:info@zbl.agency" class="s10__link">info@zbl.agency</a>',

      // Contact Page
      c_tag:        '//contact',
      c_title:      "let's talk",
      c_desc:       'Creators, candidates and partners. One address, real people on the other side',
      c_l_name:     'Your name',
      c_ph_name:    'Name',
      c_l_email:    'Email',
      c_ph_email:   'you@example.com',
      c_l_social:   'Social',
      c_ph_social:  'Instagram, LinkedIn, or other',
      c_l_role:     'I am',
      c_ph_role:    'A creator, a candidate, something else',
      c_l_msg:      'Your message',
      c_ph_msg:     'Your message',
      c_btn:        'Send',
      c_success:    '✅ Your message has been sent successfully!'
    },

    ua: {
      // Nav
      nav_how:     'Як це працює',
      nav_careers: 'Вакансії',
      nav_who:     'Для кого',
      nav_faq:     'FAQ',
      nav_company: 'Компанія',
      btn_consult: 'Безплатна консультація',

      // S1
      s1_row_right:   'Ми працюємо з <br class="s1__mobile-br"><strong>найкращими</strong> в <br class="s1__mobile-br">індустрії',
      s1_hero_1:      'ТИ ПРИВОДИШ АУДИТОРІЮ',
      s1_hero_2:      'МИ БУДУЄМО БІЗНЕС',
      s1_row_left:    '<strong>70k+</strong> студентів одного автора',
      s1_desc_strong: 'Аудиторія та визнання — твій актив. Експертиза — твій продукт.',
      s1_desc_span:   'Ти маєш аудиторію та метод. Ми будуємо решту: продукти, воронки, рекламу, платформу, платежі. З нами це стає бізнесом',

      // Mobile menu
      mob_contact:  'Зв\'язатись',
      mob_how:      'Як це працює',
      mob_careers:  'Вакансії',
      mob_who:      'Для кого',
      mob_faq:      'FAQ',
      mob_company:  'Компанія',

      // S2
      s2_1_num:  '30+',
      s2_1_text: 'продуктів<br class="s2__br-desk">створено та продано',
      s2_2_num:  '100+',
      s2_2_text: 'країн з<br class="s2__br-desk">платними студентами',
      s2_3_num:  '50M+',
      s2_3_text: 'переглядів на<br class="s2__br-desk">місяць',
      s2_4_num:  '1M€+',
      s2_4_text: 'бюджетів під<br class="s2__br-desk">управлінням',

      // S3
      s3_tag:   '//що ми робимо',
      s3_title: 'Система монетизації,<br>не список послуг',
      s3_desc:  'П\'ять речей, якими ми відрізняємось. Кожна збільшує одне число: твій регулярний прибуток',
      s3_c1_title: 'Спочатку попит, потім продукт',
      s3_c1_text:  'Ми починаємо з проблеми, яку аудиторія вже вирішує деінде. Не те, що легко запакувати в курс, а те, про що тебе постійно питають',
      s3_c2_title: 'Гіпотези перевіряються грошима',
      s3_c2_text:  'Лінійка офферів від entry до premium через платний трафік. Реальний бюджет, реальні покупці, відповідь за тижні',
      s3_c3_title: 'Один метод — повна лінійка',
      s3_c3_text:  'Як тільки продукт і аудиторія співпали — будуємо решту: entry, core, recurring. Кожен запуск підсилює попередній',
      s3_c4_title: 'Будуємо заради другої покупки',
      s3_c4_text:  'Перший продаж оплачує рекламу. Другий, третій і четвертий — це і є бізнес. Воронки та lifecycle тримають студентів в екосистемі',
      s3_c5_title: 'Контент твій. Решта — наша',
      s3_c5_text:  'Платежі, платформа, аналітика, підтримка, юридика, фінанси. Якщо це не зйомка чи навчання — це на нашому боці',

      // S4
      s4_title:    'Зубаленок.',
      s4_subtitle: 'Метод світового рівня став компанією',
      s4_p1: 'Зубаленок навчає мобільності з <strong>методом, що змінює тіло за тижні</strong>. Щодня тисячі питали: як. Метод працював і <strong>попит був</strong>. Не вистачало компанії для продажу',
      s4_p2: '<strong>ZBL Company побудувала це:</strong> <strong>лінійку продуктів</strong> від 7-денного челенджу до флагманів і порталу харчування, <strong>двигун росту</strong> і <strong>платформу</strong>, що утримує студентів роками',
      s4_stat1_title: 'Лінійка продуктів',
      s4_stat1_val:   '10+ продуктів,<br>один метод',
      s4_stat2_title: 'Двигун росту',
      s4_stat2_val:   'від 50k до 2.2M<br>підписників за рік',
      s4_stat3_title: 'Утримання',
      s4_stat3_val:   '250k+ студентів,<br>50M+ переглядів/міс',
      s4_footer: 'Метод досягає <strong>людей у 100+ країнах</strong> і генерує прогнозований дохід. <strong>Це система, яку ми несемо наступному автору</strong>',

      // S5
      s5_cta_title: 'Хочеш ту саму систему для своєї аудиторії?',
      s5_cta_desc:  'Залиш контакти. Відповідаємо протягом двох робочих днів',
      s5_btn:       'Безплатна консультація',
      s5_tl_tag:    '//Як це працює',
      s5_tl_title:  'Вісім тижнів до <span class="s5__text-green">першої платної групи</span>',
      s5_tl_desc:   'П\'ять етапів, кожен з результатом і дедлайном',
      s5_sl1_step:  '01 / тиждень 1',
      s5_sl1_title: 'Діагностика',
      s5_sl1_text:  'Аудит аудиторії та попиту: що питають, за що платять деінде, де гроші в ніші',
      s5_sl1_out_t: 'Результат:',
      s5_sl1_out:   'Карта монетизації з двома-трьома гіпотезами продуктів та прогнозом доходу',
      s5_sl2_step:  '02 / тижні 2–3',
      s5_sl2_title: 'Дизайн',
      s5_sl3_step:  '03 / тижні 3–6',
      s5_sl3_title: 'Розробка',
      s5_sl4_step:  '04 / тижні 6–8',
      s5_sl4_title: 'Запуск',
      s5_sl5_step:  '05 / ongoing',
      s5_sl5_title: 'Масштабування',

      // S6
      s6_tag:        '//для кого',
      s6_title:      'Небагато партнерів на рік.<br>Правильні',
      s6_desc:       'П\'ять етапів, кожен з результатом і дедлайном',
      s6_for_title:  'Це для тебе, якщо',
      s6_for_1:      'Твій метод дає результат, який видно: в тілі, навичці чи доході',
      s6_for_2:      'Аудиторія щотижня питає тебе в коментарях і DM, як це зробити',
      s6_for_3:      'Ти публікуєш регулярно і будуєш щось на п\'ять років',
      s6_not_title:  'Це не для тебе, якщо',
      s6_not_1:      'Хочеш продати один курс і рухатись далі',
      s6_not_2:      'Не хочеш продовжувати створювати контент',
      s6_not_3:      'Є аудиторія, але ще немає методу',

      // S7
      s7_title: 'FAQ',
      s7_q1: 'Чи втрачу я контроль над брендом?',
      s7_a1: "Ні. Твоє ім'я, обличчя та голос залишаються твоїми. Кожен продукт і оффер приходить тобі на затвердження перед виходом в ефір",
      s7_q2: 'Скільки це коштує?',
      s7_a2: "Ми працюємо на базі результату. Ми покриваємо команду, платформу та операції. Ти покриваєш рекламний бюджет, і ми ділимо прибуток",
      s7_q3: 'Скільки мого часу це займе?',
      s7_a3: "Близько 2-4 годин на тиждень на контент та затвердження. Решта — на нашій стороні",
      s7_q4: 'Що буде з аудиторією, якщо ми розійдемось?',
      s7_a4: "Твоя аудиторія залишається повністю твоєю. Акаунти, email-список, IP бренду — все твоє",
      s7_q5: 'Як швидко я побачу результат?',
      s7_a5: "Стандартний термін — вісім тижнів до першої платної групи. Перший дохід — на другому місяці",

      // S8
      s8_tag:   'До 50k?',
      s8_title: 'Стати відомим у ніші — це навичка',
      s8_desc:  'Якщо маєш реальну експертизу і доказовий результат, аудиторію ми допоможемо побудувати. Тримаємо короткий список',
      s8_btn:   'До списку очікування',

      // S9
      s9_tag:   '//вакансії',
      s9_title: 'Будуй продукти для мільйонів студентів',
      s9_desc:  'Продуктова команда, переважно remote, з Бельгії та України. Кожен відповідає за число, правила записані, шипимо щотижня',
      s9_roles: '#Відкриті вакансії',
      s9_c1_title: 'Маркетолог підписок',
      s9_c1_desc:  'Відповідаєш за продукт підписки від і до: утримання, ціноутворення, lifecycle, LTV',
      s9_c2_title: 'Frontend розробник',
      s9_c2_desc:  'Будуй і розвивай платформу навчання, quiz-воронки та лендінги. React або vanilla, смак до деталей',
      s9_c3_title: 'Медіабайер',
      s9_c3_desc:  'Meta і TikTok у масштабі на кількох ринках, щотижневе тестування креативів, unit-economics',
      s9_remote: 'Remote, full-time',
      s9_apply:  'Подати заявку',
      s9_no_role_title: 'Не бачиш своєї вакансії?',
      s9_no_role_desc:  'Напиши нам з тим, що ти побудував. Беремо, коли зустрічаємо потрібну людину',
      s9_write: 'Написати',

      // S10
      s10_tag:    '//почни тут',
      s10_title:  'Отримай карту монетизації',
      s10_desc:   'Залиш заявку — призначимо дзвінок з командою. Розглянемо аудиторію й експертизу та скажемо, як може виглядати лінійка продуктів і бізнес. Безплатно, без зобов\'язань',
      s10_l_name: 'Ваше ім\'я',
      s10_l_email:'Email',
      s10_l_handle:'Instagram або TikTok нікнейм',
      s10_l_aud: 'Ваша аудиторія',
      s10_sel_ph: 'Оберіть розмір аудиторії',
      s10_opt1:   'До 50k',
      s10_opt2:   '50k–200k',
      s10_opt3:   '200k–1M',
      s10_opt4:   'Понад 1M',
      s10_ta_ph:  'Чому ви навчаєте і для кого?',
      s10_btn:    'Отримати карту монетизації',
      s10_thanks: 'Дякуємо!',
      s10_thanks_desc: 'Ваш поштовий клієнт відкриється із заповненою заявкою. Якщо ні — напишіть на <a href="mailto:info@zbl.agency" class="s10__link">info@zbl.agency</a>',

      // Contact Page
      c_tag:        '//контакти',
      c_title:      "давай поговоримо",
      c_desc:       'Кріейтори, кандидати та партнери. Одна адреса, реальні люди по той бік',
      c_l_name:     "Ваше ім'я",
      c_ph_name:    "Ім'я",
      c_l_email:    'Email',
      c_ph_email:   'you@example.com',
      c_l_social:   'Соцмережі',
      c_ph_social:  'Instagram, LinkedIn або інше',
      c_l_role:     'Я',
      c_ph_role:    'Кріейтор, кандидат, або хтось інший',
      c_l_msg:      'Ваше повідомлення',
      c_ph_msg:     'Ваше повідомлення',
      c_btn:        'Надіслати',
      c_success:    '✅ Ваше повідомлення успішно надіслано!'
    }
  };

  // ── УТИЛІТИ ──────────────────────────────────────────────────────────────────
  const STORAGE_KEY = 'zbl_lang';

  function getLang() {
    try { return localStorage.getItem(STORAGE_KEY) || 'en'; } catch { return 'en'; }
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
  }

  function t(key) {
    const lang = getLang();
    return TRANSLATIONS[lang][key] || TRANSLATIONS['en'][key] || '';
  }

  // ── ЗАСТОСУВАННЯ ПЕРЕКЛАДІВ ───────────────────────────────────────────────────
  function applyTranslations() {
    const T = TRANSLATIONS[getLang()];

    // Nav desktop
    const navLinks = document.querySelectorAll('.s1__nav .s1__nav-link');
    const navKeys = ['nav_how','nav_careers','nav_who','nav_faq','nav_company'];
    navLinks.forEach((el, i) => { if (navKeys[i]) el.textContent = T[navKeys[i]]; });

    // Consult buttons
    document.querySelectorAll('.s1__btn-small').forEach(el => { el.textContent = T.btn_consult; });

    // S1 hero texts
    const rowTexts = document.querySelectorAll('.s1__row-text');
    if (rowTexts[0]) rowTexts[0].innerHTML = T.s1_row_right;
    if (rowTexts[1]) rowTexts[1].innerHTML = T.s1_row_left;

    const heroLines = document.querySelectorAll('.s1__hero-line');
    if (heroLines[0]) {
      const firstNode = [...heroLines[0].childNodes].find(n => n.nodeType === 3);
      if (firstNode) firstNode.textContent = T.s1_hero_1;
    }
    if (heroLines[1]) {
      const span = heroLines[1].querySelector('span');
      if (span) span.textContent = T.s1_hero_2;
    }

    const desc = document.querySelector('.s1__desc');
    if (desc) {
      const strong = desc.querySelector('strong');
      const span   = desc.querySelector('span');
      if (strong) strong.textContent = T.s1_desc_strong;
      if (span)   span.textContent   = T.s1_desc_span;
    }

    const btnLarge = document.querySelector('.s1__btn-large');
    if (btnLarge) {
      const firstText = [...btnLarge.childNodes].find(n => n.nodeType === 3);
      if (firstText) firstText.textContent = T.btn_consult + ' ';
    }

    // Mobile menu nav
    const mobLinks = document.querySelectorAll('.s1__mobile-link .s1__mobile-link-text');
    const mobKeys  = ['mob_contact','mob_how','mob_careers','mob_who','mob_faq','mob_company'];
    mobLinks.forEach((el, i) => { if (mobKeys[i]) el.textContent = T[mobKeys[i]]; });

    // S2
    const s2Items = document.querySelectorAll('.s2__item');
    [
      ['s2_1_num','s2_1_text'],
      ['s2_2_num','s2_2_text'],
      ['s2_3_num','s2_3_text'],
      ['s2_4_num','s2_4_text'],
    ].forEach(([nk, tk], i) => {
      const item = s2Items[i];
      if (!item) return;
      const num  = item.querySelector('.s2__num');
      const text = item.querySelector('.s2__text');
      if (num)  num.innerHTML  = T[nk];
      if (text) text.innerHTML = T[tk];
    });

    // S3
    const s3Tag   = document.querySelector('.s3__tag');
    const s3Title = document.querySelector('.s3__title');
    const s3Desc  = document.querySelector('.s3__desc');
    if (s3Tag)   s3Tag.textContent   = T.s3_tag;
    if (s3Title) s3Title.innerHTML   = T.s3_title;
    if (s3Desc)  s3Desc.textContent  = T.s3_desc;
    [
      ['s3_c1_title','s3_c1_text'],
      ['s3_c2_title','s3_c2_text'],
      ['s3_c3_title','s3_c3_text'],
      ['s3_c4_title','s3_c4_text'],
      ['s3_c5_title','s3_c5_text'],
    ].forEach(([tk, dtk], i) => {
      const cards = document.querySelectorAll('.s3__card-title');
      const texts = document.querySelectorAll('.s3__card-text');
      if (cards[i]) cards[i].textContent = T[tk];
      if (texts[i]) texts[i].textContent = T[dtk];
    });

    // S4
    const s4title    = document.querySelector('.s4__title');
    const s4subtitle = document.querySelector('.s4__subtitle');
    const s4ps       = document.querySelectorAll('.s4__text-p');
    const s4stat_t   = document.querySelectorAll('.s4__stat-title');
    const s4stat_v   = document.querySelectorAll('.s4__stat-val');
    const s4footer   = document.querySelector('.s4__footer-text');
    if (s4title)    s4title.textContent   = T.s4_title;
    if (s4subtitle) s4subtitle.textContent = T.s4_subtitle;
    if (s4ps[0])    s4ps[0].innerHTML     = T.s4_p1;
    if (s4ps[1])    s4ps[1].innerHTML     = T.s4_p2;
    if (s4stat_t[0]) s4stat_t[0].textContent = T.s4_stat1_title;
    if (s4stat_v[0]) s4stat_v[0].innerHTML   = T.s4_stat1_val;
    if (s4stat_t[1]) s4stat_t[1].textContent = T.s4_stat2_title;
    if (s4stat_v[1]) s4stat_v[1].innerHTML   = T.s4_stat2_val;
    if (s4stat_t[2]) s4stat_t[2].textContent = T.s4_stat3_title;
    if (s4stat_v[2]) s4stat_v[2].innerHTML   = T.s4_stat3_val;
    if (s4footer)    s4footer.innerHTML      = T.s4_footer;

    // Одразу під наявним блоком Contact Page (c-contact) в lang.js:
const cThanksTitle = document.querySelector('#cSuccessText .c-contact__title');
const cThanksDesc  = document.querySelector('#cSuccessText .c-contact__desc');

if (cThanksTitle) cThanksTitle.textContent = T.c_thanks;
if (cThanksDesc)  cThanksDesc.innerHTML    = T.c_thanks_desc;

    // S5 CTA
    const s5ctaTitle = document.querySelector('.s5__cta-title');
    const s5ctaDesc  = document.querySelector('.s5__cta-desc');
    const s5Btns     = document.querySelectorAll('.s5__btn');
    if (s5ctaTitle) s5ctaTitle.textContent = T.s5_cta_title;
    if (s5ctaDesc)  s5ctaDesc.textContent  = T.s5_cta_desc;
    s5Btns.forEach(b => {
      const firstNode = [...b.childNodes].find(n => n.nodeType === 3);
      if (firstNode) firstNode.textContent = T.s5_btn + ' ';
    });
    const s5Tag   = document.querySelector('.s5__timeline-tag');
    const s5Title = document.querySelector('.s5__timeline-title');
    const s5Desc  = document.querySelector('.s5__timeline-desc');
    if (s5Tag)   s5Tag.textContent  = T.s5_tl_tag;
    if (s5Title) s5Title.innerHTML  = T.s5_tl_title;
    if (s5Desc)  s5Desc.textContent = T.s5_tl_desc;
    const cards = document.querySelectorAll('.s5__card');
    const slKeys = [
      ['s5_sl1_step','s5_sl1_title','s5_sl1_text','s5_sl1_out_t','s5_sl1_out'],
      ['s5_sl2_step','s5_sl2_title'],
      ['s5_sl3_step','s5_sl3_title'],
      ['s5_sl4_step','s5_sl4_title'],
      ['s5_sl5_step','s5_sl5_title'],
    ];
    cards.forEach((card, i) => {
      const sk = slKeys[i];
      if (!sk) return;
      const step  = card.querySelector('.s5__card-step');
      const title = card.querySelector('.s5__card-title');
      if (step)  step.textContent  = T[sk[0]];
      if (title) title.textContent = T[sk[1]];
      if (i === 0) {
        const text  = card.querySelector('.s5__card-text');
        const outs  = card.querySelectorAll('.s5__card-block');
        if (text) text.textContent = T[sk[2]];
        if (outs[1]) {
          const sub = outs[1].querySelector('.s5__card-subtitle');
          const p   = outs[1].querySelector('.s5__card-text');
          if (sub) sub.textContent = T[sk[3]];
          if (p)   p.textContent   = T[sk[4]];
        }
      }
    });

    // S6
    const s6Tag   = document.querySelector('.s6__tag');
    const s6Title = document.querySelector('.s6__title');
    const s6Desc  = document.querySelector('.s6__desc');
    if (s6Tag)   s6Tag.textContent  = T.s6_tag;
    if (s6Title) s6Title.innerHTML  = T.s6_title;
    if (s6Desc)  s6Desc.textContent = T.s6_desc;
    const s6CardTitles = document.querySelectorAll('.s6__card-title');
    if (s6CardTitles[0]) s6CardTitles[0].textContent = T.s6_for_title;
    if (s6CardTitles[1]) s6CardTitles[1].textContent = T.s6_not_title;
    const s6Texts = document.querySelectorAll('.s6__text');
    [[0,'s6_for_1'],[1,'s6_for_2'],[2,'s6_for_3'],[3,'s6_not_1'],[4,'s6_not_2'],[5,'s6_not_3']].forEach(([i,k]) => {
      if (s6Texts[i]) s6Texts[i].textContent = T[k];
    });

    // S7 FAQ
    const s7Title = document.querySelector('.s7__title');
    if (s7Title) s7Title.textContent = T.s7_title;
    const s7Qs = document.querySelectorAll('.s7__q');
    const s7As = document.querySelectorAll('.s7__ans');
    [[0,'s7_q1','s7_a1'],[1,'s7_q2','s7_a2'],[2,'s7_q3','s7_a3'],[3,'s7_q4','s7_a4'],[4,'s7_q5','s7_a5']].forEach(([i,qk,ak]) => {
      if (s7Qs[i]) s7Qs[i].textContent = T[qk];
      if (s7As[i]) s7As[i].textContent = T[ak];
    });

    // S8
    const s8Tag   = document.querySelector('.s8__tag');
    const s8Title = document.querySelector('.s8__title');
    const s8Desc  = document.querySelector('.s8__desc');
    const s8Btn   = document.querySelector('.s8__btn');
    if (s8Tag)   s8Tag.textContent   = T.s8_tag;
    if (s8Title) s8Title.textContent = T.s8_title;
    if (s8Desc)  s8Desc.textContent  = T.s8_desc;
    if (s8Btn)   { const tn = [...s8Btn.childNodes].find(n => n.nodeType === 3); if (tn) tn.textContent = T.s8_btn + ' '; }

    // S9
    const s9Tag   = document.querySelector('.s9__tag');
    const s9Title = document.querySelector('.s9__title');
    const s9Desc  = document.querySelector('.s9__desc');
    const s9Roles = document.querySelector('.s9__roles-title');
    if (s9Tag)   s9Tag.textContent   = T.s9_tag;
    if (s9Title) s9Title.textContent = T.s9_title;
    if (s9Desc)  s9Desc.textContent  = T.s9_desc;
    if (s9Roles) s9Roles.textContent = T.s9_roles;
    const s9CardTitles = document.querySelectorAll('.s9__card-title');
    const s9CardDescs  = document.querySelectorAll('.s9__card-desc');
    [[0,'s9_c1_title','s9_c1_desc'],[1,'s9_c2_title','s9_c2_desc'],[2,'s9_c3_title','s9_c3_desc']].forEach(([i,tk,dk]) => {
      if (s9CardTitles[i]) s9CardTitles[i].textContent = T[tk];
      if (s9CardDescs[i])  s9CardDescs[i].textContent  = T[dk];
    });
    document.querySelectorAll('.s9__card-meta').forEach(el => el.textContent = T.s9_remote);
    document.querySelectorAll('.s9__btn-apply').forEach(btn => {
      const tn = [...btn.childNodes].find(n => n.nodeType === 3);
      if (tn) tn.textContent = T.s9_apply + ' ';
    });
    const s9FTitle = document.querySelector('.s9__footer-title');
    const s9FDesc  = document.querySelector('.s9__footer-desc');
    const s9FBtn   = document.querySelector('.s9__btn-write');
    if (s9FTitle) s9FTitle.textContent = T.s9_no_role_title;
    if (s9FDesc)  s9FDesc.textContent  = T.s9_no_role_desc;
    if (s9FBtn)   s9FBtn.textContent   = T.s9_write;

    // S10
    const s10Tag   = document.querySelector('.s10__tag');
    const s10Title = document.querySelector('.s10__title');
    const s10Desc  = document.querySelector('.s10__desc');
    if (s10Tag)   s10Tag.textContent   = T.s10_tag;
    if (s10Title) s10Title.textContent = T.s10_title;
    if (s10Desc)  s10Desc.textContent  = T.s10_desc;
    const s10Labels = document.querySelectorAll('.s10__label');
    [[0,'s10_l_name'],[1,'s10_l_email'],[2,'s10_l_handle'],[3,'s10_l_aud']].forEach(([i,k]) => {
      if (s10Labels[i]) s10Labels[i].textContent = T[k];
    });
    const selVal = document.querySelector('.s10__select-val');
    if (selVal && !selVal.classList.contains('is-selected')) selVal.textContent = T.s10_sel_ph;
    const opts = document.querySelectorAll('.s10__option');
    [[0,'s10_opt1'],[1,'s10_opt2'],[2,'s10_opt3'],[3,'s10_opt4']].forEach(([i,k]) => {
      if (opts[i]) opts[i].textContent = T[k];
    });
    const ta = document.querySelector('.s10__textarea');
    if (ta) ta.placeholder = T.s10_ta_ph;
    const s10Btn = document.querySelector('.s10__btn');
    if (s10Btn) s10Btn.textContent = T.s10_btn;
    const s10ThanksTitle = document.querySelector('.s10__text-success .s10__title');
    const s10ThanksDesc  = document.querySelector('.s10__text-success .s10__desc');
    if (s10ThanksTitle) s10ThanksTitle.textContent = T.s10_thanks;
    if (s10ThanksDesc)  s10ThanksDesc.innerHTML    = T.s10_thanks_desc;

    // Contact Page (c-contact)
    const cTag   = document.querySelector('.c-contact__tag');
    const cTitle = document.querySelector('.c-contact__title');
    const cDesc  = document.querySelector('.c-contact__desc');
    if (cTag)   cTag.textContent   = T.c_tag;
    if (cTitle) cTitle.textContent = T.c_title;
    if (cDesc)  cDesc.textContent  = T.c_desc;

    const cLabels = document.querySelectorAll('.c-contact__label');
    [[0,'c_l_name'],[1,'c_l_email'],[2,'c_l_social'],[3,'c_l_role'],[4,'c_l_msg']].forEach(([i,k]) => {
      if (cLabels[i]) cLabels[i].textContent = T[k];
    });

    const cNameInput   = document.getElementById('cName');
    const cEmailInput  = document.getElementById('cEmail');
    const cSocialInput = document.getElementById('cSocial');
    const cRoleInput   = document.getElementById('cRole');
    const cMsgInput    = document.getElementById('cMessage');

    if (cNameInput)   cNameInput.placeholder   = T.c_ph_name;
    if (cEmailInput)  cEmailInput.placeholder  = T.c_ph_email;
    if (cSocialInput) cSocialInput.placeholder = T.c_ph_social;
    if (cRoleInput)   cRoleInput.placeholder   = T.c_ph_role;
    if (cMsgInput)    cMsgInput.placeholder    = T.c_ph_msg;

    const cBtn = document.getElementById('contactSubmitBtn');
    if (cBtn) cBtn.textContent = T.c_btn;

    const cSuccess = document.getElementById('contactSuccessMsg');
    if (cSuccess) cSuccess.textContent = T.c_success;
  }

  // ── ПЕРЕМИКАЧ ────────────────────────────────────────────────────────────────
  function updateSwitchers(lang) {
    // Desktop
    document.querySelectorAll('.s1__lang-item').forEach(item => {
      const isEN = item.textContent.trim().toLowerCase() === 'en';
      item.classList.toggle('s1__lang-item--active', lang === 'en' ? isEN : !isEN);
    });
    // Mobile
    document.querySelectorAll('.s1__mobile-lang-btn').forEach(item => {
      const isEN = item.textContent.trim().toLowerCase() === 'en';
      item.classList.toggle('s1__mobile-lang-btn--active', lang === 'en' ? isEN : !isEN);
    });
  }

  function switchLang(lang) {
    saveLang(lang);
    updateSwitchers(lang);
    applyTranslations();
  }

  // ── ІНІЦІАЛІЗАЦІЯ ─────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    const lang = getLang();
    updateSwitchers(lang);
    if (lang !== 'en') applyTranslations();

    // Desktop switcher
    document.querySelectorAll('.s1__lang-item').forEach(item => {
      item.addEventListener('click', function () {
        const selected = this.textContent.trim().toLowerCase() === 'en' ? 'en' : 'ua';
        switchLang(selected);
      });
    });

    // Mobile switcher
    document.querySelectorAll('.s1__mobile-lang-btn').forEach(item => {
      item.addEventListener('click', function () {
        const selected = this.textContent.trim().toLowerCase() === 'en' ? 'en' : 'ua';
        switchLang(selected);
      });
    });
  });

})();