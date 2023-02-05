const links = document.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", function(event) {
    const confirmation = confirm(`Voulez-vous vraiment vous rediriger vers ${this.text} ? (${this.href.replace("http://127.0.0.1:3000/pages/", "")})`);
    if (!confirmation) {
      event.preventDefault();
    }
  });
});