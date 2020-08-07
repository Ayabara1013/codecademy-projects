const doorImage1 = document.querySelector("#door1");
const doorImage2 = document.querySelector("#door2");
const doorImage3 = document.querySelector("#door3");
const startButton = document.getElementById("start");


let doorFrame = document.querySelector(".door-frame");

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let currentlyPlaying = true;

// door generator
let openDoor1;
let openDoor2;
let openDoor3;

const randomChoreDoorGenerator = () =>
{
    /* openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath; */

    let choreDoor = Math.floor(Math.random() * numClosedDoors);

    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor1 = spaceDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
    } else if (choreDoor === 2) {
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;
    }
}

// door clicks
door1.onclick = () =>
{
    if (currentlyPlaying && !isClicked(doorImage1)) {
        door1.src = openDoor1;
        playDoor(doorImage1);
    }
}
door2.onclick = () =>
{
    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

door3.onclick = () =>
{
    if (currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

// start button
startButton.onclick = () =>
{
    startRound();
}



const startRound = () => {
    /* doorimage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath; */

    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = "G00d luck!";

    randomChoreDoorGenerator();
}



// functions
function gameOver(status) {
    if (status === "win") {
        startButton.innerHTML = "You win! Play again?";
        // startButton.style.display.width = 200px;
    }
    else {
        startButton.innerHTML = "Game over! Play again?";
        // startButton.style.display.width = 200px;
    }
    currentlyPlaying = false;
}

function isBot(door) {
    if (door.src === botDoorPath) {
        gameOver();
    } else {
        return false;
    }
}

function isClicked(door) {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

function playDoor(door) {
    numClosedDoors--;
    startButton.innerHTML = numClosedDoors;

    if (numClosedDoors === 0) {
        gameOver("win");
    }
    else if (isBot(door)) {
        gameOver();
    }
}

startButton.innerHTML = numClosedDoors;

// randomChoreDoorGenerator();
startRound();