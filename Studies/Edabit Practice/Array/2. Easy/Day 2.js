// // 8. Sum of Cubes
// // Create a function that takes in an array of numbers and returns the sum of its cubes.

// function sumOfCubes(arr){
//     // let result = 0;
//     // for(let i = 0; i < arr.length; i++){
//     //     result += arr[i] ** 3;
//     // }
//     // return result

//     // let result = 0;
//     // for(let elm of arr){
//     //     result += elm ** 3
//     // }
//     // return result

//     let result = 0;
//     for(let i = 0; i < arr.length; i++){
//         result += Math.pow(arr[i], 3)
//     }
//     return result
// }

// // Examples
// console.log(sumOfCubes([1, 5, 9])) // ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// console.log(sumOfCubes([3, 4, 5])) // ➞ 216

// console.log(sumOfCubes([2])) // ➞ 8

// console.log(sumOfCubes([])) // ➞ 0


// // 9. Even All the Way
// // Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

// function getOnlyEvens(arr){
//     // return arr.filter((elm, index) => {
//     //     return elm % 2 === 0 && index % 2 === 0
//     // }) 

//     // let result = [];
//     // for(let i = 0; i < arr.length; i++){
//     //     if(i % 2 === 0 && arr[i] % 2 === 0){
//     //        result.push(arr[i])
//     //     }
//     // }
//     // return result

// }


// // Examples
// console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])) // ➞ [2, 4]

// console.log(getOnlyEvens([0, 1, 2, 3, 4])) // ➞ [0, 2, 4]

// console.log(getOnlyEvens([1, 2, 3, 4, 5])) // ➞ []


// 10. Sort an Array by String Length
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

function sortByLength(arr){
    // return arr.sort((a, b) => {
    //     return a.length - b.length
    // })

    for(let i = 0; i > arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j].length > arr[j+1].length){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

// Examples
console.log(sortByLength(["Google", "Apple", "Microsoft"]))
// ➞ ["Apple", "Google", "Microsoft"]

console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]))
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

console.log(sortByLength(["Turing", "Einstein", "Jung"]))
// ➞ ["Jung", "Turing", "Einstein"]