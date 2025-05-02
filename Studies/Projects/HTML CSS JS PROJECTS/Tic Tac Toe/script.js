const main = document.querySelector('main');
const game = document.querySelector('.game');
const boxs = document.querySelectorAll('.box');
const resetBtn = document.querySelector('.reset-btn');
const newGame = document.querySelector('.newGame');
const conclusion = document.createElement('p');
conclusion.classList.add('conc')
let count = 0;
let turnO = true;

let winPattern = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const disableBoxes = () =>{
    for(let box of boxs){
        box.disabled = true;
    }
} 

const enableBoxes = () =>{
    for(let box of boxs){
        box.disabled = false;
        box.textContent = ""
    }
} 

function checkWinner(){

    for(let pattern of winPattern){

        let val_1 = boxs[pattern[0]].innerText;
        let val_2 = boxs[pattern[1]].innerText;
        let val_3 = boxs[pattern[2]].innerText;

        if(val_1 != "" && val_2 != "" && val_3 != ""){

            if(val_1 === val_2 && val_2 === val_3){
                main.append(conclusion);
                conclusion.textContent = `Winner : Player - ${val_1}`;
                disableBoxes();
            }
        }
    }
}

boxs.forEach( (box) => {

    box.addEventListener('click', (e)=> {

        if(turnO){
            box.textContent = "O";
            turnO = false;
        }else{
            box.textContent = "X";
            turnO = true;
        }

        box.disabled = true;
        count++;
        checkWinner();
        console.log(count)

    if(count === 9){
            if(conclusion.innerText ===  `Winner : Player - O`){
                    conclusion.textContent =  `Winner : Player - O`;
            }
            else if (conclusion.innerText ===  `Winner : Player - X`){
                    conclusion.textContent =  `Winner : Player - X`;
            }
            else{
                    conclusion.textContent = `Match Draw, Start new game`;
                    // count = 0;
            }
        }
    })

    resetBtn.addEventListener("click", (e) => {
        box.textContent = "";
        enableBoxes()
        count = 0;
        turnO = true;
        conclusion.textContent = "";
    })

    newGame.addEventListener("click", (e) => {
        box.textContent = "";
        turnO = true;
        count = 0;
        enableBoxes();
        conclusion.textContent = "";
    })

});