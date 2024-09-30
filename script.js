// Define the product data
const products = [
  { name: "Smartphone", category: "Electronics", price: 299 },
  { name: "Laptop", category: "Electronics", price: 799 },
  { name: "T-shirt", category: "Clothing", price: 20 },
  { name: "Headphones", category: "Electronics", price: 99 },
  { name: "Jeans", category: "Clothing", price: 50 },
];

// Function to display products
function displayProducts(productArray) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear the current list

  productArray.forEach((product) => {
    // Create a container for each product
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    // Product details
    productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;

    productList.appendChild(productItem);
  });
}

// Function to filter products by category
function filterProducts(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts);
  }
}

// Display all products on initial page load
window.onload = () => {
  displayProducts(products);
};
