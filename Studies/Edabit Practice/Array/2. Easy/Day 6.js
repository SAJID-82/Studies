// // 22. Omnipresent Value
// // A value is omnipresent if it exists in every subarray inside the main array.

// // To illustrate:

// // [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// // Create a function that determines whether an input value is omnipresent for a given array.

// function isOmnipresent(arr, num){
//     let result = false;
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr[i].length; j++){
//             if(arr[i][j] === num){
//                 result = true
//             }else{
//                 result = false
//             }
//         }
//     }
//     return result
// }

// // Examples
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)) // ➞ true

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)) // ➞ false

// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)) // ➞ true

// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)) // ➞ false



// // 23. Numbers to Arrays and Vice Versa
// // Write two functions:

// // toArray(), which converts a number to an array of its digits.
// // toNumber(), which converts an array of digits back to its number.

// function toArray(num){
//     let result = num.toString()
//     return result.split("").map(Number)
// }

// function toNumber(arr){
//     return arr.join("");
// }

// // Examples
// console.log(toArray(235)) // ➞ [2, 3, 5]

// console.log(toArray(0)) // ➞ [0]

// console.log(toNumber([2, 3, 5])) // ➞ 235

// console.log(toNumber([0])) // ➞ 0



// // 24. Summing a Slice
// // Given an array and an integer n, return the sum of the first n numbers in the array.

// // Worked Example
// // sliceSum([9, 8, 7, 6], 3) ➞ 24
// // The parameter n is specified as 3.
// // The first 3 numbers in the list are 9, 8 and 7.
// // The sum of these 3 numbers is 24 (9 + 8 + 7).
// // Return the answer.

// function sliceSum(arr, n){
//     let result = 0;

//     for(let i = 0; i < n; i++){
//         result += arr[i]
//     }

//     return result
// }

// // Examples
// console.log(sliceSum([1, 3, 2], 2)) // ➞ 4

// console.log(sliceSum([4, 2, 5, 7], 4)) // ➞ 18

// console.log(sliceSum([3, 6, 2], 0)) // ➞ 0



// 25. Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.

function countOnes(...arr){
    let newArr = arr.flat().flat();
    let result = 0;

    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] === 1){
            result++
        }
    }
    return result
}

// Examples
console.log(countOnes([
  [1, 0],
  [0, 0]
])) // ➞ 1

console.log(countOnes([
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
])) // ➞ 7

console.log(countOnes([
  [1, 2, 3],
  [0, 2, 1],
  [5, 7, 33]
])) // ➞ 2