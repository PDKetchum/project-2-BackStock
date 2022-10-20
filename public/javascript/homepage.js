var addBackroom = document.querySelector("#add");

// Creates pulse animation on button
addBackroom.addEventListener("mouseover", (event) => {
  function delay(time) {
    addBackroom.classList.add("animate__animated", "animate__pulse");
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  delay(1000).then(() =>
    addBackroom.classList.remove("animate__animated", "animate__pulse")
  );
});
