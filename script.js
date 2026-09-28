let cart = [];

// ==============================
// ADD TO CART
// ==============================

function addToCart(name, price) {

```
const existingProduct = cart.find(
    item => item.name === name
);

if (existingProduct) {

    existingProduct.quantity++;

} else {

    cart.push({
        name: name,
        price: price,
        quantity: 1
    });

}

updateCart();

openCart();
```

}

// ==============================
// UPDATE CART
// ==============================

function updateCart() {

```
const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");


cartItems.innerHTML = "";

let total = 0;
let count = 0;


cart.forEach((item, index) => {

    total += item.price * item.quantity;

    count += item.quantity;


    const div =
        document.createElement("div");

    div.className = "cart-item";


    div.innerHTML = `

        <div>
            <strong>${item.name}</strong>

            <p>
                $${item.price}
                ×
                ${item.quantity}
            </p>
        </div>

        <button
            class="remove"
            onclick="removeFromCart(${index})"
        >
            Remove
        </button>

    `;


    cartItems.appendChild(div);

});


cartCount.textContent = count;

cartTotal.textContent =
    total.toFixed(2);
```

}

// ==============================
// REMOVE
// ==============================

function removeFromCart(index) {

```
cart.splice(index, 1);

updateCart();
```

}

// ==============================
// OPEN CART
// ==============================

function openCart() {

```
document
    .getElementById("cartOverlay")
    .classList.add("active");
```

}

// ==============================
// CLOSE CART
// ==============================

function closeCart() {

```
document
    .getElementById("cartOverlay")
    .classList.remove("active");
```

}

// ==============================
// FILTER PRODUCTS
// ==============================

function filterProducts(category) {

```
const products =
    document.querySelectorAll(".product");


products.forEach(product => {

    const productCategory =
        product.dataset.category;


    if (
        category === "all" ||
        productCategory === category
    ) {

        product.style.display = "block";

    } else {

        product.style.display = "none";

    }

});
```

}

// ==============================
// CHECKOUT
// ==============================

function checkout() {

```
if (cart.length === 0) {

    alert("Your cart is empty!");

    return;
}


alert(
    "Checkout system coming soon!"
);
```

}

// ==============================
// CLOSE CART WHEN CLICKING OUTSIDE
// ==============================

document
.getElementById("cartOverlay")
.addEventListener("click", function(event) {

```
    if (event.target === this) {

        closeCart();

    }

});
```
