//constants

//to stop player from pushing buttons
let on = false;

//state variables

//number of times that buttons have lit up
let lit;
let correct;
let win;
let compTurn;
let level;


var gameTable = [];
var playerTable = [];

//cached elements
const levels = document.getElementById("levels");
const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart");
const box1  = document.getElementById("box1");
const box2  = document.getElementById("box2");
const box3  = document.getElementById("box3");
const box4  = document.getElementById("box4");


//eventlisteners


box1.addEventListener('click', (event) => {
    playerTable.push(1);
    //push clicking to user array
    console.log(playerTable);
})

box2.addEventListener('click', (event) => {
    playerTable.push(2);
    console.log(playerTable);
})

box3.addEventListener('click', (event) => {
    playerTable.push(3);
    console.log(playerTable);
})

box4.addEventListener('click', (event) => {
    playerTable.push(4);
    console.log(playerTable);
})

//add evt listener to start btn and run cb function to trigger beginning of game
startBtn.addEventListener('click', startGame);

//add evt listener to restart btn and clear all code out
restartBtn.addEventListener('click', restartGame);

//functions

//create an array of 20 random numbers and store in game table; there are 20 levels
function randomNumber(){ 
    for(let i=0; i < 20; i++){    
    gameTable.push(Math.ceil(Math.random() * 4));
    }
};

//trigerred when start button is clicked
function startGame(){
    //since player hasn't won game
    win = false;
    compTurn = true;
    level = 1;
    lit = 0;
    //resetting all arrays to blank
    playerTable = [];
    gameTable = [];
    levels.innerHTML = "Level 1";    
    compTurn = true;
    correct = true;
    randomNumber();
    simonTurn(); 
    //calls simonTurn over and over every second and turns on buttons 
    interval = 0;
    interval = setInterval(simonTurn, 900);
    console.log(gameTable);
};

//simon function
function simonTurn(){  
    //while simon is running, the player cannot press buttons
    on = false;
    //if number of colors lit up equal the level number simon's turn is over
    if (lit == level){
        //clears the setInterval method
        clearInterval(interval);
        compTurn = false;
        dimButton();
        //player can now play
        on = true;
    } if(compTurn){
        dimButton();
        setTimeout(() => {
            if (gameTable[lit] == 1)    
                box1.style.backgroundColor = "green";
             if (gameTable[lit] == 2) 
                box2.style.backgroundColor = "red";
             if (gameTable[lit] == 3) 
                box3.style.backgroundColor = "yellow";
             if (gameTable[lit] == 4) 
                box4.style.backgroundColor = "blue";
            lit++;
            // brightenButton();
        }, 100);
    }
}

    
//turn corresponding piece on
//wait for user input
//compare
//if correct generate new number
//turn corresponding piece on
//wait for user input
//compare ...



function playerTurn(){
/// here 
}

// function changes the preset opaque colors to bright colors when found in gametable array
function brightenButton() { // 
        gameTable.forEach(i => {
            if (i === 1) {
                box1.style.backgroundColor = "green";
            } if (i === 2) {
                box2.style.backgroundColor = "red";
            } if (i === 3) {
                box3.style.backgroundColor = "yellow";
            } if (i === 4) {
                box4.style.backgroundColor = "blue";
            }
        })
    dimButton();
};

function dimButton(){
    box1.style.backgroundColor = "rgb(106, 199, 106)";
    box2.style.backgroundColor = "rgb(184, 58, 58)";
    box3.style.backgroundColor = "rgba(247, 247, 0, 0.4)";
    box4.style.backgroundColor = "rgb(110, 110, 212)";

}


function restartGame(){
    randomTable = [];
    originalTable = [];
};
 

// function checkWin(){
//     if (playerTable(i) === gameTable(i){
//         alert("Great guess");
//         levels.innerHTML = "Level" + $(`level`);    
//     } else {
//         alert("Try again");
//     }
// };