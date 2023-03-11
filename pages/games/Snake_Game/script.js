const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");
const controls_param = document.getElementById("commands");
//const zoomControls = document.getElementById("controls");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

//get high score from local storage

let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerHTML = `High Score : ${highScore}`;

const updateFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game over ! Press OK to re-play...");
    location.reload();
};

//change velocity value based on key press

const changeDirection = e => {
    if (e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    };
};

//change direction on each key click

controls.forEach(button => {
    button.addEventListener("click", () => {
        changeDirection({ key: button.dataset.key });
    });
});

function detectMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
};

function mobileChecker() {
    if(detectMobile()) {
        console.log("is mobile");
        controls_param.style.display = "block";
        
        for(let i = 0; i < controls.length; i++) {
            controls[i].style.width = "calc(96.6% / 4)"
        };
    } else {
        console.log("it's not mobile");
    };
};

const initGame = () => {
    if(gameOver) return handleGameOver();
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    
    //when snake eats food
    if(snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        snakeBody.push([foodY, foodX]); //add food to snake body array
        score++;
        highScore = score >= highScore ? score : highScore; //if score > high score => high score = score
        
        localStorage.setItem("high-score", highScore);
        scoreElement.innerHTML = `Score : ${score}`;
        highScoreElement.innerHTML = `High Score : ${highScore}`;
    };

    //update snake head
    snakeX += velocityX;
    snakeY += velocityY;

    //shifting forward values of elements in snake body by one

    for(let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    };

    snakeBody[0] = [snakeX, snakeY];

    //check snake body is out for wall or no

    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        return gameOver = true;
    }

    // Add div for each part of snake body

    for (let i = 0; i < snakeBody.length; i++) {
        html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        // Check snake head hit body or no
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }
    playBoard.innerHTML = html;
};

mobileChecker();
updateFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);