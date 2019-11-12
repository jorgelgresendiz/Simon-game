//constants

//to stop player from pushing buttons
var on = true;

//state variables

//number of times that buttons have lit up
let lit;
let correct;
let win;
let compTurn;
let level;
let interval;

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
//player can only click if program is on...
if (on){
    //change color of button clicked and push to player array
    box1.style.backgroundColor = "green";
    playerTable.push(1);
    console.log(playerTable);
    //function will check if current game table and player array are equal
    compare(); 
//whe player has not won (truthy), dim the button 500ms after it is pressed
    if (!win) {
            setTimeout(() => {
                dimButton();
            }, 300);
        }
        // console.log(win);
    }
});

box2.addEventListener('click', (event) => {
    if (on) {
        playerTable.push(2);
        compare();
        box2.style.backgroundColor = "red";
        console.log(playerTable);
        if (!win) {
            setTimeout(() => {
            dimButton();
            }, 300);
        }
    }
});

box3.addEventListener('click', (event) => {
    if (on) {
        box3.style.backgroundColor = "yellow";
        playerTable.push(3);
        compare();
        console.log(playerTable);
    if (!win) {
        setTimeout(() => {
        dimButton();
            }, 300);
        }
    }
})

box4.addEventListener('click', (event) => {
    if (on) {
        box4.style.backgroundColor = 'blue';
        playerTable.push(4);
        compare();
        console.log(playerTable);
    if (!win) {
        setTimeout(() => {
            dimButton();
        }, 300);
    }
    }
});


//add evt listener to start btn and run cb function to trigger beginning of game
startBtn.addEventListener('click', startGame);

restartBtn.addEventListener('click', restartGame);


//functions

function restartGame(){
    display.innerHTML = "Let's Play!"
    startGame();
};

//create an array of 20 random numbers and store in game table; there are 20 levels
function randomNumber(){ 
    for(let i = 0; i < 20; i++){    
    gameTable.push(Math.ceil(Math.random() * 4));
    }
};
//trigerred when start button is clicked
function startGame(){
    //since player hasn't won game
    win = false;
    compTurn = true;
    level = 1;
    //at beginning of game there are 0 buttons lit up
    lit = 0;
    //resetting all arrays to blank
    playerTable = [];
    gameTable = [];
    levels.innerHTML = "Level " + level;    
    compTurn = true;
    correct = true;
    randomNumber();
    //calls simonTurn over and over every second and turns on buttons
     interval = 0;
     interval = setInterval(simonTurn, 800);
     console.log(gameTable);
 };


//simon function
function simonTurn(){  
    //while simon is running, the player cannot press buttons
    on = false;

    //if number of colors lit up equal the level number simon's turn is over
    if (lit === level) {
        //clears the setInterval method
        clearInterval(interval);
        compTurn = false;
        dimButton();
        //player can now play
        on = true;
    } 
    
    if(compTurn){
        dimButton();
        setTimeout(() => {
             if (gameTable[lit] === 1)    
                box1.style.backgroundColor = "green";
             if (gameTable[lit] === 2) 
                box2.style.backgroundColor = "red";
            if (gameTable[lit] === 3) 
                box3.style.backgroundColor = "yellow";
            if (gameTable[lit] === 4) 
                box4.style.backgroundColor = "blue";
            lit++;
        }, 200);
    }
}

//resets lit up buttons back to their normal state
function dimButton(){
    box1.style.backgroundColor = "rgb(106, 199, 106)";
    box2.style.backgroundColor = "rgb(184, 58, 58)";
    box3.style.backgroundColor = "rgba(247, 247, 0, 0.4)";
    box4.style.backgroundColor = "rgb(110, 110, 212)";
}

function compare(){
    //if player wins a level, but has not completed all 20 levels
    if (playerTable[playerTable.length - 1] == gameTable[playerTable.length - 1]) {
        correct = true;
        
        if (correct === true){
            level++;
            console.log(level); 
            if (level === 2){
                interval = setInterval(simonTurn, 800);
                compTurn = true;
                levels.innerHTML = "Level " + level; 
                display.innerHTML ='Congrats, keep going!';
                startBtn.parentNode.removeChild(startBtn); 
            }
            else if (level === 21){
                display.innerHTML = 'Game Over! You Win'
            } else {
                interval = setInterval(simonTurn, 800);
                compTurn = true;
                levels.innerHTML = "Level " + level; 

                display.innerHTML ='Congrats, keep going!';
            }
        }
    }
    if (playerTable[playerTable.length - 1] !== gameTable[playerTable.length - 1]){  
            correct = false;
            for (let i = 0; i < playerTable.length; i++){
                if (playerTable[i] !== gameTable[i]){
                    correct = false;  
                    display.innerHTML ='Oops, try again!';
                    levels.innerHTML = "Level " + level;
                    playerTable.splice(level-1, playerTable.length);
                    break;
                } else {
                    correct = true;
                }
                console.log(correct); 
            }
        }; 
};