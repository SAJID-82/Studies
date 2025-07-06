// // 21. Return Types
// // Create a function that takes an array and returns the types of values (data types) in a new array.

// function arrayValuesTypes(arr){
//     // return arr.map((elm) => {
//     //     return typeof elm
//     // })

//     // let newArr = []
//     // for(let i = 0; i < arr.length; i++){
//     //     newArr.push(typeof arr[i])
//     // }
//     // return newArr

//     let newArr = [];
//     for (let elm of arr) {
//         newArr.push(typeof elm);
//     }
//     return newArr

// }

// // Examples
// console.log(arrayValuesTypes([1, 2, "null", []]))
// // ➞ ["number", "number", "string", "object"]

// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))
// // ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]))
// // ➞ ["number", "string", "string", "object", "object", "boolean", "number


// // 22. ES6: Destructuring Arrays IV
// // There is an easy way to assign to array values to the nth index by using rest parameter syntax.

// var [head, ...tail] = [1, 2, 3, 4]

// console.log(head) // outputs  1
// console.log(tail) // outputs 2
// // But how could I make tail = [2, 3, 4] instead of tail = 2?


// // 23. Squares and Cubes
// // Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// function checkSquareAndCube(arr){
//     let firstNum = Math.sqrt(arr[0]);
//     let secondNum = Math.cbrt(arr[1]);

//     if(firstNum === secondNum){
//         return true
//     }else{
//         return false
//     }
// }

// // Examples
// console.log(checkSquareAndCube([4, 8])) // ➞ true

// console.log(checkSquareAndCube([16, 48])) // ➞ false

// console.log(checkSquareAndCube([9, 27])) // ➞ true


// // 24. Array of Strings to Array of Numbers
// // Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// function toNumberArray(arr){
//     // let newArr = []
//     // for(let i = 0; i < arr.length; i++){
//     //     newArr.push(Number(arr[i]))
//     // }
//     // return newArr

//     // return arr.map((elm) => {
//     //     return Number(elm)
//     // })

//     let newArr = [];

//     for (let elm of arr) {
//         newArr.push(Number(elm))
//     }
//     return newArr
// }

// // Examples
// console.log(toNumberArray(["9.4", "4.2"])) // ➞ [9.4, 4.2]

// console.log(toNumberArray(["91", "44"])) // ➞ [91, 44]

// console.log(toNumberArray(["9.5", "8.8"])) // ➞ [9.5, 8.8]


// // 25. Burglary Series (14): Adjectives Total
// // You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// function totalAmountAdjectives(obj){
//     let forCountInsult = Object.keys(obj);

//     return forCountInsult.length
// }

// // Examples
// console.log(totalAmountAdjectives({ a: "moron" })) // ➞ 1

// console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })) // ➞ 3

// console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })) // ➞ 4


// // 26. ES6: Destructuring Arrays III
// // You can assign variables from arrays with destructuring like this:

// const arr = ["eyes", "nose", "lips", "ears"];
// let [eyes, , lips, ] = arr;

// console.log(eyes);
// console.log(lips);
// // But you can also skip over items in the array being destructured.

  
// // 27. Recreating the String.length Property
// // Create a function which returns the length of a string, WITHOUT using String.length property.

// function length(str){
//     // let count = 0;
//     // for(let i = 0; i < str.length; i++ ){
//     //     count++;
//     // }
//     // return count

//     let forLength = str.split("");
//     let count = 0;

//     for (let elm of forLength) {
//         count++
//     }
//     return count
// }    



// // Examples
// console.log(length("Hello World")) // ➞ 11

// console.log(length("Edabit")) // ➞ 6

// console.log(length("wash your hands!")) // ➞ 16


// // 28. Half, Quarter and Eighth
// // Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// function halfQuarterEighth(number){
//     let half = number / 2;
//     let quarter = number / 4;
//     let eighth = number / 8;

//     return [half, quarter, eighth]
// }

// // Examples
// console.log(halfQuarterEighth(6)) // ➞ [3, 1.5, 0.75]

// console.log(halfQuarterEighth(22)) // ➞ [11, 5.5, 2.75]

// console.log(halfQuarterEighth(25)) // ➞ [12.5, 6.25, 3.125]


// // 29. Shapes With N Sides
// // Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// function nSidedShape(index){

//     let arr = [
//     "Hello JavaScript",
//     "circle",
// 	"semi-circle",
// 	"triangle",
// 	"square",
// 	"pentagon",
// 	"hexagon",
// 	"heptagon",
// 	"octagon",
// 	"nonagon",
// 	"decagon",
//     ]
    
//     return arr[index];
// }

// // Examples
// console.log(nSidedShape(3)) // ➞ "triangle"

// console.log(nSidedShape(1)) // ➞ "circle"

// console.log(nSidedShape(9)) // ➞ "nonagon"


// // 30. Multiply Every Array Item by Two
// // Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// function getMultipliedArr(arr){
//     // return arr.map((elm) => {
//     //     return elm * 2
//     // })

//     // let newArr = [];
//     // for(let i = 0; i < arr.length ; i++){
//     //     newArr.push(arr[i] * 2)
//     // }
//     // return newArr;

//     let newArr = [];
//     for (let elm of arr) {
//         newArr.push(elm * 2)
//     }

//     return newArr
// }

// // Examples
// console.log(getMultipliedArr([2, 5, 3])) // ➞ [4, 10, 6]

// console.log(getMultipliedArr([1, 86, -5])) // ➞ [2, 172, -10]

// console.log(getMultipliedArr([5, 382, 0])) // ➞ [10, 764, 0]