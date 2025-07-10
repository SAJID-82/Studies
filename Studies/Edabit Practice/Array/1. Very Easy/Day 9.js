// // 47. True Ones, False Zeros
// // Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// function integerBoolean(str){
// //     let result = []; 
// //     for(let i = 0;  i < str.length; i++){
// //         if(str[i] > 0){
// //             result.push(true)
// //         }else{
// //             result.push(false)
// //         }
// //     }
// //     return result

// let newArr = str.split("");
// return newArr.map((elm) => {
//     if(elm > 0){
//         return true;
//     }
//     else{
//         return false
//     }
// })

// }

// // Examples
// console.log(integerBoolean("100101")) // ➞ [true, false, false, true, false, true]

// console.log(integerBoolean("10")) // ➞ [true, false]

// console.log(integerBoolean("001")) // ➞ [false, false, true]


// // 48. Binary Array to Decimal
// // In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

// function binaryToDecimal(arr){
//     // return parseInt(arr.join(''), 2);
//     let decimal = 0;
//     for(let i = 0; i < arr.length; i++){
//         decimal = decimal * 2 + arr[i];
//     }
//     return decimal
// }

// // Examples
// console.log(binaryToDecimal([0, 0, 0, 1])) // ➞ 1

// console.log(binaryToDecimal([0, 0, 1, 0])) // ➞ 2

// console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1])) // ➞ 1005


// // 49. Chinese Zodiac
// // Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.

// function chineseZodiac(year){
//     let chineaseAnimals = [
//       "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
//       "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
//     ];

//   let baseYear = 2020;
//   let indx = (year - baseYear) % 12;

//   if(indx < 0){
//     indx += 12
//   }

//   console.log(chineaseAnimals[indx])
  
// }

// // Examples
// chineseZodiac(2021) // ➞ "Ox"

// chineseZodiac(2020) // ➞ "Rat"

// chineseZodiac(1933) // ➞ "Rooster"



// // 50. Learn Lodash: _.fill, Fill an Array With New Values
// // According to the lodash documentation, _.fill Fills elements of an array with the value from start to, but not including, end. Note that this method mutates the array.

// // This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// // Arguments
// // array (Array): The array to fill.
// // value (*): The value to fill array with.
// // [start=0] (number): The start position.
// // [end=array.length] (number): The end position.
// // Returns
// // (Array): Returns array.


// function fill(array, value, start = 0 , end = array.length){
//     for(let i = start; i < end; i++){
//         array[i] = value
//     }
//     return array
// }

// // Examples
// var array = [1, 2, 3]

// console.log(fill(array, "a")) // ➞ ["a", "a", "a"]

// console.log(fill(Array(3), 2)) // ➞ [2, 2, 2]

// console.log(fill([4, 6, 8, 10], "*", 1, 3)) // ➞ [4, "*", "*", 10]


// // 51. The Forbidden Letter
// // Given a letter and an array of words, return whether the letter does not appear in any of the words.

// function forbiddenLetter(theWord, arr){
    
//     let result = true;
//     arr.map((elm) => {
//         let newArr = elm.split('');
        
//         for(let i = 0; i < newArr.length; i++){
//             if(theWord === newArr[i]){
//                 result = false
//             }
//         }

//     })
//     return result

// }

// // Examples
// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])) // ➞ false

// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])) // ➞ true

// console.log(forbiddenLetter("m", [])) // ➞ true

// // 52. Designing Rugs
// // Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

// // The default character (hash #) repeating n times (if no proc is given).
// // The character passed in through the proc repeating n times.

// function makeRug(arrLength, wordLength, word = "#"){
//     let arr = Array(arrLength);

//     for(let i = 0; i < arr.length; i++){
//         arr[i] = word
//     }
    
//     return arr.map((elm) => {
//         let newArr = elm.split("");
        
//         for(let i = 0; i < wordLength-1; i++){
//             newArr.push(word)
//         }
        
//         return newArr.join("")
//     })

// }

// // Examples
// console.log(makeRug(3, 5)) // ➞ [
// //   "#####",
// //   "#####",
// //   "#####"
// // ]

// console.log(makeRug(3, 5, '$'))  // ➞ [
// //   "$$$$$",
// //   "$$$$$",
// //   "$$$$$"
// // ]

// console.log(makeRug(2, 2, 'A'))  // ➞ [
// //   "AA",
// //   "AA"
// // ]


// // 53. Tallest Birthday Cake Candles
// // You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// function birthdayCakeCandles(arr){

//     for(let i = 0; i < arr.length; i++){
//         let maximumNum = Math.max(arr[i]);

//         let forResult = arr.filter((elm) => {
//             return elm === maximumNum;
//         })

//         return forResult.length;
//     }
    
// }

// // Examples
// console.log(birthdayCakeCandles([4, 4, 1, 3])) // ➞ 2
// // The maximum height candles are four units high.
// // There are two of them, so you return 2.

// console.log(birthdayCakeCandles([3, 2, 1, 3])) // ➞ 2

// console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25])) // ➞ 4

// // 54. Cleaning Up Messy Arrays
// // Create a function that takes an array. This array will contain numbers represented as strings.

// // Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// // Return an empty array if there are no even numbers, or odd.

// function cleanUpArray(arr){
//     let newArr = arr.map((elm) => {
//         return Number(elm)
//     })

//     let forOdd = [];
//     let forEven = [];
//     for(let i = 0; i < arr.length; i++){
//         if((arr[i] % 2) === 0){
//             forEven.push(arr[i])
//         }else if((arr[i] % 2) === 1){
//             forOdd.push(arr[i])
//         }
//     }
    
//     return [forEven, forOdd];

// }

// // Examples
// console.log(cleanUpArray(["8"])) // ➞ [[8], []]

// console.log(cleanUpArray(["11"])) // ➞ [[], [11]]

// console.log(cleanUpArray(["7", "4", "8"])) // ➞ [[4, 8], [7]]

// console.log(cleanUpArray(["9", "4", "5", "8"])) // ➞ [[4, 8], [9, 5]]


// 55. Largest Numbers
// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

function largestNumbers(n, arr){
    arr.sort((a,b) =>  b - a); 

    let newArr = [];
    for(let i = 0; i < n; i++){
        newArr.push(arr[i])
    }

    return newArr.sort();
}

// Examples
console.log(largestNumbers(2, [4, 3, 2, 1])) // ➞ [3, 4]

console.log(largestNumbers(1, [7, 19, 4, 2])) // ➞ [19]

console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])) // ➞ [16, 18, 57]

console.log(largestNumbers(0, [1, 3, 4, 2])) // ➞ []