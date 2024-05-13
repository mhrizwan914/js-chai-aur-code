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

console.log("A : ", vowels);
console.log(forSlice);
console.log("B : ", vowels);

const forSplice = vowels.splice(0, 3);

console.log(forSplice);
console.log("C : ", vowels);

console.log(forSplice);