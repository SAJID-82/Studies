// // 7. ES6: Destructuring Arrays I
// // You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// // let a = arr[0]
// // let b = arr[1]

// const [a, b, c, d, e, f] = arr;

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// // With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.


// // 8. Return the Last Element in an Array
// // Create a function that accepts an array and returns the last item in the array.

// function getLastItem(arr){
//     // return arr[arr.length-1];

//     // newArr = arr.pop()
//     // return newArr

//     return arr.at(-1)
// }

// // Examples
// console.log(getLastItem([1, 2, 3])) // ➞ 3

// console.log(getLastItem(["cat", "dog", "duck"])) // ➞ "duck"

// console.log(getLastItem([true, false, true])) // ➞ true

// // 9. Convert an Array to a String
// // Create a function that takes an array of numbers or letters and returns a string.

// function arrayToString(arr){
//     return arr.join("");
// }

// // Examples
// console.log(arrayToString([1, 2, 3, 4, 5, 6])) // ➞ "123456"

// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])) // ➞ "abcdef"

// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])) // ➞ "123asdAAAA"


// // 10. Concatenating Two Integer Arrays
// // Create a function to concatenate two integer arrays.

// function concat(arr1, arr2){
//     // return arr1.concat(arr2);

//     let newArr = [arr1, arr2];
//     return newArr.flat()
// }

// // Examples
// console.log(concat([1, 3, 5], [2, 6, 8])) // ➞ [1, 3, 5, 2, 6, 8]

// console.log(concat([7, 8], [10, 9, 1, 1, 2])) // ➞ [7, 8, 10, 9, 1, 1, 2]

// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])) // ➞ [4, 5, 1, 3, 3, 3, 3, 3]


// // 11. Find the Index
// // Create a function that takes an array and a string as arguments and returns the index of the string.

// function findIndex(arr, idx){
//     // return arr.indexOf(idx)

//     // return arr.lastIndexOf(idx);
// }

// // Examples
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")) // ➞ 2

// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")) // ➞ 1

// console.log(findIndex(["a", "g", "y", "d"], "d")) // ➞ 3

// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")) // ➞ 0


// // 12. Array Indexing
// // Given an index and an array, return the value of the array with the given index.

// function valueAt(arr, idx){
//     // return arr[Math.floor(idx)];

//     // let newIDx = Math.trunc(idx);
//     // return arr[newIDx]

//     return arr.at(idx)
// }

// // Examples
// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)) // ➞ 6

// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2)) // ➞ 5

// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)) // ➞ 4

// // 13. Find the Index (Part 1)
// // Create a function that finds the index of a given item.

// function search(arr, idx){
//     // return arr.indexOf(idx);
// }

// // Examples
// console.log(search([1, 5, 3], 5)) // ➞ 1

// console.log(search([9, 8, 3], 3)) // ➞ 2

// console.log(search([1, 2, 3], 4)) // ➞ -1


// // 14. Buggy Code (Part 3)
// // Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// function sumArray(arr){
//     return arr.reduce((accu, currVal) => {
//         return accu + currVal;
//     }, 0)
// }

// // Examples
// console.log(sumArray([1, 2, 3, 4, 5])) // ➞ 15

// console.log(sumArray([-1, 0, 1])) // ➞ 0

// console.log(sumArray([0, 4, 8, 12])) // ➞ 24


// 15. Find the Index (Part #2)
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

function search(arr, idx){
    // return arr.indexOf(idx)

    const forFindIndex = (elm) => elm === idx;
    return arr.findIndex(forFindIndex);

}

// Examples
console.log(search([1, 2, 3, 4], 3)) // ➞ 2

console.log(search([2, 4, 6, 8, 10], 8)) // ➞ 3

console.log(search([1, 3, 5, 7, 9], 11)) // ➞ -1