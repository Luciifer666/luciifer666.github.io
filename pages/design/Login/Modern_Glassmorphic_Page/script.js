// Parallax effect
document.addEventListener('mousemove', parallax);

function parallax(event) {
    document.querySelectorAll('.element')?.forEach(element => {
        const position = element.getAttribute('data-parallax-value');
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        element.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
};

// Submit form

document.querySelector('form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('input[name=email]')?.value;
    const password = document.querySelector('input[name=password]')?.value;

    if(email.length == 0 || password.length == 0) {
        return alert("In order to create your account, we need an email address and a valid password.");
    };

    console.log(`YOUR DATA\n
                Email : ${email},
                Password : ${password}
                `);
    alert("You created your account !");
});