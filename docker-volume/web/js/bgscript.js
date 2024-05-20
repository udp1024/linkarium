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
    imageContainer.background = imageUrls[currentIndex];
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Initial image load
changeImage();

// Set interval to change image every 10 seconds
setInterval(changeImage, 10000);


/*<script type="text/javascript">

var images = ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg'];
document.getElementsByClassName('mainview')[0].style.backgroundImage = 'url(' + images[Math.floor(Math.random() * images.length)] + ')';

</script>*/