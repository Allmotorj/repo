//---------Constants------------------
let gameObject = {
  playerPat : [],
  simonPat : [],
  gameOver : false,
  gameStart: true,
  color : "",
  sounds : ["redSound", "blueSound", "yellowSound", "greenSound"],
  squares : ["red", "blue", "yellow", "green"], //<---------- this is just a list

}

// store game as an object
// game over variable
// game won variable


//--------apps state variables------------

let gameWon = false;


//in game object, method that will push one pattern into array at the time

//---------cached element references----------
const player = new Audio()
const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const greenButton = document.getElementById("green");
const yellowButton = document.getElementById("yellow");
const circleDiv = document.getElementById("circle")
const startButton = document.getElementById("start-id")
const levelText = document.getElementById("level-id")

//------------Event listeners-------------
//Id or class is the index 
//start button to initialize game
//make event listner for each button. red blue green, get listner to console log each

startButton.addEventListener('click', startGame)
circleDiv.addEventListener('click', handleChoice)

redButton.onclick = () => {
  redButton.style.backgroundColor = "aliceblue"
  // playSOunds
  setTimeout(() => {
    redButton.style.backgroundColor = "#ff0077"
  }, 100)
}

blueButton.onclick = () => {
  blueButton.style.backgroundColor = "aliceblue";
  // playSOunds
  setTimeout(() => {
    blueButton.style.backgroundColor = "#1a0be2"
  }, 100)
}

greenButton.onclick = () => {
  greenButton.style.backgroundColor = "aliceblue";
  // playSOunds
  setTimeout(() => {
    greenButton.style.backgroundColor = "#52c411"
  }, 100)
}

yellowButton.onclick = () => {
  yellowButton.style.backgroundColor = "aliceblue";
   // playSOunds
  setTimeout(() => {
    yellowButton.style.backgroundColor = "#f8ec08"
  }, 100)
}
   

//-----------Functions------------

//play audio
//sequence flash

function init(){
    gameObject.simonPat = []
    gameObject.gameOver = true
    startButton.style.visibility ="visible";
}


function render(){
      levelText.textContent = "Points: "+ gameObject.simonPat.length;
  if (gameObject.gameOver === false) {
      startButton.style.visibility ="hidden";
      generatePattern()
  } else {
      // init()
      // startButton.style.visibility ="visible";
  }
}


function startGame(){
  gameObject.gameOver = false
  gameObject.playerPat = []
  if (gameObject.gameOver === false) {
  render()
}}


function handleChoice (evnt) {
    console.log("handleChoice eventid "+evnt.target.id)
    gameObject.playerPat.push(evnt.target.id)
    console.log("handlechoice playerPat "+gameObject.playerPat)
    console.log("handlechoice simonPat "+gameObject.simonPat)
 if (gameObject.playerPat.length === gameObject.simonPat.length) {
    checkMoves()
    gameObject.playerPat = [];
    // generatePattern()
    render();
 } 
}


function generatePattern (){
    num = Math.floor(Math.random() * 4);
    gameObject.simonPat.push(gameObject.squares[num])
    console.log("genpattern simonPat "+gameObject.simonPat) 
}


function checkMoves() {
  for (let index = 0; index < gameObject.simonPat.length; index++) {
    if  (gameObject.playerPat[index] === gameObject.simonPat[index]){
      console.log("goodjob") 
      } else {
      alert("You Lose");
      init()
    }
  }
}


function animation () {
  gameObject.simonPat.forEach((colorId, id) => {
    console.log(colorId, id)
    // setTimeout(() =>{
        //   let elm = 
  })
    
};

animation()





//-------------fade in function--------------
function faded(id, time) {
  id.style.opacity = 0;

  let last = +new Date();
  let tick = function() {
    id.style.opacity = +id.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+id.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

let id = document.getElementById("circle");
faded(id, 2000); 





