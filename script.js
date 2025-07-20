// 1.1 Найдите элемент по id, используя getElementById, элемент с id равным
// "super_link" и выведите этот элемент в консоль.
const superLink = document.getElementById('super_link');

// 1.2 Внутри всех элементов на странице, которые имеют класс card-link,
// поменяйте текст внутри элемента на "ссылка"
const allCardLink = document.querySelectorAll('.card-link');
allCardLink.forEach(link => {
    link.textContent = 'ссылка';
})

// 1.3. Найдите все элементы на странице с классом card-link, которые лежат в
// элементе с классом card-body, и выведите полученную коллекцию в консоль.
const cardBody = document.querySelectorAll('.card-body.card-link');
console.log(cardBody);

// 1.4. Найдите первый попавшийся элемент на странице, у которого есть атрибут
// data-number со значением 50, и выведите его в консоль.
const firstEl = document.querySelector('[data-number = "50"]');


// 1.5. Выведите содержимое тега title в консоль
console.log(document.querySelector('title').textContent);

// 1.6. Получите элемент с классом card-title и выведите его родительский узел в
// консоль.
console.log(document.querySelector('.card-title').parentNode);

// 1.7. Создайте тег <p>, запишите внутри него текст "Привет" и добавьте созданный
// тег в начало элемента, который имеет класс card.
const pElement = document.createElement('p');
pElement.textContent = 'Hello';
const card = document.querySelector('.card')
card.insertBefore(pElement, card.firstChild);

// 1.8. Удалите тег h6 на странице.
document.querySelectorAll('h6').forEach(h => h.remove());


// 2.1. Ко всем элементам с классом "dropdown-item" добавить класс
// "super-dropdown"

const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach(item => {
    item.classList.add('super-dropdown');
})

// 2.2 У элемента с классом btn убрать или добавить класс
// "btn-secondary"

const btn = document.querySelector('.btn');
if (btn.classList.contains('btn-secondary')) {
    btn.classList.remove('btn-secondary');
}
else {
    btn.classList.add('btn-secondary');
}

// 2.3. У элемента с классом "menu" удалить класс "dropdown-menu"

const menu = document.querySelector('.menu').classList.remove('dropdown-menu');

// 2.4. Добавить после div с классом "dropdown" разметку <a href="#">link</a>

document.querySelector('.dropdown').insertAdjacentHTML('afterend', ' <a href="#">link</a>');

// 2.5. Заменить id "dropdownMenuButton" на "superDropdown"
document.getElementById('dropdownMenuButton').id = 'superDropdown';

// 2.6. Добавить атрибут data-dd со значением 3 элементу с атрибутом
// aria-labelledby="dropdownMenuButton"

document.querySelector('[aria-labelledby="dropdownMenuButton"]').dataset.dd = '3';

// 2.7. Удалить атрибут type у элемента с классом "dropdown-toggle"
document.querySelector('.dropdown-toggle').removeAttribute('type');


// 6.1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все
// теги будут созданы браузером.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Все теги прогрузились');
})

// 6.2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все
// ресурсы страницы будут загружены.
document.addEventListener('load', () => {
    console.log('страница загрузилась');
})

// 6.3. При клике на какой-либо тег на странице в консоль должно выводиться
// сообщение следующего вида:
// ○ Класс "super_element" присутствует в элементе "div".
// ○ Сообщение должно определять присутствует ли класс "super_element" у
// элемента и выводить в нижнем регистре верный тег в данной строке, по
// которому был совершен клик.
// ○ Необходимо использовать делегирование

document.body.addEventListener('click', (event) => {
    const target = event.target;
    const tagName = event.tagName.toLowerCase();

    const hasSuperClass = target.classList.contains('super_element');

    hasSuperClass ? console.log(`Класс "super_element" присутствует в
элементе "${tagName}".`) : console.log(`Класс "super_element" отсутствует в
элементе "${tagName}".`)

})

// 6.4. Сообщение при наведении на <textarea>
const textarea = document.querySelector('textarea');
textarea.addEventListener('mouseover', () => {
    console.log('Вы навели на textarea.');
});
// 6.5. Делегирование для кнопок внутри <ul>
const ulElement = document.querySelector('ul');
ulElement.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        console.log(event.target.textContent);
    }
});
// 7. Изменение цвета фона каждого второго тега <li>
const liElements = document.querySelectorAll('ul li');
liElements.forEach((li, index) => {
    if (index % 2 === 1) { 
        li.style.backgroundColor = 'lightgrey';
    }
});

