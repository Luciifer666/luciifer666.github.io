const links = document.querySelectorAll("a");
var confirmation;

links.forEach(link => {
  link.addEventListener("click", function(event) {

    if(this.href === "https://luciifer666.github.io/index.html") {
      confirmation = confirm(`Do you want to be redirected to the Home menu ?`);
    } else if(this.href === "https://luciifer666.github.io/categories/first/cubes.html") {
      confirmation = confirm("Do you want to go to the light cubes section ?");
    } else if(this.href === "https://luciifer666.github.io/categories/second/login.html") {
      confirmation = confirm("Do you want to go to the page of animated logins ?");
    } else if(this.href === "https://luciifer666.github.io/categories/second/glassmorphism.html") {
      alert("Glassmorphism is Glassmorphism is the latest user interface design principle (glass effects into the look)")
      confirmation = confirm("Do you want to go to the page of the Glassmorphism ?");
    } else if(this.href === "https://luciifer666.github.io/categories/fourth/user_interface.html") {
      confirmation = confirm("Do you want to go to the page of the UI ?");
    } else if(this.href.startsWith("https://luciifer666.github.io/pages/events")) {

    // if(detectMobile()) {
    //   alert("the events you will see only have a PC version: you are a mobile user, we strongly advise you to switch your browser to PC format via its tab settings.");      
    // };
      confirmation = confirm("Would you like to go to access to the page ?");
    } else {
      confirmation = confirm(`Do you really want to be redirected to ${this.text} ? (${this.href.replace("https://luciifer666.github.io/pages/", "")})`);
    }
    if (!confirmation) {
      event.preventDefault();
    }
  });
});

// function detectMobile() {
//   const toMatch = [
//     /Android/i,
//     /webOS/i,
//     /iPhone/i,
//     /iPad/i,
//     /iPod/i,
//     /BlackBerry/i,
//     /Windows Phone/i
//   ];

//   return toMatch.some((toMatchItem) => {
//     return navigator.userAgent.match(toMatchItem);
//   });
// };