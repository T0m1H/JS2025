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


