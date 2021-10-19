const currentImage = document.querySelector("#image");

const images = ["images/pilt1.jpeg", "images/pilt2.jpeg", "images/pilt3.jpeg"];

function changeImage() {
    
let randomNumber = Math.floor(Math.random() * images.length);
console.log(randomNumber);
currentImage.src = images[randomNumber];
}