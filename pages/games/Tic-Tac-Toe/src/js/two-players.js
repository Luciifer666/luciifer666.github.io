const allBox = document.querySelectorAll(".box");
const resultContainer = document.getElementById("result");
const restartBtn = document.getElementById("restart");
const turn = document.getElementById('text');

const checkList = [];
let currentPlayer = "CROSS";
let winStatus = false;

turn.innerText = `C'est au tour de ${currentPlayer} pour commencer !`;

function areEqual(one, two) {
    if (one === two) return one;
    return false;
}

function checkEquality(currentPlayer, array) {
    for (const item of array) {
        const a = checkList[item[0]];
        const b = checkList[item[1]];
        if (areEqual(a, b) == currentPlayer) {
            return [item[0], item[1]];
        }
    }
    return false;
}

function blinkTheBox(val){
    
    if (val){
        for(const i of val){
            const box = document.querySelector(`[data-box-num="${i}"]`);
            box.classList.add('blink');
        }
        return true;
    }
    return false;
}

function isWin() {
    let val = false;
    if (checkList[0] == currentPlayer) {
        val = checkEquality(currentPlayer, [
            [1, 2],
            [3, 6],
            [4, 8],
        ]);
        if (val && blinkTheBox([0,...val])) return true;
    }

    if (checkList[8] == currentPlayer) {
        val = checkEquality(currentPlayer, [
            [2, 5],
            [6, 7],
        ]);
        if (val && blinkTheBox([8,...val])) return true;
    }

    if (checkList[4] == currentPlayer) {
        val = checkEquality(currentPlayer, [
            [1, 7],
            [3, 5],
            [2, 6],
        ]);
        if (val && blinkTheBox([4,...val])) return true;
    }

    return val;
}

function checkWin(len) {
    if (len >= 3 && isWin()) {
        winStatus = true;
        turn.style.display = "none";
        if (currentPlayer == "CROSS") {
            resultContainer.innerText = "X Won the Match.";
        } else {
            resultContainer.innerText = "O Won the Match.";
        }
    } else if (len == 8) {
        winStatus = true;
        resultContainer.innerText = "= Match Draw.";
    }
}

function boxClick(e, player, boxNum){
    checkList[boxNum] = player;
    e.target.classList.add(player.toLowerCase());
    currentPlayer = (player === 'CROSS') ? 'CROSS' : 'ZERO';

    //console.log(currentPlayer == 'CROSS' ? 'ZERO' : 'CROSS');
};


function handleBoxClick(e) {
    const len = checkList.filter(Boolean).length;
    const boxNum = parseInt(e.target.getAttribute("data-box-num"));

    turn.style.display = "block";

    if (!winStatus && !checkList[boxNum]) {
        if (len > 0 && currentPlayer == "CROSS") {
            boxClick(e,'ZERO',boxNum);
            turn.innerText = `C'est au tour de CROSS`;
            turn.style.color = "#222222";
        } else {
            boxClick(e,'CROSS',boxNum);
            turn.innerText = `C'est au tour de ZERO`;
            turn.style.color = "#3393ff";
        }

        checkWin(len);
    }
}

restartBtn.addEventListener('click',function(){
    allBox.forEach(item => {
        item.classList.remove('cross','zero','blink');
    });
    checkList.length = 0;
    currentPlayer = 'CROSS';
    turn.style.display = "block";
    turn.innerText = `C'est au tour de ${currentPlayer} pour recommencer une partie !`;
    turn.style.color = "#222222"
    resultContainer.innerText = '';
    winStatus = false;
});

allBox.forEach(item => {
    item.addEventListener('click',(e) => handleBoxClick(e));
});