const allBox = document.querySelectorAll(".box");
const resultContainer = document.getElementById("result");
const restartBtn = document.getElementById("restart");
const turn = document.getElementById('text');

const checkList = [];
const BOX_NUMBERS = [0,1,2,3,4,5,6,7,8];
const BOX_MID_NUMBERS = [1, 3, 5, 7];
let userWinList = [];
let botWinList = [];
let currentPlayer = "CROSS";
let winStatus = false;

turn.style.display = "block";
turn.innerText = `C'est à votre tour !`;

function areEqual(one, two) {
    if (one === two) return one;
    return false;
}

function checkEquality(currentPlayer, array, list) {
    for (const item of array) {
        const a = list[item[0]];
        const b = list[item[1]];
        if (areEqual(a, b) == currentPlayer) {
            return [item[0], item[1]];
        }
    }
    return false;
}

function blinkTheBox(val, dontBlink=false) {
    if(dontBlink) return true;
    if (val) {
        for (const i of val) {
            const box = document.querySelector(`[data-box-num="${i}"]`);
            box.classList.add("blink");
        }
        return true;
    }
    return false;
}

function isWin(player = currentPlayer, list = checkList, dontBlink = false) {
    let val = false;
    if (list[0] == player) {
        val = checkEquality(player, [
            [1, 2],
            [3, 6],
            [4, 8],
        ],list);
        if (val && blinkTheBox([0, ...val], dontBlink)) return true;
    }

    if (list[8] == player) {
        val = checkEquality(player, [
            [2, 5],
            [6, 7],
        ],list);
        if (val && blinkTheBox([8, ...val], dontBlink)) return true;
    }

    if (list[4] == player) {
        val = checkEquality(player, [
            [1, 7],
            [3, 5],
            [2, 6],
        ],list);
        if (val && blinkTheBox([4, ...val], dontBlink)) return true;
    }

    return val;
}

function checkWin(len) {
    turn.style.display = "none";
    if (len >= 3 && isWin()) {
        winStatus = true;
        if (currentPlayer == "CROSS") {
            resultContainer.innerText = "X Won the Match.";
        } else {
            resultContainer.innerText = "O Won the Match.";
        }
    } else if (len == 8) {
        winStatus = true;
        resultContainer.innerText = "= Match Draw.";
    }
    return winStatus;
}

function captureCenterOrCorner(){
    if(!checkList[4]){
        return 4;
    }
    else if(!checkList[2]){
        return 2;
    }
    else if(!checkList[6]){
        return 6;
    }
    else if(!checkList[8]){
        return 8;
    }
    return false;
}

function getBoxNumForBot(mainListLen) {
    let xWin = false;
    let dummyList = [];
    let dummyListLen;
    let dummyBoxNumbers = [];

    if (mainListLen === 1) {
        if (!checkList[4]) {
            return 4;
        } else if (!checkList[2]) {
            return 2;
        } else {
            return 8;
        }
    } else if (mainListLen === 3) {
        if (
            (checkList[0] && checkList[8] && checkList[0] == checkList[8]) ||
            (checkList[2] && checkList[6] && checkList[2] == checkList[6])
        ) {
            return BOX_MID_NUMBERS[Math.floor(Math.random() * 3)];
        }
    }
    

    dummyList = [...checkList];
    dummyListLen = dummyList.filter(Boolean).length;
    dummyBoxNumbers = [...BOX_NUMBERS]

    while(dummyListLen < 9 && dummyBoxNumbers.length){
        botWinList = []
        botWinList = [...checkList]
        let randNum = Math.floor(Math.random() * dummyBoxNumbers.length);
        let botNum = dummyBoxNumbers[randNum];
        if(!botWinList[botNum]){
            dummyList[botNum] = 'ZERO';
            botWinList[botNum] = 'ZERO';
            if(isWin('ZERO',botWinList,true)){
                return botNum;
            }
        }
        dummyBoxNumbers.splice(randNum,1);
    }// while

    dummyList = [];
    dummyList = [...checkList];
    dummyListLen = dummyList.filter(Boolean).length;
    dummyBoxNumbers = []
    dummyBoxNumbers = [...BOX_NUMBERS];

    while(dummyListLen < 9 && dummyBoxNumbers.length){
        userWinList = []
        userWinList = [...checkList]
        let randNum = Math.floor(Math.random() * dummyBoxNumbers.length);
        let botNum = dummyBoxNumbers[randNum];
        if(!userWinList[botNum]){
            dummyList[botNum] = 'CROSS';
            userWinList[botNum] = 'CROSS';
            if(isWin('CROSS',userWinList,true)){
                xWin = botNum;
                break;
            }
        }
        dummyBoxNumbers.splice(randNum, 1);

    }

    if(xWin === false && mainListLen === 3 && checkList[4] == 'ZERO'){
        if(!checkList[3] && !checkList[5]){
            return 3;
        }
        else if(!checkList[1]){
            return 1;
        }
        else if(!checkList[7]){
            return 7;
        }
    }
    return xWin;
} // getBoxNumForBot

