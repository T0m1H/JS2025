function getData() {
    // Get values from the form fields
    const destination = document.getElementById("destination").value;
    const arrival = document.getElementById("arrival").value;

    // Get selected services
    const services = [];
    document.querySelectorAll("#services input[type='checkbox']:checked").forEach((checkbox) => {
        services.push(checkbox.value);
    });

    // Store data in localStorage
    localStorage.setItem("destination", destination);
    localStorage.setItem("arrival", arrival);
    localStorage.setItem("services", JSON.stringify(services)); // Store as a JSON string

    // Confirmation message
    alert("Your reservation details have been saved in localStorage!");
}

function loadSessionData() {
    const sessionDataDiv = document.getElementById("sessionData");

    // Retrieve data from localStorage
    const destination = localStorage.getItem("destination");
    const arrival = localStorage.getItem("arrival");
    const services = localStorage.getItem("services");

    // Check if data exists
    if (destination || arrival || services) {
        // Format and display the data
        let output = "<h3>Saved Session Data:</h3>";
        output += destination ? `<p><strong>Destination:</strong> ${destination}</p>` : "";
        output += arrival ? `<p><strong>Arrival Date:</strong> ${arrival}</p>` : "";
        output += services ? `<p><strong>Services:</strong> ${JSON.parse(services).join(", ")}</p>` : "";

        sessionDataDiv.innerHTML = output;
    } else {
        // Display a default message if no data is found
        sessionDataDiv.innerHTML = "<p>No session data available!</p>";
    }
}
