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

