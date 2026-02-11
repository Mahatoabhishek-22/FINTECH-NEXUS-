// Backend URL
const API_URL = "http://127.0.0.1:5000"; // change to your PC LAN IP if using mobile

// Add product
function addProduct() {
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);

  if(!name || isNaN(price) || isNaN(quantity)) {
    alert("Please fill all fields correctly");
    return;
  }

  fetch(`${API_URL}/add_product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price, quantity })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    loadProducts(); // refresh table
  })
  .catch(err => {
    console.error(err);
    alert("Error connecting to backend");
  });
}