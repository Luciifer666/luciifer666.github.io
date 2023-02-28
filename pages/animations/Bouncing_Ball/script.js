const ball = document.getElementById("ball");
const colorPicker = document.getElementById("color-picker");
let x = Math.random() * (window.innerWidth - 50);
let y = Math.random() * (window.innerHeight - 50);
let dx = 2;
let dy = 2;
let gravity = 0.5;

colorPicker.addEventListener("change", (event) => {
  ball.style.backgroundColor = event.target.value;
});

function moveBall() {
  x += dx;
  y += dy;
  dy += gravity;

  ball.style.left = x + "px";
  ball.style.top = y + "px";

  if (x + 50 >= window.innerWidth || x <= 0) {
    dx = -dx;
  }

  if (y + 50 >= window.innerHeight || y <= 0) {
    dy = -dy * 0.8;
    y = window.innerHeight - 50;
  }

  requestAnimationFrame(moveBall);
}

moveBall();