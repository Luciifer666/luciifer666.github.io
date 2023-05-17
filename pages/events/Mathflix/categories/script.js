var buttons = document.querySelectorAll("button");
var modal = document.getElementById("myModal");
var synopsis = document.getElementById("synopsis");
var closeBtn = document.getElementsByClassName("close")[0];
var toggle = document.getElementById('language-toggle');
var language = document.getElementById('language');
var title = document.querySelector('.title');

var lang = {
  "English": {
    "selection": "SELECT YOUR SERIE/FILM<br>IN THE ",
    "presentation": "The film / serie is :",
    "Revenge of Math": "After receiving death threats from his former rival and destroying everything he has. The only weapon our hero will use for revenge is math, which gives him impressive physical and mental strength.",
    "Math Hard": "During a party, the Nakatomi Plaza is attacked by three terrorists named Math, Emma and Tic, and they are by the way geniouses of mathematics. They will hide three bombs in the building. To disarm the first one, you have to solve Poincaré's conjecture. For the second one, you have to decipher a code. And for the last one, you have to break a program. However, the only person that can save everybody, named John MathClain, doesn't know anything about maths, as he enjoys Philosophy, Arts and History. Will he be able to save all the hostages ?",
    "Breaking Maths": "This is a story about a math teacher who found a way to make good money but he doesn’t know that this life will change his life forever...",
    "Father's Plan": "So Father's plan is a movie where a teen boy wants to be a professional fighter but he's very bad at maths, his father will told him to improve his maths skills because it will help him in mma. During the movie, the teen's gonna understand his father's advice.",
    "New Life": "Bryan is a man who has lived in poverty since childhood with parents who had little income, however he is a man who loves mathematics, his talent will allow him to participate and win a competition that contains a large sum of money in addition to obtaining a stable job to work in scientific research. After the victory of his life Bryan shares this money with his family.",
    "Mathematician's World": "After being bully 2 years Albert Mathstein decide to end his life, but God gives him a second chance in another world...",
    "The Luckiest": "After meeting the professor Brown, Martin a young man in debt decided to create a twisted theory with him to earn a lot of money and be able to pay off his loan. But the gang leader el sombrero, his lender tries to find out his theory and steal his money. Will Martin be able to hide his theory and keep his money ?",
    "JumanPI": "It's the story of four teenagers called Jake, Swan, Clara and Mike, who are imprisoned in a video game called JUMANPI. to get out, they must pass mathematical and physical tests. The tests will be hard and dangerous.",
    "Koh Sinus": "In this show of seven episodes, we follow the story of seven people lost on an island. To leave the island, they must solve maths mysteries and try to survive. Each episode is seen with the point of view of a character. This show, as intriging as funny, is made for laugh and relax. Each caracter has a different personality, which make this show funny and original. Good viewing...",
    "Mathman": "A math teacher who get stung by a compass gets superpowers which give him abilities, like throw math tools. He will meet some opponents like Histoman who can create a giant world globe. Histoman is the most hated antagonist. His allies are ELS and Physics teacher.",
    "The World of Math": "This is the story of a young boy who starts a trip to find his mother during his birthday...",
    "Find by the Maths": "The story begins in New-York city in a rich neighbourhood named Upper East Side. The two main characters are Stondy and Michael. Both are in a private school very expansive and if Michael is here it's due to a scholarship in mathematics. WHil Stondy is rich, Michael, unlike the other students, lives in a classic neighbourhood in Brooklynn. He lives with his parents and his brothers. As his schoolmates don't accept his difference, Michael is quite alone. To change that, he decides to design a trick to get all the answers of all the exams. He will start to get appreciate by his schoolmates, but soon problems will appear...",
    "Disappearance": "In order to find their friend and other missing person, five childhood friends must make a mathematical equation with which they can reconstruct a map, on which will appear the position of the missing persons. Eliotte, benjamin, Clarisse, Lana, Ella go on an adventure to find their friend and the missing people for that they will have to be endowed with intelligence to solve the equations that await them",
    "Stranger Maths": "A math teacher want to have super power . So he use a artefact calculator in the calss .hé have super power and the student ! But the power off student is very noob .For exemple in the second episode a guys if hé spawn a group of frog in the first number is a Bad event. The third is a another guy can transform in fly if he see a fractal so he want creat a WW3 .On the episode 4 a girl Can creat math tool so mant firm want to kidnap him . After a girl Can change a probability so she wants to give Monnet for homeless. At the end it have a battle between student and teacher. Students win, but the teacher is not really dead...",
    "Shrek (revisited version)": "So for this movie of Shrek, it will be the same story as the original movie but with somethings new like jokes and we aren’t going to do the fourth movies of the saga. We are only doing the first movie because we don’t have enough time to do the fourth movies.",
    "Ridiculous Maths": "Make satire of french politics doing math debates.",
    "My friend this genius": "Steve, an FBI secret agent has been looking for the biggest drug dealers in Texas for several months. To do this, he must solve real puzzles each time to find the slightest track. One day, he defends Tobias, a 15-year-old boy who turns out to be a math whiz and enigma, harassed by boys in his neighborhood. But, inadvertently, Steve drops his taser and Tobias goes looking for it to return it and thank him. But, he discovers his base as well as his secrets. Tobias offers Steve his help. At the beginning, this one refuses and wants to erase the memory, but accepts because he is desperate. It was the start of a long friendship...",
    "Maleficient calculators": "The story happens in 2069.Calculators have almost conquers the world. The protagonist is texas,a boy from...well, Texas. With a group of scientist, he will try to stop the calculators boss,Géant Casio, by resolving his equation to kill him. But there is aprice: the one that discovers the solution and tell it to G.C has to die with him. Will Texas find the equation and accept to die to save the world ?"
  },
  "French": {
    "selection": "SÉLECTIONNEZ VOTRE SÉRIE/FILM<br>DANS LA ",
    "presentation": "Le film / la série est :",
    "Revenge of Math": "Après avoir reçu des menaces de mort de son ancien rival et détruit tout ce qu'il possède, la seule arme de notre héros pour se venger, ce sont les mathématiques, qui lui donnent une force physique et mentale impressionnante.",
    "Math Hard": "Lors d'une fête, le Nakatomi Plaza est attaqué par trois terroristes nommés Math, Emma et Tic, qui sont d'ailleurs des génies des mathématiques. Ils vont cacher trois bombes dans le bâtiment. Pour désamorcer la première, vous devez résoudre la conjecture de Poincaré. Pour la deuxième, vous devez déchiffrer un code. Et pour la dernière, vous devez casser un programme. Cependant, la seule personne qui peut sauver tout le monde, John MathClain, ne connaît rien aux mathématiques, car il aime la philosophie, les arts et l'histoire. Pourra-t-il sauver tous les otages ?",
    "Breaking Maths": "C'est l'histoire d'un professeur de mathématiques qui a trouvé un moyen de gagner de l'argent, mais il ne sait pas que cette vie changera sa vie pour toujours...",
    "Father's Plan": "So Father's plan est un film dans lequel un adolescent veut devenir boxeur professionnel mais il est très mauvais en maths, son père lui dit d'améliorer ses compétences en maths car cela l'aidera dans le mma. Pendant le film, l'adolescent va comprendre le conseil de son père.",   
    "New Life": "Bryan est un homme qui a vécu dans la pauvreté depuis son enfance avec des parents qui avaient peu de revenus, cependant c'est un homme qui aime les mathématiques, son talent lui permettra de participer et de gagner un concours qui contient une grande somme d'argent en plus d'obtenir un emploi stable pour travailler dans la recherche scientifique. Après la victoire de sa vie, Bryan partage cet argent avec sa famille.",
    "Mathematician's World": "Après avoir été malmené pendant deux ans, Albert Mathstein décide de mettre fin à ses jours, mais Dieu lui donne une seconde chance dans un autre monde..",
    "The Luckiest": "Après avoir rencontré le professeur Brown, Martin, un jeune homme endetté, décide de créer avec lui une théorie tordue pour gagner beaucoup d'argent et pouvoir rembourser son prêt. Mais le chef de gang el sombrero, son prêteur, tente de découvrir sa théorie et de lui voler son argent. Martin parviendra-t-il à cacher sa théorie et à garder son argent ?",
    "JumanPI": "C'est l'histoire de quatre adolescents, Jake, Swan, Clara et Mike, qui sont emprisonnés dans un jeu vidéo appelé JUMANPI. Pour en sortir, ils doivent passer des tests mathématiques et physiques. Les épreuves seront difficiles et dangereuses.",
    "Koh Sinus": "Dans cette série de sept épisodes, nous suivons l'histoire de sept personnes perdues sur une île. Pour quitter l'île, ils doivent résoudre des énigmes mathématiques et tenter de survivre. Chaque épisode est vu du point de vue d'un personnage. Cette série, aussi intrigante qu'amusante, est faite pour rire et se détendre. Chaque personnage a une personnalité différente, ce qui rend cette série amusante et originale. Bon visionnage...",
    "Mathman": "Un professeur de mathématiques, piqué par un compas, acquiert des superpouvoirs qui lui permettent de lancer des outils mathématiques. Il rencontrera des adversaires comme Histoman qui peut créer un globe terrestre géant. Histoman est l'antagoniste le plus détesté. Ses alliés sont ELS et le professeur de physique.",
    "The World of Math": "C'est l'histoire d'un jeune garçon qui entreprend un voyage pour retrouver sa mère à l'occasion de son anniversaire...",
    "Find by the Maths": "L'histoire commence à New York, dans un quartier riche appelé Upper East Side. Les deux personnages principaux sont Stondy et Michael. Tous deux sont dans une école privée très expansive et si Michael est là, c'est grâce à une bourse d'études en mathématiques. Alors que Stondy est riche, Michael, contrairement aux autres élèves, vit dans un quartier classique de Brooklynn. Il vit avec ses parents et ses frères. Comme ses camarades de classe n'acceptent pas sa différence, Michael est bien seul. Pour changer cela, il décide de mettre au point une astuce pour obtenir toutes les réponses de tous les examens. Il commence à être apprécié par ses camarades de classe, mais des problèmes apparaissent rapidement....",
    "Disappearance": "Afin de retrouver leur ami et autre disparu, cinq amis d'enfance doivent réaliser une équation mathématique avec laquelle ils pourront reconstituer une carte, sur laquelle figurera la position des personnes disparues. Eliotte, Benjamin, Clarisse, Lana, Ella partent à l'aventure pour retrouver leur ami et les personnes disparues. Pour cela, ils devront être dotés d'intelligence pour résoudre les équations qui les attendent.",
    "Stranger Maths": "Un professeur de mathématiques veut avoir un super pouvoir. Il a donc utilisé une calculatrice artefact dans ses cours, ce qui lui a permis d'avoir un super pouvoir et d'attirer l'attention des élèves. Par exemple, dans le deuxième épisode, si un gars fait naître un groupe de grenouilles dans le premier nombre, c'est un mauvais événement. Le troisième épisode est un autre gars qui peut se transformer en mouche s'il voit une fractale et qu'il veut créer une WW3. Dans l'épisode 4, une fille peut créer un outil mathématique pour que les hommes veuillent la kidnapper. Ensuite, une fille peut se transformer en probabilité et veut donner de l'argent aux sans-abri. A la fin de l'épisode, il y a une bataille entre l'élève et le professeur. Les étudiants gagnent, mais le professeur n'est pas vraiment mort...<br><br><u>La traduction est mauvaise car le texte est flingué d'erreurs, mes plus sincères excuses<u>",
    "Shrek (revisited version)": "Donc pour ce film de Shrek, ce sera la même histoire que le film original mais avec quelque chose de nouveau comme des blagues et nous n'allons pas faire les quatrièmes films de la saga. Nous ne faisons que le premier film parce que nous n'avons pas assez de temps pour faire les quatre films.",
    "Ridiculous Maths": "Faire une satire de la politique française en faisant des débats mathématiques.",
    "My friend this genius": "Steve, un agent secret du FBI, recherche depuis plusieurs mois les plus gros trafiquants de drogue du Texas. Pour ce faire, il doit à chaque fois résoudre de véritables énigmes pour trouver la moindre piste. Un jour, il prend la défense de Tobias, un garçon de 15 ans qui s'avère être un as des maths et une énigme, harcelé par les garçons de son quartier. Mais, par inadvertance, Steve laisse tomber son taser et Tobias part à sa recherche pour le lui rendre et le remercier. Mais il découvre sa base et ses secrets. Tobias propose son aide à Steve. Au début, celui-ci refuse et veut effacer le souvenir, mais accepte car il est désespéré. C'est le début d'une longue amitié...",
    "Maleficient calculators": "L'histoire se passe en 2069 et les calculatrices ont presque conquis le monde. Le protagoniste est Texas, un garçon originaire du Texas. Avec un groupe de scientifiques, il va essayer d'arrêter le patron des calculatrices, Géant Casio, en résolvant son équation pour le tuer. Mais il y a un prix : celui qui découvrira la solution et la communiquera à G.C. devra mourir avec lui. Texas trouvera-t-il l'équation et acceptera-t-il de mourir pour sauver le monde ?"
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
    title.innerHTML = `${lang["French"]["selection"]} CATÉGORIE "${document.title.replace("Mathflix | ", "").toUpperCase()}"`;
  } else {
    language.textContent = 'English';
    title.innerHTML = `${lang["English"]["selection"]} ${document.title.replace("Mathflix | ", "").toUpperCase()} CATEGORY`;
  };
});