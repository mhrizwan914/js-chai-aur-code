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

console.log(user.name);
console.log(user["Zip Code"]);
console.log(user.onLoggedIn());
console.log(user.onLoggedOut());