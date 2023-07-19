let dropdown = document.querySelector(".dropdown");
let dropdown2 = document.querySelector("#dropdown");
let dropdownItem = document.querySelector(".dropdown-item");
let dropdownBtn = document.querySelector(".dropdown-btn");
let b = document.getElementById("btn");

dropdownBtn.addEventListener("click", () => {
  if (dropdown.offsetHeight === dropdown.scrollHeight) {
    dropdown.style.height = "50px";
  } else {
    dropdown.style.height = `${dropdown.scrollHeight}px`;
  }
});

b.addEventListener("click", () => {
  if (dropdown2.offsetHeight === dropdown2.scrollHeight) {
    dropdown2.style.height = "50px";
    b.style.transform = "";
  } else {
    dropdown2.style.height = `${dropdown2.scrollHeight}px`;
    b.style.transform = "rotate(180deg)";
  }
});
