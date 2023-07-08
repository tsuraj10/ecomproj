let loginForm = document.querySelector('.login-form');

document.querySelector('#btn3').onclick =()=>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll=()=>{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// Get all "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add click event listener to each button
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get product details
    var productName = this.parentNode.querySelector('h5').innerText;
    var productprice = this.parentNode.querySelector('p').innerText;

    // Add the product to the cart
    addToCart(productName, productprice);
  });
});

// Cart array to store added products
var cart = [];

// Function to add a product to the cart
function addToCart(name, price) {
  var product = {
    name: name,
    description: price
  };

  cart.push(product);

  // Optional: Display a confirmation message
  console.log('Product added to cart:', product);
}
