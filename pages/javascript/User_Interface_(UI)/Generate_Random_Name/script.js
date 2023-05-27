const button = document.getElementById('button');

button.addEventListener('click', () => {
    const url = `https://randommer.io/api/Name?nameType=fullname&quantity=1`;
    const apiKey = '5574d70f047344998d6524b9613297ca'; // api key

    const headers = {
        'X-Api-Key': apiKey
    };

    fetch(url, { headers })
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error(`Erreur lors de la requête API. Code de statut : ${response.status}`);
        };
    }).then(data => {
        const randomName = data;
        console.log(`Random name : ${randomName}`);
        alert(`You have just drawn a name : ${randomName}`);
    })
    .catch(error => {
        console.error(error);
    });
});