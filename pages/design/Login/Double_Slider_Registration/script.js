const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");
const passwordForgotten = document.getElementById("password-forgotten");
const logged = document.getElementById("log-btn");
const registered = document.getElementById("reg-btn");

registerButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

loginButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

passwordForgotten.addEventListener('click', () => {
    alert("It seems like you forgot your password. Once upon a time, I forgot my password too. Fortunately, I found it.. not you don't as I can see.")
});

logged.addEventListener('click', () => {
    alert("You've been logged, welcome back !");
    location.reload();
});

registered.addEventListener('click', () => {
    alert("You just created your account !");
    location.reload();
});