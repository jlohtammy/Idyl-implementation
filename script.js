function revealBill() {
    var x = document.getElementById("billingForm");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function swapPickup() {
    var x = document.getElementById("pickupSection");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// SIDE CART
const openBtn = document.getElementById('open_cart_ btn')
const cart = document.getElementById('sidecart')
const closeBtn = document.getElementById('close_btn')

openBtn.addEventListener('click' , openCart)
closeBtn.addEventListener('click' , closeCart)

// Open Cart
function openCart() {
    cart.classList.add('open')
}

// Close Cart
function closeCart(){
    cart.classList.remove('close')
}

// let openCart = document.querySelector('.open_side_cart')
// let closeCart = document.querySelector('.close_btn')

// openCart.addEventListener('click', ()=>{
//     body.classList.add('active');
// })
// closeCart.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })
