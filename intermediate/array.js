const vowels = ["a", "e", "i", "o", "u"];
const marks = [75, 65, 80, 50, 71];
const ideals = new Array("Super Man", "Hitesh", "Spider Man");

// console.log(ideals[0]);

// Methods
// console.log(vowels.push(10));
// console.log(vowels.push("Rizwan"));
// console.log(vowels.pop());
// console.log(vowels.unshift(9));
// console.log(vowels.shift());
// console.log(vowels.includes("e"));
// console.log(vowels.indexOf("e"));

const modify = vowels.join();

// console.log(modify);
// console.log(vowels);

const forSlice = vowels.slice(0, 3);

// console.log("A : ", vowels);
// console.log(forSlice);
// console.log("B : ", vowels);

const forSplice = vowels.splice(0, 3);

// console.log(forSplice);
// console.log("C : ", vowels);

// console.log(forSplice);

const marvelHeros = ["Thor", "Iron Man", "Spider Man"];
const dcHeros = ["Super Man", "Flash", "Batman"];

// marvelHeros.push(dcHeros);
// let allHeros = marvelHeros.concat(dcHeros);
let allHerosSpread = [...marvelHeros, ...dcHeros, "Krish"];
let numbers = [1, 2, 3, ["a", "b", "c", [4, 5, 6, ["d", "e", "f"]]]];

// console.log(allHerosSpread);

let flatArray = numbers.flat(Infinity);

// console.log(Array.from(flatArray.toLocaleString()));
console.log(Array.isArray("Rizwan"));
console.log(Array.from("Rizwan"));
console.log(Array.from({name: "Rizwan"}));
console.log(Array.of("Rizwan", "Bilal", "Ahmed"));
