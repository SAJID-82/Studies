// // 36. Even or Odd?
// // Given an array of integers, determine whether the sum of its elements is even or odd.

// // The return value should be a string ("odd" or "even").

// // If the input array is empty, consider it as an array with a zero ([0]).

// function evenOrOdd(arr){
    
//     // let result = "even";
    
//     // for(let i = 0; i < arr.length; i++){
//     //   if(arr[i] % 2 === 0){
//     //           result = "even";
//     //   }else if(arr[i] % 2 === 1 ){
//     //           result = "odd";
//     //   }
//     // }
    
//     // return result

//     let finalVal = arr.map((elm) => {

//         if(arr.length > 0){
//             if(elm % 2 === 0){
//                 return "even";
//             }else if(elm % 2 === 1){
//                 return "odd"
//             }
//         }else if(arr.length === 0){
//             return "even"
//         }

//     })

//     return finalVal.join(" ")
// }

// // Examples
// console.log(evenOrOdd([0])) // ➞ "even"

// console.log(evenOrOdd([1])) // ➞ "odd"

// console.log(evenOrOdd([])) // ➞ "even"

// console.log(evenOrOdd([0, 1, 5])) // ➞ "even"


// // 37. Get the Sum of All Array Elements
// // Create a function that takes an array and returns the sum of all numbers in the array.

// function getSumOfItems(arr){
//     // let sumOfArr = 0;
//     // for(let i = 0; i < arr.length; i++){
//     //     sumOfArr += arr[i];
//     // }
//     // return sumOfArr;

//     // return arr.reduce((acc, currVal) => {
//     //     return acc + currVal
//     // }, 0)

//     let sumOfArr = 0;
//     let forCalculateSum = arr.map((elm) => {
//         return sumOfArr += elm
//     })
//     return sumOfArr;
// }

// // Examples
// console.log(getSumOfItems([2, 7, 4])) // ➞ 13

// console.log(getSumOfItems([45, 3, 0])) // ➞ 48


// // 38. Rotate the Array by One 🔄
// // Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// // Check the examples for a better understanding.

// function rotateByOne(arr){
//     let lastVal = arr.at(-1);
    
//     for(let i = 0; i < arr.length-1; i++){
//         return [lastVal, arr[i], arr[i+1], arr[i+2], arr[i+3]]
//     }
// }

// // Examples
// console.log(rotateByOne([1, 2, 3, 4, 5])) // ➞ [5, 1, 2, 3, 4]

// console.log(rotateByOne([6, 5, 8, 9, 7])) // ➞ [7, 6, 5, 8, 9]

// console.log(rotateByOne([20, 15, 26, 8, 4])) // ➞ [4, 20, 15, 26, 8]


// // 39. Invert an Array
// // Create a function that takes an array of numbers arr and returns an inverted array.

// function invertArray(arr){
//     // let result = [];
//     // for(let i = 0; i < arr.length; i++){
//     //     result.push(arr[i] * -1)
//     // }
//     // return result

//     // let result = [];
//     // for(let elm of arr){
//     //     result.push(elm * -1)
//     // }
//     // return result

//     // return arr.map((elm) => {
//     //     return elm * -1;
//     // })
// }

// // Examples
// console.log(invertArray([1, 2, 3, 4, 5])) // ➞ [-1, -2, -3, -4, -5]

// console.log(invertArray([1, -2, 3, -4, 5])) // ➞ [-1, 2, -3, 4, -5]

// console.log(invertArray([])) // ➞ []


// // 40. Get the File Name
// // Create a function that returns the selected filename from a path. Include the extension in your answer.

// function getFilename(fileLocation){
//     // let fileName = fileLocation.split("/");
//     // return fileName.at(-1)

//     // return fileLocation.split("/").pop();

//     let filename = "";
//     for(let i = fileLocation.length - 1; i >= 0; i--){
//         if (fileLocation[i] === "/"){
//             break;
//         }
//         filename = fileLocation[i] + filename
//     }
//     return filename
// } 

// // Examples
// console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt")) // ➞ "edabit.txt"

// console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3")) // ➞ "Beethoven_5.mp3"

// console.log(getFilename("ffprobe.exe")) // ➞ "ffprobe.exe"

// 41. Array From a Range of Numbers
// Create a function that returns an array of all the integers between two given numbers start and end.

function rangeOfNum(start, end){
    // let finalAns = [];
    // for(let i = start; i <= end; i++){
    //     finalAns.push(start++)
    // }
    // finalAns.shift()
    // finalAns.pop();
    // return finalAns

    let finalAns = [];
    for(let i = start + 1; i < end; i++){
        finalAns.push(i)
    }
    return finalAns
}

// Examples
console.log(rangeOfNum(2, 4)) // ➞ [3]

console.log(rangeOfNum(5, 9)) // ➞ [6, 7, 8]

console.log(rangeOfNum(2, 11)) // ➞ [3, 4, 5, 6, 7, 8, 9, 10]