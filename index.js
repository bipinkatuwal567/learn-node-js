// console.log("Hello its me index.js");

// console.log(2 === "2");

// function addTwoNumber(a, b){
//     return a + b;
// }

// console.log(addTwoNumber(5, 5));

/* GLOBAL in nodejs */
// global.companyName = "xyz company";

// function print(){
//     /* We can declare global variable without using global keyword */
//     programName = "javascript";
//     console.log(companyName);
// }

// print();
// console.log(programName);

// console.log(process.env.USER);

// const {add, sub} = require("./app")
import {add, sub} from "./app.js"

console.log(add(5, 6));
console.log(sub(5, 6));