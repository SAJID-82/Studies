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



// // 13. Absolute Sum
// // Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

// function getAbsSum(arr){
//     let AbsoluteSum = 0;
//     for(let i = 0; i < arr.length; i++){
//         AbsoluteSum += Math.abs(arr[i])
//     }
//     return AbsoluteSum
// }

// // Examples
// console.log(getAbsSum([2, -1, 4, 8, 10])) // ➞ 25

// console.log(getAbsSum([-3, -4, -10, -2, -3])) // ➞ 22

// console.log(getAbsSum([2, 4, 6, 8, 10])) // ➞ 30

// console.log(getAbsSum([-1])) // ➞ 1


// // 14. Sort Numbers in Ascending Order
// // Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// // Sort numbers array in ascending order.
// // If the function's argument is null, an empty array, or undefined; return an empty array.
// // Return a new array of sorted numbers.

// function sortNumsAscending(arr){
//     if(arr == null && arr == undefined) {
//         return []
//     }else{
//         // return arr.sort((a, b) => a - b)

//         for(let i = 0; i < arr.length - 1; i++){
//             for(let j = 0; j < arr.length - i - 1; j++){
//                 if(arr[j] > arr[j+1]){
//                     let temp = arr[j];
//                     arr[j] = arr[j+1];
//                     arr[j+1] = temp
//                 }
//             }
//         }
//         return arr
//     }
// }

// // Examples
// console.log(sortNumsAscending([1, 2, 10, 50, 5])) // ➞ [1, 2, 5, 10, 50]

// console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])) // ➞ [-95, -24, 4, 29, 80, 85]

// console.log(sortNumsAscending(null)) // ➞ []

// console.log(sortNumsAscending([])) // ➞ []



// 15. Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

function findLargestNums(arr){
    // let result = [];
    // for(let i = 0; i < arr.length; i++){
    //     result.push(Math.max(...arr[i]))
    // }
    // return result

    // let result = [];
    // for(let elm of arr){
    //     result.push(Math.max(...elm))
    // }
    // return result

    // return arr.map((elm) => {
        // return Math.max(...elm)
    // })

    function CustomMathMax(...arr){
        let max = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        return max
    }

        return arr.map(inner => CustomMathMax(...inner))

}

// Examples
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])) // ➞ [7, 90, 2]

console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])) // ➞ [-34, -2, 7]

console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])) // ➞ [0.7634, 9.32, 9]
