// Ambil elemen dengan id "circle" dan elemen sidebar
const toggleButton = document.getElementById("circle");
const sidebar = document.querySelector("nav");

// Tambahkan event listener untuk klik pada tombol
let isActive = false; // Untuk menyimpan status sidebar (active/inactive)

toggleButton.addEventListener("click", () => {
  isActive = !isActive; // Toggle status

  if (isActive) {
    // Tambahkan kelas untuk menampilkan sidebar
    sidebar.classList.remove("-left-64");
    sidebar.classList.add("-left-0");
  } else {
    // Tambahkan kelas untuk menyembunyikan sidebar
    sidebar.classList.remove("-left-0");
    sidebar.classList.add("-left-64");
  }
});
