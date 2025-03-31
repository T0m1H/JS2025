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


const carImage = document.getElementById("carimage");

carImage.onmouseover = function() {
    carImage.style.border = "5px solid red";
};
carImage.onmouseout = function() {
    carImage.style.border = "none";
};





