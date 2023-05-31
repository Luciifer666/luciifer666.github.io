const links = document.querySelectorAll("a");
const toggle = document.getElementById('theme-toggle');
var confirmation;
// let background = localStorage.getItem('background_page');

// // values
// const title = document.querySelector('h1');
// const paragraph = document.querySelector('p');
// const buttons = document.querySelector('a');

links.forEach(link => {
  link.addEventListener("click", function(event) {

    if(this.href === "https://luciifer666.github.io/index.html") {
      confirmation = confirm(`Do you want to be redirected to the Home menu ?`);
    } else if(this.href === "https://luciifer666.github.io/categories/first/cubes.html") {
      confirmation = confirm("Do you want to go on the light cubes page ?");
    } else if(this.href === "https://luciifer666.github.io/categories/second/login.html") {
      confirmation = confirm("Do you want to go on the Animated Login page ?");
    } else if(this.href === "https://luciifer666.github.io/categories/second/glassmorphism.html") {
      alert("Glassmorphism is the latest user interface design principle (glass effects into the look)")
      confirmation = confirm("Do you want to go on the Glassmorphism page ?");
    } else if(this.href === "https://luciifer666.github.io/categories/second/parallax.html") {
      alert("Parallax refers to the apparent shift or difference in the position of an object when viewed from different perspectives")
      confirmation = confirm("Do you want to go on the Parallax page ?")
    } else if(this.href === "https://luciifer666.github.io/categories/fourth/user_interface.html") {
      confirmation = confirm("Do you want to go on the UI page ?");
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

/* 
//Background

if(background) {
  background = background;
} else {
  localStorage.setItem('background_page', getComputedStyle(document.body).backgroundColor);
  background = getComputedStyle(document.body).backgroundColor;
};

if(background === "rgb(33, 33, 33)") {
  document.body.style.backgroundColor = background;
} else {
  document.body.style.backgroundColor = 'rgb(246, 246, 246)';
  localStorage.setItem('background_page', "rgb(246, 246, 246)");
};

//default values

if(background === "rgb(33, 33, 33)") {
  title.style.color = "#bbbbbb";
} else {
  title.style.color = "#444444";
};
*/

// document.addEventListener('DOMContentLoaded', function() {
//   if(background) {
//     localStorage.removeItem('background_page');
//     console.log('Page chargée ! Background supprimé');
//     localStorage.setItem('background_page', 'rgb(246, 246, 246)');
//   } else {
//     console.log('Page chargée ! Aucun précédent background sauvegardé.');
//     localStorage.setItem('background_page', 'rgb(246, 246, 246)');
//   };
// });

// toggle.addEventListener('click', function() {
//   var body = document.body;

//   if(background === 'rgb(246, 246, 246)') {
//     background = 'rgb(33, 33, 33)';
//     body.style.backgroundColor = 'rgb(33, 33, 33)';
//     localStorage.setItem('background_page', 'rgb(33, 33, 33)');

//     title.style.color = "#bbbbbb";
//     paragraph.style.color = '#cccccc';
//     buttons.style.backgroundColor = '#123456'
//   } else {
//     background = 'rgb(246, 246, 246)';
//     body.style.backgroundColor = 'rgb(246, 246, 246)';
//     localStorage.setItem('background_page', 'rgb(246, 246, 246)');

//     title.style.color = "#444444";
//     paragraph.style.color = '#333'; // #333333
//   }
// });

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