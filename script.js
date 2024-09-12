let quantity = 0;

const quantityDisplay = document.getElementById('quantity');
const addToCartBtn = document.getElementById('add-to-cart');
const increaseQtyBtn = document.getElementById('increase-qty');
const decreaseQtyBtn = document.getElementById('decrease-qty');
const resetBtn = document.getElementById('reset-cart');


function updateQuantity() {
  quantityDisplay.textContent = quantity;
  
 
  increaseQtyBtn.disabled = quantity === 0 && !addToCartBtn.disabled;
  decreaseQtyBtn.disabled = quantity === 0;
  resetBtn.disabled = quantity === 0;
}

addToCartBtn.addEventListener('click', () => {
  quantity = 1; 
  addToCartBtn.disabled = true; 
  increaseQtyBtn.disabled = false; 
  resetBtn.disabled = false;
  updateQuantity();
});


increaseQtyBtn.addEventListener('click', () => {
  quantity++;
  updateQuantity();
});


decreaseQtyBtn.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
  }
  updateQuantity();
});


resetBtn.addEventListener('click', () => {
  quantity = 0;
  addToCartBtn.disabled = false; 
  updateQuantity();
});

updateQuantity();
