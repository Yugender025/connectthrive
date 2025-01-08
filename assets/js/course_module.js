function toggleContent(element) {
  // First, close any currently open sections
  const allContent = document.querySelectorAll(".faq-content.open");
  allContent.forEach((openContent) => {
    if (openContent !== element.nextElementSibling) {
      const parentHeader = openContent.previousElementSibling;
      const symbol = parentHeader.querySelector(".faq-symbol");

      openContent.style.maxHeight = "0";
      openContent.style.opacity = "0";
      symbol.textContent = "+";
      openContent.classList.remove("open"); // Remove open class immediately
    }
  });

  // Now handle the clicked section
  const content = element.nextElementSibling;
  const isOpen = content.classList.contains("open");
  const symbol = element.querySelector(".faq-symbol");

  if (isOpen) {
    content.style.maxHeight = "0";
    content.style.opacity = "0";
    symbol.textContent = "+";
    content.classList.remove("open");
  } else {
    // Make sure to remove any inline maxHeight first
    content.style.maxHeight = null;
    // Get the scrollHeight and then set it
    const height = content.scrollHeight;
    content.style.maxHeight = height + "px";
    content.style.opacity = "1";
    symbol.textContent = "−";
    content.classList.add("open");
  }
}
