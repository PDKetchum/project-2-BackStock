// import anime.js
// const anime = require('animejs');

var btn = document.querySelector("#btn");

btn.addEventListener("mouseover", (event) => {
  function delay(time) {
    btn.classList.add("animate__animated", "animate__pulse");
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  delay(1000).then(() =>
    btn.classList.remove("animate__animated", "animate__pulse")
  );
});
