let myText = document.getElementById("my-text");
let total = document.getElementById("count-result");

myText.addEventListener("input", () => {
    let count = (myText.value).length;
    total.textContent = `Total characters : ${count}`;
});