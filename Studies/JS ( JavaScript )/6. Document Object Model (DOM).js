/*  Window Object 
  The window object represents an open window in
  a browser, It is browser's object
  (not javaScript's) & is automatically created by
  browser. it is a global object with lots of properties
  & methods.
  
  
  What is DOM?
  When a web page is loaded, the browser creates
  a Document Object Model (DOM) of the page
*/

// Q.1 Create a h2 heading element with text - "Hello JavaScript". Append "from apna college students" to this text using js.

// let heading = document.createElement('h2');
// heading.innerText = "Hello JavaScript";
// document.body.appendChild(heading)

// heading.innerText = heading.innerText + " form Apna College studens"

// console.log(heading)

// Q.2 Create 3 divs with common class name - "box". Access them & add some unique texg to each of them.

// let div1 = document.createElement('div');
// div1.innerText = "Div 1";
// div1.classList.add('box');

// let div2 = document.createElement('div');
// div2.innerText = "Div 2";
// div2.classList.add('box');

// let div3 = document.createElement('div');
// div3.innerText = "Div 3";
// div3.classList.add('box');

// document.body.append(div1);
// document.body.append(div2);
// document.body.append(div3);

// let divs = document.querySelectorAll(".box");

// divs[0].innerText = "Div 1 unique";
// divs[1].innerText = "Div 2 unique";
// divs[2].innerText = "Div 3 unique";


// Q.3 Create a new button element. give it a text "Click me", background color of red & text color of white.

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me !";

// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// document.body.appendChild(newBtn)