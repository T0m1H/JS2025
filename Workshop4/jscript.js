function changeHeading() {
    // Find the reference to the "Workshop 4" heading
    const heading = document.querySelector('h1');
        
    // Modify the content of the heading
    heading.textContent = 'Modified Heading!';
}

function exercise2() {
    // Find the "Exercise 2" heading
    const heading = document.querySelector('h2:nth-of-type(2)');
    
    // Modify the style properties
    heading.style.fontSize = "24px"; // Change font size
    heading.style.fontStyle = "italic"; // Change font style
    heading.style.color = "blue"; // Change font color
    heading.style.backgroundColor = "yellow"; // Change background color
}

function appendParagraph() {
    // Locate the 4th <p> element
    const paragraphs = document.querySelectorAll('p');
    if (paragraphs.length >= 4) {
        const fourthParagraph = paragraphs[3]; // Index 3 corresponds to the 4th paragraph

        // Create a new paragraph element
        const newParagraph = document.createElement('p');

        // Set the text content (including italic styling)
        newParagraph.innerHTML = '<em>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit."</em>';

        // Append the new paragraph after the 4th <p>
        fourthParagraph.parentNode.insertBefore(newParagraph, fourthParagraph.nextSibling);

        // Optionally, change the background color of the page
        document.body.style.backgroundColor = '#f0f8ff'; // Light blue
    }
}

function hide() {
    // Find the element with id "me"
    const element = document.getElementById('me');
    
    // Change its display value to "none"
    element.style.display = 'none';
}

function show() {
    // Find the element with id "me"
    const element = document.getElementById('me');
    
    // Change its display value back to "block"
    element.style.display = 'block';
}

function applySurpriseStyle() {
    // Find all elements with the class "surprise"
    const surpriseElements = document.querySelectorAll('.surprise');

    // Loop through each element and change the font size
    surpriseElements.forEach(element => {
        element.style.fontSize = '20px'; // Set font size to 20
    });
}

function showUserChoice() {
    const selectMenu = document.getElementById("mySelect");
    const selectedValue = selectMenu.value;
    alert("You selected: " + selectedValue);
}


document.addEventListener("DOMContentLoaded", function () {
    const carImage = document.getElementById("carimage");

    if (carImage) {
        carImage.onmouseover = function () {
            carImage.style.border = "5px solid red";
        };

        carImage.onmouseout = function () {
            carImage.style.border = "none";
        };
    } else {
        console.error("Image with ID 'carimage' not found!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const selectMenu = document.getElementById("mySelect");
    const carImage = document.getElementById("carimage");

    // Add an event listener to the pulldown menu
    selectMenu.addEventListener("change", function () {
        const selectedValue = selectMenu.value;

        // Change the image source based on the user's choice
        switch (selectedValue) {
            case "BMW":
                carImage.src = "https://www.bmw.fi/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png";
                break;
            case "Audi":
                carImage.src = "https://cloudcdn.nz/_continentalcars_/assets/uploads/2020/07/cc-audi-rs6-review2.jpg?w=768";
                break;
            case "Mercedes":
                carImage.src = "https://cdn.pixabay.com/photo/2021/08/29/02/51/mercedes-amg-6582260_1280.jpg";
                break;
            case "Volvo":
                carImage.src = "https://cdn.pixabay.com/photo/2020/04/12/16/27/isolated-5034839_1280.png";
                break;
            default:
                alert("No image available for the selected car!");
                break;
        }
    });
});

function changePosition() {
    const carImage = document.getElementById("carimage");

    if (carImage) {
        // Ensure the element is positioned to allow movement
        carImage.style.position = "absolute"; // Can also be "relative" or "fixed"
        // Move the element
        carImage.style.left = "200px"; // Move 200px from its current position
        carImage.style.top = "500px"; // Move 500px down from its current position
    } else {
        console.error("The element with ID 'carimage' was not found.");
    }
}

let position = 0; // Current position of the image
let direction = 1; // Direction of movement (1 for forward, -1 for backward)

function doMove() {
    const carImage = document.getElementById("carimage");

    if (carImage) {
        // Set the image to absolute positioning
        carImage.style.position = "absolute";

        // Move the image horizontally
        position += 10 * direction; // Change the position in steps of 10px
        carImage.style.left = position + "px";

        // Reverse direction when the image reaches the edge of the screen
        const screenWidth = window.innerWidth - carImage.offsetWidth;
        if (position >= screenWidth || position <= 0) {
            direction *= -1; // Change direction
        }
    } else {
        console.error("The element with ID 'carimage' was not found.");
    }
}




