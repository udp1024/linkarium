// script.js

const imageContainer = document.getElementById('rotator');
const imageUrls = [
    'images/bg-gallery/image1.jpg',
    'images/bg-gallery/image2.jpg',
    'images/bg-gallery/image3.jpg',
    // Add more image URLs as needed
];

let currentIndex = Math.floor(Math.random() * imageUrls.length);

function changeImage() {
    imageContainer.src = imageUrls[currentIndex];
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Initial image load
changeImage();

// Set interval to change image every 10 seconds
setInterval(changeImage, 10000);
