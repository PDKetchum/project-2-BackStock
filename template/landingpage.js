var login = document.querySelector('#login');

login.addEventListener("mouseover", (event) => {
    function delay(time) {
        login.classList.add('animate__animated', 'animate__pulse');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    delay(1000).then(() => login.classList.remove('animate__animated', 'animate__pulse'));

});