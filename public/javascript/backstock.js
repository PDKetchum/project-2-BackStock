async function AddProductHandler(event) {
  event.preventDefault();
  // Takes user's input
  const Product = document.querySelector("#ProductName").value.trim();
  const Amount = document.querySelector("#Amount").value.trim();

  // Creates a new product
  const id = document.location.pathname.split("/").at(-1);
  if (Product && Amount) {
    const response = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({
        name: Product,
        quantity: parseInt(Amount),
        location_id: parseInt(id),
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace(`/backstock/${id}`);
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".addPro").addEventListener("click", AddProductHandler);
