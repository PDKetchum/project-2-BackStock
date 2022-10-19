// Animation to spin image of boxes when page loads
window.addEventListener("load", (event) => {
  let animation = anime({
    targets: '#boxes',
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

  // Animate when mouse hovers over image
  document.querySelector('#boxes').addEventListener("mouseover", animation.restart)
})

var btn = document.querySelector("#login-btn");

// Add animate.css class to login button
btn.addEventListener("mouseover", (event) => {
  function delay(time) {
    btn.classList.add("animate__animated", "animate__pulse");
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  delay(1000).then(() =>
    btn.classList.remove("animate__animated", "animate__pulse")
  );
});