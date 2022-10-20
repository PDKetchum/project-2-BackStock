var login = document.querySelector("#login-button");
var signup = document.querySelector("#signup-button");

// Creates pulse animation on buttons
login.addEventListener("mouseover", function (event) {
  function delay(time) {
    login.classList.add("animate__animated", "animate__pulse");
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  delay(1000).then(() =>
    login.classList.remove("animate__animated", "animate__pulse")
  );
});

signup.addEventListener("mouseover", function (event) {
  function delay(time) {
    signup.classList.add("animate__animated", "animate__pulse");
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  delay(1000).then(() =>
    signup.classList.remove("animate__animated", "animate__pulse")
  );
});
