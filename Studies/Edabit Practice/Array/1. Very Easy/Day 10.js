// // 56. Less Than 100 Array Remix
// // Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

// function arrayLessThan100(arr){
//     // let finalVal = 0;
//     // // let result = true; 
//     // for(let i = 0; i < arr.length; i++){
//     //     finalVal += arr[i]
//     // }
    
//     // if(finalVal < 100){
//     //     return true
//     // }else if(finalVal > 100){
//     //     return false
//     // }

//     let result ;
//     arr.reduce((acc, currVal) => {
//         result = acc + currVal
//     })

    
//     if(result < 100){
//         return true
//     }
//     else if(result > 100){
//         return false
//     }
//     else{
//         return true
//     }

// }

// // Examples
// console.log(arrayLessThan100([5, 57])) // ➞ true

// console.log(arrayLessThan100([77, 30])) // ➞ false

// console.log(arrayLessThan100([0])) // ➞ true


// // 57. Return Last Item
// // Create a function that returns the last value of the last item in an array or string.

// function lastItem(arr){
//     // return arr.at(-1)

//     // let forResult = arr.at(-1);
//     // let result = arr.indexOf(forResult);
//     // return arr[result]

//     return arr[arr.length-1]
// }

// // Examples
// console.log(lastItem([0, 4, 19, 34, 50, -9, 2])) // ➞ 2

// console.log(lastItem("The quick brown fox jumped over the lazy dog")) // ➞ "g"

// console.log(lastItem([])) // ➞ undefined


// // 58. Factors of a Given Number
// // Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.

// function findFactors(n){
//     // let result = [];
//     // for(let i = 1; i <= n; i++){
//     //     if(n % i === 0){
//     //         result.push(i)
//     //     }
//     // }
//     // return result   

//     let result = [];
//     for(let i = 1; i < n+1; i++){
//         result.push(i);
//     }

//     return result.filter((elm) => {
//         return (n % elm === 0);
//     })
// }

// // Examples
// console.log(findFactors(9)) // ➞ [1, 3, 9]
// // 9 has three factors 1, 3 and 9

// console.log(findFactors(12)) // ➞ [1, 2, 3, 4, 6, 12]

// console.log(findFactors(20)) // ➞ [1, 2, 4, 5, 10, 20]

// console.log(findFactors(0)) // ➞ []
// // 0 has no factors


// // 59. Sum of Minimums
// // Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

// function sumMinimums(arr){
//     let result = 0;
//     for(let i = 0; i < arr.length; i++){
//         result += Math.min(...arr[i]);
//     }
//     return result
// }

// // Examples
// console.log(sumMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100]
// ])) // ➞ 26

// // minimum value of the first row is 1
// // minimum value of the second row is 5
// // minimum value of the third row is 20


// 60. Arithmetic Progression
// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

function arithmeticProgression(val, calc, length){
    let newArr = Array(length);
    let result = []

    if(calc === -3){
        for(let i = 0; i < newArr.length; i++){
            val += calc;
            result.push(val)
        }
        return result
    }else{
        for(let i = 0; i < newArr.length; i++){
            val -= calc;
            result.push(Math.abs(val))
        }
        return result
    }
}

// Examples
console.log(arithmeticProgression(1, 2, 5)) // ➞ "1, 3, 5, 7, 9"

console.log(arithmeticProgression(1, 0, 5)) // ➞ "1, 1, 1, 1, 1"

console.log(arithmeticProgression(1, -3, 10)) // ➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"