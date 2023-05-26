const cards = document.querySelectorAll('svg');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const className = card.getAttribute('class');

        // console.log(className);

        if(className == "instagram") {
            // console.log("Instagram website");
            alert("You will be redirected on the Instagram of the creator ! :-)");
            location.href = "https://www.instagram.com/sushis.boy/";

        } else if(className == "twitter") {
            // console.log("Twitter website");
            alert("You will be redirected on the Twitter of the creator ! :-)");
            location.href = "https://twitter.com/Luciifer_0666";

        } else if(className == "dribble") {
            // console.log("Dribble website");
            alert("You will be redirected on the Dribble website ! :-)");
            location.href = "https://dribbble.com";

        } else if(className == "codepen") {
            // console.log("Codepen website");
            alert("You will be redirected on the CodePen website ! :-)");
            location.href = "https://codepen.io";

        } else if(className == "uiverse") {
            // console.log("Uiverse website");
            alert("You will be redirected on the UIverse website ! :-)");
            location.href = "https://uiverse.io";

        } else if(className == "discord") {
            // console.log("Discord website");
            alert("Here is the discord of the creator : :-)");
            alert("Ay#9317")
            
        } else if(className == "github") {
            // console.log("Github website");
            alert("You will be redirected on the GitHub of the creator ! :-)");
            location.href = "https://github.com/Luciifer666";

        } else if(className == "telegram") {
            // console.log("Telegram website");
            alert("You will be redirected on the Telegram website ! :-)");
            location.href = "https://web.telegram.org";

        } else if(className == "reddit") {
            // console.log("Reddit website");
            alert("You will be redirected on the Reddit website ! :-)");
            location.href = "https://www.reddit.com";
        }
    });
});