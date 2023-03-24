const inputs = document.querySelectorAll("input");
const button = document.querySelector('button');
const resend = document.getElementById('resend');
const receiving = document.getElementById('receiving');
const text = document.getElementById('text');

inputs.forEach((input, index1) => {
    input.addEventListener('keyup', (e) => {
        const currentInput = input, 
              nextInput = input.nextElementSibling,
              prevInput = input.previousElementSibling;

        if(currentInput.value.length > 1) {
            currentInput.value = "";
            return;
        };

        if(nextInput && nextInput.hasAttribute('disabled') && currentInput.value !== "") {
            nextInput.removeAttribute('disabled');
            nextInput.focus();
        };

        if(e.key === "Backspace") {
            inputs.forEach((input, index2) => {
                if(index1 <= index2 && prevInput) {
                    input.setAttribute('disabled', true);
                    input.value = "";
                    prevInput.focus();
                    prevInput.value = "";
                };
            });
        };

        if(!inputs[3].disabled && inputs[3].value !== "") {
            button.classList.add('active');
            return;
        };

        button.classList.remove('active');
    });
});

resend.addEventListener('click', () => {

    alert(`A message has been sent to your phone number`);

    text.style.opacity = 0;
    setTimeout(() => {
        receiving.style.opacity = 1;
    }, 500);
    setTimeout(() => {
        receiving.style.opacity = 0;
    }, 3000);
    setTimeout(() => {
        text.style.opacity = 1;
    }, 3500);
});

window.addEventListener('load', () => {
    inputs[0].focus();
});