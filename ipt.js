
    document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const header = document.querySelector("header");
    const footer2 = document.querySelector(".Footer2");
    const darkModeIndicator = document.querySelector(".dark-mode-indicator");

    darkModeToggle.addEventListener("change", function () {
        if (darkModeToggle.checked) {
            body.classList.add("dark-mode");
            header.classList.add("dark-mode");
            footer2.classList.add("dark-mode"); // Apply dark mode to Footer2
            darkModeIndicator.textContent = "Dark";
        } else {
            body.classList.remove("dark-mode");
            header.classList.remove("dark-mode");
            footer2.classList.remove("dark-mode"); // Remove dark mode from Footer2
            darkModeIndicator.textContent = "Light";
        }
    });
});
