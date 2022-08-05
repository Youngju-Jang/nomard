const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("div");
bgImage.classList.add("randomBg");
bgImage.style = `background-image:url("img/${chosenImage}");`;
document.body.appendChild(bgImage);
