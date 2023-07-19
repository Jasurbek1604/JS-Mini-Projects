const carousel = document.querySelector(".ul");
const arrows = document.querySelectorAll("i");
const scrolWidth = document.querySelector(".li").offsetWidth;
let a = false,
  b,
  c;

console.log(arrows);

carousel.addEventListener("mousemove", (e) => {
  if (!a) return;
  carousel.scrollLeft = c - (e.pageX - b);
});

carousel.addEventListener("mousedown", (e) => {
  a = true;
  carousel.classList.add("dragging");
  b = e.pageX;
  c = carousel.scrollLeft;
});

carousel.addEventListener("mouseup", (e) => {
  a = false;
  carousel.classList.remove("dragging");
});

arrows.forEach((e) => {
  e.addEventListener("click", () => {
    carousel.scrollLeft += e.id === "left" ? -scrolWidth : scrolWidth;
  });
});
