const normalBot = document.getElementById("normal");
const smartBot = document.getElementById("smart");
const geniusBot = document.getElementById("genius");

normalBot.addEventListener('click', () => {
    window.location.href = "./src/html/normal.html"
});

smartBot.addEventListener('click', () => {
    window.location.href = "./src/html/smart.html"
});

geniusBot.addEventListener('click', () => {
    window.location.href = "./src/html/genius.html"
});