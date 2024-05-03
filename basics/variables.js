const userId = 145236;
let userEmail = "hitesh@gmail.com";
var userPassword = "123abc";
userCity = "Jaipur";
let userStatus;

// userId = 213654; not allowed

userEmail = "rizwan@gmail.com";
userPassword = "321";
userCity = "Karachi";

// console.log(userId);

/*
    1. Prefer not to use var
    2. Because of issue in block and functional scope
*/

console.table([userId, userEmail, userPassword, userCity, userStatus]);