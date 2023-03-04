const name_city = document.getElementById("city");
const apiKey = "at_vJEmzD4YFvdGihKOnxkmfDJrabUWY";

fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        fetch(`https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=${apiKey}&ipAddress=${ip}`)
            .then(response => response.json())
            .then(data => {
                const city = data.location.city

                name_city.innerHTML = `${city}`
        });
})