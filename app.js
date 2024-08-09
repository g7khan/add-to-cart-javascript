// script.js

// Cart array to store cart items
let cart = [];

// Function to add item to the cart
function addToCart(name, price) {
    // Check if item already exists in the cart
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // Increase quantity if item already exists
        existingItem.quantity += 1;
    } else {
        // Add new item to the cart
        const cartItem = {
            name: name,
            price: parseFloat(price),
            quantity: 1
        };
        cart.push(cartItem);
    }

    // Update cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalAmountContainer = document.querySelector('.total-amount');

    // Clear the existing items
    cartItemsContainer.innerHTML = '';

    // Update total amount
    let totalAmount = 0;

    // Add each item to the cart display
    cart.forEach(item => {
        const cartItemElement = document.createElement('li');
        cartItemElement.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
        cartItemsContainer.appendChild(cartItemElement);

        totalAmount += item.price * item.quantity;
    });

    totalAmountContainer.textContent = totalAmount.toFixed(2);
}

// Event listeners for Add to Cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const name = this.getAttribute('data-name');
        const price = this.getAttribute('data-price');
        addToCart(name, price);
    });
});
