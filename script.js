const detailsData = {
    phishing: {
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
        title: { ru: "Фишинг (Phishing) — Полное руководство", kz: "Фишинг (Phishing) — Толық нұсқаулық" },
        text: {
            ru: "Фишинг — это вид интернет-мошенничества, цель которого — получить доступ к конфиденциальным данным пользователей (логинам, паролям, PIN-кодам и номерам банковских карт). Злоумышленники создают точные копии известных сайтов, банков или сервисов.",
            kz: "Фишинг — бұл пайдаланушылардың құпия деректеріне (логиндер, құпия сөздер, PIN-кодтар мен банк карталарының нөмірлері) қол жеткізуді мақсат eтетін интернет-алаяқтық түрі. Қаскөйлер белгілі сайттардың немесе банктердің дәл көшірмелерін жасайды."
        },
        listTitle: { ru: "Правила защиты от фишинга:", kz: "Фишингтен қорғану ережелері:" },
        items: {
            ru: [
                "Всегда проверяйте URL-адрес сайта в строке браузера (например, https://bank.com).",
                "Не переходите по ссылкам из подозрительных SMS и email-рассылок.",
                "Никогда не вводите свои личные данные на сайтах без HTTPS-защиты (иконка замочка).",
                "Используйте двухфакторную аутентификацию (2FA) для всех важных сервисов."
            ],
            kz: [
                "Әрқашан браузер жолындағы сайттың URL мекенжайын тексеріңіз.",
                "Күдікті SMS пен email-хабарламалардағы сілтемелерге өтпеңіз.",
                "HTTPS қорғанысы жоқ сайттарда жеке деректеріңізді енгізбеңіз.",
                "Барлық маңызды қызметтер үшін екі факторлы аутентификацияны (2FA) пайдаланыңыз."
            ]
        }
    },
    malware: {
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
        title: { ru: "Вредоносное ПО и Шифровальщики", kz: "Зиянды бағдарламалар мен Шифрлағыштар" },
        text: {
            ru: "Вредоносные программы (вирусы, трояны, Ransomware) попадают на устройство через неофициальные загрузки, пиратский софт или вложения в письмах. Вымогатели (Ransomware) зашифровывают ваши файлы и требуют выкуп.",
            kz: "Зиянды бағдарламалар (вирустар, трояндар, Ransomware) құрылғыға бейресми жүктеулер, қарақшылық бағдарламалар немесе хаттардағы тіркемелер арқылы түседі. Шифрлағыштар файлдарыңызды бұғаттап, ақша талап етеді."
        },
        listTitle: { ru: "Как уберечь систему:", kz: "Жүйені қалай қорғауға болады:" },
        items: {
            ru: [
                "Установите лицензионный антивирус и регулярное обновление базы.",
                "Скачивайте программы только с официальных сайтов разработчиков.",
                "Делайте регулярные резервные копии (Backup) на внешний диск или в облако.",
                "Не открывайте исполняемые файлы (.exe, .bat, .vbs) из почты."
            ],
            kz: [
                "Лицензиялық антивирус орнатыңыз және оны үнемі жаңартып отырыңыз.",
                "Бағдарламаларды тек ресми сайттардан жүктеңіз.",
                "Сыртқы дискіге немесе бұлтқа үнемі сақтық көшірмелерін (Backup) жасаңыз.",
                "Поштадан келген (.exe, .bat) сияқты файлдарды ашпаңыз."
            ]
        }
    },
    social_eng: {
        img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        title: { ru: "Социальная инженерия", kz: "Әлеуметтік инженерия" },
        text: {
            ru: "Атака на человеческий фактор. Мошенники используют страх, спешку или любопытство. Они могут звонить под видом сотрудников службы безопасности банка или правоохранительных органов.",
            kz: "Адам факторына жасалатын шабуыл. Алаяқтар қорқыныш пен асығыстықты пайдаланады. Олар банк қауіпсіздігі немесе полиция қызметкері ретінде қоңырау шалуы мүмкін."
        },
        listTitle: { ru: "Запомните навсегда:", kz: "Мәңгі есіңізде сақтаңыз:" },
        items: {
            ru: [
                "Сотрудники банка никогда не спрашивают SMS-коды, PIN или CVV.",
                "Если вас торопят принять решение — немедленно положите трубку.",
                "Перезвоните в банк по официальному номеру с обратной стороны карты."
            ],
            kz: [
                "Банк қызметкерлері ешқашан SMS-кодтарды, PIN немесе CVV сұрамайды.",
                "Егер сізді шешім қабылдауға асықтырса — бірден тұтқаны қойыңыз.",
                "Картаның артындағы ресми нөмір бойынша банкке өзіңіз қайта қоңырау шалыңыз."
            ]
        }
    },
    passwords: {
        img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80",
        title: { ru: "Безопасность паролей", kz: "Құпия сөздер қауіпсіздігі" },
        text: {
            ru: "Простые пароли ломаются методом перебора (Brute-force) за миллисекунды. Использование одного и того же пароля на разных сайтах грозит взломом всех ваших аккаунтов одновременно.",
            kz: "Қарапайым құпия сөздер бұзу әдісімен (Brute-force) бірнеше секундта бұзылады. Әртүрлі сайттарда бірдей құпия сөзді пайдалану барлық аккаунттарыңыздың бұзылуына әкелуі мүмкін."
        },
        listTitle: { ru: "Критерии надежного пароля:", kz: "Сенімді құпия сөз критерийлері:" },
        items: {
            ru: [
                "Длина от 12-16 символов.",
                "Содержит заглавные и строчные буквы, цифры и спецсимволы.",
                "Используйте менеджер паролей (1Password, Bitwarden)."
            ],
            kz: [
                "Ұзындығы 12-16 таңбадан кем болмауы керек.",
                "Үлкен және кіші әріптерді, сандарды, арнайы белгілерді қамтиды.",
                "Құпия сөз менеджерін пайдаланыңыз."
            ]
        }
    },
    mobile_sec: {
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
        title: { ru: "Безопасность смартфонов", kz: "Смартфон қауіпсіздігі" },
        text: {
            ru: "Смартфон содержит всю нашу жизнь: от банков до личных фото. Публичный Wi-Fi в кафе и небезопасные приложения — главные векторы атак.",
            kz: "Смартфонда біздің барлық өміріміз бар: банктерден бастап жеке фотоларға дейін. Кафедегі ашық Wi-Fi мен қауіпті қосымшалар басты қауіп көзі болып табылады."
        },
        listTitle: { ru: "Советы по защите:", kz: "Қорғау кеңестері:" },
        items: {
            ru: [
                "Настройте вход по биометрии (FaceID / Fingerprint).",
                "Не подключайтесь к открытым Wi-Fi без VPN.",
                "Устанавливайте обновления ОС сразу после выхода."
            ],
            kz: [
                "Биометрия арқылы кіруді баптаңыз (FaceID / Саусақ із).",
                "VPN-сіз ашық Wi-Fi желілеріне қосылмаңыз.",
                "Жүйе жаңартуларын шыққан бойда орнатыңыз."
            ]
        }
    },
    cloud_sec: {
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
        title: { ru: "Защита данных в облаке", kz: "Бұлттық деректерді қорғау" },
        text: {
            ru: "Облачные сервисы (Google Drive, iCloud) надежны, но слабым звеном остается доступ к вашему аккаунту.",
            kz: "Бұлттық қызметтер (Google Drive, iCloud) сенімді, бірақ әлсіз тұсы — аккаунтыңызға кіру мүмкіндігі."
        },
        listTitle: { ru: "Чек-лист безопасности:", kz: "Қауіпсіздік чек-листі:" },
        items: {
            ru: [
                "Включите 2FA через приложение-аутентификатор.",
                "Зашифруйте конфиденциальные архивы перед загрузкой.",
                "Проверяйте список активных сессий."
            ],
            kz: [
                "Аутентификатор қосымшасы арқылы 2FA қосыңыз.",
                "Құпия архивтерді жүктемес бұрын шифрлаңыз.",
                "Белсенді сессиялар тізімін тексеріп отырыңыз."
            ]
        }
    },
    online_shop: {
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80",
        title: { ru: "Безопасные онлайн-покупки", kz: "Қауіпсіз онлайн сауда" },
        text: {
            ru: "Интернет-магазины с аномально низкими ценами часто оказываются фейковыми.",
            kz: "Өте төмен бағалары бар интернет-дүкендер жиі жалған болып шығады."
        },
        listTitle: { ru: "Как покупать безопасно:", kz: "Қауіпсіз сатып алу жолдары:" },
        items: {
            ru: [
                "Заведите отдельную виртуальную карту для покупок.",
                "Установите лимит на интернет-операции.",
                "Не сохраняйте карты на неизвестных сайтах."
            ],
            kz: [
                "Сатып алулар үшін бөлек виртуалды карта ашыңыз.",
                "Интернет-операцияларға лимит қойыңыз.",
                "Белгісіз сайттарда карталарды сақтамаңыз."
            ]
        }
    }
};

