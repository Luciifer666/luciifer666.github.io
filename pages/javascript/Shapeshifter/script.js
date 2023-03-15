const sound = new Audio("https://tuberculep.github.io/codepen-storage/cpc-random-button/quack.mp3");
var shapeshifter = document.querySelector(".shapeshifter");

shapeshifter.addEventListener('click', function() {
    this.classList.toggle('play');
    sound.play();

    setTimeout(() => {
        this.style.backgroundImage = "url(https://tuberculep.github.io/codepen-storage/cpc-random-button/duck.svg)";
        this.style.backgroundSize = "contain";
    }, 500);
    
    setTimeout(() => {
        window.location.href = "./quack/quack.html";
    }, 3000);
});