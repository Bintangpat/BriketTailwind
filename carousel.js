const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");
const items = document.querySelectorAll("[data-carousel-item]");
const navButtons = document.querySelectorAll("[data-carousel-slide-to]");
let currentIndex = 0;
let moving = false; // Prevent multiple clicks during animation

function showSlide(index, direction) {
  if (moving) return; // Prevent action if already moving
  moving = true; // Set moving state to true

  items.forEach((item, i) => {
    item.classList.add("hidden"); // Sembunyikan semua item
    item.classList.remove("active"); // Hapus kelas aktif
    navButtons[i].classList.remove("opacity-100"); // Reset opacity tombol navigasi
    navButtons[i].classList.add("opacity-50"); // Set opacity default
  });

  const activeItem = items[index];
  activeItem.classList.remove("hidden"); // Tampilkan item yang aktif
  activeItem.classList.add("active"); // Tambahkan kelas aktif

  // Tambahkan animasi berdasarkan arah
  if (direction === "next") {
    activeItem.classList.add("animate-fadeInright");
  } else if (direction === "prev") {
    activeItem.classList.add("animate-fadeInleft");
  }

  // Hapus kelas animasi setelah animasi selesai
  activeItem.addEventListener(
    "animationend",
    () => {
      activeItem.classList.remove("animate-fadeInright", "animate-fadeInleft");
      moving = false; // Reset moving state
    },
    { once: true },
  );

  // Update opacity tombol navigasi
  navButtons[index].classList.remove("opacity-50");
  navButtons[index].classList.add("opacity-100");
}

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1; // Navigasi mundur
  showSlide(currentIndex, "prev");
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0; // Navigasi maju
  showSlide(currentIndex, "next");
});

navButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentIndex = index; // Set index ke tombol yang diklik
    showSlide(currentIndex, index > currentIndex ? "next" : "prev");
  });
});

// Initialize the first slide
showSlide(currentIndex);