const translations = {
    ru: {
        "site-title": "КиберБезопасность",
        "nav-threats": "Угрозы",
        "nav-articles": "Статьи",
        "nav-toolkit": "Инструменты",
        "nav-videos": "Видео",
        "nav-game": "Игра",
        "nav-quiz": "Тест (10 вопр.)",
        "hero-title": "Электронный справочник по кибербезопасности",
        "hero-desc": "Полное руководство по защите персональных данных, противодействию мошенникам, созданию надежных паролей и основам безопасного поведения в сети интернет.",
        "hero-btn-tools": "Генератор паролей",
        "hero-btn-articles": "Читать статьи",
        "threats-heading": "Основные киберугрозы",
        "threats-subheading": "Нажмите на карточку, чтобы узнать подробности и способы защиты",
        "threat-1-title": "Фишинг (Phishing)",
        "threat-1-desc": "Поддельные сайты и фиктивные рассылки от банков или госорганов.",
        "threat-2-title": "Вредоносное ПО",
        "threat-2-desc": "Вирусы, трояны и вымогатели, блокирующие работу ПК.",
        "threat-3-title": "Соц. инженерия",
        "threat-3-desc": "Психологические манипуляции и звонки от фальшивой техподдержки.",
        "threat-4-title": "Слабые пароли",
        "threat-4-desc": "Простые комбинации, которые позволяют подбирать пароли за секунды.",
        "articles-heading": "База знаний и статьи",
        "articles-subheading": "Полный разбор тем цифровой гигиены (нажмите для чтения)",
        "art-1-title": "Безопасность смартфонов",
        "art-1-desc": "Защита устройства от шпионских программ и несанкционированного доступа.",
        "art-2-title": "Защита данных в облаке",
        "art-2-desc": "Безопасное хранение файлов на Google Drive, iCloud, OneDrive и настройка 2FA.",
        "art-3-title": "Безопасные онлайн-покупки",
        "art-3-desc": "Как защитить банковские карты и не попасть на фейковые интернет-магазины.",
        "toolkit-heading": "Интерактивный генератор паролей",
        "toolkit-subheading": "Создайте надежный уникальный пароль",
        "pass-copy": "Копировать",
        "pass-length": "Длина пароля:",
        "pass-symbols": "Спецсимволы (!@#$)",
        "pass-numbers": "Цифры (0-9)",
        "pass-generate": "Сгенерировать новый пароль",
        "videos-heading": "Обучающие видеоматериалы",
        "videos-subheading": "Нажмите на карточку, чтобы открыть видеоурок",
        "vid-1-title": "Основы цифровой гигиены (Русский язык)",
        "vid-2-title": "Киберқауіпсіздік және интернет алаяқтық (Қазақ тілі)",
        "game-heading": "Симулятор: «Центр Кибер-Защиты»",
        "game-subheading": "Анализируйте поступающие сигналы и выбирайте правильные действия для защиты сервера.",
        "game-score": "Счет",
        "game-hp": "Здоровье",
        "game-timer": "Время",
        "game-start-prompt": "Нажмите «Запустить симуляцию», чтобы начать обработку сетевых угроз!",
        "game-btn": "Запустить симуляцию",
        "quiz-heading": "Проверка знаний (Тест)",
        "quiz-subheading": "Пройдите полный тест из 10 вопросов для проверки вашей цифровой грамотности",
        "footer-text": "Электронный справочник по компьютерной безопасности • Барлық құқықтар қорғалған"
    },
    kz: {
        "site-title": "КиберҚауіпсіздік",
        "nav-threats": "Қауіптер",
        "nav-articles": "Мақалалар",
        "nav-toolkit": "Құралдар",
        "nav-videos": "Видео",
        "nav-game": "Ойын-симулятор",
        "nav-quiz": "Тест (10 сұрақ)",
        "hero-title": "Киберқауіпсіздік бойынша электронды анықтамалық",
        "hero-desc": "Жеке деректерді қорғау, алаяқтарға қарсы тұру, сенімді құпия сөздерді жасау және интернетте қауіпсіз жүріп-тұру ережелері бойынша толық нұсқаулық.",
        "hero-btn-tools": "Құпия сөз генераторы",
        "hero-btn-articles": "Мақалаларды оқу",
        "threats-heading": "Негізгі киберқауіптер",
        "threats-subheading": "Толығырақ білу үшін карточканы басыңыз",
        "threat-1-title": "Фишинг (Phishing)",
        "threat-1-desc": "Банктер немесе мемлекеттік органдар атынан жасалған жалған сайттар.",
        "threat-2-title": "Зиянды бағдарламалар",
        "threat-2-desc": "Компьютерді бұғаттайтын вирустар мен трояндар.",
        "threat-3-title": "Әлеуметтік инженерия",
        "threat-3-desc": "Психологиялық әдістермен және жалған қоңыраулармен алдау.",
        "threat-4-title": "Әлсіз құпия сөздер",
        "threat-4-desc": "Боттарға бірнеше секундта бұзуға мүмкіндік беретін әлсіз сөздер.",
        "articles-heading": "Білім базасы мен мақалалар",
        "articles-subheading": "Цифрлық гигиена бойынша толық мақалалар (оқу үшін басыңыз)",
        "art-1-title": "Смартфон қауіпсіздігі",
        "art-1-desc": "Телефонды тыңшылық бағдарламалардан қорғау.",
        "art-2-title": "Бұлттық деректерді қорғау",
        "art-2-desc": "Google Drive, iCloud сақтау ережелері және 2FA.",
        "art-3-title": "Қауіпсіз онлайн сауда",
        "art-3-desc": "Жалған интернет-дүкендерден қорғану жолдары.",
        "toolkit-heading": "Интерактивті құпия сөз генераторы",
        "toolkit-subheading": "Сенімді бірегей құпия сөз жасаңыз",
        "pass-copy": "Көшіру",
        "pass-length": "Құпия сөз ұзындығы:",
        "pass-symbols": "Арнайы таңбалар (!@#$)",
        "pass-numbers": "Сандар (0-9)",
        "pass-generate": "Жаңа құпия сөз жасау",
        "videos-heading": "Оқыту видеоматериалдары",
        "videos-subheading": "Видеосабақты ашу үшін карточканы басыңыз",
        "vid-1-title": "Основы цифровой гигиены (Русский язык)",
        "vid-2-title": "Киберқауіпсіздік және интернет алаяқтық (Қазақ тілі)",
        "game-heading": "Симулятор: «Кибер-Қорғау Орталығы»",
        "game-subheading": "Келіп түскен белгілерді талдап, серверді қорғау үшін дұрыс әрекеттерді таңдаңыз.",
        "game-score": "Ұпай",
        "game-hp": "Денсаулық",
        "game-timer": "Уақыт",
        "game-start-prompt": "Желілік қауіптерді өңдеуді бастау үшін «Симуляцияны іске қосу» батырмасын басыңыз!",
        "game-btn": "Симуляцияны іске қосу",
        "quiz-heading": "Білімді тексеру (Тест)",
        "quiz-subheading": "Цифрлық сауаттылығыңызды тексеру үшін 10 сұрақтан тұратын толық тесттен өтіңіз",
        "footer-text": "Компьютерлік қауіпсіздік бойынша электронды анықтамалық • Барлық құқықтар қорғалған"
    }
};

