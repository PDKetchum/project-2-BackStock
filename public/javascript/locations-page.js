var navigate = document.querySelector('#navigate');

navigate.addEventListener("mouseover", (event) => {
    function delay(time) {
        navigate.classList.add('animate__animated', 'animate__pulse');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    delay(1000).then(() => navigate.classList.remove('animate__animated', 'animate__pulse'));

});
