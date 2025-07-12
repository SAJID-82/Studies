// // 1. Find the Smallest and Biggest Numbers
// // Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// function minMax(arr){
//     let result = [];
//     result.push(Math.min(...arr))
//     result.push(Math.max(...arr))
//     return result
// }

// // Examples
// console.log(minMax([1, 2, 3, 4, 5])) //) // ➞ [1, 5]

// console.log(minMax([2334454, 5])) // ➞ [5, 2334454]

// console.log(minMax([1])) // ➞ [1, 1]


// // 2. Check if One Array can be Nested in Another
// // Create a function that returns true if the first array can be nested inside the second and false otherwise.

// // arr1 can be nested inside arr2 if:

// // arr1's min is greater than arr2's min.
// // arr1's max is less than arr2's max.

// function canNest(arr1, arr2){
//     return (Math.min(...arr1)) > (Math.min(...arr2)) && (Math.max(...arr1)) < (Math.max(...arr2))

//     // let arr1MinMax = [];
//     // let arr2MinMax = [];
//     // arr1MinMax.push(Math.min(...arr1));
//     // arr1MinMax.push(Math.max(...arr1));
//     // arr2MinMax.push(Math.min(...arr2));
//     // arr2MinMax.push(Math.max(...arr2));

//     // if(arr1MinMax[0] > arr2MinMax[0] &&
//     //    arr1MinMax[1] < arr2MinMax[1]){
//     //     return true
//     // }else{
//     //     return false
//     // }

// }

// // Examples
// console.log(canNest([1, 2, 3, 4], [0, 6])) // ➞ true

// console.log(canNest([3, 1], [4, 0])) // ➞ true

// console.log(canNest([9, 9, 8], [8, 9])) // ➞ false

// console.log(canNest([1, 2, 3, 4], [2, 3])) // ➞ false


// // 3. Sum of Resistance in Series Circuits
// // When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// // RT = R1 + R2 + R3 ...
// // Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

// function seriesResistance(arr){
//     // let totalVal = 0;

//     // for(let i = 0; i < arr.length; i++){
//     //     totalVal += arr[i];
//     // }
    
//     // if(totalVal <= 1){
//     //     return `${totalVal} ohm`;
//     // }else{
//     //     return `${totalVal} ohms`
//     // }

//     let totalVal = arr.reduce((acc, currVal) => {
//         return acc + currVal
//     } )

//     if(totalVal <= 1){
//         return totalVal + " ohm";
//     }else{
//         return totalVal + " ohms";
//     }

// }

// // Examples
// console.log(seriesResistance([1, 5, 6, 3])) // ➞ "15 ohms"

// console.log(seriesResistance([16, 3.5, 6])) // ➞ "25.5 ohms"

// console.log(seriesResistance([0.5, 0.5])) // ➞ "1.0 ohm"


// // 4. Tuck in Array
// // Create a function that takes two arrays and insert the second array in the middle of the first array.

// function tuckIn(arr1, arr2){
    
//     let newArr = [arr1, arr2].flat().sort();
//     let result = []; 
//     let maximumNum = Math.max(...newArr);
//     for(let i = 0; i < newArr.length; i++){
//         if(newArr[i] < maximumNum){
//             result.push(newArr[i]);
//         }
//     }
//     result.push(maximumNum)

//     if(result.length <= 1){
//         return newArr
//     }
//     return result

// }

// // Examples
// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])) // ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(tuckIn([15,150], [45, 75, 35])) // ➞ [15, 45, 75, 35, 150]

// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]])) // ➞ [[1, 2], [3, 4], [5, 6]]


// // 5. Number Split
// // Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// function numberSplit(num){
//     let val = num / 2;
//     return [Math.round(val)-1 , Math.round(val)]
// }

// // Examples
// console.log(numberSplit(4)) // ➞ [2, 2]

// console.log(numberSplit(10)) // ➞ [5, 5]

// console.log(numberSplit(11)) // ➞ [5, 6]

// console.log(numberSplit(-9)) // ➞ [-5, -4]


// // 6. Filter out Strings from an Array
// // Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// function filterArray(arr){
//     // let result = [];
//     // for(let i = 0; i < arr.length; i++){
//     //     if(typeof arr[i] === "number"){
//     //         result.push(arr[i])
//     //     }
//     // }
//     // return result

//     // return arr.filter((elm) => {
//     //     return typeof elm === "number";
//     // })

//     let result = [];
//     for(let elm of arr){
//         if(typeof elm !== "string"){
//             result.push(elm)
//         }
//     }
//     return result

// }


// // Examples
// console.log(filterArray([1, 2, "a", "b"])) // ➞ [1, 2]

// console.log(filterArray([1, "a", "b", 0, 15])) // ➞ [1, 0, 15]

// console.log(filterArray([1, 2, "aasf", "1", "123", 123])) // ➞ [1, 2, 123]

// 7. Sort by String Length
// Create a function that returns an array of strings sorted by length in ascending order.

function sortByLength(arr){
    // return arr.sort((a, b) => a.length - b.length);

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j].length > arr[j + 1].length){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

// Examples
console.log(sortByLength(["a", "ccc", "dddd", "bb"])) // ➞ ["a", "bb", "ccc", "dddd"]

console.log(sortByLength(["apple", "pie", "shortcake"])) // ➞ ["pie", "apple", "shortcake"]

console.log(sortByLength(["may", "april", "september", "august"])) // ➞ ["may", "april", "august", "september"]

console.log(sortByLength([])) // ➞ []