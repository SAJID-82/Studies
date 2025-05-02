// Events in JS 

// The change in the state of an object is known as an Event.

// Q. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

// let button = document.createElement('button');
// button.innerText = "Click Me !";
// document.body.appendChild(button);
// let mode = "dark";

// button.addEventListener("click", ()=>{
//     if(mode === "dark"){
//         mode = "light";
//         document.body.style.backgroundColor = "black";
//     }else{
//         mode = "dark";
//         document.body.style.backgroundColor = "white";
//     }
// })


// pointer event 

let div = document.createElement('div');
document.body.append(div);
div.style.width = "100%";
div.style.height = "580px";
div.style.backgroundColor = "black";

div.addEventListener('pointerdown', e => {
    const dot = document.createElement('div');
    dot.style.backgroundColor = "red";
    dot.style.position = "absolute";
    dot.style.top = "50%";
    dot.style.left = "50%";
    dot.style.transform = "translate(-50%, -50%)";
    dot.id = e.pointerId;
    positionDot(e, dot);
    div.append(dot)
})

div.addEventListener('pointermove', e =>{
    const dot = document.getElementById(e.pointerId);
    if(dot == null) return
    positionDot(e, dot)
})

div.addEventListener('pointerup', e => {
    console.log("Up");
})

function positionDot(e, dot){
    dot.style.width =  `${e.width * 10}px`;
    dot.style.height = `${e.height * 10}px`;
    dot.style.left = `${e.pageX}px`;
    dot.style.top = `${e.pageY}px`;
}