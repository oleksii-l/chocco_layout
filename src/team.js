let team_li = document.querySelectorAll('.team-members__item');

team_li.forEach(li => {
    li.addEventListener('click', item => {
        // удаляем активный модификатор абсолютно у всех li
        team_li.forEach(item => {
            item.classList.remove('team-members__item--active');
        })

        // делаем активную li по которой кликнули
        li.classList.add('team-members__item--active');
    })
});
