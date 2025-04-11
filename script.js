const translations = {
    ru: {
        home: "Главная",
        quests: "Квесты",
        prices: "Цены",
        contact: "Контакты",
        title: "Погрузитесь в захватывающий мир квестов Room Break",
        ourQuests: "Наши квесты",
        alcatraz: {
            title: "Алькатрас",
            desc: "Окажитесь в легендарной тюрьме Алькатрас — точной копии знаменитого островного изолятора из Сан-Франциско. При входе вы будете разделены на две камеры, запертые прочными дверями. Чтобы выбраться, придётся объединить усилия, разгадывать головоломки и искать путь к свободе."
        },
        sheriff: {
            title: "Офис Шерифа",
            desc: "Жестокий шериф обвинил вас в ограблении банка. Некоторых из вашей команды он уже бросил за решётку. Ваша миссия — освободить друзей, преодолеть ловушки и выбраться из офиса, пока не стало слишком поздно."
        },
        sherlock: {
            title: "Шерлок Холмс",
            desc: "Погрузитесь в атмосферу Лондона и станьте помощником самого Шерлока Холмса. Его близкая подруга таинственно исчезла, и теперь всё зависит от вас. Исследуйте улики, анализируйте детали и шаг за шагом приближайтесь к разгадке."
        },
        ghost: {
            title: "Призрак",
            desc: "Загадочный старинный замок скрывает в себе тайну исчезнувшего графства. Вам предстоит раскрыть эту мрачную историю, погружаясь в атмосферу прошлого. Ищите улики, решайте головоломки, изучайте каждый уголок."
        },
        pricesTitle: "Цены",
        weekday: "Будни: 600 лей (2-4 человека)",
        weekend: "Выходные: 700 лей (2-4 человека)",
        additional: "Доплата за 5-6 человек: 100 лей за человека",
        phone: "Телефон"
    },
    ro: {
        home: "Acasă",
        quests: "Quest-uri",
        prices: "Prețuri",
        contact: "Contacte",
        title: "Pătrundeți în lumea captivantă a quest-urilor Room Break",
        ourQuests: "Quest-urile noastre",
        alcatraz: {
            title: "Alcatraz",
            desc: "Găsiți-vă în legendara închisoare Alcatraz - o copie exactă a faimosului izolator insular din San Francisco. La intrare veți fi separați în două celule, încuiate cu uși solide. Pentru a scăpa, va trebui să vă uniți eforturile, să rezolvați puzzle-uri și să găsiți calea spre libertate."
        },
        sheriff: {
            title: "Biroul Șerifului",
            desc: "Șeriful crud v-a acuzat de jefuirea băncii. Unii dintre echipa voastră au fost deja aruncați după gratii. Misiunea voastră este să vă eliberați prietenii, să depășiți capcanele și să ieșiți din birou înainte să fie prea târziu."
        },
        sherlock: {
            title: "Sherlock Holmes",
            desc: "Scufundați-vă în atmosfera Londrei și deveniți asistentul lui Sherlock Holmes însuși. Prietena lui apropiată a dispărut misterios și acum totul depinde de voi. Investigați indiciile, analizați detaliile și apropiați-vă pas cu pas de dezlegarea misterului."
        },
        ghost: {
            title: "Fantoma",
            desc: "Castelul antic misterios ascunde secretul unui comitat dispărut. Va trebui să descoperiți această poveste întunecată, scufundându-vă în atmosfera trecutului. Căutați indicii, rezolvați puzzle-uri, explorați fiecare colț."
        },
        pricesTitle: "Prețuri",
        weekday: "Zile lucrătoare: 600 lei (2-4 persoane)",
        weekend: "Weekend: 700 lei (2-4 persoane)",
        additional: "Supliment pentru 5-6 persoane: 100 lei per persoană",
        phone: "Telefon"
    }
};

function switchLanguage(lang) {
    document.documentElement.lang = lang;
    
    // Update navigation
    document.querySelector('a[href="#home"]').textContent = translations[lang].home;
    document.querySelector('a[href="#quests"]').textContent = translations[lang].quests;
    document.querySelector('a[href="#prices"]').textContent = translations[lang].prices;
    document.querySelector('a[href="#contact"]').textContent = translations[lang].contact;
    
    // Update main title
    document.querySelector('.banner p').textContent = translations[lang].title;
    
    // Update quests section
    document.querySelector('#quests h2').textContent = translations[lang].ourQuests;
    
    const quests = ['alcatraz', 'sheriff', 'sherlock', 'ghost'];
    quests.forEach(quest => {
        const questElement = document.querySelector(`.quest:nth-child(${quests.indexOf(quest) + 1})`);
        questElement.querySelector('h3').textContent = translations[lang][quest].title;
        questElement.querySelector('p').textContent = translations[lang][quest].desc;
    });
    
    // Update prices section
    document.querySelector('#prices h2').textContent = translations[lang].pricesTitle;
    const priceInfo = document.querySelector('.price-info').children;
    priceInfo[0].textContent = translations[lang].weekday;
    priceInfo[1].textContent = translations[lang].weekend;
    priceInfo[2].textContent = translations[lang].additional;
    
    // Update contact section
    document.querySelector('#contact h2').textContent = translations[lang].contact;
    const phoneText = document.querySelector('.social-links p');
    phoneText.textContent = translations[lang].phone + ': +37360533390';
}
