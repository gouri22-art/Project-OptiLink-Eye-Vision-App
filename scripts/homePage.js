const slides = document.querySelector(".slides");
let index = 0;

function showNextSlide() {
  index++;
  if (index >= 10) {
    index = 0;
  }
  slides.style.transform = `translateX(${-index * 10}%)`;
}

// Automatically slide every 3 seconds
setInterval(showNextSlide, 3000);

