let database = [
    {
        src: "img/content/alena.jpg",
        title: "Лучший перекус",
        desc: "Я ем малыми порциями, но часто. Это повышает мою продуктивность в разы. В течение дня \
            сижу за компьютером и часто отходить в кафе или на кухню просто не могу себе позволить. А батончик – он \
            всегда под рукой. Это приятно и удобно.",
        name: "Алена Хмельницкая"
    },

    {
        src: "img/content/maria.png",
        title: "Лучшие батончики премиум уровня",
        desc: "Батончики понравились. На мой взгляд слегка завышена цена по сравнению с конкурентами, однако, как говорится – оно того стоит. Нравится носить с собой, нравится держать в руке. Ну и конечно же, кушать. Идеально утоляют голод, хоть и не надолго. Через час уже ем ещё один. Но это скорее плюс, чем минус.",
        name: "Мария Орлова"
    },

    {
        src: "img/content/vadim.jpg",
        title: "Идеально подходят для спортсменов",
        desc: "После тренировок всегда хочется быстро закинуться чем-то белковым, потому что до дома ещё нужно доехать. А кушать хочется. Протеиновые батончики всегда выручают в этом плане. Спасибо производителю за этот качественный и экологичный продукт.",
        name: "Вадим Грачев"
    }
];

let ul = document.querySelector('.reviews__list');
let lis = document.querySelectorAll('.reviews__item');

ul.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    let currentLi = target.parentNode.parentNode;

    if(target.classList.contains('reviews__img')
        && !currentLi.classList.contains('reviews__item--active')) {
        lis.forEach(item => {
            item.classList.remove('reviews__item--active');
        });

        currentLi.classList.add('reviews__item--active');
        let index = currentLi.getAttribute('index');
        
        loadData(index);
    }
})

function loadData(index) {
    let img = document.querySelector('.review img');
    let title = document.querySelector('.review h3');
    let desc = document.querySelector('.review p');
    let name = document.querySelector('.review h4');

    let data =  database[index];

    img.src = data.src;
    title.textContent = data.title;
    desc.textContent = data.desc;
    name.textContent = data.name;
}