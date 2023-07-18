let open = document.querySelector(".open");
let start = document.querySelector(".start");
let quit = document.querySelector(".quit");
let container = document.querySelector(".container");
let wrapper = document.querySelector(".wrapper");
let audio = document.getElementById("audio");
let game = document.querySelector(".game");
let a = document.getElementById("a");

game.hidden = true;
wrapper.hidden = true;

open.addEventListener("click", () => {
  container.hidden = true;
  wrapper.hidden = false;
  audio.play();
});

quit.addEventListener("click", () => {
  container.hidden = false;
  wrapper.hidden = true;
  audio.pause();
  audio.currentTime = 0;
});

start.addEventListener("click", () => {
  container.hidden = true;
  wrapper.hidden = true;
  game.hidden = false;
  audio.pause();
  audio.currentTime = 0;
});

a.addEventListener("click", () => {
  neww.play();
});

const click = (e) => {
  console.log(e);
};
