const links = document.querySelectorAll("a");
var confirmation;

links.forEach(link => {
  link.addEventListener("click", function(event) {

    if(this.href === "https://luciifer666.github.io/index.html") {
      confirmation = confirm(`Do you want to be redirected to the Home menu ?`);
    } else if(this.href === "https://luciifer666.github.io/categories/first/cubes.html") {
      confirmation = confirm("Do you want to go to the light cubes section ?");
    } else if(this.href === "https://luciifer666.github.io/categories/second/login.html") {
      confirmation = confirm("Do you want to go to the page of animated logins ?")
    } else {
      confirmation = confirm(`Do you really want to be redirected to ${this.text} ? (${this.href.replace("https://luciifer666.github.io/pages/", "")})`);
    }
    if (!confirmation) {
      event.preventDefault();
    }
  });
});