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
