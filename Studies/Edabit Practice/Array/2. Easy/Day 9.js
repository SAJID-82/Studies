// // 36. Convenience Store
// // Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// // To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// function changeEnough(arr, val){
//     // let values = [0.25, 0.10, 0.05, 0.01];
//     // let total = 0;
//     // for(let i = 0; i < arr.length; i++){
//     //     total += values[i] * arr[i];
//     // }
//     // return total >= val


//     let quarter = arr[0] * 0.25;
//     let dimes = arr[1] * 0.10;
//     let nickel = arr[2] * 0.05;
//     let penny = arr[3] * 0.01;

//     let total = quarter + dimes + nickel + penny;

//     return total >= val
// }


// // Examples
// console.log(changeEnough([2, 100, 0, 0], 14.11)) // ➞ false

// console.log(changeEnough([0, 0, 20, 5], 0.75)) // ➞ true

// console.log(changeEnough([30, 40, 20, 5], 12.55)) // ➞ true

// console.log(changeEnough([10, 0, 0, 50], 3.85)) // ➞ false

// console.log(changeEnough([1, 0, 5, 219], 19.99)) // ➞ false

// // Notes
// // quarter: 25 cents / $0.25
// // dime: 10 cents / $0.10
// // nickel: 5 cents / $0.05
// // penny: 1 cent / $0.01


// // 37. Array of Multiples
// // Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// function arrayOfMultiples(num, length){
//     let arr = [];

//     for(let i = 1; i <= length; i++){
//         arr.push(num * i)
//     }
//     return arr
// }

// // Examples
// console.log(arrayOfMultiples(7, 5)) // ➞ [7, 14, 21, 28, 35]

// console.log(arrayOfMultiples(12, 10)) // ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// console.log(arrayOfMultiples(17, 6)) // ➞ [17, 34, 51, 68, 85, 102]
// // Notes
// // Notice that num is also included in the returned array.


// // 38. Convert Key, Values in an Object to Array
// // Write a function that converts an object into an array of keys and values.

// function objectToArray(obj){
//     let keys = Object.keys(obj);
//     let values = Object.values(obj);

//     let arr = [[], [], []];
//     for(let i = 0; i < keys.length; i++){
//         arr[i].push(keys[i])
//         arr[i].push(values[i])
//     }
//     return arr
// }

// // Examples
// console.log(objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// })) // ➞ [["D", 1], ["B", 2], ["C", 3]]

// console.log(objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// })) // ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]


// // 39. Baseball Batting Average
// // A baseball player's batting average is calculated by the following formula:

// // BA = (number of hits) / (number of official at-bats)
// // Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

// // Ty Cobb .366
// // Rogers Hornsby .358
// // Shoeless Joe Jackson .356
// // The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

// function battingAvg(matchs){
//     let hits = 0;
//     let atBats = 0;

//     for(let [h, ab] of matchs){
//         hits += h;
//         atBats += ab;
//     }

//     if(atBats === 0) return ".000";

//     let average = hits / atBats;
//     return "." + average.toFixed(3).slice(2);
// }

// // Examples
// console.log(battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]])) // ➞ ".286"

// console.log(battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]])) // ➞ ".350"

// console.log(battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]])) // ➞ ".273"



// 40. Sort the Unsortable
// In this challenge you will be given an array similar to the following:

// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

// [1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

function sortIt(arr){
    return arr.sort()
}

// Examples
console.log(sortIt([4, 1, 3])) // ➞ [1, 3, 4]

console.log(sortIt([[4], [1], [3]])) // ➞ [[1], [3], [4]]

console.log(sortIt([4, [1], 3])) // ➞ [[1], 3, 4]

console.log(sortIt([[4], 1, [3]])) // ➞ [1, [3], [4]]

console.log(sortIt([[3], 4, [2], [5], 1, 6])) // ➞ [1, [2], [3], 4, [5], 6]