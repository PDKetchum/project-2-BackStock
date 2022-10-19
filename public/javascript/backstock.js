async function AddProductHandler(event){
    event.preventDefault();
console.log("in event")
const Product =document.querySelector('#ProductName').value.trim();
const Amount =document.querySelector('#Amount').value.trim();

const id=document.location.pathname.split("/").at(-1);
if(Product && Amount){
    console.log("Accepted");
   
    const response= await fetch('/api/product', {
        method: 'POST',
        body: JSON.stringify({
            name: Product,
            quantity: parseInt(Amount),
            location_id: parseInt(id)
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok){
        console.log('added to table')
       document.location.replace(`/backstock/${id}`)
    }
    else {
        alert(response.statusText)
    }
}
}

document.querySelector('.addPro')
.addEventListener('click', AddProductHandler );
 