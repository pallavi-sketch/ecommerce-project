const products = [
  { id: 1, name: "Shirt", price: 500 },
  { id: 2, name: "Shoes", price: 1000 },
  { id: 3, name: "Watch", price: 1500 }
];

let cart = [];

const productDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");

// Show products
products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");

  div.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: ₹${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;

  productDiv.appendChild(div);
});

// Add to cart
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  displayCart();
}

// Show cart
function displayCart() {
  cartDiv.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartDiv.appendChild(li);
  });

  const totalElement = document.createElement("h3");
  totalElement.textContent = "Total: ₹" + total;
  cartDiv.appendChild(totalElement);
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}