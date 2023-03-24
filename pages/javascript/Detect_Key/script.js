let result = document.getElementById('result');

window.addEventListener('keydown', (e) => {
    result.innerHTML = `The key pressed is <span>${e.key}</span><span>Key Code : ${e.keyCode}</span>`
});