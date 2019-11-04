//constants
const numLevels = 20;
var level = 0;

//state variables

let originalTable = [];
let playerTable = [];

//cached elements

const startBtn = document.getElementById("start");

const box1  = document.getElementById("box1");
const box2  = document.getElementById("box2");
const box3  = document.getElementById("box3");
const box4  = document.getElementById("box4");

const levels = document.getElementById("levels");


//eventlisteners

//event listeners for e/ color 

box1.addEventListener('click', (event) => {

})


box2.addEventListener('click', (event) => {
})

box3.addEventListener('click', (event) => {
})

box4.addEventListener('click', (event) => {
})

//add evt listener to btn and run cb function to trigger beginning of game
startBtn.addEventListener('click', startGame);

//functions

function startGame(){
    originalTable = [];
    playerTable = [];
    levels.innerHTML = "Level 1, good luck!";
//runs simonTurn function after 1 sec    
    setInterval(simonTurn, 1000);
}
 
//random number generated in a function and pushed into array
function randomNumber(){
    originalTable.push(Math.ceil(Math.random() * 4));
}

//simon function will display the current level
function simonTurn(){
    brightenButton();

};

function boxOne(){
    let audio = document.getElementById("soundBox1");
    Audio.play();
};

function boxTwo(){
    let audio = document.getElementById("soundBox1");
    Audio.play();
};

function boxThree(){
    let audio = document.getElementById("soundBox1");
    Audio.play();
};

function boxFour(){
    let audio = document.getElementById("soundBox1");
    Audio.play();
};

function checkWin(){

}

//function changes the preset opaque colors to bright colors
function brightenButton(){
    box1.style.backgroundColor("green");
    box2.style.backgroundColor("red");
    box3.style.backgroundColor("yellow");
    box4.style.backgroundColor("blue");
};

