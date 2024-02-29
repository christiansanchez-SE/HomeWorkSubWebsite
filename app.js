// Define an array of image sources
var images = ["https://s7d1.scene7.com/is/image/scom/207_24_WRX_HPR_xl_lg?$2000j$", "https://s7d1.scene7.com/is/image/scom/207_HPR_24_altl_xl_lg?$2000w$","https://pictures.dealer.com/r/raffertysubarusoa/0775/b0a4f05c2d52e1f99aa495b007181016x.jpg"];

// Get the image element
var img = document.getElementById("subImg");

// Set initial index
var index = 0;

// Function to change the image source
function changeImage() {
    img.src = images[index];
    index = (index + 1) % images.length; // Increment index and loop back to 0 when it reaches the end
}

// Call changeImage function every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);