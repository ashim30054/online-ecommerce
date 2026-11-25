
// Create Product Object
let product = {
    id: 101,
    name: "Wireless Headphones",
    price: 1499,
    category: "Electronics",
    image: "images/product2.JPG",
    description: "Wireless Bluetooth Headphones with clear sound."
};

// Store product if it does not already exist
localStorage.setItem("product", JSON.stringify(product));
console.log("Product stored successfully!");

// if (!localStorage.getItem("product")) {

//     localStorage.setItem("product", JSON.stringify(product));

// }
