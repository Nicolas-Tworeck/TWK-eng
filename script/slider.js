let currentIndex = 0;
const slides = document.getElementById("slideTrack");
const totalSlides = slides.children.length;

function updateSlide() {
  const slideWidth = slides.children[0].offsetWidth;
  const gap = 20; // deve ser igual ao definido no CSS
  const moveAmount = slideWidth + gap;
  slides.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

// Troca automática de slide a cada 2 segundos
setInterval(nextSlide, 2000);

// Adiciona suporte a toque e arrastar
let startX = 0;
let isDragging = false;
const slider = document.querySelector('.slider-right'); // usa apenas o container

slider.addEventListener('touchstart', startDrag, { passive: true });
slider.addEventListener('touchmove', onDrag, { passive: true });
slider.addEventListener('touchend', endDrag);

slider.addEventListener('mousedown', startDrag);
slider.addEventListener('mousemove', onDrag);
slider.addEventListener('mouseup', endDrag);
slider.addEventListener('mouseleave', endDrag);

function startDrag(e) {
  isDragging = true;
  startX = e.pageX || e.touches[0].pageX;
}

function onDrag(e) {
  if (!isDragging) return;
  const x = e.pageX || e.touches[0].pageX;
  const delta = x - startX;

  if (Math.abs(delta) > 50) {
    if (delta < 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    isDragging = false;
  }
}

function endDrag() {
  isDragging = false;
}
