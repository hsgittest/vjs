const imgs = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
];
const bgImage = document.createElement("img");
const img = `img/${imgs[Math.floor(Math.random() * imgs.length)]}`;
bgImage.src = img;

document.body.appendChild(bgImage);
