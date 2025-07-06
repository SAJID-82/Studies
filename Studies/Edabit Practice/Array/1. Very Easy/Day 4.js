// // 16. Check if an Array Contains a Given Number
// // Write a function to check if an array contains a particular number.

// function check(arr, num){

//     // return arr.some((elm) => {
//     //     return elm === num
//     // })

//     // return arr.includes(num)
    
//     // let checkk = arr.find((elm) => {
//     //     return elm === num;
//     // })
    
//     // if(checkk === num){
//     //     return true
//     // }
//     // else{
//     //     return false
//     // }

//     // for(let i = 0; i < arr.length; i++){
//     //     if (arr[i] === num){
//     //         return true
//     //     }
//     // }

//     // return false;

//     for(let elm of arr){
//         if(elm === num){
//             return true
//         }
//     }

//     return false

// }

// // Examples
// console.log(check([1, 2, 3, 4, 5], 3)) // ➞ true

// console.log(check([1, 1, 2, 1, 1], 3)) // ➞ false

// console.log(check([5, 5, 5, 6], 5)) // ➞ true

// console.log(check([], 5)) // ➞ false


// // 17. Less Than, Greater Than
// // Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// function arrBetween(num1, num2, arr){

//     // let conclusion = (elm) => {
//     //     return (elm > num1 && elm < num2)
//     // } 

//     // return arr.filter(conclusion);

//     // let newArr = [];

//     // for(let i = 0; i < arr.length; i++){
//     //     if(arr[i] > num1 && arr[i] < num2){
//     //         newArr.push(arr[i])
//     //     }
//     // }
//     // return newArr

//     let newArr = [];

//     for (let element of arr) {
//         if(element > num1 && element < num2){
//             newArr.push(element)
//         }
//     }
//     return newArr

// }

// // Examples
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])) // ➞ [5, 4, 7]

// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])) // ➞ [8, 6]

// console.log(arrBetween(7, 32, [1, 2, 3, 78])) // ➞ []

// // 18. 50-30-20 Strategy
// // The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// // Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// function fiftyThirtyTwenty(value){
//     let newObj = {
//         Needs : (value * 50 / 100),
//         Wants : (value * 30 / 100),
//         Savings : (value * 20 / 100) 
//     }
//     return newObj
// }

// // Examples
// console.log(fiftyThirtyTwenty(10000)) // ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// console.log(fiftyThirtyTwenty(50000)) // ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// console.log(fiftyThirtyTwenty(13450)) // ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }


// // 19. Similar Bread
// // Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// function hasSameBread(arr1, arr2){
//     if((arr1[0] === arr2[0]) && arr1[2] === arr2[2]){
//         return true
//     }else{
//         return false 
//     }
// }

// // Examples
// console.log(hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// )) // ➞ true

// console.log(hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// )) // ➞ false

// console.log(hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// )) // ➞ false

// // Notes
// // The arrays will always be three elements long.
// // The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.


// // 20. Convert All Array Items to String
// // Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// function parseArray(arr){
//     // return arr.map((elm) => {
//     //     return elm.toString();
//     // })
   
//     // let newArr = [];
//     // for(let i = 0; i < arr.length; i++){
//     //     newArr.push(arr[i].toString())
//     // }

//     // return newArr

//     // let newArr = [];
//     // for (let element of arr) {
//     //     newArr.push(element.toString())
//     // }
//     // return newArr
// }

// // Examples
// console.log(parseArray([1, 2, "a", "b"])) // ➞ ["1", "2", "a", "b"]

// console.log(parseArray(["abc", 123, "def", 456])) // ➞ ["abc", "123", "def", "456"]

// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"])) // ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]

// console.log(parseArray([])) // ➞ []