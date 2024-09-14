// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ["Jazz", "Blues"];

// genres.push("Рок-н-рол")
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.splice(0,1));
// genres.splice(0, 0, "Country", "Reggae")

// console.log(genres);

// const values = '8 11';

// const args = values.split(" ")
// const rectangleArea = args[0] * args[1]
// console.log(rectangleArea);



// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for(let i = 0; i <= fruits.length - 1; i += 1) {
//   console.log(i + 1, fruits[i]);
// }


// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. 
// У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. 
// Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArgs = names.split(",")
// const phonesArgs = phones.split(",")

// console.log(namesArgs);
// console.log(phonesArgs);

// for(let i = 0; i <= namesArgs.length - 1; i += 1) {
//   // if(namesArgs[i] && phonesArgs[i]) {
//   //   console.log(namesArgs[i], "-", phonesArgs[i]);
//   // }
//   namesArgs[i] && phonesArgs[i] ? console.log(`${namesArgs[i]} - ${phonesArgs[i]}`) : "";
// }

// const string = "Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача";

// const strings = string.split(" ").slice(1, -1).join(" ");
// console.log(string);
// console.log(strings);




// const string = 'Welcome to the future';
// const strings = string.split("");

// const reverseStrings = strings.reverse().join("")
// console.log(reverseStrings);


//Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// let string;


// for(let i = 0; i < langs.length; i += 1) {
//   for(let j = 0; j < langs.length - 1; j += 1){
//     if(langs[j] > langs[j + 1]){
//       string = langs[j + 1]
//       langs[j + 1] = langs[j]
//       langs[j] = string
//     }
//   }

// }

// console.log(langs);


// const numbers = [2, 17, 94, 23, 37];
// let min = numbers[0];
// for(let i = 1; i < numbers.length; i += 1) {
//   if(numbers[i] < min) {
//     min = numbers[i]
//   }
// }



// console.log(min);



// const numbers = [2, 17, 94, 23, 37];

// const langs = ['python', 'javascript', 'c++'];
// const langs2 = ['haskel', 'php', 'ruby'];

// const strings = "Садок вишневий коло хати, хрущі над вишнями гудуть"

// const args = strings.split(" ")

// // const argsReversInString = args.join(" ")

// // console.log('argsReversInString - ',argsReversInString);
// console.log('args - ',args);
// console.log(strings);

// const langSearch = langs.includes("Mikola")
// console.log(langSearch);

// args.push("Тарас Шевченко")
// args.pop()
// console.log(args);

// const newLangs = langs.slice(1, langs.length -1)
// console.log(newLangs);
// console.log(langs);

// const newLangs = langs.concat(langs2)
// console.log(Array.isArray(newLangs));
// console.log(newLangs);

// const salary = function(num) {
//   if(num <= 12000) {
//     return "Я звільняюсь";
//   } 
//   return "Ще попрацюю";
// }


// const result = salary(12000)

// console.log(result);

// const calcBMI = function (weight, height) {
//   const bodyWeight = Number(weight.replace(",","."))
//   const bodyHeight = Number(height.replace(",","."))

//   const result = Number((bodyWeight / Math.pow(bodyHeight, 2)).toFixed(1))

//   return result
// }


// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi);

// const min = function (a, b) {
//   return a < b ? a : b
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1


// function getRectArea(dimensions) {
//   const args = dimensions.split(" ")
//   return args[0] * args[1]
// }
// console.log(getRectArea("8 11"));

// const logItems = function (items) {
//   for(let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);


// function printContactsInfo(names, phones) {
//   const namesArgs = names.split(",")
//   const phonesArgs = phones.split(",")
//   const result = []

//   for(let i = 0; i < namesArgs.length; i++) {
//     if(namesArgs.indexOf(namesArgs[i]) === phonesArgs.indexOf(phonesArgs[i])) {
//       result.push(`${namesArgs[i]} - ${phonesArgs[i]}`)
//     }
//   }
  
//   return result
// }

// console.log(printContactsInfo(
//   'Jacob,William,Solomon,Petro',
//   '89001234567,89001112233,890055566377,213213123123',
// ));

//Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber(numbers) {
//   let largestNumber = numbers[0]

//   for(const number of numbers) {
//     number > largestNumber ? largestNumber = number : null;
//   }
//   return largestNumber
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83