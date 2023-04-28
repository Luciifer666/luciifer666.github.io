const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        console.log(this.innerHTML.toLowerCase());
        window.location.href = `./src/HTML/${this.innerHTML.toLowerCase()}.html`
    });
});