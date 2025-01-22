const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");
const items = document.querySelectorAll("[data-carousel-item]");
const navButtons = document.querySelectorAll("[data-carousel-slide-to]");
const desc = document.querySelectorAll("[data-desc]");
let currentIndex = 0;
let moving = false; // Prevent multiple clicks during animation

function showSlide(index) {
  if (moving) return; // Prevent action if already moving
  moving = true; // Set moving state to true

  items.forEach((item, i) => {
    if (i === index) {
      item.classList.remove("opacity-0"); // Tampilkan item aktif
      item.classList.add("opacity-100"); // Set opacity ke 100
    } else {
      item.classList.remove("opacity-100"); // Sembunyikan item lainnya
      item.classList.add("opacity-0"); // Set opacity ke 0
    }

    if (i === index) {
      desc[i].classList.add("animate-up");
    } else {
      desc[i].classList.remove("animate-up");
    }

    // Update opacity tombol navigasi
    if (i === index) {
      navButtons[i].classList.remove("opacity-50");
      navButtons[i].classList.add("opacity-100");
    } else {
      navButtons[i].classList.remove("opacity-100");
      navButtons[i].classList.add("opacity-50");
    }
  });

  // Reset moving state after a short delay to allow for animation
  setTimeout(() => {
    moving = false; // Reset moving state
  }, 1000); // Sesuaikan durasi ini dengan durasi animasi CSS
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length; // Navigasi mundur
  showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length; // Navigasi maju
  showSlide(currentIndex);
});

navButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentIndex = index; // Set index ke tombol yang diklik
    showSlide(currentIndex);
  });
});

// Initialize the first slide
showSlide(currentIndex);
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length; // Navigasi maju
  showSlide(currentIndex);
}, 5000);
