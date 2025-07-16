// // 20. Array Operation
// // Create a function that takes three parameters where:

// // x is the start of the range (inclusive).
// // y is the end of the range (inclusive).
// // n is the divisor to be checked against.
// // Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

// function arrayOperation(x, y, n){
// //   let result = [];
// //   for(let i = x; i <= y; i++){
// //     if(i % n === 0){
// //         result.push(i)
// //     }
// //   }  
// //   return result

// let result = [];
// let arr = [];
// for(let i = x; i < y; i++){
//     arr.push(i)
// }

// for(let elm of arr){
//     if(elm % n === 0){
//         result.push(elm)
//     }
// }

// return result
// }

// // Examples
// console.log(arrayOperation(1, 10, 3)) // ➞ [3, 6, 9]

// console.log(arrayOperation(7, 9, 2)) // ➞ [8]

// console.log(arrayOperation(15, 20, 7)) // ➞ []


// 21. Maximum Possible Total
// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

function maxTotal(arr){
    let sum = 0;
    arr.sort((a, b) => b -a)

    for(let i = 0; i < 5; i++){
        sum += arr[i]
    }
    return sum
}

// Examples
console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])) // ➞ 43

console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])) // ➞ 100

console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // ➞ 40