const quizData = [
    {
        question: { ru: "1. Что делать, если банк прислал SMS с просьбой назвать код для отмены подозрительной операции?", kz: "1. Банк күдікті операцияны жою үшін кодты айтуды сұрап SMS жіберсе не істеу керек?" },
        options: {
            ru: ["Назвать код только если звонящий представился сотрудником безопасности", "Никому не сообщать код, даже сотрудникам банка", "Отправить код в ответном SMS"],
            kz: ["Қоңырау шалушы қауіпсіздік қызметкерімін десе гана кодты айту", "Кодты ешкімге, тіпті банк қызметкерлеріне де айтпау", "Кодты жауап SMS арқылы жіберу"]
        },
        correct: 1
    },
    {
        question: { ru: "2. Какой символ обязательно должен присутствовать в адресе защищенного сайта (HTTPS)?", kz: "2. Қорғалған сайттың (HTTPS) мекенжайында қандай белгі болуы керек?" },
        options: {
            ru: ["Иконка закрытого замочка", "Красный восклицательный знак", "Значок молнии"],
            kz: ["Жабық құлып белгішесі", "Қызыл леп белгісі", "Уақытша найзағай белгісі"]
        },
        correct: 0
    },
    {
        question: { ru: "3. Что такое двухфакторная аутентификация (2FA)?", kz: "3. Екі факторлы аутентификация (2FA) дегеніміз не?" },
        options: {
            ru: ["Использование двух одинаковых паролей", "Вход по паролю + дополнительное подтверждение (SMS, приложение)", "Проверка пароля двумя антивирусами"],
            kz: ["Екі бірдей құпия сөзді пайдалану", "Құпия сөз арқылы кіру + қосымша растау (SMS, қосымша)", "Құпия сөзді екі антивируспен тексеру"]
        },
        correct: 1
    },
    {
        question: { ru: "4. Безопасно ли подключаться к открытому Wi-Fi в кафе для входа в онлайн-банкинг?", kz: "4. Онлайн-банкингке кіру үшін кафедегі ашық Wi-Fi-ға қосылу қауіпсіз бе?" },
        options: {
            ru: ["Да, если скорость высокая", "Нет, так как трафик может быть перехвачен злоумышленниками", "Да, если сеть называется 'Free_WiFi'"],
            kz: ["Иә, егер жылдамдығы жоғары болса", "Жоқ, өйткені трафикті алаяқтар ұстап алуы мүмкін", "Иә, егер желі 'Free_WiFi' деп аталса"]
        },
        correct: 1
    },
    {
        question: { ru: "5. Как часто рекомендуется обновлять операционную систему и приложения?", kz: "5. Операциялық жүйе мен қосымшаларды қаншалықты жиі жаңартып отырған жөн?" },
        options: {
            ru: ["Никогда, обновления только занимают память", "Раз в несколько лет", "Регулярно, по мере выхода обновлений безопасности"],
            kz: ["Ешқашан, жаңартулар тек жадты алады", "Бірнеше жылда бір рет", "Үнемі, қауіпсіздік жаңартулары шыққан бойда"]
        },
        correct: 2
    },
    {
        question: { ru: "6. Что из этого является примером социальной инженерии?", kz: "6. Мыналардың қайсысы әлеуметтік инженерияның мысалы болып табылады?" },
        options: {
            ru: ["Звонок с сообщением: 'Ваш родственник попал в беду, срочно переведите деньги'", "Сбой в работе жесткого диска", "Аппаратная поломка монитора"],
            kz: ["'Сіздің туысыңыз қиындыққа тап болды, тез арада ақша аударыңыз' деген қоңырау", "Қатқыл дискінің істен шығуы", "Монитордың аппараттық бұзылуы"]
        },
        correct: 0
    },
    {
        question: { ru: "7. Что делает программа-шифровальщик (Ransomware)?", kz: "7. Шифрлаушы бағдарлама (Ransomware) не істейді?" },
        options: {
            ru: ["Ускоряет работу компьютера", "Зашифровывает файлы пользователя и требует выкуп за ключ", "Очищает корзину файлов"],
            kz: ["Компьютердің жұмысын жылдамдатады", "Пайдаланушы файлдарын шифрлайды және кілт үшін төлем талап етеді", "Файлдар себетін тазалайды"]
        },
        correct: 1
    },
    {
        question: { ru: "8. Зачем нужен менеджер паролей?", kz: "8. Құпия сөз менеджері не үшін қажет?" },
        options: {
            ru: ["Чтобы надежно хранить и генерировать сложные уникальные пароли", "Чтобы отправлять пароли друзьям", "Чтобы взламывать чужие аккаунты"],
            kz: ["Күрделі бірегей құпия сөздерді сенімді сақтау және генерациялау үшін", "Құпия сөздерді достарға жіберу үшін", "Бөтен аккаунттарды бұзу үшін"]
        },
        correct: 0
    },
    {
        question: { ru: "9. Что такое 'Фишинговый сайт'?", kz: "9. 'Фишингалық сайт' дегеніміз не?" },
        options: {
            ru: ["Сайт про рыбалку", "Копия реального сайта для кражи логинов и паролей", "Интернет-магазин рыбы"],
            kz: ["Балық аулау туралы сайт", "Логиндер мен құпия сөздерді ұрлауға арналған нақты сайттың көшірмесі", "Балық интернет-дүкені"]
        },
        correct: 1
    },
    {
        question: { ru: "10. Какое правило защиты данных является главным при работе с резервными копиями (Backup)?", kz: "10. Сақтық көшірмелермен (Backup) жұмыс істеу кезінде деректерді қорғаудың басты ережесі қандай?" },
        options: {
            ru: ["Хранить бэкап на том же диске, что и оригиналы", "Правило 3-2-1 (3 копии, 2 разных носителя, 1 вне дома/в облаке)", "Не делать бэкапы вообще"],
            kz: ["Бэкапты түпнұсқалар сияқты дискіде сақтау", "3-2-1 ережесі (3 көшірме, 2 түрлі тасымалдаушы, 1 үйден тыс/бұлтта)", "Бэкапты мүлдем жасамау"]
        },
        correct: 1
    }
];

