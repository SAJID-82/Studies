// Functions in JavaScript
// block of code that performs a specific task, can be invoked whenever needed.

// function myFunction(n1 , n2){ // parameter
    
//     console.log(n1 + n2);
// }

// myFunction(10, 5); // argument 

// Arrow function
// Q. 1 return vowel count

/* const returnVowels = (str) => {
    count = 0;
    for (let char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}

returnVowels("hello"); */

// forEach Method : Higher Order Function / Method.

// Q. 2 return square of value

// let values = [1, 2, 3, 4, 5];

// values.forEach((val, idx)=>{
//     console.log("Normal value ", val, "Square Value", val * val);
// })


// Q. 3 Return 90 + marks

// let studentMark = [10, 90, 98, 97, 89, 99]

// let newStudentMark = studentMark.filter((val)=>{
//     return val >= 90;
// })

// console.log(newStudentMark);

// Q.3 

let n = prompt("enter a number");

let arr = [];

for(let i = 1; i <= n; i++){
    arr[i-1] = i;
}

// console.log(arr)

// let sumOfNum = arr.reduce((acc, currVal)=>{
//     return acc + currVal;
// })

// console.log("Sum of Number", sumOfNum);

let factorial = arr.reduce((acc, currVal)=>{
    return acc * currVal;
})

console.log("Factorial =",factorial)


