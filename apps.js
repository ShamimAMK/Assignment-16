"use strict";
//Objects & its property

// const numbers = [20, 30, 54, 52]
//key-value pair suppose;
// a = 20
// Here 'a' means property name and '20' is property value

// const student = {
//   fullName: "Abdullah",
//   age: 20,
//   city: "Dhaka",
//   isDeveloper: true,
//   favoriteSubjects: ["English", "Javascript", "Math"],
// };

// console.log(student);
//accessing property
// console.log(student.favoriteSubjects[2]);

// console.log(student.isDeveloper); //dot notation
// console.log(student["favoriteSubjects"][0]); //bracket notation

//mutate/modify properties

// student.city = "Uttara, Dhaka";
// console.log(student.city);

// student.favoriteSubjects[2] = "Python";
// console.log(student.favoriteSubjects[2]);

// console.log(student.favoriteSubjects[student.favoriteSubjects.length - 1]);

//modify objects property

// student.hobby = "Gardening";
// console.log(student.hobby);

// student.nameOfInstitute = "Eshikhon.com";
// console.log(student.nameOfInstitute);

// Object.seal(student);
// student.city = "Dhaka";
// console.log(student.city);
// on seal status we can modify/mutate property but can't assign new.

// Object.freeze(student);
// student.city = "Dhaka";
// console.log(student.city);
// on freeze status we can't modify/mutate, add or delete any property.

// delete student.age;
// console.log(student);

//push or pop to add or delete an object from array

// method inside objects

// const progLang = {
//   langName: "JavaScript",
//   Libraries: ["React", "JQuery"],
//   frameworks: {
//     angular: { learningCurve: "Hard", archeteture: "Modular" },
//     vue: { learningCurve: "Medium", archeteture: "MVC" },
//   },
// };
// console.log(progLang.frameworks.angular.learningCurve);

// const student = {
//   fullName: "Abdullah",
//   ageYear: 2003,
//   calcAge: function () {
//     return 2023 - this.ageYear;
//   },
// };
// // method inside object ( When we use function inside an object its called a method)
// console.log(student.calcAge());

// const student1 = student;
// console.log(student1); // here student1 is related with student. If we any value of student or student1 changed it will effect both.

// student.fullName = "Taslima Akter";
// console.log(student1.fullName);

// student1.ageYear = 2000; // It sharing same reference
// console.log(student1.ageYear);
// console.log(student.ageYear);

// const student = {
//   fullName: "Abdullah",
//   ageYear: 2003,
//   calcAge: function (ageYear) {
//     return 2023 - ageYear;
//   },
// };
// console.log(student.calcAge(2001));

//loop (for-loop)
//for(initializer, condition, increment)
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i <= 100; i += 10) {
//   console.log(i);
// }

// for (let i = 100; i > 0; i--) {
//   console.log(i);
// }
// for (let i = 1000; i > 0; i -= 10) {
//   console.log(i);
// }

// const numbers = [10, 12, 45, 85, 12, 62, 52, 45, 96, 78, 96, 54];

// for (let i = 0; i < numbers.length; i++) {}

// const numbers = [10, 12, 45, 85, 12, 62, 52, 45, 96, 78, 96, 54];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) console.log("Even", numbers[i]);
//   if (numbers[i] % 2 !== 0) console.log("Odd", numbers[i]);
// }

// const myNumbers = [0, -12, 45, 8, -5, 12, 62, -2, 45, 96, 78, -6, 54];

// for (let i = myNumbers.length - 1; i >= 0; i--) {
//   if (myNumbers[i] >= 0) {
//     console.log(myNumbers[i]);
//   }
// }

const animals = ["Tiger", "Lion", "Cat", "Zebra", "Horse", "Cow"];

// for (let i = 0; i < animals.length; i++) {
//   if (animals[i] === "Cat") {
//     console.log(animals[i]);
//     break;
//   }
//   console.log(animals[i]);
// }

// for (let i = 0; i < animals.length; i++) {
//   if (animals[i] === "Cat") {
//     continue;
//   }
//   console.log(animals[i]);
// }

// const arr = [10, 20, 30, 14, 50, 60, 41, 51, 53, 58];

// let i = 0;

// while (i < arr.length) {
//   console.log(arr[i]);

//   i++;
// }

const langs = ["C++", "Java", "Javascript", "Python"];

let i = langs.length - 1;

while (i >= 0) {
  console.log(langs[i]);

  i--;
}
