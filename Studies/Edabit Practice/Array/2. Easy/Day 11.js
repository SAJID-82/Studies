// // 51. Get Sum of People's Budget
// // Create the function that takes an array with objects and returns the sum of people's budgets.

// function getBudgets(obj){
//     let totalBudget = 0;

//     for(let i = 0; i < obj.length; i++){
//         let values = Object.values(obj[i]);
//         let budgets = values.pop();
//         totalBudget += budgets;
//     }

//     return totalBudget
// }

// // Examples
// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ])) // ➞ 65700

// console.log(getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ])) // ➞ 62600



// // 52. Match the Last Item
// // Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// function matchLastItem(arr){
//     let lastValues = arr.pop()
//     let allValues = arr.join("")

//     return lastValues === allValues
// }

// // Examples
// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])) // ➞ true
// // The last item is the rest joined.

// console.log(matchLastItem([1, 1, 1, "11"])) // ➞ false
// // The last item should be "111".

// console.log(matchLastItem([8, "thunder", true, "8thundertrue"])) // ➞ true


// 53. SKIPPED 

// // 54. Burglary Series (01): Calculate Total Losses
// // You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// function stolenItems(obj){
//     let allValues = Object.values(obj);
    
//     let result = allValues.reduce((acc, currVall) => {
//         return acc += currVall
//     }, 0)

//     if(result > 0){
//         return result
//     }else{
//         return "Lucky You !"
//     }
// }

// // Examples
// console.log(stolenItems({
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// })) // ➞ 100

// console.log(stolenItems({
//   painting: 20000,
// })) // ➞ 20000

// console.log(stolenItems({})) // ➞ "Lucky you!"


// // 55. Currying Functions
// // Mubashir was read/ing about currying functions. He needs your help to multiply an array of numbers using currying functions.

// // Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// // The returned array should consist of each of the elements from the first array multiplied by the integer.

// function multiply(arr){
//     return function(num){
//         return arr.map((elm) => {
//             return elm * num
//         })
//     } 
// }

// // Examples
// console.log(multiply([1, 2, 3])(2)) // ➞ [2, 4, 6]

// console.log(multiply([4, 6, 5])(10)) // ➞ [40, 60, 50]

// console.log(multiply([1, 2, 3])(0)) // ➞ [0, 0, 0]