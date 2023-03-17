let btn = document.getElementById('btn');
let text = document.getElementById('text');

function changeColor(color) {
    document.body.style.background = color;
    btn.style.background = color;
    text.style.borderColor = color;

    //mark as active selected color

    document.querySelectorAll('span').forEach(function(item) {
        item.classList.remove('active');
    });
    event.target.classList.add('active');
};