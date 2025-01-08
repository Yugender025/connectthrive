function toggleContent(element) {
  const content = element.nextElementSibling;
  const isOpen = content.classList.contains("open");
  const symbol = element.querySelector(".faq-symbol");

  if (isOpen) {
    // Closing the content
    content.style.maxHeight = "0"; // Collapse to 0
    content.style.opacity = "0"; // Fade out
    symbol.textContent = "+"; // Change symbol to plus
  } else {
    // Opening the content
    content.style.maxHeight = content.scrollHeight + "px"; // Set to scroll height
    content.style.opacity = "1"; // Fade in
    symbol.textContent = "−"; // Change symbol to minus
  }

  // Toggle the open class after the transition ends
  requestAnimationFrame(() => {
    content.classList.toggle("open");
  });
}
