const aloneButton = document.getElementById("alone");
const multipleButton = document.getElementById("multiple");

aloneButton.addEventListener('click', () => {
    window.location.href = "select-bot.html"
});

multipleButton.addEventListener('click', () => {
    window.location.href = "./src/html/game.html"
});