const links = document.querySelectorAll("a");
var confirmation;

links.forEach(link => {
  link.addEventListener("click", function(event) {

    if(this.href === "http://127.0.0.1:3000/index.html") {
      confirmation = confirm(`Voulez-vous vous rediriger au menu Home ?`);
    } else {
      confirmation = confirm(`Voulez-vous vraiment vous rediriger vers ${this.text} ? (${this.href.replace("http://127.0.0.1:3000/pages/", "")})`);
    }
    if (!confirmation) {
      event.preventDefault();
    }
  });
});