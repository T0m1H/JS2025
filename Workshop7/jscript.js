function parseData() {
    // Get all <quotes> elements
    const quotesElements = document.getElementsByTagName("quotes");

    // Get the div where the quotes will be displayed
    const quotesDiv = document.getElementById("quotes");

    // Clear any previous content
    quotesDiv.innerHTML = "";

    // Loop through all <quotes> elements and extract <quote> and <author>
    for (let i = 0; i < quotesElements.length; i++) {
        const quoteText = quotesElements[i].getElementsByTagName("quote")[0].textContent;
        const authorText = quotesElements[i].getElementsByTagName("author")[0].textContent;

        // Append the extracted data to the div
        quotesDiv.innerHTML += `<p><strong>Quote:</strong> ${quoteText}</p>`;
        quotesDiv.innerHTML += `<p><strong>Author:</strong> ${authorText}</p>`;
        quotesDiv.innerHTML += `<hr>`; // Add a separator for clarity
    }
}

function loadXMLFile() {
    const url = "http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml"; // URL to the XML file

    // Create an XMLHttpRequest object
    const xmlhttp = new XMLHttpRequest();

    // Specify the type of request and URL
    xmlhttp.open("GET", url, true);

    // Send the request
    xmlhttp.send();

    // Process the response when ready
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            // Find the div and insert the raw XML data
            document.getElementById("quotes").textContent = xmlhttp.responseText;
        } else if (xmlhttp.readyState === 4) {
            // Handle errors (if any)
            console.error("Error fetching XML file. Status:", xmlhttp.status);
            document.getElementById("quotes").textContent = "Failed to load data.";
        }
    };
}

function loadAndParseXML() {
    const url = "http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml"; // URL to the XML file

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            // Parse the XML response
            const xmlDoc = xmlhttp.responseXML;

            // Extract <quotes> elements
            const quotesElements = xmlDoc.getElementsByTagName("quotes");

            // Create an HTML table
            let table = "<table border='1' style='border-collapse: collapse; width: 100%;'>";
            table += "<tr><th>Quote</th><th>Author</th></tr>";

            for (let i = 0; i < quotesElements.length; i++) {
                const quoteText = quotesElements[i].getElementsByTagName("quote")[0].textContent;
                const authorText = quotesElements[i].getElementsByTagName("author")[0].textContent;

                table += `<tr>
                    <td>${quoteText}</td>
                    <td>${authorText}</td>
                </tr>`;
            }
            table += "</table>";

            // Inject the table into the tabledata div
            document.getElementById("tabledata").innerHTML = table;
        } else if (xmlhttp.readyState === 4) {
            console.error("Error fetching XML file. Status:", xmlhttp.status);
            document.getElementById("tabledata").textContent = "Failed to load data.";
        }
    };
}
