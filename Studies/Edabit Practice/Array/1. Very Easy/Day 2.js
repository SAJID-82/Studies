// // 4. Upvotes vs Downvotes
// // Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// function getVoteCount(votes){
//     // return votes.upvotes - votes.downvotes;
//     // return votes["upvotes"] - votes["downvotes"]

//     let voteDisplayed = votes.upvotes - votes.downvotes;
//     return voteDisplayed;
// }

// // Examples
// console.log(getVoteCount({ upvotes: 13, downvotes: 0 })) // ➞ 13

// console.log(getVoteCount({ upvotes: 2, downvotes: 33 })) // ➞ -31

// console.log(getVoteCount({ upvotes: 132, downvotes: 132 })) // ➞ 0


// // 5. Reverse an Array
// // Write a function to reverse an array.

// function reverse(arr){
//     // return arr.reverse();

//     for(let i = arr.length; i >= 0; i++){

//         if(arr.length === 4){
//             return [arr[i-1], arr[i-2], arr[i-3], arr[i-4]];
//         }
        
//         else if(arr.length === 5){
//             return [arr[i-1], arr[i-2], arr[i-3], arr[i-4], arr[i-5]];
//         }

//         else{
//             return [];
//         }

//     }
// }

// // Examples
// console.log(reverse([1, 2, 3, 4])) // ➞ [4, 3, 2, 1]

// console.log(reverse([9, 9, 2, 3, 4])) // ➞ [4, 3, 2, 9, 9]

// console.log(reverse([])) // ➞ []


// // 6. Fix the Bug: Simple Array Manipulation
// // Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// // Examples

// function incrementItems(arr){

//     // return arr.map((elm) => {
//     //     return elm + 1
//     // })

//     let newArr = [arr[0]+1, arr[1]+1, arr[2]+1, arr[3]+1,]

//     return newArr 
// }

// console.log(incrementItems([0, 1, 2, 3])) // ➞ [1, 2, 3, 4]

// console.log(incrementItems([2, 4, 6, 8])) // ➞ [3, 5, 7, 9]

// console.log(incrementItems([-1, -2, -3, -4])) // ➞ [0, -1, -2, -3]

