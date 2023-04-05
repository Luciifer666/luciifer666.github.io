const scoreEl = document.getElementById("score");
const colorParts = document.querySelectorAll(".colors");
const containerEl = document.querySelector(".container");
const startBtn = document.querySelector("#start-btn");
const logsBtn = document.querySelector('#logs-btn');
const resultEl = document.querySelector("#score-result");
const wrapperEl = document.querySelector(".wrapper");
const logs = document.querySelector('#logs');

// High score item

const highScoreEl = document.querySelector('#high-score');

let highScore = localStorage.getItem('Simon_High-Score') || 0;
highScoreEl.innerHTML = `High Score : ${highScore}`;

//current and new colors object

const colorObj = {
    color1: { current: "#006400", new: "#00ff00" },
    color2: { current: "#800000", new: "#ff0000" },
    color3: { current: "#0000b8", new: "#0000ff" },
    color4: { current: "#808000", new: "#ffff00" },
};

//game variables

let randomColors = [];
let isPathGenerating = false;
let score = 0;
let clickCount = 0;
let showLogs = false;

logsBtn.style.opacity = "0";

//function to get a random color from colors object

const getRandomColor = (colorsObj) => {
    const colorKey = Object.keys(colorsObj);
    return colorKey[Math.floor(Math.random() * colorKey.length)];
};

//function to pause execution of game for given amount of time

const delay = async(time) => {
    return await new Promise((resolve) => setTimeout(resolve, time));
};

//function to generate a random path of colors

const generateRandomPath = async() => {
    randomColors.push(getRandomColor(colorObj));
    score = randomColors.length;
    isPathGenerating = true;
    await showPath(randomColors);
};

//function to show the path of colors to play

const showPath = async(colors) => {
    scoreEl.innerText = score;
    
    //loop through each color in the array
    for(let color of colors) {
        const currentColor = document.querySelector(`.${color}`);
        await delay(500);
        currentColor.style.backgroundColor = colorObj[color].new;
        await delay(600);
        currentColor.style.backgroundColor = colorObj[color].current;
        await delay(600)
    };

    //set flag to indicate the game is no longer generating path
    isPathGenerating = false;
};

//function to end the game and show final score

const endGame = () => {
    resultEl.innerHTML = `<span>Your score : </span> ${score}`;
    resultEl.classList.remove('hide');
    containerEl.classList.remove('hide');
    wrapperEl.classList.add('hide');
    startBtn.innerText = "Play again !";
    startBtn.classList.remove('hide');

    highScore = score >= highScore ? score : highScore;
    localStorage.setItem('Simon_High-Score', highScore);
    
    logsBtn.style.opacity = 1;
    
    logsBtn.addEventListener('click', () => {
        if(showLogs) {
            showLogs = false;
            logsBtn.innerText = "Show logs of the game";
            logs.style.opacity = 0;
        } else {
            showLogs = true;
            logsBtn.innerText = "Hide logs of the game";
            logs.style.opacity = 1;

            var list = [];

            for(let i = 0; i < randomColors.length; i++) {
                if(randomColors[i] === "color1") {
                    list.push("Green");
                    // console.log("G");
                } else if(randomColors[i] === "color2") {
                    list.push("Red");
                    // console.log("R");
                } else if(randomColors[i] === "color3") {
                    list.push("Blue");
                    // console.log("B");
                } else if(randomColors[i] === "color4") {
                    list.push("Yellow");
                    // console.log("Y");
                };
            };
            logs.innerText = list.join(', ');
        };
    });
};

//function to reset game after ending

const resetGame = () => {
    score = 0;
    clickCount = 0;
    randomColors = [];
    isPathGenerating = false;
    showLogs = false;
    highScoreEl.style.opacity = "0";
    wrapperEl.classList.remove('hide');
    containerEl.classList.add('hide');
    generateRandomPath();
};

//function to handle a color being clicked

const handleColorClick = async(e) => {
    if(isPathGenerating) {
        return false;
    };

    //if click is correct, update score and continue generating the path
    if(e.target.classList.contains(randomColors[clickCount])) {
        e.target.style.backgroundColor = colorObj[randomColors[clickCount]].new;
        await delay(500);
        e.target.style.backgroundColor = colorObj[randomColors[clickCount]].current;
        clickCount++;

        if(clickCount === score) {
            clickCount = 0;
            generateRandomPath();
        };

        //if the clicked color is incorrect, then end game
    } else {
        endGame();
    };
};

//event listeners

// startBtn.addEventListener('click', resetGame);
startBtn.addEventListener('click', () => {
    resetGame();

    if(highScore == 0) {
        highScoreEl.style.opacity = "0";
    } else {
        setTimeout(() => {
            highScoreEl.innerHTML = `High score : ${highScore}`;
            highScoreEl.style.opacity = "1";
        }, 2500); 
    };  
});
colorParts.forEach((color) => color.addEventListener('click', handleColorClick));