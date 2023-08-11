// ----- Object1 ----- //

// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// let arr = Object.entries(me);

// for (let el of arr) {
//   let str = el.join(": ");
//   console.log(str);
// }

// ----- Object2 ----- //

// let obj = {};

// function getValue(n) {
//   for (let i = 1; i <= n; i++) {
//     let square = i ** 2;
//     obj[i] = square;
//   }
// }

// getValue(5);

// console.log(obj);

// ----- Object3 ----- //

// let keys = Object.keys(obj);
// let values = Object.values(obj);
// let sumKeys = 0;
// let sumValues = 0;

// for (let el of keys) {
//   sumKeys += +el;
// }

// for (let el of values) {
//   sumValues += +el;
// }

// console.log("Key lari yig'indisi:", sumKeys);
// console.log("Value lari yig'indisi:", sumValues);

// ----- Object4 ----- //

// let arr = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
// let obj = {};

// for (let el of arr) {
//   console.log(el);
//   obj[el] = el.length;
// }

// console.log(obj);

// ----- Object5 ----- //

// let obj = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };

// let sum = 0;

// for (let i in obj) {
//   sum += obj[i];
// }

// console.log("Umumiy summasi:", sum);

// ----- Object6 ----- //

// let obj = { abc: 1, 12: 2, fad: 5 };

// let res = Object.keys(obj);

// function containsNumber(res) {
//   for (let el of res) {
//     return !isNaN(el) ? false : true;
//   }
// }

// let check = containsNumber(res);
// console.log(check);

// ----- Object7 ----- //

// let obj = { a: false, b: 12, c: true, d: 0 };

// let newObj = {};

// let arrValues = Object.values(obj);
// let arrKeys = Object.keys(obj);

// for (let i in obj) {
//   if (obj[i]) {
//     newObj[i] = obj[i];
//   } else {
//     delete obj[i];
//   }
// }

// console.log(newObj);  // Yangi Object
// console.log(obj); //Eski Object, falsy element lar delete qilingan

// ----- Object8 ----- //

// let arr = [7, 8, 4, 5, 7, 4, 8, 5, 8, 4, 7, 9];

// let obj = {};

// for (let el of arr) {
//   obj[el] = (obj[el] || 0) + 1;
// }

// console.log(obj);

// ----- Object9 ----- //


// let n = 8945472985629;

// let classes = [
//   "trilionlar",
//   "milliardlar",
//   "millionlar",
//   "minglar",
//   "birlar",
// ];


// function classElements(n, classes) {
//   let object = {};
//   for (let i = 0; i < classes.length; i++) {
//     let classValue = n % 1000000000;
//     if (classValue > 0) {
//       object[classes[i]] = classValue;
//       n = n - classValue;
//     }
//     n = n / 1000000000;
//   }
//   return object;
// };

// let check = classElements(n, classes);
// console.log(check);





// ----- Object10 ----- //

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// for (let i in books) {
//   let trueValue = `${books[i].author}ning "${books[i].title}" kitobi o'qilgan.`;
//   let falseValue = `${books[i].author}ning "${books[i].title}" kitobi o'qilmagan.`;
//   if (books[i].alreadyRead) {
//     console.log(`${+i + 1}. ${trueValue}`);
//   } else {
//     console.log(`${+i + 1}. ${falseValue}`);
//   }
// }

// ----- Object11 ----- //

// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let sum = 0;

// for (let i in products) {
//   let finalPrice =
//     (products[i].price - products[i].discount) *
//     (products[i].quantity);
//   sum += finalPrice;
// }

// console.log(sum);

// ----- Object12 ----- //

// const obj = {
//   it: 20,
//   mushuk: 10,
//   sigir: 200,
//   tovuq: 2,
// };

// let arr = [];

// for (let i in obj) {
//   arr.push(i, obj[i]);
// }

// console.log(arr);

// ----- Object13 ----- //

// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// let gpaSum = 0;
// let creditSum = 0;

// for (let el of grades) {
//   let gpaByCredit = el.grade * el.kredit;
//   gpaSum += gpaByCredit;
//   creditSum += el.kredit;
// }

// let gpaCalc = gpaSum / creditSum;
// console.log(gpaCalc.toFixed(2));

// ----- Object14 ----- //

// const rightAnswers = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };

// const myAnswers = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };

// function trueAnswers(myAnswers, rightAnswers) {
//   let count = 0;
//   for (let i in myAnswers) {
//     if (myAnswers[i] === rightAnswers[i]) {
//       count++;
//     }
//   }
//   return count;
// }

// let check = trueAnswers(myAnswers, rightAnswers);
// console.log(check);

// ----- Object15 ----- //

// const obj = { a: 2, b: 3, c: 4, d: 6 };

// let res = {};

// function getMultipleValues(n) {
//   for (let key in obj) {
//     res[key] = obj[key] * n;
//   }
//   return res;
// }

// let check = getMultipleValues(3);
// console.log(check);

// ----- Object16 ----- //

// const product = {
//   name: "Iphone 14",
//   company: {
//     name: "Apple",
//     price: "200 mlrd",
//     founder: {
//       firstName: "Steve",
//       lastName: "Jobs",
//       birthDate: 1950,
//     },
//   },
// };

// const {
//   name: phoneName,
//   company: {
//     name: phoneBrand,
//     price: phonePrice,
//     founder: {
//       firstName,
//       lastName,
//       birthDate,
//     }
//   }
// } = product;

// console.log(phoneName);
// console.log(phoneBrand);
// console.log(phonePrice);
// console.log(firstName);
// console.log(lastName);
// console.log(birthDate);

// ----- Object17 ----- //


// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// function calcAverage(pupils) {
//   let totalPercentage = 0;
//   for (let el of pupils) {
//     totalPercentage += el.protcent;
//   }
//   let averagePercentage = totalPercentage / pupils.length;
//   return averagePercentage;
// };

// const newArr = pupils.map((el) => {
//   const averagePercentage = calcAverage(pupils);
//   return {
//     name: el.name,
//     protcent: el.protcent,
//     averagePercentage: averagePercentage,
//   };
// });

// console.log(newArr);



// ----- Object18 ----- //


// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];


// for (let el of pupils) {
//   if (el.protcent >= 90) {
//     el.protcent = 5;
//   } else if (el.protcent >= 80) {
//     el.protcent = 4;
//   } else if (el.protcent >= 70) {
//     el.protcent = 3;
//   } else {
//     el.protcent = 2;
//   }
// }

// console.log(pupils);



// ----- Object19 ----- //

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];


// for (let el of pupils) {
//   if (el.protcent >= 70) {
//     el.isPassed = true;
//   } else {
//     el.isPassed = false;
//   }
// }

// console.log(pupils);

// console.log(pupils);


// ----- Object20 ----- //

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 58,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let countPassed = 0;
// let countFailed = 0;

// for (let el of pupils) {
//   if (el.protcent >= 70) {
//     countPassed++;
//   } else {
//     countFailed++;
//   }
// }
// console.log("Imtihondan o'tganlar soni:", countPassed);
// console.log("Imtihondan yiqilganlar soni:", countFailed);
