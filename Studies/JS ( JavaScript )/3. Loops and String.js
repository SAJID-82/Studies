// Loops in JavaScript

// Loops are used to execute a piece of code again & again 

// 1. for loop 

// for(let i = 1; i <= 10; i++){
//     console.log("i =",i)
// }


// : Infinite Loop : A Loop that never ends

// 2. while Loop

// let  i = 1;

// while (i <= 5){
//     console.log(i);
//     i++;
// }

// 3. do-while loop

// let i = 1;

// do {
//     console.log(i);
//     i++
// } while (i <= 10);

// The Three Loops is General Loops
// 1. for loop, 2. while loop, 3. do-while loop

// The Two Loops is Special Loops 
// 1. for-of loop  2. for-in loop

// 1. for-of loop 

// let str = "Sajid";

// for (let i of str) {
//     console.log(i)
// }

// it is useful for String and Array


// 2. for-in loop

// let student = {
//     name: "Sajid",
//     age: 18,
//     isPass: true
// }

// for (let key in student) {
//     console.log("Key =", key, ", Value =", student[key])
// }

// it is useful for Objects


// String in JavaScript
// String is a sequence of characters
// used to represent text.

// let str = "Sajid"; // Type 1 usinf double Qoute
// let str2 = 'Sajid' // Type 2 using single Qoute

// String properties

// 1. str.length

// console.log(str.length)

// 2. Index (index start from 0)

// console.log(str[0])


// // Template Literal (another type to code string)

// let obj = {
//     item: "pen",
//     price: 10
// }

// let TL_str = `The cost of ${obj.item} is ${obj.price} rupees`;
// //                               |            |
// //                     this called String Interpolation

// console.log(TL_str)

// // /n in string is for l next line like a <br> tag.
// // /t in string is for tab space.


// Major Strings Method in JavaScript

// str.toUpperCase() // this is convert text to uppercase text.
// str.toLowerCase() // this is convert text to lowercase text.
// str.trim() // this is remove whitespaces.
// str.slice(start, end) // returns part of string
// str.concat(str2) // join str2 with str
// str.replace(searchVal, newVal) // it replace value to new value
// str.chatAt(index) // it show given index character