let currentLang = 'ru';
let userMode = 'guest';
let userName = '';
let currentQuizIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('welcome-modal');
    const langBtnRu = document.getElementById('lang-btn-ru');
    const langBtnKz = document.getElementById('lang-btn-kz');
    const modeLoginBtn = document.getElementById('btn-login-mode');
    const modeGuestBtn = document.getElementById('btn-guest-mode');
    const authForm = document.getElementById('auth-form');
    const startAppBtn = document.getElementById('start-app-btn');

    if (langBtnRu && langBtnKz) {
        langBtnRu.addEventListener('click', () => {
            currentLang = 'ru';
            langBtnRu.className = "btn active-cyan";
            langBtnKz.className = "btn btn-dark";
            updateModalTexts();
        });

        langBtnKz.addEventListener('click', () => {
            currentLang = 'kz';
            langBtnKz.className = "btn active-cyan";
            langBtnRu.className = "btn btn-dark";
            updateModalTexts();
        });
    }

    if (modeLoginBtn && modeGuestBtn) {
        modeLoginBtn.addEventListener('click', () => {
            userMode = 'login';
            modeLoginBtn.className = "btn active-cyan";
            modeGuestBtn.className = "btn btn-dark";
            if (authForm) authForm.classList.remove('hidden');
        });

        modeGuestBtn.addEventListener('click', () => {
            userMode = 'guest';
            modeGuestBtn.className = "btn active-cyan";
            modeLoginBtn.className = "btn btn-dark";
            if (authForm) authForm.classList.add('hidden');
        });
    }

    if (startAppBtn && modal) {
        startAppBtn.onclick = function() {
            if (userMode === 'login') {
                const inputVal = document.getElementById('username-input').value.trim();
                userName = inputVal ? inputVal : (currentLang === 'ru' ? 'Пользователь' : 'Пайдаланушы');
                document.getElementById('user-status-display').innerText = userName;
            } else {
                document.getElementById('user-status-display').innerText = currentLang === 'ru' ? 'Гость' : 'Қонақ';
            }

            modal.style.display = 'none';
            modal.classList.add('hidden');
            applyTranslations();
            renderQuiz();
        };
    }

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'ru' ? 'kz' : 'ru';
            document.getElementById('current-lang').innerText = currentLang === 'ru' ? 'ҚАЗ' : 'РУС';
            applyTranslations();
            renderQuiz();
        });
    }

    const rangeInput = document.getElementById('pass-length-range');
    if (rangeInput) {
        rangeInput.addEventListener('input', (e) => {
            document.getElementById('length-val').innerText = e.target.value;
            generatePassword();
        });
    }

    const genBtn = document.getElementById('generate-btn');
    if (genBtn) genBtn.addEventListener('click', generatePassword);

    const copyBtn = document.getElementById('copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const passInput = document.getElementById('password-output');
            passInput.select();
            navigator.clipboard.writeText(passInput.value);
            copyBtn.innerText = currentLang === 'ru' ? '✓ Готово' : '✓ Дайын';
            setTimeout(() => { copyBtn.innerText = translations[currentLang]["pass-copy"]; }, 1500);
        });
    }

    const gameStartBtn = document.getElementById('game-start-btn');
    if (gameStartBtn) gameStartBtn.addEventListener('click', startAdvancedGame);

    generatePassword();
});

