// // 16. Transform into an Array with No Duplicates
// // A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// // [1, 3, 3, 5, 5, 5]
// // original array

// // [1, 3, 5]
// // original array transformed into a set
// // Create a function that sorts an array and removes all duplicate items from it.

// function set(arr){
//     // let result = [];
//     // for(let i = 0; i < arr.length; i++){
//     //     if(arr[i] !== arr[i+1]){
//     //         result.push(arr[i])
//     //     }
//     // }
//     // return result.sort((a, b) => a - b)
// }

// // Examples
// console.log(set([1, 3, 3, 5, 5])) //➞ [1, 3, 5]

// console.log(set([4, 4, 4, 4])) //➞ [4]

// console.log(set([5, 7, 8, 9, 10, 15])) //➞ [5, 7, 8, 9, 10, 15]

// console.log(set([3, 3, 3, 2, 1])) //➞ [1, 2, 3]


// // 17. Phone Number Formatting
// // Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

// function formatPhoneNumber(arr){
//     // let i = 0;
//     // result = `(${arr[i]}${arr[i+1]}${arr[i+2]}) ${arr[i+3]}${arr[i+4]}${arr[i+5]}-${arr[i+6]}${arr[i+7]}${arr[i+8]}${arr[i+9]}`
//     // return result;

//     let first3Digit = arr.slice(0, 3).join("");
//     let ThreeDigit = arr.slice(3, 6).join("");
//     let lastThreeDigit = arr.slice(6).join("");
//     let result = `(${first3Digit}) ${ThreeDigit}-${lastThreeDigit}`;
//     return result
// }

// // Examples
// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // ➞ "(123) 456-7890"

// console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])) // ➞ "(519) 555-4468"

// console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])) // ➞ "(345) 501-2527"


// // 18. Amplify the Multiples of Four
// // In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

// // Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

// // Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.

// function amplify(num){
//     let result = [];
//     for(let i = 1; i <= num; i++){
//         if(i % 4 === 0){
//             result.push(i * 10);
//         }else{
//             result.push(i)
//         }
//     }
//     return result
// }

// // Examples
// console.log(amplify(4)) // ➞ [1, 2, 3, 40]
// // Create a sequence from 1 to 4
// // 4 is exactly divisible by 4, so it will be 4*10 = 40

// console.log(amplify(3)) // ➞ [1, 2, 3]
// // Create a sequence from 1 to 3
// // There are no numbers that can be exactly divided by 4

// console.log(amplify(25)) // ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// // Create a sequence from 1 to 25
// // The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.


// 19. Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

function societyName(arr){
    // let result = [];
    // let finalResult = [];
    // for(let i = 0; i < arr.length; i++){
    //     result.push(arr[i]);
    // }
    // result.sort()

    // if(result.length === 3){
    // finalResult.push(result[0][0])
    // finalResult.push(result[1][0])
    // finalResult.push(result[2][0])
    // }
    // else if(result.length === 4){
    // finalResult.push(result[0][0])
    // finalResult.push(result[1][0])
    // finalResult.push(result[2][0])
    // finalResult.push(result[3][0])
    // }else{
    // finalResult.push(result[0][0])
    // finalResult.push(result[1][0])
    // finalResult.push(result[2][0])
    // finalResult.push(result[3][0])
    // finalResult.push(result[4][0])
    // finalResult.push(result[5][0])
    // }

    // return finalResult.join("")

    // let result = [];
    // let finalResult = [];
    // for(let i = 0; i < arr.length; i++){
    //     result.push(arr[i])
    // }
    // result.sort()
   
    // for(let i = 0; i < result.length; i++){ 
    //     finalResult.push(result[i][0])
    // }
    // return finalResult
    
}

// Examples
console.log(societyName(["Adam", "Sarah", "Malcolm"])) // ➞ "AMS"

console.log(societyName(["Harry", "Newt", "Luna", "Cho"])) // ➞ "CHLN"

console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])) // ➞ "CJMPRR"