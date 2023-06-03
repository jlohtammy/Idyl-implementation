function reveal() {
    var x = document.getElementById("billingForm");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
  }
}

// SIDE CART
const openBtn = document.getElementById('open_cart_btn')
const cart = document.getElementById('sidecart')
const closeBtn = document.getElementById('close_btn')

openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)

// Open Cart
function openCart(){
    cart.classList.add('open')
}

// Close Cart
function closeCart(){
    cart.classList.remove('open')
}