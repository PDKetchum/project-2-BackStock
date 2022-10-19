var box = document.querySelector('.box')

box.addEventListener("mouseover", (event) => {

})

let animation = anime({
    targets: '.boxes',
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
      },
      delay: 250,
    
});

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
