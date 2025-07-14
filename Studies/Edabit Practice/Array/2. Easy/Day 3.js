// // 11. Burglary Series (10): Calculate Difference
// // The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.
// // Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

// function calculateDifference(obj, value){
//     // let values = Object.values(obj);
//     // let result = values.reduce((Accumulator, currVal) => {
//     //     return Accumulator + currVal;
//     // })
//     // return result - value

//     let totalVal = 0;
//     for(let key in obj) {
//         totalVal += obj[key]
//     }    

//     return totalVal - value
// }


// // Examples
// console.log(calculateDifference({ "baseball bat": 20 }, 5)) // ➞ 15

// console.log(calculateDifference({ skate: 10, painting: 20 }, 19)) // ➞ 11

// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)) // ➞ 1


// // 12. Is the Average of All Elements a Whole Number?
// // Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// function isAvgWhole(arr){
//     // let result = arr.reduce((acc, currVal) => {
//     //     return acc + currVal
//     // })
//     // return result % arr.length === 0

//     let totalVal = 0;
//     for(let i = 0; i < arr.length; i++){
//         totalVal += arr[i]
//     }
//     return (totalVal % arr.length === 0)
// }

// // Examples
// console.log(isAvgWhole([1, 3])) // ➞ true

// console.log(isAvgWhole([1, 2, 3, 4])) // ➞ false

// console.log(isAvgWhole([1, 5, 6])) // ➞ true

// console.log(isAvgWhole([1, 1, 1])) // ➞ true

// console.log(isAvgWhole([9, 2, 2, 5])) // ➞ false



// 13. Absolute Sum
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

function getAbsSum(arr){
    let AbsoluteSum = 0;
    for(let i = 0; i < arr.length; i++){
        AbsoluteSum += Math.abs(arr[i])
    }
    return AbsoluteSum
}

// Examples
console.log(getAbsSum([2, -1, 4, 8, 10])) // ➞ 25

console.log(getAbsSum([-3, -4, -10, -2, -3])) // ➞ 22

console.log(getAbsSum([2, 4, 6, 8, 10])) // ➞ 30

console.log(getAbsSum([-1])) // ➞ 1