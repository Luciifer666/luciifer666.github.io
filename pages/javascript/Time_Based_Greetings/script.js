let container = document.querySelector(".container");
let timeNow = new Date().getHours();
let dateNow = `${new Date()}`;

let greetings = timeNow >= 5 && timeNow < 12 ? "Good Morning"
                : timeNow >= 12 && timeNow < 18 ? "Good Afternoon"
                : "Good Evening"

if(dateNow.includes("Dec 25")) {
    container.innerHTML = `<h1>Merry Christmas</h1>`;
} else {
    container.innerHTML = `<h1>${greetings}</h1>`;
}