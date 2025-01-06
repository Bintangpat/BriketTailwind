const dropdownToggle = document.getElementById("dropdownMenuButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownToggle.addEventListener("click", function () {
  dropdownMenu.classList.toggle("hidden"); // Toggle visibility
});

dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    dropdownToggle.textContent = this.textContent; // Update button text
    dropdownMenu.classList.add("hidden"); // Hide dropdown after selection
    console.log("Selected value:", this.getAttribute("data-value")); // Log selected value
  });
});

// Close dropdown if clicked outside
window.addEventListener("click", function (event) {
  if (!event.target.matches("#dropdownMenuButton")) {
    dropdownMenu.classList.add("hidden");
  }
});
