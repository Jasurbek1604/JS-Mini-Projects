let open = document.querySelector(".open");
let start = document.querySelector(".start");
let quit = document.querySelectorAll(".quit");
let container = document.querySelector(".container");
let wrapper = document.querySelector(".wrapper");
let audio = document.getElementById("audio");
let game = document.querySelector(".game");
let a = document.getElementById("a");
let ball = document.querySelector(".ball");
let modal = document.querySelector(".modal");
let Continue = document.querySelector(".continue");
let i = 0;
let score = document.querySelector(".title");
let bbb = document.querySelector(".bbb");
let goal = document.querySelector(".goal");

game.hidden = true;
wrapper.hidden = true;
modal.hidden = true;

open.addEventListener("click", () => {
  container.hidden = true;
  wrapper.hidden = false;
  audio.play();
});

quit.forEach((e) => {
  e.addEventListener("click", () => {
    container.hidden = false;
    wrapper.hidden = true;
    audio.pause();
    audio.currentTime = 0;
    neww.pause();
    game.hidden = true;
    location.reload();
  });
});

start.addEventListener("click", () => {
  container.hidden = true;
  wrapper.hidden = true;
  game.hidden = false;
  audio.pause();
  audio.currentTime = 0;
});

a.addEventListener("click", () => {
  i++;
  neww.play();
  ball.style.cssText = `
    position: absolute;
    left:${random(1000, 550)}px;
    top:${random(500, 350)}px;
    bottom:auto;
  `;
  goal.style.cssText = `
  position: absolute;
  left:${random(1000, 550)}px;
  top:${random(500, 350)}px;
  left: 45%;
  `;
  score.innerHTML = `Score: ${i}`;
  setTimeout(() => {
    modal.hidden = false;
  }, 1000);
  if (i === 3) {
    score.innerHTML = "You win!";
    neww.pause();
    bbb.play();
    i = 0;
    Continue.innerHTML = "Retry";
  }
});

function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(1020, 500));
console.log(random(520, 260));

Continue.addEventListener("click", () => {
  goal.style.cssText = `
   position: absolute;
   top: 55%;
   left: 45%;`;
  modal.hidden = true;
  ball.style.cssText = `
  position: absolute;
  bottom:10px;
  left: 47%;
`;
  neww.pause();
  neww.currentTime = 0;
  bbb.pause();
  bbb.currentTime = 0;
});
