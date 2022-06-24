// Convert the following function into an arrow function. Refer to the new function as fancyAlgorithm.
// function myFunction(num1, num2, num3) {
//     let value = 0;
//     for (let i = 0; i < num3; i++) {
//         value = (value + num2) * num1;
//     }

//     return value / (num1 * (num3 * 10));
// }

// Pre-written code for the problem
// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);
// var c = parseInt(input[2]);

// My code
const fancyAlgorithm = (num1, num2, num3) => {
    let value = 0;
    for (let i = 0; i < num3; i++) {
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 * 10));
}

// Pre-written code for the problem
console.log(fancyAlgorithm(a, b, c));


// Convert the following funciton into an arrow funciton. Refer to the new function as monthlyPayment.
// function myFunction(yearlyPayment) {
//     let monthly = yearlyPayment / 12;
//     return monthly.toFixed(2);
// }

// Pre-written code for the problem
// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var a = parseInt(input[0]);

// My code
const monthlyPayment = yearlyPayment => (yearlyPayment / 12).toFixed(2);

// Pre-written code for the problem
// console.log(monthlyPayment(a));


// Question: Which of the following is the correct syntax when no arguments are passed?
// Correct answer: let myFunction = () => { return "Test Successful!"; }


// Convert the following function into an arrow function. Refer to the new function as returnSquareRoot.
// function myFunction(num) { return Math.sqrt(num); }

// Pre-written code for the problem
// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var a = parseInt(input[0]);

// My code
const returnSquareRoot = num => Math.sqrt(num); 

// Pre-written code for the problem
// console.log(returnSquareRoot(a));


// Convert the following function into an arrow function. Refer to the new function as xor.
// function myFunction(num1, num2) {
//     return num1 ^ num2;
// }

//  Pre-written code for the problem
// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);

// My code
const xor = (a, b) => (a ^ b);

// Pre-written code for the problem
// console.log(xor(a,b));


// Question: Which of the following uses incorrect syntax?
// A. let myfunction = num1 => return num1;
// B. let myfunction = (num1) => return num1;
// C. let myfunction = {num1} => return num1;
// D. let myfunction = (num1=45) => return num1;

// The correct answer was C. Though I was unsure of why D was correct syntax.
// I was not aware you could assign a value to num1 in that location.