function boxClick(targetBox, player, boxNum) {
    checkList[boxNum] = player;
    targetBox.classList.add(player.toLowerCase());
}

function handleBoxClick(e) {
    let len = checkList.filter(Boolean).length;
    const boxNum = parseInt(e.target.getAttribute("data-box-num"));
    let boxNumForBot;
    let msg = "Le bot est en cours de réflexion";

    if (!winStatus && !checkList[boxNum]) {
        currentPlayer = "CROSS";
        boxClick(e.target, "CROSS", boxNum);

        if (checkWin(len) === false) {
            len = checkList.filter(Boolean).length;
            currentPlayer = "ZERO";
            boxNumForBot = getBoxNumForBot(len);

            if(boxNumForBot !== false){
                turn.style.display = "block";
                turn.innerText = msg;
                const intervalID = setInterval(() => {
                    msg += ".";
                    turn.innerHTML = msg;
                }, 1000);
                setTimeout(() => {
                    clearInterval(intervalID);
                    boxClick(allBox[boxNumForBot],'ZERO',boxNumForBot);
                    checkWin(len);
                }, 4000);
            }
            else{
                boxNumForBot = captureCenterOrCorner();
                if(boxNumForBot){
                    turn.style.display = "block";
                    turn.innerText = msg;
                    const intervalID = setInterval(() => {
                        msg += ".";
                        turn.innerHTML = msg;
                    }, 1000);
                    setTimeout(() => {
                        clearInterval(intervalID);
                        boxClick(allBox[boxNumForBot],'ZERO',boxNumForBot);
                        checkWin(len);
                    }, 4000);
                }
                else{
                    while (len < 9) {
                        boxNumForBot = Math.floor(Math.random() * 9);
                        if (!checkList[boxNumForBot]) {
                            turn.style.display = "block";
                            turn.innerText = msg;
                            const intervalID = setInterval(() => {
                                msg += ".";
                                turn.innerHTML = msg;
                            }, 1000);
                            setTimeout(() => {
                                clearInterval(intervalID);
                                boxClick(allBox[boxNumForBot],'ZERO',boxNumForBot);
                                checkWin(len);
                            }, 4000);
                            break;
                        }
                    } // while
                }
            }
        } // checkWin
    }
}

restartBtn.addEventListener("click", function () {
    allBox.forEach((item) => {
        item.classList.remove("cross", "zero", "blink");
    });
    checkList.length = 0;
    currentPlayer = "CROSS";
    turn.style.display = "block";
    turn.innerText = `C'est à votre tour pour recommencer une partie !`;
    resultContainer.innerText = "";
    winStatus = false;
});

allBox.forEach((item) => {
    item.addEventListener("click", (e) => handleBoxClick(e));
});