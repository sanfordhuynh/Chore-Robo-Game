let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start');

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

let currentlyPlaying = true;

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let isBot = door => {
  if(door.src === botDoorPath){
    return true;
  }else{
    return false;
  }
}

let isClicked = (door) => {
  if(door.src === closedDoorPath){
    return false;
  }else{
  return true;
  }
  
}

let playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
     gameOver('win');
  
  //if this is the robot door. It takes a door as a parameter
  }else if(isBot(door)){
    gameOver();
  }
}

let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);

  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor ===1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(chorDoor === 2){
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath; 
  }else{

  }
}

doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
  
}

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying){
    doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}


startButton.onclick = () => {
  //if you're not currently playing, then start round
  if(!currentlyPlaying){
    startRound();  
  }
}


let startRound = () =>{
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;

  randomChoreDoorGenerator();
}

let gameOver = (status) => {
  if (status === 'win'){
    startButton.innerHTML = 'You win! Play next round?';
  }else{
    startButton.innerHTML = 'Game over! Play again?';
  }

  currentlyPlaying = false;
}


//randomChoreDoorGenerator();
startRound();