function openVideo(videoId) {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    document.getElementById('video-modal').classList.remove('hidden');
}

function closeVideoModal() {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    document.getElementById('video-modal').classList.add('hidden');
}

function openDetail(key) {
    const data = detailsData[key];
    if (!data) return;

    const modalContent = document.getElementById('detail-modal-content');
    modalContent.innerHTML = `
        <img src="${data.img}" class="detail-img" alt="${data.title[currentLang]}">
        <h3 class="detail-title">${data.title[currentLang]}</h3>
        <p class="detail-text">${data.text[currentLang]}</p>
        <div class="detail-list">
            <h5>${data.listTitle[currentLang]}</h5>
            <ul>
                ${data.items[currentLang].map(item => `<li>• ${item}</li>`).join('')}
            </ul>
        </div>
        <button class="btn active-cyan w-100" onclick="closeDetailModal()">${currentLang === 'ru' ? 'Закрыть' : 'Жабу'}</button>
    `;

    document.getElementById('detail-modal').classList.remove('hidden');
}

function closeDetailModal() {
    document.getElementById('detail-modal').classList.add('hidden');
}

function updateModalTexts() {
    if (currentLang === 'kz') {
        document.getElementById('mode-label').innerText = "Кіру режимі:";
        document.getElementById('btn-login-mode').innerText = "Кіру (Аккаунтпен)";
        document.getElementById('btn-guest-mode').innerText = "Қонақ ретінде";
        document.getElementById('start-app-btn').innerText = "Оқуды бастау";
    } else {
        document.getElementById('mode-label').innerText = "Режим входа:";
        document.getElementById('btn-login-mode').innerText = "Войти (С аккаунтом)";
        document.getElementById('btn-guest-mode').innerText = "Как гость";
        document.getElementById('start-app-btn').innerText = "Начать обучение";
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
}

function generatePassword() {
    const lengthInput = document.getElementById('pass-length-range');
    const symbolsCheck = document.getElementById('inc-symbols');
    const numbersCheck = document.getElementById('inc-numbers');
    
    if (!lengthInput) return;

    const length = lengthInput.value;
    const incSymbols = symbolsCheck ? symbolsCheck.checked : true;
    const incNumbers = numbersCheck ? numbersCheck.checked : true;

    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (incNumbers) chars += '0123456789';
    if (incSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('password-output').value = password;
}

// Игра-Симулятор
let gameActive = false;
let gameScore = 0;
let gameHp = 100;
let gameTimeLeft = 45;
let gameTimerInterval;
let currentIncident = null;

const incidents = [
    {
        title: { ru: "⚠️ DDoS-атака: Массовый наплыв запросов с заграничных IP", kz: "⚠️ DDoS-шабуыл: Шетелдік IP-ден жаппай сұраныстар" },
        correctAction: "block_ip"
    },
    {
        title: { ru: "🦠 Обнаружен загруженный файл: invoice_document.exe", kz: "🦠 Жүктелген файл табылды: invoice_document.exe" },
        correctAction: "antivirus"
    },
    {
        title: { ru: "📨 Письмо: Запрос смены пароля от сотрудника через 2FA", kz: "📨 Хат: 2FA арқылы қызметкерден құпия сөзді ауыстыру сұранысы" },
        correctAction: "2fa"
    },
    {
        title: { ru: "✅ Запрос: Клиент обновляет аватарку в личном кабинете", kz: "✅ Сұраныс: Клиент жеке кабинетте аватарды жаңартуда" },
        correctAction: "allow"
    }
];

function startAdvancedGame() {
    gameActive = true;
    gameScore = 0;
    gameHp = 100;
    gameTimeLeft = 45;

    document.getElementById('game-score').innerText = gameScore;
    document.getElementById('game-hp').innerText = gameHp + '%';
    document.getElementById('game-timer').innerText = gameTimeLeft + 's';

    document.getElementById('game-actions').classList.remove('hidden');
    document.getElementById('game-start-btn').classList.add('hidden');

    clearInterval(gameTimerInterval);
    gameTimerInterval = setInterval(() => {
        gameTimeLeft--;
        document.getElementById('game-timer').innerText = gameTimeLeft + 's';
        if (gameTimeLeft <= 0 || gameHp <= 0) {
            endAdvancedGame();
        }
    }, 1000);

    nextIncident();
}

function nextIncident() {
    if (!gameActive) return;
    const randomIndex = Math.floor(Math.random() * incidents.length);
    currentIncident = incidents[randomIndex];

    const field = document.getElementById('game-field');
    field.innerHTML = `
        <div>
            <span style="font-size:11px; color:var(--accent-cyan); font-weight:700;">ИНЦИДЕНТ ПОСТУПИЛ</span>
            <h4 style="font-size:16px; margin: 8px 0; color:#fff;">${currentIncident.title[currentLang]}</h4>
            <p style="font-size:12px; color:var(--text-muted);">Выберите подходящее защитное действие ниже 👇</p>
        </div>
    `;
}

function handleAction(actionType) {
    if (!gameActive || !currentIncident) return;

    if (actionType === currentIncident.correctAction) {
        gameScore += 15;
        document.getElementById('game-score').innerText = gameScore;
    } else {
        gameHp -= 20;
        if (gameHp < 0) gameHp = 0;
        document.getElementById('game-hp').innerText = gameHp + '%';
    }

    if (gameHp <= 0) {
        endAdvancedGame();
    } else {
        nextIncident();
    }
}

function endAdvancedGame() {
    gameActive = false;
    clearInterval(gameTimerInterval);
    document.getElementById('game-actions').classList.add('hidden');
    document.getElementById('game-start-btn').classList.remove('hidden');

    const field = document.getElementById('game-field');
    field.innerHTML = `
        <div>
            <h4 style="font-size:18px; color:var(--accent-cyan); margin-bottom:8px;">${currentLang === 'ru' ? 'Симуляция завершена!' : 'Симуляция аяқталды!'}</h4>
            <p style="font-size:14px; margin-bottom:6px;">${currentLang === 'ru' ? 'Ваш итоговый счет:' : 'Қорытынды ұпай:'} <strong style="color:var(--accent-purple);">${gameScore}</strong></p>
            <p style="font-size:12px; color:var(--text-muted);">${gameHp > 0 ? (currentLang === 'ru' ? 'Сервер успешно защищен!' : 'Сервер сәтті қорғалды!') : (currentLang === 'ru' ? 'Сервер был взломан!' : 'Сервер бұзылды!')}</p>
        </div>
    `;
}

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    if (currentQuizIndex < quizData.length) {
        const q = quizData[currentQuizIndex];
        container.innerHTML = `
            <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-muted); margin-bottom:16px; border-bottom:1px solid var(--border-color); padding-bottom:8px;">
                <span>Вопрос ${currentQuizIndex + 1} из ${quizData.length}</span>
                <span style="color:var(--accent-cyan); font-weight:700;">${Math.round(((currentQuizIndex) / quizData.length) * 100)}% пройдено</span>
            </div>
            <h4 style="font-size:16px; font-weight:700; margin-bottom:16px; color:#fff;">${q.question[currentLang]}</h4>
            <div>
                ${q.options[currentLang].map((opt, idx) => `
                    <button onclick="checkAnswer(${idx})" class="quiz-option">${opt}</button>
                `).join('')}
            </div>
        `;
    } else {
        container.innerHTML = `
            <div style="text-align:center; padding:20px;">
                <div style="font-size:32px; margin-bottom:12px;">🏆</div>
                <h4 style="font-size:18px; margin-bottom:8px; color:#fff;">${currentLang === 'ru' ? 'Тест завершен!' : 'Тест аяқталды!'}</h4>
                <p style="font-size:14px; color:var(--text-muted); margin-bottom:20px;">${currentLang === 'ru' ? 'Правильных ответов:' : 'Дұрыс жауаптар:'} <strong style="color:var(--accent-cyan);">${score}</strong> из ${quizData.length}</p>
                <button onclick="resetQuiz()" class="btn active-cyan">${currentLang === 'ru' ? 'Пройти снова' : 'Қайта өту'}</button>
            </div>
        `;
    }
}

function checkAnswer(selectedIdx) {
    if (selectedIdx === quizData[currentQuizIndex].correct) {
        score++;
    }
    currentQuizIndex++;
    renderQuiz();
}

function resetQuiz() {
    currentQuizIndex = 0;
    score = 0;
    renderQuiz();
}