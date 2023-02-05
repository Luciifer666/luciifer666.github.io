const links = document.querySelectorAll("a");
var confirmation;

links.forEach(link => {
  link.addEventListener("click", function(event) {

    if(this.href === "https://luciifer666.github.io/index.html") {
      confirmation = confirm(`Voulez-vous vous rediriger au menu Home ?`);
    } else {
      confirmation = confirm(`Voulez-vous vraiment vous rediriger vers ${this.text} ? (${this.href.replace("https://luciifer666.github.io/pages/", "")})`);
    }
    if (!confirmation) {
      event.preventDefault();
    }
  });
});