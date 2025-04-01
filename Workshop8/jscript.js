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
