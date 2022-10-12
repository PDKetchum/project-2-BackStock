var AddBtn = document.querySelector('#Additems');
var BackBtn =document.querySelector('#back'); 

AddBtn.addEventListener("mouseover", function(event) {
    function delay(time) {
        AddBtn.classList.add('animate__animated', 'animate__pulse');
    return new Promise(resolve =>setTimeout(resolve, time));
    
    }
    delay(1000).then(() => AddBtn.classList.remove('animate__animated', 'animate__pulse'));
    
});
BackBtn.addEventListener("mouseover", function(event) { 
    function delay(time) {
        BackBtn.classList.add('animate__animated', 'animate__pulse');
    return new Promise(resolve =>setTimeout(resolve, time));
    
    }
    delay(1000).then(() => BackBtn.classList.remove('animate__animated', 'animate__pulse'));
    
})