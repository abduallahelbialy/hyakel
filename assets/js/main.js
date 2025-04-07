///menu-toggle///
const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbarNav");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});

///accordion////
    document.querySelectorAll(".accordion-button").forEach((button) => {
      button.addEventListener("click", function () {
        document.querySelectorAll(".accordion-title").forEach((title) => {
          title.style.color = "#030303";
        });

        const title = this.querySelector(".accordion-title");
        if (this.getAttribute("aria-expanded") === "true") {
          title.style.color = "orange";
        }
      });
    });

