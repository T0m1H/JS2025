function validateForm() {
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;

    // Display entered values
    alert(`Email: ${email}`);
    alert(`Comment: ${comment}`);

    // Cancel form submission for now
    return false; // Prevent form submission
}
function validateForm() {
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;

    let isValid = true;

    // Clear previous error messages
    document.getElementById("emailError").textContent = "";
    document.getElementById("commentError").textContent = "";

    // Validate email
    if (email.length < 6 || email.length > 15 || !email.includes("@")) {
        document.getElementById("emailError").textContent = "Email must be 6-15 characters long and contain '@'.";
        isValid = false;
    }

    // Validate comment
    if (!comment.trim()) {
        document.getElementById("commentError").textContent = "Comment cannot be empty.";
        isValid = false;
    } else if (comment.length > 50) {
        document.getElementById("commentError").textContent = "Comment must be no more than 50 characters.";
        isValid = false;
    }

    // Stop form submission if there are errors
    if (!isValid) {
        return false; // Prevent form submission
    }

    // Display values if valid
    alert(`Email: ${email}`);
    alert(`Comment: ${comment}`);

    return true; // Allow form submission
}

function validateForm() {
    const emailField = document.getElementById("email");
    const commentField = document.getElementById("comment");
    const email = emailField.value;
    const comment = commentField.value;

    let isValid = true;

    // Reset field styles
    emailField.style.border = "1px solid black";
    commentField.style.border = "1px solid black";
    document.getElementById("emailError").textContent = "";
    document.getElementById("commentError").textContent = "";

    // Validate email
    if (email.length < 6 || email.length > 15 || !email.includes("@")) {
        document.getElementById("emailError").textContent = "Email must be 6-15 characters long and contain '@'.";
        emailField.style.border = "2px solid red";
        isValid = false;
    }

    // Validate comment
    if (!comment.trim()) {
        document.getElementById("commentError").textContent = "Comment cannot be empty.";
        commentField.style.border = "2px solid red";
        isValid = false;
    } else if (comment.length > 50) {
        document.getElementById("commentError").textContent = "Comment must be no more than 50 characters.";
        commentField.style.border = "2px solid red";
        isValid = false;
    }

    // Stop form submission if there are errors
    if (!isValid) {
        return false; // Prevent form submission
    }

    // Display values if valid
    alert(`Email: ${email}`);
    alert(`Comment: ${comment}`);

    return true; // Allow form submission
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("theForm");

    form.onsubmit = function (event) {
        event.preventDefault(); // Prevent form submission

        const type = document.getElementById("type").value; // Get membership type
        const years = document.getElementById("years").value; // Get number of years
        const costField = document.getElementById("cost"); // Reference to the cost field
        const discountMessage = document.getElementById("discountMessage"); // Reference to the discount message
        const greetingMessage = document.getElementById("greetingMessage"); // Reference to the greeting message

        // Membership type costs
        let costPerYear;
        switch (type) {
            case "basic":
                costPerYear = 10;
                break;
            case "premium":
                costPerYear = 15;
                break;
            case "gold":
                costPerYear = 20;
                break;
            case "platinum":
                costPerYear = 25;
                break;
            default:
                costPerYear = 0;
                break;
        }

        // Calculate base cost
        let totalCost = costPerYear * years;

        // Check for discount eligibility
        if (years > 2) {
            totalCost *= 0.8; // Apply 20% discount
            discountMessage.textContent = "You are eligible for a 20% discount!";
        } else {
            discountMessage.textContent = ""; // Clear message if not eligible
        }

        // Check for extra discount eligibility
        if (years >= 5) {
            totalCost -= 5; // Apply extra €5 discount
            greetingMessage.textContent = "Special greetings: You earned an extra €5 discount!";
        } else {
            greetingMessage.textContent = ""; // Clear message if not eligible
        }

        // Display total cost
        costField.value = `$${totalCost.toFixed(2)}`;
    };
});
