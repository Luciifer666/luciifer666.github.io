let menuBtn = document.querySelectorAll(".icon");

for(let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener('click', (e) => {
        e.target.classList.toggle('active');
    });
};