// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function () {
  // Handle "Go to Top" button visibility
  const goToTopBtn = document.querySelector(".go-to-top");
  if (goToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        goToTopBtn.style.display = "flex";
      } else {
        goToTopBtn.style.display = "none";
      }
    });
  }

  // Handle table sorting functionality
  const sortDropdown = document.getElementById("sortDropdown");
  if (sortDropdown) {
    sortDropdown.addEventListener("change", function () {
      // Sort table logic would go here
      console.log("Sort by:", this.value);
    });
  }

  // Handle search functionality
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      // Search logic would go here
      console.log("Search term:", this.value);
    });
  }

  // Handle form submissions
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Form submission logic would go here
      console.log("Form submitted");
    });
  });

  // Handle emoji rating selection
  const emojiRatings = document.querySelectorAll(".emoji-rating");
  emojiRatings.forEach((emoji) => {
    emoji.addEventListener("click", function () {
      // Rating selection logic would go here
      console.log("Rating selected");
    });
  });

  // Handle profile skill bars animation
  const skillBars = document.querySelectorAll(".progress");
  if (skillBars.length > 0) {
    // Animate skill bars on page load
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("style").match(/width: (\d+)%/)[1];
      bar.style.width = "0%";
      setTimeout(() => {
        bar.style.width = width + "%";
      }, 500);
    });
  }
});
