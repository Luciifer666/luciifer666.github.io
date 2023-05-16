var buttons = document.querySelectorAll("button");
var modal = document.getElementById("myModal");
var synopsis = document.getElementById("synopsis");
var closeBtn = document.getElementsByClassName("close")[0];
var toggle = document.getElementById('language-toggle');
var language = document.getElementById('language');
var title = document.querySelector('.title');

var lang = {
  "English": {
    "selection": "SELECT YOUR SERIE/FILM<br>IN THE ACTION CATEGORY !",
    "presentation": "The film / serie is :",
    "Revenge of Math": "After receiving death threats from his former rival and destroying everything he has. The only weapon our hero will use for revenge is math, which gives him impressive physical and mental strength.",
    "Math Hard": "During a party, the Nakatomi Plaza is attacked by three terrorists named Math, Emma and Tic, and they are by the way geniouses of mathematics. They will hide three bombs in the building. To disarm the first one, you have to solve Poincaré's conjecture. For the second one, you have to decipher a code. And for the last one, you have to break a program. However, the only person that can save everybody, named John MathClain, doesn't know anything about maths, as he enjoys Philosophy, Arts and History. Will he be able to save all the hostages ?",
    "Breaking Maths": "This is a story about a math teacher who found a way to make good money but he doesn’t know that this life will change his life forever...",
    "Father's Plan": "So Father's plan is a movie where a teen boy wants to be a professional fighter but he's very bad at maths, his father will told him to improve his maths skills because it will help him in mma. During the movie, the teen's gonna understand his father's advice."   
  },
  "French": {
    "selection": "SÉLECTIONNEZ VOTRE SÉRIE/FILM<br>DANS LA CATÉGORIE ACTION !",
    "presentation": "Le film / la série est :",
    "Revenge of Math": "Après avoir reçu des menaces de mort de son ancien rival et détruit tout ce qu'il possède, la seule arme de notre héros pour se venger, ce sont les mathématiques, qui lui donnent une force physique et mentale impressionnante.",
    "Math Hard": "Lors d'une fête, le Nakatomi Plaza est attaqué par trois terroristes nommés Math, Emma et Tic, qui sont d'ailleurs des génies des mathématiques. Ils vont cacher trois bombes dans le bâtiment. Pour désamorcer la première, vous devez résoudre la conjecture de Poincaré. Pour la deuxième, vous devez déchiffrer un code. Et pour la dernière, vous devez casser un programme. Cependant, la seule personne qui peut sauver tout le monde, John MathClain, ne connaît rien aux mathématiques, car il aime la philosophie, les arts et l'histoire. Pourra-t-il sauver tous les otages ?",
    "Breaking Maths": "C'est l'histoire d'un professeur de mathématiques qui a trouvé un moyen de gagner de l'argent, mais il ne sait pas que cette vie changera sa vie pour toujours...",
    "Father's Plan": "So Father's plan est un film dans lequel un adolescent veut devenir boxeur professionnel mais il est très mauvais en maths, son père lui dit d'améliorer ses compétences en maths car cela l'aidera dans le mma. Pendant le film, l'adolescent va comprendre le conseil de son père."   
  }
}

buttons.forEach(function(button) {
  button.onclick = function() {
    content = button.textContent;
    synopsis.innerHTML = `<span class="movie">${lang[language.textContent]["presentation"]} <span class="titleMovie">${content}</span></span> <br><br><br><br>${lang[language.textContent][content]}`
    modal.style.display = "block";
  };
});

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

toggle.addEventListener('change', function() {
  if(this.checked) {
    language.textContent = 'French';
    title.innerHTML = lang["French"]["selection"];
  } else {
    language.textContent = 'English';
    title.innerHTML = lang["English"]["selection"];
  };
});