// // Return the First Element in an Array
// //1. Create a function that takes an array containing only numbers and return the first element.

// // Examples

// function getFirstValue(arr){
//     // return arr[0];
//     // return arr.shift();
//     // return arr.slice(0,1).toString();
// }

// console.log(getFirstValue([1, 2, 3])) // ➞ 1

// console.log(getFirstValue([80, 5, 100])) // ➞ 80

// console.log(getFirstValue([-500, 0, 50])) // ➞ -500



// // 2. Pair Management
// // Given two arguments, return an array which contains these two arguments.

// // Examples

// function makePair(n1, n2){
//     // return [n1, n2];

//     // return new Array(n1, n2);
    
//     // let arr = [n1, n2]
//     // return arr

//     // let arr = [];
//     // arr.push(n1, n2)
//     // return arr

//     // let arr = [];
//     // arr.unshift(n1, n2);
//     // return arr;
// }

// console.log(makePair(1, 2)) // ➞ [1, 2]

// console.log(makePair(51, 21)) // ➞ [51, 21]

// console.log(makePair(512124, 215)) // ➞ [512124, 215]



// 3. Learn Lodash: _.drop, Drop the First Elements of an Array
// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// Examples

function drop(arr, n){
    // return arr.slice(n, arr.length);

    // return arr.splice(n);

    // let array = arr;
    // return array.slice(n);
}

console.log(drop([1, 2, 3], 1)) // ➞ [2, 3]

console.log(drop([1, 2, 3], 2)) // ➞ [3]

console.log(drop([1, 2, 3], 5)) // ➞ []

console.log(drop([1, 2, 3], 0)) // ➞ [1, 2, 3]