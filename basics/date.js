let d = new Date();

// console.log(typeof d);
// console.log(d);
// console.log(d.toDateString());
// console.log(d.toJSON());
// console.log(d.toISOString());
// console.log(d.toLocaleDateString('en-PK'));
// console.log(d.toString());
// console.log(d.toTimeString());

let specificDate = new Date(2023, 0, 25);
specificDate = new Date(1999, 10, 22, 5, 30);
specificDate = new Date("2022-12-13");

// console.log(specificDate);
// console.log(specificDate.toDateString());
// console.log(specificDate.toLocaleString('en-PK'));

let timeStamps = Date.now();

// console.log(timeStamps);
// console.log(specificDate.getTime());
// console.log(timeStamps / 1000);

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMinutes());
console.log(newDate.toLocaleString("default", {
    weekday: "short",
    month: "2-digit"
}));