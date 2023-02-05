var links = document.querySelectorAll("li a");

for(var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
        const confirmation = confirm(`Voulez-vous être redirigé vers ${this.text} ?`);

        if(!confirmation) event.preventDefault();
    });
};