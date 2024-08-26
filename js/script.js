// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = grapes - apples;
// console.log(diff)


// let students = 100;
// students += 50;
// console.log(students);

//Розбери пріоритет операторів в інструкції привласнення значення змінної result.
// const result = (108 + 223) - (2 * 5);
// console.log(result);


// Напиши скрипт, який виводить у консоль заокруглені вгору / вниз і т.д.значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round().Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.4;

// const floor = Math.round(value)
// console.log(floor);


// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message);


// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). 
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';
// weight = weight.replace(",",".")

// weight = Number(weight)
// height = Number(height)

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));
// console.log(bmi); // 28.8


// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. 
// В іншому випадку має присвоюватися значення defaultValue. 
// Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 0;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);


// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01
// const totalMinutes = 1441;

// const minutes = String(totalMinutes % 60)
// const hours = String(Math.floor(totalMinutes / 60))

// console.log(minutes);
// console.log(hours);

// let result = `${hours.padStart(2, 0)} : ${minutes.padStart(2, 0)}`;




// console.log(result);


// const jsNameAnswer = prompt("Яка офіційна назва JavaScript?");

// let jsName = "ECMAScript"

// if(jsNameAnswer === null){
//   alert("Ви не ввели назву!");
// } else if(jsNameAnswer.toLocaleLowerCase() === jsName.toLocaleLowerCase()){
//   alert("Правильно!")
// } else {
//   alert("Не знаєте? ECMAScript!")
// }

// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". 
// Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 4;
// let timestring;

// if(minutes === 0 ) {
//   timestring = `${hours} г.`
// } else {
//   timestring = `${hours} г. ${minutes} хв.`
// }

// console.log(timestring);

// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. 
// Якщо було введено нуль, виводь в консоль рядок "Це нуль". 
// Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const userInput = prompt('Введіть число');

// console.log(typeof userInput);
// // console.log(userInput);

// if(userInput === "0") {
//   console.log("Це нуль");
// } else if(userInput === "" || userInput === null) {
//   console.log("Ви не чого не ввели!!!!");
// } else if (userInput < 0) {
//   console.log("Це негативне число");
// } else {
//   console.log("Це позитивне число");
// }

// // 1.0
// // 2.null
// // 3.""
// // 4.1212
// // 5.-3214

// console.log(Number("") === 0);

// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. 
// В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 120;
// const b = 180;


// if(a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }


// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. 
// Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';
// // Пиши код нижче за цей рядок

// if(!link.endsWith("/")){
//   link += "/"
// }

// // Пиши код вище за цей рядок
// console.log(link);

//Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. 
//Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". 
//Використовуй конструкцію if...else.

// let link = 'https://somesite.com/about';
// // Пиши код нижче за цей рядок

// if(!link.endsWith("/") && link.includes("my-site") ){
//   link += "/"
// }
// // Пиши код вище за цей рядок
// console.log(link);

//Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// let link = 'https://somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }

// let link = 'https://somesite.com/about';

// link.includes('my-site') && !link.endsWith('/') ? link += '/' : link;

// console.log(link);


// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"
// const hours = 10;

// if(hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24){
//   console.log("Expires");
// } else {
//   console.log("Overdue");
// }

// console.log(hours);


//Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Після завтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

// const projectDeadline = 3

// if (projectDeadline === 0) {
//   console.log("Сьогодні");
// } else if (projectDeadline === 1) {
//   console.log("Завтра");
// } else if (projectDeadline === 2) {
//   console.log("Після завтра");
// } else {
//   console.log("Дата у майбутньому");
// }


// switch (projectDeadline) {
//   case 0:
//     console.log("Сьогодні");
//     break
//   case 1:
//     console.log("Завтра");
//     break
//   case 2:
//     console.log("Після завтра");
//     break
//   default:
//     console.log("Дата у майбутньому");
// }

//Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

const max = 100;
const min = 20;

for(let i = min; i <= max; i += 1) {// i = 195; true
  if(i % 5 === 0) {
    console.log(i);
  }
}