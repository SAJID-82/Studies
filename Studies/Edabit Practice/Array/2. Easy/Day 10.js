// // 41. Fix the Error: Flattening an Array
// // I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// // Here is my code:

// // function flatten(arr) {
// //   arr2 = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     arr2.concat(arr[i]);
// //   }
// //   return arr2;
// // }
// // But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

// function flatten(arr){
//     return arr.flat()
// }

// // Examples
// console.log(flatten([[1, 2], [3, 4]])) // ➞ []
// // Expected: [1, 2, 3, 4]

// console.log(flatten([["a", "b"], ["c", "d"]])) // ➞ []
// // Expected: ["a", "b", "c", "d"]

// console.log(flatten([[true, false], [false, false]])) // ➞ []
// // Expected: [true, false, false, false]



// // 42. Find the Second Largest Number
// // Create a function that takes an array of numbers and returns the second largest number.

// function secondLargest(arr){
//     let newArr = arr.sort((a, b) => a - b);
//     return newArr.at(-2);
// }

// // Examples
// console.log(secondLargest([10, 40, 30, 20, 50])) // ➞ 40

// console.log(secondLargest([25, 143, 89, 13, 105])) // ➞ 105

// console.log(secondLargest([54, 23, 11, 17, 10])) // ➞ 23




// // 43. Clone an Array
// // The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?
// function clone(arr){
//     let newArr = [arr[0], arr[1], [arr[0], arr[1]]]
//     return newArr
// }

// // Examples
// console.log(clone([1, 1])) // ➞ [1, 1, [1, 1]]

// console.log(clone([1, 2, 3])) // ➞ [1, 2, 3, [1, 2, 3]]

// console.log(clone(["x", "y"])) // ➞ ["x", "y", ["x", "y"]]




// // 44. Hitting the Jackpot
// // Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

// function testJackpot(arr){
//     let result = false;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === arr[i+1]){
//             result = true;
//         }
//     }
//     return result
// }

// // Examples
// console.log(testJackpot(["@", "@", "@", "@"])) // ➞ true

// console.log(testJackpot(["abc", "abc", "abc", "abc"])) // ➞ true

// console.log(testJackpot(["SS", "SS", "SS", "SS"])) // ➞ true

// console.log(testJackpot(["&&", "&", "&&&", "&&&&"])) // ➞ false

// console.log(testJackpot(["SS", "SS", "SS", "Ss"])) // ➞ false




// // 45. Finding Nemo
// // You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

// // If you can't find Nemo, return "I can't find Nemo :(".

// function findNemo(str){
//     let arr = str.split(" ");
//     let index = arr.indexOf("Nemo");
//     return `I found Nemo at ${index+1}!`
// }

// // Examples
// console.log(findNemo("I am finding Nemo !")) // ➞ "I found Nemo at 4!"

// console.log(findNemo("Nemo is me")) // ➞ "I found Nemo at 1!"

// console.log(findNemo("I Nemo am")) // ➞ "I found Nemo at 2!"\



// // 46. Total Volume of All Boxes
// // Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

// // For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

// function totalVolume(...arr){
    
//     // for(let i = 0; i < arr.length; i++){

//     //     if(arr.length === 4){
//     //         return (arr[i][0] * arr[i][1] * arr[i][2]) +
//     //         (arr[i+1][0] * arr[i+1][1] * arr[i+1][2]) +
//     //         (arr[i+2][0] * arr[i+2][1] * arr[i+2][2]) +
//     //         (arr[i+3][0] * arr[i+3][1] * arr[i+3][2]);
//     //     }else if (arr.length === 2){
//     //         return (arr[i][0] * arr[i][1] * arr[i][2]) +
//     //         (arr[i+1][0] * arr[i+1][1] * arr[i+1][2]);
//     //     }else{
//     //         return (arr[i][0] * arr[i][1] * arr[i][2]);
//     //     }

//     // }

//     return arr.reduce((acc, currVal) => {
//         let total = currVal[0] * currVal[1] * currVal[2];
//         return acc + total
//     }, 0)
// }

// // Examples
// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])) // ➞ 63

// console.log(totalVolume([2, 2, 2], [2, 1, 1])) // ➞ 10

// console.log(totalVolume([1, 1, 1])) // ➞ 1


// // 47. Index Multiplier
// // Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// function indexMultiplier(arr){
//     let indx = arr.map((elm, idx) =>{
//         return idx
//     })

//     let result = 0;
//     for (let i = 0; i < arr.length; i++){
//         result += arr[i] * indx[i]
//     }

//     return result 
// }

// // Examples
// console.log(indexMultiplier([1, 2, 3, 4, 5])) // ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// console.log(indexMultiplier([-3, 0, 8, -6])) // ➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)


// // 48. Special Arrays
// // An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

// function isSpecialArray(arr){
//     let even = [];
//     let odd = [];

//     arr.filter((elm) =>{
//         if(elm % 2 === 0){
//             even.push(elm)
//         }else if(elm % 2 === 1){
//             odd.push(elm)
//         }
//     })
//     return `Even Indices : [${even}];  Odd Indices: [${odd}]`
//  }

// // Examples
// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])) // ➞ true
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])) // ➞ false
// // Index 2 has an odd number 9.

// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])) // ➞ false
// // Index 3 has an even number 8.



// // 49. Instant JAZZ
// // Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

// function jazzify(arr){
//     let result = [];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].at(-1) === "7"){
//             result.push(arr[i])
//         }else{
//             result.push(arr[i]+ "7")
//         }
//     }
//     return result
// }

// // Examples
// console.log(jazzify(["G", "F", "C"])) // ➞ ["G7", "F7", "C7"]

// console.log(jazzify(["Dm", "G", "E", "A"])) // ➞ ["Dm7", "G7", "E7", "A7"]

// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])) // ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

// console.log(jazzify([])) // ➞ []



// 50. ES6: Destructuring Arrays V
// ES6 Destructuring can come in handy when you use regular expressions. Here is a function that uses a regular expression to parse a URL.

function parseURL(url){
    let [full, protocol, host, path] = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    return {protocol, host, path}
}

console.log(parseURL("https://developer.mozilla.org/en-US/Web/JavaScript"))
// returns ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

// the protocol = https
// the host = developer.mozilla.org
// the path = en-US/Web/JavaScript
