
// Описание задачи:
// 1. Создайте переменную, в которой будет храниться температура в градусах
// Цельсия.
// 2. Преобразуйте значение температуры из градусов Цельсия в градусы
// Фаренгейта, используя следующую форм
// 3. Выведите в консоль как температуру в градусах Цельсия, так и в градусах
// Фаренгейта.

const x = 22;
const y = (9 / 5 * x) + 32;

console.log('Температура в градусах Цельсия:', x);
console.log('Температура в градусах Фаренгейта:', y);



// Описание задачи:
// 1. Создайте переменную name и присвойте ей свое имя.
// 2. Создайте переменную admin и присвойте ей значение из переменной name.
// 3. Выведите значение переменной admin в консоль.

let name = 'Omar';
let admin = name;

console.log(admin);



// Описание задачи:
// 1. Создайте переменные num1 и num2, значения которых пользователь вводит с
// клавиатуры.
// 2. Проверьте, что переменная num1 меньше или равна 1, а переменная num2
// больше или равна 3.

let num1 = parseFloat(prompt('Введите значение для num1:'));
let num2 = parseFloat(prompt('Введите значение для num2:'));

if (num1 <= 1 && num2 >= 3) {
    console.log('Условия выполнены');
} else {
    console.log('Условия не выполнены');
}


// Описание задачи: Перепишите следующий код с использованием тернарного
// оператора:
let test = true;
console.log(test ? '+++' : '---');


// Описание задачи: В переменной day хранится число от 1 до 31. Определите, в какую
// декаду месяца попадает это число (первая, вторая или третья декада).

let day = 15;
let decade;
if (day >= 1 && day <= 10) {
    decade = 'первая';
} else if (day > 10 && day <= 20) {
    decade = 'вторая';
} else if (day > 20 && day <= 31) {
    decade = 'третья';
} else {
    decade = 'некорректное число';
}
console.log(`Число ${day} попадает в ${decade} декаду месяца.`);


// Описание задачи: Создайте функцию, которая возводит переданное число в куб.
// Необходимо использовать эту функцию для вычисления и вывода в консоль
// результата 2
// 3 + 3
function cub(number) {
    return number ** 3;
}

console.log(cub(2) + cub(3));

// Описание задачи:
// 1. Пользователь вводит с клавиатуры число. Если введён текст, необходимо
// вывести сообщение о неверном значении.
// 2. Создайте функцию, которая вычисляет 13% от данного числа и выводит в
// консоль текст:
// "Размер заработной платы за вычетом налогов равен “значение”".

function calculateSalaryAfterTax(salary) {
    return salary * 0.87;
}
let input = prompt('Введите число:');
let number = parseFloat(input);
if (isNaN(number)) {
    console.log('Значение задано неверно');
} else {
    let afterTax = calculateSalaryAfterTax(number);
    console.log(`Размер заработной платы за вычетом налогов равен
${afterTax}`);
}


// Описание задачи: Пользователь вводит с клавиатуры 3 числа. Создайте функцию,
// которая определяет максимальное значение среди этих чисел.

function findMax(a, b, c) {
    return Math.max(a, b, c);
}
let x1 = parseFloat(prompt('Введите первое число:'));
let x2 = parseFloat(prompt('Введите второе число:'));
let x3 = parseFloat(prompt('Введите третье число:'));
let max = findMax(x1, x2, x3);
console.log('Максимальное значение:', max);


// Описание задачи: Реализуйте четыре функции, каждая из которых выполняет одну из
// следующих операций с двумя числами:

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a > b ? a - b : 0;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return b !== 0 ? a / b : 'Деление на ноль недопустимо';
}


// Описание задачи: Используя цикл for, выведите в консоль 11 строк, где каждая
// строка содержит индекс и описание числа (0 - это ноль, 1 - нечетное число, 2 - четное
// число и т.д.).

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} – это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} – четное число`);
    } else {
        console.log(`${i} – нечетное число`);
    }
}


// Описание задачи: Имеется массив [1, 2, 3, 4, 5, 6, 7]. Необходимо удалить
// элементы 4 и 5, чтобы получить массив [1, 2, 3, 6, 7].


let array = [1, 2, 3, 4, 5, 6, 7];
array.splice(array.indexOf(4), 1);
array.splice(array.indexOf(5), 1);
console.log(array);

// Описание задачи:
// 1. Сгенерируйте массив из 5 случайных цифр от 0 до 9.
// 2. Рассчитайте сумму элементов массива.
// 3. Найдите минимальное число в массиве.
// 4. Определите, есть ли в массиве число 3.

let arr = [];
for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * 10));
}
let sum = array.reduce((acc, num) => acc + num, 0);
let min = Math.min(...array);
let hasThree = array.includes(3);


// Описание задачи: Дан объект numbers. Необходимо вывести в консоль все значения,
// которые больше или равны 3.

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

for (let key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}


// Описание задачи: Из объекта post, который задан в константе, выведите значения с
// комментариями в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);


// Описание задачи: Дан массив products. Уменьшите цену каждого продукта на 15% с
// использованием метода forEach.


const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(product => {
    product.price *= 0.85;
});
console.log(products);

// Описание задачи:
// 1. Выведите в консоль массив продуктов, у которых есть хотя бы одна
// фотография, используя метод filter.
// 2. Отсортируйте массив products по цене в порядке возрастания и выведите
// отсортированный массив в консоль.


const productsWithPhotos = products.filter(product => product.photos
    && product.photos.length > 0);
console.log('Продукты с фотографиями:', productsWithPhotos);
const sortedProducts = products.slice().sort((a, b) => a.price -
    b.price);
console.log('Отсортированные продукты:', sortedProducts);


