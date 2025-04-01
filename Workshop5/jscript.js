function showContactDetailField() {
    const contactMethod = document.getElementById("contactMethod").value;
    const contactDetailsDiv = document.getElementById("contactDetails");
    const contactDetailLabel = document.getElementById("contactDetailLabel");
    const contactDetailInput = document.getElementById("contactDetail");

    if (contactMethod) {
        contactDetailsDiv.style.display = "block"; // Show the field
        if (contactMethod === "email") {
            contactDetailLabel.textContent = "Enter your email address:";
            contactDetailInput.placeholder = "example@example.com";
        } else if (contactMethod === "phone") {
            contactDetailLabel.textContent = "Enter your phone number:";
            contactDetailInput.placeholder = "123-456-7890";
        } else if (contactMethod === "sms") {
            contactDetailLabel.textContent = "Enter your mobile number:";
            contactDetailInput.placeholder = "123-456-7890";
        }
    } else {
        contactDetailsDiv.style.display = "none"; // Hide the field if no method is selected
        contactDetailLabel.textContent = "";
        contactDetailInput.placeholder = "";
    }
}

function validateForm() {
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;
    const contactMethod = document.getElementById("contactMethod").value;
    const contactDetail = document.getElementById("contactDetail").value;

    let isValid = true;

    // Clear previous errors
    document.getElementById("emailError").textContent = "";
    document.getElementById("commentError").textContent = "";
    document.getElementById("contactMethodError").textContent = "";

    // Validate email field
    if (!email.includes("@") || email.length < 6 || email.length > 15) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    }

    // Validate comment field
    if (!comment.trim()) {
        document.getElementById("commentError").textContent = "Comment cannot be empty.";
        isValid = false;
    } else if (comment.length > 50) {
        document.getElementById("commentError").textContent = "Comment must not exceed 50 characters.";
        isValid = false;
    }

    // Validate contact method
    if (!contactMethod) {
        document.getElementById("contactMethodError").textContent = "Please select a contact method.";
        isValid = false;
    }

    // Validate contact detail
    if (contactMethod && !contactDetail.trim()) {
        alert(`Please provide your ${contactMethod} details.`);
        isValid = false;
    }

    // Prevent form submission if validation fails
    return isValid;
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

function calculate() {
    // Get the input values from the form
    const quantity = parseInt(document.getElementById("quantity").value, 10); // Store quantity as an integer
    const price = parseFloat(document.getElementById("price").value);        // Store price as a float
    const tax = parseFloat(document.getElementById("tax").value);            // Store tax as a float
    const discount = parseFloat(document.getElementById("discount").value);  // Store discount as a float
    const shipping = parseFloat(document.getElementById("shipping").value);  // Store shipping as a float

    // Validate input values
    if (isNaN(quantity) || isNaN(price) || isNaN(tax) || isNaN(discount) || isNaN(shipping)) {
        alert("Please enter valid values for all fields.");
        return;
    }

    // Apply double discount logic if quantity is greater than 100
    let appliedDiscount = discount;
    if (quantity > 100) {
        appliedDiscount *= 2; // Double the discount
    }

    // Calculate subtotal
    const subtotal = quantity * price;

    // Calculate tax
    const taxAmount = subtotal * (tax / 100);

    // Calculate total cost after applying tax, discount, and adding shipping cost
    const total = subtotal + taxAmount - appliedDiscount + shipping;

    // Display the total in the Total field
    document.getElementById("total").value = total.toFixed(2);
}
