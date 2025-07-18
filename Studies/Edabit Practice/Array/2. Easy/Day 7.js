// // 26. Is One Array a Subset of Another?
// // Create a function that returns true if the first array is a subset of the second. Return false otherwise.

// function isSubset(arr, arr1){
//     return arr.every(el => arr1.includes(el))
// }

// // Examples
// console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])) // ➞ true

// console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])) // ➞ true

// console.log(isSubset([1, 2], [3, 5, 9, 1])) // ➞ false


// // 27. Learn Lodash (4): _.dropRight, Drop the Last Elements of an Array
// // According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

// // This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// function dropRight(arr, n = 1){
//     let result = [];
//     return arr.slice(0, arr.length - n)
// }

// // Examples
// console.log(dropRight([1, 2, 3])) // ➞ [1, 2]

// console.log(dropRight([1, 2, 3], 2)) // ➞ [1]

// console.log(dropRight([1, 2, 3], 5)) // ➞ []

// console.log(dropRight([1, 2, 3], 0)) // ➞ [1, 2, 3]


// // 28. Chat Room Status
// // Write a function that returns the number of users in a chatroom based on the following rules:

// // If there is no one, return "no one online".
// // If there is 1 person, return "user1 online".
// // If there are 2 people, return "user1 and user2 online".
// // If there are n>2 people, return the first two names and add "and n-2 more online".
// // For example, if there are 5 users, return:

// // "user1, user2 and 3 more online"

// function chatroomStatus(arr){
//     let users = arr.length;

//     if(users === 0){
//         return "no one online"
//     }else if(users === 1){
//         return `${arr[0]} online`;
//     }else if(users === 2){
//         return `${arr[0]} and ${arr[1]} online`
//     }else if(users > 2){
//         return `${arr[0]}, ${arr[1]} and ${users - 2} more online`
//     }
// }

// // Examples
// console.log(chatroomStatus([])) // ➞ "no one online"

// console.log(chatroomStatus(["paRIE_to"])) // ➞ "paRIE_to online"

// console.log(chatroomStatus(["s234f", "mailbox2"])) // ➞ "s234f and mailbox2 online"

// console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]))
// // ➞ "pap_ier44, townieBOY and 4 more online"
// // Notes
// // N/A



// // 29. Spelling it Out
// // Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// function logspelling(str){
//     // let totalLength = str.length;
//     // let letter = str.split("");
//     // let result = [];

//     // if(letter.length === 3){
//     //      result.push(letter[0])
//     //      result.push(letter[0]+letter[1])
//     //      result.push(letter[0]+letter[1]+letter[2])
//     // }else if(letter.length === 5){
//     //      result.push(letter[0])
//     //      result.push(letter[0]+letter[1])
//     //      result.push(letter[0]+letter[1]+letter[2])
//     //      result.push(letter[0]+letter[1]+letter[2]+letter[3]+letter[4])
//     // }else{
//     //      result.push(letter[0])
//     //      result.push(letter[0]+letter[1])
//     //      result.push(letter[0]+letter[1]+letter[2])
//     //      result.push(letter[0]+letter[1]+letter[2]+letter[3]+letter[4])
//     //      result.push(letter[0]+letter[1]+letter[2]+letter[3]+letter[4]+letter[5])
//     //      result.push(letter[0]+letter[1]+letter[2]+letter[3]+letter[4]+letter[5]+letter[6])
//     // }

//     // return result

//     let result = [];
//     for(let i = 1; i <= str.length; i++){
//         result.push(str.slice(0, i))
//     }
//     return result
// }

// // Examples
// console.log(logspelling("bee")) // ➞ ["b", "be", "bee"]

// console.log(logspelling("happy")) // ➞ ["h", "ha", "hap", "happ", "happy"]

// console.log(logspelling("eagerly")) // ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]




// 30. First and Last Index
// Given a word, write a function that returns the first index and the last index of a character.

function charIndex(str, val){
    let strr = str.split("")
    
    let firstIndex = strr.indexOf(val);
    let lastIndex = strr.lastIndexOf(val);

    if(firstIndex !== -1 && lastIndex !== -1){
        return [firstIndex, lastIndex]
    }else{
        return undefined
    }
}

// Examples
console.log(charIndex("hello", "l")) // ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

console.log(charIndex("circumlocution", "c")) // ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

console.log(charIndex("happy", "h")) // ➞ [0, 0]
// Only one "h" exists, so the first and last index is 0.

console.log(charIndex("happy", "e")) // ➞ undefined
// "e" does not exist in "happy", so we return undefined.