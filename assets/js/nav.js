document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  // Retrieve the elements by their IDs
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  const closeBtn = document.getElementById("close-btn");

  console.log("Hamburger:", hamburger);
  console.log("MobileNav:", mobileNav);
  console.log("CloseBtn:", closeBtn);

  // Check if elements were successfully retrieved
  if (hamburger && mobileNav && closeBtn) {
    // Add click event listener to the hamburger menu
    hamburger.addEventListener("click", function () {
      mobileNav.classList.add("active"); // Show mobile navigation
      hamburger.style.display = "none"; // Hide hamburger menu
      closeBtn.style.display = "block"; // Show close button
    });

    // Add click event listener to the close button
    closeBtn.addEventListener("click", function () {
      mobileNav.classList.remove("active"); // Hide mobile navigation
      hamburger.style.display = "flex"; // Show hamburger menu
      closeBtn.style.display = "none"; // Hide close button
    });
  } else {
    // Log an error if elements are not found
    console.error("One or more elements not found:", {
      hamburger,
      mobileNav,
      closeBtn,
    });
  }
});
