var links = document.querySelectorAll("li a");

for(var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
        const confirmation = confirm(`Do you want to be redirected to ${this.text} ?`);

        if(!confirmation) event.preventDefault();
    });
};