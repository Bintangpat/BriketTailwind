// Ambil semua tombol navigasi
const buttons = document.querySelectorAll("[data-target]");

// Tambahkan event listener untuk setiap tombol
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Ambil ID target dari atribut data
    let targetId = button.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    // Jika elemen target ditemukan, gulir ke elemen tersebut
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
