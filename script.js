var radio = document.querySelector ('.manual-btn');
var count = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
  nextImage();
},7000)

updateSlider();

function nextImage() {
  count++;
  if(count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
  updateSlider();
}

function previousImage() {
  count--;
  if (count < 1) {
      count = 4;
  }
  document.getElementById("radio" + count).checked = true;
  updateSlider();
}

function updateSlider() {
  const offset = (count - 1) * -100; // Calcula deslocamento em porcentagem
  slides.style.transform = `translateX(${offset}%)`; // Aplica transição suave
}