// const num = 5; // Number
// console.log(typeof num); //number

// const str = "Petr"; // String
// console.log(typeof str); // string

// const bool = true; // Boolean
// console.log(typeof bool); // boolean

// const arr = [1, 2, 3, 4]; // Array
// console.log(typeof arr); // object
// console.log(Array.isArray(arr)); // проверка массив / не массив

// const obj = { a: 100, b: 200 };
// console.log(typeof obj); // object

// undefined; // undefined
// null; // object

// ---------------

// Массивы

const arr = [1000, 2000, 3000, 4000, 5000];
// console.log(arr);
// console.log(arr[0]);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// for (let i = 10; i > 0; i -= 1) {
//   console.log(i);
// }

// for (let i = 0; i <= arr.length - 1; i += 1) {
//   console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// for (let item of arr) {
//   console.log(item);
// }

// for (let number of numbers) {
//   console.log(item);
// }

// for (let user of users) {
//   console.log(item);
// }

// ---------
// Перебрающие методы массивов

// forEach
// проход по массиву
// ничего не возвращает
// старый массив не изменяет
// arr.forEach((element, index) => {
//   console.log(index);
//   console.log(element);
// });

// let sum = 0;
// console.log(arr);
// arr.forEach((element, index) => {
//   console.log(index);
//   console.log(element);
//   sum += element;
// });

// console.log(sum);
// console.log(arr);

// map
// возвращает новый массив
// сьарый не меняет

// console.log(arr);

// const newArray = arr.map((elem) => {
//   return elem + 1;
// });
// const newArray = arr.map((elem) => elem + 1);

// console.log(newArray);
// console.log(arr);

// filter
// возвращает новый массив
// не меняет старый

// console.log(arr);

// const filteredArr = arr.filter((elem) => {
//   if (elem > 2000) {
//     return true;
//   } else {
//     return false;
//   }
// });

// /filter

// -------

// рефакторинг

// const filteredArr = arr.filter((elem) => {
//   if (elem > 2000) {
//     return true;
//   }

//   return false;
// });

// const filteredArr = arr.filter((elem) => {
//   if (elem > 2000) return true;

//   return false;
// });

// const filteredArr = arr.filter((elem) => {
//   return elem > 2000;
// });

// const filteredArr = arr.filter((elem) => elem > 2000);

// console.log(filteredArr);

// /рефакторинг

// ----------------
// Функции

// глобальная
// могу вызвать до объявления
// есть контекст (this)
// function print(text, num, x) {
//   console.log("-----------");
//   console.log(text);
//   console.log(num);
//   console.log(x);
//   console.log("-----------");
// }

// print("Serjo", 100);

// локальная область видимости
// НЕ могу вызвать до объявления
// НЕТУ контекст (this)
// const print = (text, num, x) => {
//   console.log("-----------");
//   console.log(text);
//   console.log(num);
//   console.log(x);
//   console.log("-----------");
// };

// print("Serjo", 100);

// ----
// Стрелочные функции

// явный возврат
// const sum = (a, b) => {
//   return a + b;
// };

// неявный возврат
// const sum = (a, b) => a + b;

// const res = sum(100, 200);
// console.log(res);

// console.log(sum(100, 200));

// ------------
// CALLBACK

// const myFunc = (callback) => {
//   console.log(100);
//   callback();
//   console.log(200);
// };

// myFunc(() => {
//   console.log(555);
// });

// ---------
// const a = 1000;

// if (a === 1000) {
//   console.log("Равно");
// } else {
//   console.log("Не равно");
// }

// // тернарный оператор

// // условие ? код если истина : код если ложь
// a === 1000 ? console.log("Равно") : console.log("Не равно"); // Неправильно

// const result = a === 1000 ? "Равно" : "Не равно"; // Правильно
// console.log(result);

// console.log(a === 1000 ? "Равно" : "Не равно"); // Тоже правильно

// --------
// литеральная строка / литеральный оператор

// const name = 'Serjo';
// const age = 20;
// const hobby = 'Snowboard';

// // Пользователь: Serjo. Возраст: 20. Хобби: Snowboard

// const str1 = 'qqqq';
// const str2 = 'zzzz';
// console.log(str1 + str2); // конкатенация

// const bigStr = str1 + str2; // конкатенация
// console.log(bigStr);

// const resultStr =
//   'Пользователь: ' + name + '. Возраст: ' + age + '. Хобби: ' + hobby;

// console.log(resultStr);

// // литерал
// const resultStr2 = `Пользователь: ${name}. Возраст: ${age}. Хобби: ${hobby}`;
// console.log(resultStr2);

// console.log(`Пользователь: ${name}. Возраст: ${age}. Хобби: ${hobby}`);

// console.log(`a: 100, b: 200, a + b = ${100 + 200}`);
