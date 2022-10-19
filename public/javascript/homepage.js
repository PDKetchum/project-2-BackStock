var addBackroom = document.querySelector("#add");
// var viewFloor = document.querySelector("#view");

addBackroom.addEventListener("mouseover", (event) => {
  function delay(time) {
    addBackroom.classList.add("animate__animated", "animate__pulse");
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  delay(1000).then(() =>
    addBackroom.classList.remove("animate__animated", "animate__pulse")
  );
});

// viewFloor.addEventListener("mouseover", (event) => {
//     function delay(time) {
//         viewFloor.classList.add('animate__animated', 'animate__pulse');
//         return new Promise(resolve => setTimeout(resolve, time));

//     }
//     delay(1000).then(() => viewFloor.classList.remove('animate__animated', 'animate__pulse'));

// });
