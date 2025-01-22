const buttons = document.querySelectorAll("[data-target]");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault(); // Opsional, jika tombol adalah <a> dengan href
    const targetId = button.dataset.target;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      if ("scrollBehavior" in document.documentElement.style) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // Fallback untuk browser yang tidak mendukung smooth scroll
        targetElement.scrollIntoView(true);
      }
    } else {
      console.error(`Element with id "${targetId}" not found.`);
    }
  });
});
