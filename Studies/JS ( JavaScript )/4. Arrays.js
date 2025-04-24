/* Array in JavaScript 

Collection of items called array.*/ 

// Looping Over Array 

// for loop

let heroes = ["ironman", "thor", "spiderman", "hulk", 'antman'];

for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

// for-of loop

for (let hero of heroes) {
    console.log(hero)
}

// Question 1 For given array eith marks of student find the average marks of the entire class.

let students = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let i = 0; i < students.length; i++){
    sum += students[i];
}

let averageMarks = sum / students.length;

console.log(averageMarks)

// Question 2 apply 10% discount on given array values

let price = [250, 645, 300, 900, 50];
let afterDiscountPrice;

for(let i = 0; i < price.length; i++){
    console.log("Before Discount Price ", price[i]);
    afterDiscountPrice = price[i] - (price[i] / 10);
    console.log("After Discount Price ", afterDiscountPrice);
}


// Array Major Methods

// Push() : add value to end;
// Pop() : delete from end & return;
// toString : converts array value to string;
// concat() : joins multiple arrays & return result;
// unshift() : add value to start;
// shift() : delete from start & return;
// slice(startIdx, endIdx) : return a piece of the array;

// splice(add, remove, replace) : change original array;
// add element 
// arr.splice(2, 0, 101);

// delete element
// arr.splice(3, 1);

// replace value
// arr.splice(3, 1, 101)


// Question 3 Create an array to stor companies - Bloomberg, Microsoft, Uber, Google, IBM, Netflix

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// a. remove first value 

// companies.shift();

// console.log(companies)

// b. remove Uber & add Ola in its place

// companies.splice(2,1,"Ola");

// console.log(companies)

// c. add amazon at the end

companies.push("Amazon");

console.log(companies)
