function displayAll() {
    // JSON data
    const text = '{ "employees" : [' +
        '{ "firstName":"John" , "lastName":"Doe" },' +
        '{ "firstName":"Anna" , "lastName":"Smith" },' +
        '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    // Parse the JSON text into a JavaScript object
    const data = JSON.parse(text);

    // Get the div element to display the output
    const jsonDataDiv = document.getElementById("jsondata");

    // Clear any previous content
    jsonDataDiv.innerHTML = "";

    // Use a for-loop to iterate through the employees and display all data
    for (let i = 0; i < data.employees.length; i++) {
        const employee = data.employees[i];
        jsonDataDiv.innerHTML += `
            <p>First Name: ${employee.firstName}</p>
            <p>Last Name: ${employee.lastName}</p>
            <hr>
        `;
    }
}

function loadRawData() {
    const url = "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750"; // Replace with valid API URL

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse response as JSON
        })
        .then((data) => {
            const rawDataDiv = document.getElementById("rawdata");
            rawDataDiv.textContent = JSON.stringify(data, null, 2); // Display raw JSON data as a formatted string
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

function loadAndParseData() {
    const url = "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750"; // Replace with valid API URL

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse response as JSON
        })
        .then((data) => {
            const parsedDataDiv = document.getElementById("parseddata");

            // Create an HTML table
            let table = "<table border='1'><tr><th>Title</th><th>Year</th><th>Poster</th></tr>";
            data.Search.forEach((movie) => {
                table += `<tr>
                    <td>${movie.Title}</td>
                    <td>${movie.Year}</td>
                    <td><img src="${movie.Poster}" alt="${movie.Title}" width="100"></td>
                </tr>`;
            });
            table += "</table>";

            parsedDataDiv.innerHTML = table; // Display the table
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

function getRawWeatherData() {
    const city = "Helsinki"; // Replace with the desired city
    const apiKey = "dc687f344bab87a5ed9e323e095463d3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    // Fetch the weather data
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then((data) => {
            // Display the raw JSON data in the weatherdata div
            const weatherDiv = document.getElementById("weatherdata");
            weatherDiv.textContent = JSON.stringify(data, null, 2); // Format JSON with indentation
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weatherdata").textContent = "Failed to load weather data.";
        });
}

function getWeatherForCity() {
    // Get the selected city from the dropdown menu
    const city = document.getElementById("citySelect").value;
    const apiKey = "your_api_key_here"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    // Fetch the weather data
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then((data) => {
            // Extract weather details
            const temperature = data.main.temp;
            const clouds = data.clouds.all;
            const humidity = data.main.humidity;

            // Display the data in the weatherdata div
            const weatherDiv = document.getElementById("weatherdata");
            weatherDiv.innerHTML = `
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Temperature:</strong> ${temperature} °C</p>
                <p><strong>Cloud Coverage:</strong> ${clouds}%</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
            `;
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weatherdata").textContent = "Failed to load weather data.";
        });
}

function searchCityWeather() {
    // Get the user input (city name)
    const city = document.getElementById("citySearch").value;
    if (!city) {
        document.getElementById("weatherdata").textContent = "Please enter a city name.";
        return;
    }

    // OpenWeatherMap API key and URL
    const apiKey = "your_api_key_here"; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    // Fetch the weather data
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then((data) => {
            // Extract weather details
            const temperature = data.main.temp;
            const clouds = data.clouds.all;
            const humidity = data.main.humidity;

            // Display the data
            const weatherDiv = document.getElementById("weatherdata");
            weatherDiv.innerHTML = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${temperature} °C</p>
                <p><strong>Cloud Coverage:</strong> ${clouds}%</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
            `;
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weatherdata").textContent = "Unable to retrieve weather data. Please check the city name.";
        });
}

