function doSomething() {
    console.log("R");
    console.log("I");
    console.log("Z");
    console.log("R");
    console.log("R");
    console.log("N");
}

// doSomething();

function addNum(num1, num2) {
    // console.log(num1 + num2);
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

const result = addNum(3, 4);

// console.log(result);

function calculateCartPrice(val1, val2, ...val) {
    return val
}

console.log(calculateCartPrice(100, 250, 500));