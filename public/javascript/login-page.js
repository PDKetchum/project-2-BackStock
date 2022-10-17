var login = document.querySelector('#login');
var signup =document.querySelector('#signup'); 

login.addEventListener("mouseover", function(event) {
    function delay(time) {
        login.classList.add('animate__animated', 'animate__pulse');
    return new Promise(resolve =>setTimeout(resolve, time));
    
    }
    delay(1000).then(() => login.classList.remove('animate__animated', 'animate__pulse'));
    
});

signup.addEventListener("mouseover", function(event) { 
    function delay(time) {
        signup.classList.add('animate__animated', 'animate__pulse');
    return new Promise(resolve =>setTimeout(resolve, time));
    
    }
    delay(1000).then(() => signup.classList.remove('animate__animated', 'animate__pulse'));
    
})