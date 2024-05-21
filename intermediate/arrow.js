let user = {
  name: "Hitesh",
  age: 18,
  handleLoggedIn: function () {
    console.log(`Hi! ${this.name}, welcome back to the website.`);
    console.log("Inner :", this);
  },
};

user.handleLoggedIn();
user.name = "Rizwan";
user.handleLoggedIn();
console.log("Outer :", this);

// function check() {
//     let user = "Hitesh";
//     console.log(this.user);
// }

// const check = function () {
//     let user = "Hitesh";
//     console.log(this.user);
// }

// const check = function () {
//     let user = "Hitesh";
//     console.log(this);
// }

// const check =  () => {
//     let user = "Hitesh";
//     console.log(this);
// }

// const check =  () => {
//     let user = "Hitesh";
//     console.log(this.user);
// }

// const check =  () => {
//     let user = "Hitesh";
//     return user;
// }

// const check = () => "Hitesh";

// const check = () => ("Hitesh");

const check = () => ({name: "Hitesh"});

// check();
console.log(check());
