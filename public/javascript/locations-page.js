var navigate1 = document.querySelector('#navigate1');
var navigate2 = document.querySelector('#navigate2');
var navigate3 = document.querySelector('#navigate3');
var navigate4 = document.querySelector('#navigate4');
var navigate5 = document.querySelector('#navigate5');
var navigate6 = document.querySelector('#navigate6');
var navigate7 = document.querySelector('#navigate7');
var navigate8 = document.querySelector('#navigate8');






// Animation for each button

navigate1.addEventListener("mouseover", (event) => {
    function delay(time) {
        navigate1.classList.add('animate__animated', 'animate__pulse');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    delay(1000).then(() => navigate1.classList.remove('animate__animated', 'animate__pulse'));

});
navigate2.addEventListener("mouseover", (event) => {
    function delay(time) {
        navigate2.classList.add('animate__animated', 'animate__pulse');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    delay(1000).then(() => navigate2.classList.remove('animate__animated', 'animate__pulse'));

});
navigate3.addEventListener("mouseover", (event) => {
    function delay(time) {
        navigate3.classList.add('animate__animated', 'animate__pulse');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    delay(1000).then(() => navigate3.classList.remove('animate__animated', 'animate__pulse'));

});
navigate4.addEventListener("mouseover", (event) => {
    function delay(time) {
        navigate4.classList.add('animate__animated', 'animate__pulse');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    delay(1000).then(() => navigate4.classList.remove('animate__animated', 'animate__pulse'));

});
navigate5.addEventListener("mouseover", (event) => {
    function delay(time) {
        navigate5.classList.add('animate__animated', 'animate__pulse');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    delay(1000).then(() => navigate5.classList.remove('animate__animated', 'animate__pulse'));

});
navigate6.addEventListener("mouseover", (event) => {
    function delay(time) {
        navigate6.classList.add('animate__animated', 'animate__pulse');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    delay(1000).then(() => navigate6.classList.remove('animate__animated', 'animate__pulse'));

});
navigate7.addEventListener("mouseover", (event) => {
    function delay(time) {
        navigate7.classList.add('animate__animated', 'animate__pulse');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    delay(1000).then(() => navigate7.classList.remove('animate__animated', 'animate__pulse'));

});
navigate8.addEventListener("mouseover", (event) => {
    function delay(time) {
        navigate8.classList.add('animate__animated', 'animate__pulse');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    delay(1000).then(() => navigate8.classList.remove('animate__animated', 'animate__pulse'));

});