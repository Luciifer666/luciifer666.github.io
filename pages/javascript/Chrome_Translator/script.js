const selectTags = document.querySelectorAll('select');
var infoBtn = document.getElementById("infoBtn");
var modal = document.getElementById("infoModal");
var closeBtn = document.getElementsByClassName("close")[0];

selectTags.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected = id === 0 ? (country_code === "en" ? "selected" : "") : (country_code === "es" ? "selected" : "");

        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

document.getElementById('translateBtn').addEventListener('click', function () {
    const text = document.getElementById('inputText').value;
    const translateFrom = document.getElementById('translateFrom').value;
    const translateTo = document.getElementById('translateTo').value;
    translateText(text, translateFrom, translateTo);
});

function translateText(inputText, fromLang, toLang) {
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${fromLang}|${toLang}`;

    fetch(apiUrl).then(response => response.json()).then(data => {
        if (data.responseData) {
            const translatedText = data.responseData.translatedText;
            const formattedText = removeQuestionMarks(translatedText);
            document.getElementById('outputText').innerText = formattedText;
        } else {
            document.getElementById('outputText').innerText = "Error : Could Not Translate !";
        }
    }).catch(error => {
        console.error('Error:', error);
        document.getElementById('outputText').innerText = "Error : An error occurred while translating !";
    });
}

function removeQuestionMarks(text) {
    return text.replace(/^¿+|¿+$/g, '');
}

function speakText(text) {
    const speechSynthesis = window.speechSynthesis;
    const speechUtterance = new SpeechSynthesisUtterance(text);
    speechUtterance.lang = document.getElementById('translateTo').value;

    speechSynthesis.speak(speechUtterance);
}

document.getElementById('speakBtn').addEventListener('click', function () {
    const translatedText = document.getElementById('outputText').innerText;
    speakText(translatedText);
});


// Ouvrir la modale quand on clique sur le bouton
infoBtn.onclick = function() {
    modal.style.display = "block";
}

// Fermer la modale quand on clique sur la croix
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Fermer la modale si on clique en dehors de celle-ci
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('infoLink').addEventListener('click', function(event) {
    event.preventDefault();  // Empêche l'action par défaut du lien
    const link = document.createElement('a');
    link.href = './Chrome Translator.zip';  // Chemin vers ton fichier ZIP
    link.download = 'Chrome Translator Extension.zip';  // Nom du fichier lors du téléchargement
    link.click();  // Lance le téléchargement
});