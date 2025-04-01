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

