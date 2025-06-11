// Prototypes in js 

// A Javascript object is an entity having state and behaviour (properties and method).
// Js objects have a special property called prototype.
// We can set prototype using __proto__

// *If object & prototype have same method, object's method will be used.

/* const student1 = {
     fullName: "Mohammed Sajid",
     marks: 99.6,
     printMarks: function () {
        console.log("marks = ", this.marks)
     }

}

const student2 = {
    fullName: "John",
    marks: 99.5,
}

student2.__proto__ = student1; // student2 get access of student1's properties and methods. 


console.log(student2.printMarks())
*/

/*
class Car {
    constructor(name, mileage){
        this.name = name;
        this.mileage = mileage;
        console.log("Creating New Object")
    }

    start(){
        console.log("Start")
    }
    
    stop(){
        console.log("Stop")
    }
}


const Thar = new Car("Thar", 18);
const Endeavour = new Car("Endeavour", 15); */

// Q.1 You are creating a website for your college. Create a class USER with 2 properties. name & email. It also has a method xaled viewData() that allows user to view website data.

class User{

    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Website-Data")
    }
}


let user1 = new User("ABC", "abc@mail.com");
let user2 = new User("DEF", "def@mail.com");