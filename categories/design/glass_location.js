const apiKey = "at_vJEmzD4YFvdGihKOnxkmfDJrabUWY";
const description = document.getElementById("description");
const translation = {
    "EN": "Glassmorphism is the latest user interface design principle in vogue. It is a subset of the design principle called Neumorphism or design that mimics the real object in the environment for a more objective basis. Taking this principle, glassmorphism actually incorporates glass effects into the look and feel of the interface.",
    "FR": "Le glassmorphism est le dernier principe de conception d'interface utilisateur en vogue. C'est un sous-ensemble du principe de conception appelé Neumorphisme ou conception qui imite l'objet réel de l'environnement pour une base plus objective. En reprenant ce principe, le glassmorphism incorpore en fait les effets de verre dans l'aspect et la sensation de l'interface.",
    "DE": "Glassmorphism ist das neueste Designprinzip für Benutzeroberflächen, das in Mode gekommen ist. Es ist eine Untermenge des Designprinzips, das Neumorphismus oder Design genannt wird, das das tatsächliche Objekt der Umgebung für eine objektivere Grundlage nachahmt. In Anlehnung an dieses Prinzip bezieht der Glassmorphismus tatsächlich Glaseffekte in das Aussehen und das Gefühl der Benutzeroberfläche ein."
}

fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        fetch(`https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=${apiKey}&ipAddress=${ip}`)
            .then(response => response.json())
            .then(data => {
                var location = data.location.country
                description.innerHTML = `You've been detected in ${location === "FR" || location === "DE" ? `${location} ! Here's the translation for your country ` : `${location} (no translation available)`} : ${location === "FR" || location === "DE" ? `${translation[location]}` : `${translation["EN"]}`}`;
        });
})