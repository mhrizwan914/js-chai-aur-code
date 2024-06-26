"use strict"; // treat all JS code as newer version

// alert(3 + 3); // We're using Node.js not Browser

console.log(3 + 3); // Codereadability should be high

// console.log("Hitesh");

let name = "Rizwan";
let age = 18;
let isLoggedIn = true;

// Premetive Data Types
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined
// symbol => unique

// Non-Premetive Data Types
// Object

// console.log(typeof null);
// console.log(typeof undefined);

/* Stack (Primitives) / Heap (Non-Premetive) */

let userOne = "Rizwan";
let userTwo = userOne;

userTwo = "Hitesh";

console.log(userOne);
console.log(userTwo);

let objOne = {
    name: "Rizwan"
};
let objTwo = objOne;

objTwo = {...objTwo, age: 18};

console.log(objOne);
console.log(objTwo);