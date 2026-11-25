
// Get logged-in user
let currentUser = localStorage.getItem("currentUser");

// Common Header
document.getElementById("header").innerHTML = `
    <header>
        <h2>MobileShop</h2>
        <nav>
            <a href="index.html">Home</a>
            <a href="product.html">Product</a>
            ${
                currentUser
                ? `<span>Welcome, ${currentUser}!</span>
                   <button onclick="logout()">Logout</button>`
                : `<a href="signup.html">Signup</a>
                   <a href="login.html">Login</a>`
            }
        </nav>
    </header>
`;

// Common Footer
document.getElementById("footer").innerHTML = `
    <footer>
        <p>MobileShop | Online Shopping Demo</p>
    </footer>
`;

// Logout Function
function logout() {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    window.location.href = "index.html";
}
