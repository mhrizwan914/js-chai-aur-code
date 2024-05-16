// Singleton
// Object.create()

// Object Literal
const user = {
    name: "Rizwan",
    age: 18,
    "Zip Code": "74500",
    isLoggedIn: false,
    onLoggedIn: function () {
        return "Welcome Back!"
    }
}

// Object.freeze(user);

user.onLoggedOut = function () {
    console.log(`Good Bye, ${this.name}`);
}

// console.log(user.name);
// console.log(user["Zip Code"]);
// console.log(user.onLoggedIn());
// console.log(user.onLoggedOut());

const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
console.log(obj3.hasOwnProperty('c'));