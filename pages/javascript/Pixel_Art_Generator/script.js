let container = document.querySelector(".container");
let gridButton = document.querySelector(".submit-grid");
let clearGridButton = document.querySelector(".clear-grid");
let gridWidth = document.querySelector(".width-range");
let gridHeight = document.querySelector(".height-range");
let colorButton = document.querySelector(".color-input");
let eraseBtn = document.querySelector(".erase-btn");
let paintBtn = document.querySelector(".paint-btn");
let widthValue = document.querySelector(".width-value");
let heightValue = document.querySelector(".height-value");

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend"
    },
};

let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true
    } catch(e) {
        deviceType = "mouse";
        return false;
    };
};

isTouchDevice();

/*
https://github.com/AsmrProg-YT/100-days-of-javascript/blob/master/Day%20%231%20-%20Pixel%20Art%20Generator/index.js
*/