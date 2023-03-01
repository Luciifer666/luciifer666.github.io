const btn = document.querySelector(".btn");
const front = document.querySelector(".front");
const btnYes = document.querySelector(".btn_yes");
const btnNo = document.querySelector(".btn_no");

front.addEventListener("click", function() {
    btn.classList.add("open")
});

btnYes.addEventListener("click", function() {
    btn.classList.remove("open")
});

btnNo.addEventListener("click", function() {
    btn.classList.remove("open")
});