var error = document.getElementById('error');

function countCharacter() {
    var input = document.getElementById("password");
    var count = input.value.length;

    if(count < 6) {
        error.style.display = 'block'
    } else {
        error.style.display = 'none';
    };
};