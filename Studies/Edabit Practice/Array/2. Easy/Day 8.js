// // 32. How Much is True?
// // Create a function which returns the number of true values there are in an array.

// function countTrue(arr){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === true){
//             count++
//         }
//     }
//     return count
// }

// // Examples
// console.log(countTrue([true, false, false, true, false])) // ➞ 2

// console.log(countTrue([false, false, false, false])) // ➞ 0

// console.log(countTrue([])) // ➞ 



// // 33. Learn Lodash (2): Compact
// // According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// // Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

// function compact(arr){
//     return arr.filter((Elm => {
//         return Number(Elm)
//     }))
// }

// // Examples
// console.log(compact([0, 1, false, 2, "", 3]));   // => [1, 2, 3]


// // 34. Converting Objects to Arrays
// // Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// function toArray(obj){
//     let keys = Object.keys(obj);
//     let values = Object.values(obj);

//     let result = []
//     for(let i = 0; i < keys.length; i++){
//         result.push(keys[i]);
//         result.push(values[i]);
//     }
//     return result
// }

// // Examples
// console.log(toArray({ a: 1, b: 2 })) // ➞ [["a", 1], ["b", 2]]

// console.log(toArray({ shrimp: 15, tots: 12 })) // ➞ [["shrimp", 15], ["tots", 12]]

// console.log(toArray({})) // ➞ []


// 35. Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

function concat(...arr){
    return arr.flat()
}

// Examples
console.log(concat([1, 2, 3], [4, 5], [6, 7])) // ➞ [1, 2, 3, 4, 5, 6, 7]

console.log(concat([1], [2], [3], [4], [5], [6], [7])) // ➞ [1, 2, 3, 4, 5, 6, 7]

console.log(concat([1, 2], [3, 4])) // ➞ [1, 2, 3, 4]

console.log(concat([4, 4, 4, 4, 4])) // ➞ [4, 4, 4, 4, 4]