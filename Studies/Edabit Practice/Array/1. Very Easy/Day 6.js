// // 31. Array of Word Lengths
// // Create a function that takes an array of words and transforms it into an array of each word's length.

// function wordLengths(arr){
//     // let wordLength = [];
//     // for(let i = 0; i < arr.length; i++){
//     //     wordLength.push(arr[i].length)
//     // }
//     // return wordLength

//     return arr.map((elm) => {
//         return elm.length
//     })
// }

// // Examples
// console.log(wordLengths(["hello", "world"])) // ➞ [5, 5]

// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])) // ➞ [9, 12, 9]

// console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])) // ➞ [3, 5, 9, 4, 2, 3, 8]Notes


// // 32. First Class, Second Class and Third Class Levers
// // Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// // In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// // In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// // In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.


// // Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

// function determineLever(arr){
//     let effort = "e";
//     let fulcrum = "f";
//     let load = "l";

//     if(arr[0] === effort &&
//        arr[1] === fulcrum &&
//        arr[2] === load ){
//         return "first class lever";
//     }
    
//     else if(arr[0] === effort &&
//          arr[1] === load &&
//          arr[2] === fulcrum ){
//         return "second class lever";
//     }

//     else if(arr[0] === fulcrum &&
//          arr[1] === effort &&
//          arr[2] === load ){
//         return "third class lever";
//     }

//  }

// // Examples
// console.log(determineLever(["e", "f", "l"])) // ➞ "first class lever"

// console.log(determineLever(["e", "l", "f"])) // ➞ "second class lever"

// console.log(determineLever(["f", "e", "l"])) // ➞ "third class lever"


// // 33. Difference of Volumes of Cuboids
// // Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// // For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// function findDifference(arr1, arr2){

//     let forArr1 = arr1[0] * arr1[1] * arr1[2]; 
//     let forArr2 = arr2[0] * arr2[1] * arr2[2]; 

//     return Math.abs(forArr1 - forArr2);
// }

// // Examples
// console.log(findDifference([ 28, 16, 29 ], [ 7, 8, 17 ])) // ➞ 12040

// console.log(findDifference([ 9, 22, 18 ], [ 16, 24, 10 ])) // ➞ 276

// console.log(findDifference([ 1, 9, 25 ], [ 10, 7, 9 ])) // ➞ 405

// console.log(findDifference([ 7, 6, 16 ], [ 26, 9, 26 ])) // ➞ 5412

// // 34. Spaces Between Each Character
// // Create a function that takes a string and returns a string with spaces in between all of the characters.

// function spaceMeOut(str){
//     // if(str === "space"){
//     //     return str.replace("space", "s p a c e");
//     // }

//     // else if(str === "far out"){
//     //     return str.replace("far out", "f a r   o u t");
//     // }

//     // else if(str === "elongated musk"){
//     //     return str.replace("elongated musk", "e l o n g a t ed   m u s k");
//     // }

//     return str.split("").join(" ");
// }

// // Examples
// console.log(spaceMeOut("space")) // ➞ "s p a c e"

// console.log(spaceMeOut("far out")) // ➞ "f a r   o u t"

// console.log(spaceMeOut("elongated musk")) // ➞ "e l o n g a t e d   m u s k"

// 35. ES6: Destructuring Arrays II
// You can assign variables from nested arrays like this:

const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

let [trans1, trans2, [trans3, [trans4]]] = arr;

console.log(trans1) // outputs "cars"
console.log(trans2) // outputs "planes"
console.log(trans3) // outputs "trains"
console.log(trans4) // outputs "motorcycles"
// With ES6, you can assign variables from arrays in a much more succinct way.