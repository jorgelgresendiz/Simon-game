//constants
var level = 0;

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

//create a random number between 1 and 4 and push into array original table
function randomNumber(){
    var randomNumber = (Math.ceil(Math.random() * 4));
    gameTable.push(randomNumber);
    //immediately brightens button after respective random number found
    brightenButton();
};

//trigerred when start button is clicked
function startGame(){
    randomNumber();
    playerTable = [];
    levels.innerHTML = "Level 1";    
    setInterval(simonTurn, 1000);
    console.log(gameTable);
};


// function changes the preset opaque colors to bright colors when found in gametable array
function brightenButton() {
    setTimeout(function() {
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
    }, 1000);
    dimButton();
};


function dimButton(){
    setTimeout(function() {
        gameTable.forEach(i => {
            if (i === 1) {
                box1.style.backgroundColor = "rgb(106, 199, 106)";
            } if (i === 2) {
                box2.style.backgroundColor = "rgb(184, 58, 58)";
            } if (i === 3) {
                box3.style.backgroundColor = "rgba(247, 247, 0, 0.4)";
            } if (i === 4) {
                box4.style.backgroundColor = "rgb(110, 110, 212)";
            }
        })
    }, 2000);
}




//simon function
function simonTurn(){

};


function restartGame(){
    randomTable = [];
    originalTable = [];
};




// function checkWin(){
//     gameTable.forEach(function(i){

//     if (JSON.stringify(originalTable) === JSON.stringify(playerTable)){
//         document.getElementById("display").innerText = "Congratulations, you made it to the next level!";
//     } else {
//         document.getElementById("display").innerText = "Sorry, try again!";
//     }
// });






