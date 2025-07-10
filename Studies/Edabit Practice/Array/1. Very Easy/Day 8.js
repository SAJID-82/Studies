// // 42. Skip the Drinks with Too Much Sugar
// // Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// // cola
// // fanta

// function skipTooMuchSugarDrinks(arr){
//     // let newArr = arr.filter((elm) => {
//     //     if(elm != "cola" && elm != "fanta"){
//     //         return elm;
//     //     }
//     // })
//     // return newArr

//     // let newArr = [];
//     // for(let i= 0; i < arr.length; i++){
//     //     if(arr[i] != "cola" && arr[i] != "fanta"){
//     //         newArr.push(arr[i]);
//     //     }
//     // }
//     // return newArr

//     let newArr = [];

//     for(let elm of arr){
//         if(elm != "cola" && elm != "fanta"){
//             newArr.push(elm)
//         }
//     }
//     return newArr
// }

// // Examples
// console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"])) // ➞ ["water"]

// console.log(skipTooMuchSugarDrinks(["fanta", "cola"])) // ➞ []

// console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"])) // ➞ ["lemonade", "beer", "water"]


// // 44. Sum Greater Than Five
// // Write a function that returns the sum of elements greater than 5, in the given array .

// function sumFive(arr){
//     // let sum = 0;
//     // for(let i = 0; i < arr.length; i++){
//     //     if(arr[i] > 5){
//     //         sum += arr[i]
//     //     }
//     // }
//     // return sum

//     let sum = 0;
//     arr.reduce((accumulator, currentValue) => {
//         if(currentValue > 5){
//             sum += currentValue
//         }
//     }, 0)
//     return sum
// }

// // Examples
// console.log(sumFive([1, 5, 20, 30, 4, 9, 18])) // ➞ 77

// console.log(sumFive([1, 2, 3, 4])) // ➞ 0

// console.log(sumFive([10, 12, 28, 47, 55, 100])) // ➞ 252



// // 45. Filter Strings from Array
// // Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// function filterArray(arr){
//     // return arr.filter((elm) => {
//     //     return elm === Number(elm)
//     // })

//     // let newArr = [];
//     // for(let i = 0; i < arr.length; i++){
//     //     if(typeof arr[i] === "number"){
//     //         newArr.push(arr[i])
//     //     }
//     // }
//     // return newArr
// }

// // Examples
// console.log(filterArray([1, 2, 3, "a", "b", 4])) // ➞ [1, 2, 3, 4]

// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])) // ➞ [0, 1729]



// // 46. Burglary Series (11): Say What
// // The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// // Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

// function forObj(obj){
//     return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`;
// }

// // Examples
// console.log(forObj({ 1: "Mommy", 2: "please", 3: "help" })) // ➞ "Mommy please help please"

// console.log(forObj({ 1: "Me", 2: "innocent", 3: "is" })) // ➞ "Me innocent is innocent"

// console.log(forObj({ 1: "Must", 2: "lawyer", 3: "call" })) // ➞ "Must lawyer call lawyer"

