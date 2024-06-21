// Getting the required elements
var button = document.getElementById("btn")
var body = document.getElementsByTagName("body")[0];

// Defining a function to change the background of the body
function changeBackground() {

    // Generating random values for the red, blue, green and multiply by 256 (exclusive)
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);

    // Generating random values for the opacity between 0 and 1 (exclusive)
    opacity = Math.random();

    // Setting the background color
    body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + "," + opacity + ")";
}

// Adding an event listener to the document and the button
document.addEventListener("DOMContentLoaded", changeBackground);
button.addEventListener("click", changeBackground);