const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");
const items = document.querySelectorAll("[data-carousel-item]");
const navButtons = document.querySelectorAll("[data-carousel-slide-to]");
let currentIndex = 0;

function showSlide(index) {
  items.forEach((item, i) => {
    if (i === index) {
      item.classList.remove("hidden"); // Tampilkan item yang aktif
      item.classList.add("active"); // Tambahkan kelas aktif
      item.classList.add("animate-fadeInright"); // Tambahkan kelas animasi
      navButtons[i].classList.remove("opacity-50"); // Set opacity tombol navigasi aktif
      navButtons[i].classList.add("opacity-100"); // Tampilkan tombol navigasi aktif

      // Hapus kelas animasi setelah animasi selesai
      item.addEventListener(
        "animationend",
        () => {
          item.classList.remove("animate-fadeInright");
        },
        { once: true },
      );
    } else {
      item.classList.add("hidden"); // Sembunyikan semua item
      item.classList.remove("active"); // Hapus kelas aktif
      navButtons[i].classList.remove("opacity-100"); // Reset opacity tombol navigasi
      navButtons[i].classList.add("opacity-50"); // Set opacity default
    }
  });
}
prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1; // Navigasi mundur
  showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0; // Navigasi maju
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
