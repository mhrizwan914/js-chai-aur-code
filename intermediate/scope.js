// var c = "Rizwan";
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
var c = "Rizwan";

console.log(a);
// console.log(b);
console.log(c);

function one() {
  let user = "Hitesh";

  function two() {
    let website = "Youtube";
    console.log(user);
  }

  // console.log(website);

  two();
}

one();


console.log(addOne(1));

function addOne(num) {
  return ++num
}

console.log(addTwo(1));

const addTwo = function (num) {
  return num + 2
}