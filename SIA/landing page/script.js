function updateNavDisplay() {
  const navResponsive = document.querySelector(".navresponsive");
  const navLinks = document.querySelector(".nav-links");
  const button = document.querySelector(".signloginbutton");

  if (window.innerWidth >= 768) {
    // Breakpoint md (768px)
    button.style.display = "flex";
    navResponsive.style.display = "none"; // Sembunyikan navresponsive
    navLinks.style.display = "flex"; // Tampilkan nav links
  } else {
    button.style.display = "none";
    navResponsive.style.display = "block"; // Tampilkan navresponsive
    navLinks.style.display = "none"; // Sembunyikan nav links
  }
}

// Panggil fungsi saat halaman dimuat
updateNavDisplay();

// Tambahkan event listener untuk resize
window.addEventListener("resize", updateNavDisplay);

const images = document.getElementById("image-slider");
let index = 0;

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % images.children.length;
  images.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + images.children.length) % images.children.length;
  images.style.transform = `translateX(-${index * 100}%)`;
});
