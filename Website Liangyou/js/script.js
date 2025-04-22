document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  let currentIndex = 0;

  function showSlide(index) {
    if (index >= images.length) currentIndex = 0;
    else if (index < 0) currentIndex = images.length - 1;
    else currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * 800}px)`;
  }

  next.addEventListener("click", () => showSlide(currentIndex + 1));
  prev.addEventListener("click", () => showSlide(currentIndex - 1));

  // Tự động chuyển ảnh sau 5 giây
  setInterval(() => showSlide(currentIndex + 1), 5000);
});
