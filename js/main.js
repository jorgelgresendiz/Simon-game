//constants
let win;
let sound;

//state variables

let originalTable = [];
var playerTable = [];

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
    console.log("working")
})
box2.addEventListener('click', (event) => {
    console.log("working")
})
box3.addEventListener('click', (event) => {
    console.log("working")
})
box4.addEventListener('click', (event) => {
    console.log("working")
})

//add evt listener to btn and run cb function to trigger beginning of game
startBtn.addEventListener('click', startGame);

//functions

function startGame(){
    originalTable = [];
    playerTable = [];
    levels.innerHTML = "Level 1";
//create a random number between 1 and 4 and push into array original table
    for (let i = 0; i < 20; i++){
        originalTable.push(Math.ceil(Math.random() * 4));
    }
    console.log(originalTable);
}
 
function simonTurn(){
//match the series of random numbers generated and play their corresponding song.

};



