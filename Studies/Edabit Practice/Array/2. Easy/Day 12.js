// // 56. Let's Sort This Array!
// // Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// // "Asc" returns a sorted array in ascending order.
// // "Des" returns a sorted array in descending order.
// // "None" returns an array without any modification.

// function ascDesNone(arr, order){
    
//     if(order === "Asc"){
//         return arr.sort()
//     }else if(order === "Des"){
//         return arr.sort((a,b) => b - a)
//     }else{
//         return arr
//     }
// }

// // Examples
// console.log(ascDesNone([4, 3, 2, 1], "Asc" )) // ➞ [1, 2, 3, 4]

// console.log(ascDesNone([7, 8, 11, 66], "Des")) // ➞ [66, 11, 8, 7]

// console.log(ascDesNone([1, 2, 3, 4], "None")) // ➞ [1, 2, 3, 4]


// // 57. Remove Duplicates from an Array
// // Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// function removeDups(arr){
//     return [...new Set(arr)];
// }

// // Examples
// console.log(removeDups([1, 0, 1, 0])) // ➞ [1, 0]

// console.log(removeDups(["The", "big", "cat"])) // ➞ ["The", "big", "cat"]

// console.log(removeDups(["John", "Taylor", "John"])) // ➞ ["John", "Taylor"]



// // 58. Sum of Number Elements in an Array
// // Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

// function numbersSum(arr){
//     // let filteredArr = arr.filter((elm) => typeof elm === "number");
    
//     // return filteredArr.reduce((acc, currVal) => {
//     //     return acc += currVal
//     // }, 0)

//     let sumOfNum = 0;

//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === "number"){
//             sumOfNum += arr[i]
//         }
//     }
//     return sumOfNum
// }

// // Examples
// console.log(numbersSum([1, 2, "13", "4", "645"])) // ➞ 3

// console.log(numbersSum([true, false, "123", "75"])) // ➞ 0

// console.log(numbersSum([1, 2, 3, 4, 5, true])) // ➞ 15



// // 59. Factor Chain
// // A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// // [3, 6, 12, 36]

// // 3 is a factor of 6
// // 6 is a factor of 12
// // 12 is a factor of 36
// // Create a function that determines whether or not an array is a factor chain.

// function factorChain(arr){
//     return arr.every((num, i) => {
//         return i === 0 || arr[i] % arr[i-1] === 0
//     })
// }

// // Examples
// console.log(factorChain([1, 2, 4, 8, 16, 32])) // ➞ true

// console.log(factorChain([1, 1, 1, 1, 1, 1])) // ➞ true

// console.log(factorChain([2, 4, 6, 7, 12])) // ➞ false

// console.log(factorChain([10, 1])) // ➞ false


// 60. Is Johnny Making Progress?
// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

function progressDays(arr){
    let count = 0; 
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > arr[i-1]){
            count++
        }
    }
    
    return count
}

// Examples
console.log(progressDays([3, 4, 1, 2])) // ➞ 2
// There are two progress days, (3->4) and (1->2)

console.log(progressDays([10, 11, 12, 9, 10])) // ➞ 3

console.log(progressDays([6, 5, 4, 3, 2, 9])) // ➞ 1

console.log(progressDays([9, 9]))  // ➞ 0