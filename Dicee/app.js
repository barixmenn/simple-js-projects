const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

const imageArray = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'
];


function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const randomImage = imageArray[randomIndex];
    return randomImage;
}

function displayRandomImages() {
    const randomImageSrc1 = getRandomImage();
    const randomImageSrc2 = getRandomImage();
    image1.src = imageArray[randomNumber1];
    image2.src = imageArray[randomNumber2] 
    winnerStatus();
}


function winnerStatus() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

window.onload = displayRandomImages;
winnerStatus();

