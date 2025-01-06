document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const usernameInput = form.querySelector("input[type='text']");
  const passwordInput = form.querySelector("input[type='password']");

  // Username dan password yang valid
  const validCredentials = {
      username: "user123", // Ganti dengan username yang valid
      password: "pass123"   // Ganti dengan password yang valid
  };

  form.addEventListener("submit", function(event) {
      // Menghentikan pengiriman form
      event.preventDefault();

      // Menghapus pesan kesalahan sebelumnya
      const errorMessages = form.querySelectorAll(".error-message");
      errorMessages.forEach(msg => msg.remove());

      let isValid = true;

      // Validasi username
      if (usernameInput.value.trim() === "") {
          isValid = false;
          showError(usernameInput, "Username tidak boleh kosong");
      } else if (usernameInput.value !== validCredentials.username) {
          isValid = false;
          showError(usernameInput, "Username tidak valid");
      }

      // Validasi password
      if (passwordInput.value.trim() === "") {
          isValid = false;
          showError(passwordInput, "Password tidak boleh kosong");
      } else if (passwordInput.value !== validCredentials.password) {
          isValid = false;
          showError(passwordInput, "Password tidak valid");
      }

      // Jika validasi berhasil, bisa melanjutkan dengan pengiriman form
      if (isValid) {
        alert("Form berhasil dikirim!");
        setTimeout(function() {
          window.location.href = "../Admin page/mahasiswa/index.html"; // Pastikan path ini benar
      }, 1000);
      }
  });

  function showError(input, message) {
      const errorMessage = document.createElement("div");
      errorMessage.className = "error-message text-red-500 text-sm mt-1";
      errorMessage.textContent = message;
      input.classList.add("border-red-500");
      input.classList.remove("border-gray-300");
      input.parentElement.appendChild(errorMessage);
  }
});