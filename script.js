const apiKey = "0aa37794905e41af83690306251312";

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "<p>Please enter a city</p>";
        return;
    }

    result.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        );

        const data = await response.json();

        result.innerHTML = `
            <h3>${data.location.name}, ${data.location.country}</h3>
            <p>🌡 ${data.current.temp_c} °C</p>
            <p>☁ ${data.current.condition.text}</p>
            <p>💧 Humidity: ${data.current.humidity}%</p>
        `;
    } catch (error) {
        result.innerHTML = "<p>City not found</p>";
    }
}
