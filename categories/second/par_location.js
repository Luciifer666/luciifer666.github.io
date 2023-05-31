const apiKey = "at_vJEmzD4YFvdGihKOnxkmfDJrabUWY";
const description = document.getElementById("description");
const translation = {
    "EN": "Parallax refers to the apparent shift or difference in the position of an object when viewed from different perspectives. It is a phenomenon that occurs due to the displacement of the observer's viewpoint. In simpler terms, when you look at an object from different angles, it appears to change its position relative to other objects in the background.",
    "FR": "La parallaxe désigne le décalage ou la différence apparente de la position d'un objet lorsqu'il est vu de différents points de vue. Ce phénomène est dû au déplacement du point de vue de l'observateur. En termes plus simples, lorsque vous regardez un objet sous différents angles, il semble changer de position par rapport à d'autres objets à l'arrière-plan.",
    "DE": "Unter Parallaxe versteht man die scheinbare Verschiebung oder den Unterschied in der Position eines Objekts, wenn es aus verschiedenen Perspektiven betrachtet wird. Es handelt sich um ein Phänomen, das durch die Verschiebung des Standpunkts des Betrachters entsteht. Einfacher ausgedrückt: Wenn Sie ein Objekt aus verschiedenen Blickwinkeln betrachten, scheint es seine Position im Verhältnis zu anderen Objekten im Hintergrund zu verändern."
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