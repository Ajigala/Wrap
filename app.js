// JavaScript to handle pagination
const testimonialsContainer = document.querySelector(".testimonial-container");
const pagination = document.querySelector(".pagination");

// Calculate number of pages
const testimonials = document.querySelectorAll(".testimonial-card");
const totalPages = Math.ceil(testimonials.length / 3);

// Create pagination circles
for (let i = 0; i < totalPages; i++) {
  const page = document.createElement("div");
  page.classList.add("page");
  pagination.appendChild(page);
}

// Handle pagination click
pagination.addEventListener("click", (event) => {
  if (event.target.classList.contains("page")) {
    const clickedPage = event.target;
    const currentPage = Array.from(pagination.children).indexOf(clickedPage);
    testimonialsContainer.scrollLeft =
      currentPage * testimonialsContainer.offsetWidth;
    highlightPage(currentPage);
  }
});

// Highlight current page
function highlightPage(currentPage) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page, index) => {
    page.classList.remove("active");
    if (index === currentPage) {
      page.classList.add("active");
    }
  });
}

// Highlight initial page
highlightPage(0);
