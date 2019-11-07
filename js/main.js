//constants
let level;
let playerTurn;
let gameTurn;
let turnOffLight;

//state variables
var gameTable = [];
var playerTable = [];

//cached elements
const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart");
const box1  = document.getElementById("box1");
const box2  = document.getElementById("box2");
const box3  = document.getElementById("box3");
const box4  = document.getElementById("box4");

const levels = document.getElementById("levels");


//eventlisteners


box1.addEventListener('click', (event) => {
    playerTable.push(event.target.id);
    //push clicking to user array
    console.log(playerTable);
})

box2.addEventListener('click', (event) => {
    playerTable.push(event.target.id);
    console.log(playerTable);
})

box3.addEventListener('click', (event) => {
    playerTable.push(event.target.id);
    console.log(playerTable);
})

box4.addEventListener('click', (event) => {
    playerTable.push(event.target.id);
    console.log(playerTable);
})

//add evt listener to start btn and run cb function to trigger beginning of game
startBtn.addEventListener('click', startGame);

//add evt listener to restart btn and clear all code out
restartBtn.addEventListener('click', restartGame);

//functions

//create an array of 20 random numbers and store in game table
function randomNumber(){
    for (let i = 0; i < 20; i++){
        gameTable.push(Math.ceil(Math.random() * 4));
    }
    brightenButton();
};

//trigerred when start button is clicked
function startGame(){
    randomNumber();
    playerTable = [];
    level = 1;
    levels.innerHTML = "Level 1";    
    //will turn off lights using clearInterval
    turnOffLight = setInterval(simonTurn, 1000);
    console.log(gameTable);
};

//simon function
function simonTurn(){

};

// function changes the preset opaque colors to bright colors when found in gametable array
function brightenButton() {
    setTimeout(function() {
        gameTable.forEach(i => {
            if (i === 1) {
                box1.style.backgroundColor = "green";
                box1.style.borderColor = "white";
            } if (i === 2) {
                box2.style.backgroundColor = "red";
                box2.style.borderColor = "white";
            } if (i === 3) {
                box3.style.backgroundColor = "yellow";
                box3.style.borderColor = "white";
            } if (i === 4) {
                box4.style.backgroundColor = "blue";
                box4.style.borderColor = "white";  
            }
            dimDown();
        }) 
    },50);
} 

function dimDown(){
    setTimeout(function() {
        gameTable.forEach(i => {
            if (i === 1) {
                box1.style.backgroundColor = "rgb(106, 199, 106)";
                box1.style.borderColor = "black";
            } if (i === 2) {
                box2.style.backgroundColor = "rgb(184, 58, 58)";
                box2.style.borderColor = "black";
            } if (i === 3) {
                box3.style.backgroundColor = "rgba(247, 247, 0, 0.4)";
                box3.style.borderColor = "black";
            } if (i === 4) {
                box4.style.backgroundColor = "rgb(110, 110, 212)";
                box4.style.borderColor = "black";
            }
        }) 
    }, 950); 
};

function choosePattern(){
    
}


function restartGame(){
    randomTable = [];
    originalTable = [];
};
 


function checkWin(){
    gameTable.forEach(function(){
        if (JSON.stringify(originalTable) === JSON.stringify(playerTable)){
            document.getElementById("display").innerText = "Congratulations, you made it to the next level!";
        } else {
            document.getElementById("display").innerText = "Sorry, try again!";
        }
    });
}


function boxOne(){

};

function boxTwo(){

};

function boxThree(){

};

function boxFour(){

};

