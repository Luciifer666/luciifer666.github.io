let operators = ["+", "-", "*"];
const startBtn = document.getElementById("start-btn");
const question = document.getElementById("question");
const controls = document.querySelector(".controls-container");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.getElementById("error-msg");
let answerValue;
let operatorQuestion;

//random value generator
const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const questionGenerator = () => {
  //two random values between 1 and 20
  let [num1, num2] = [randomValue(1, 20), randomValue(1, 20)];

  //getting random operator
  let randomOperator = operators[Math.floor(Math.random() * operators.length)];

  if (randomOperator == "-" && num2 > num1) {
    [num1, num2] = [num2, num1];
  }

  //solve equation
  let solution = eval(`${num1}${randomOperator}${num2}`);

  //placing the input at random position
  //(1 for num1, 2 for num2, 3 for operator, anything else (4) for solution)
  let randomVar = randomValue(1, 5);

  if (randomVar == 1) {
    answerValue = num1;
    question.innerHTML = `<input type="number" id="inputValue" placeholder="?"\> ${randomOperator} ${num2} = ${solution}`;
  } else if (randomVar == 2) {
    answerValue = num2;
    question.innerHTML = `${num1} ${randomOperator}<input type="number" id="inputValue" placeholder="?"\> = ${solution}`;
  } else if (randomVar == 3) {
    answerValue = randomOperator;
    operatorQuestion = true;
    question.innerHTML = `${num1} <input type="text" id="inputValue" placeholder="?"\> ${num2} = ${solution}`;
  } else {
    answerValue = solution;
    question.innerHTML = `${num1} ${randomOperator} ${num2} = <input type="number" id="inputValue" placeholder="?"\>`;
  }

  //user input check
  submitBtn.addEventListener("click", () => {
    errorMessage.classList.add("hide");
    let userInput = document.getElementById("inputValue").value;

    if (userInput) { //If user input is not empty
      if (userInput == answerValue) { //If the user guessed correct answer
        stopGame(`Good game ! <span>Correct</span> answer`);
      } else if (operatorQuestion && !operators.includes(userInput)) { //If user inputs operator other than +,-,*
        errorMessage.classList.remove("hide");
        errorMessage.innerHTML = `Please enter a valid operator : ${list(operators)}`;
      } else { //If user guessed wrong answer
        stopGame(`Oh no ! <span>Wrong</span> answer`);
      }
    } else { //If user input is empty
      errorMessage.classList.remove("hide");
      errorMessage.innerHTML = "Input cannot be Empty";
    }
  });
};

//Start the game
startBtn.addEventListener("click", () => {
  operatorQuestion = false;
  answerValue = "";
  errorMessage.innerHTML = "";
  errorMessage.classList.add("hide");
  //Controls and buttons visibility
  controls.classList.add("hide");
  startBtn.classList.add("hide");
  questionGenerator();
});

//Stop the game
const stopGame = (resultText) => {
  result.innerHTML = resultText;
  startBtn.innerText = "Restart";
  controls.classList.remove("hide");
  startBtn.classList.remove("hide");
};

function list(arr, conj = "and") {
    const len = arr.length;
    return `${arr.slice(0, -1).join(', ')}${len > 1 ? `${len > 2 ? ',' : ''} ${conj} ` : ''}${arr.slice(-1)}`;
}