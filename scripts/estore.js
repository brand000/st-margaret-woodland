/*
estore.js
Author: Rahabar Mahmud
Purpose: This script file contains intilization and functions called in the ecommerce pages of the site
This is the main javascript file that makes the estore functional. 

*/

/**
 * https://www.youtube.com/watch?v=YeFzkC2awTM
 */

//a
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

/**
 * The ready function. This function is called when the body is loaded.
 * Author: Rahabar Mahmud (A00446187)
 */
function ready() {

  //this checks if the remove item from cart button has been clicked. 'btn-close' is the id of the remove button.
  var removeCartItemButtons = document.getElementsByClassName("btn-close");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  //
  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}

/**
 * 
 * @param {*} event 
 */
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

/**
 * 
 * @param {*} event the clicking of the remove button
 */
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

/**
 * 
 */
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;

  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement =
      cartRow.getElementsByClassName("cart-quantity-input")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));

    var quantity = quantityElement.value;

    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}


/**
 * 
 */
function purchaseClicked() {
  /**alert("Thank you for your purchase");*/
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}


/**
 * 
 * @param {*} event 
 */
function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

/**
 * 
 * @param {*} title 
 * @param {*} price 
 * @param {*} imageSrc 
 * @returns 
 */
function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("tr");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];

  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  var cartRowContents = `
   
        <td><img class="cart-item-image" src="${imageSrc}" alt=""></td>
        <td><span class="cart-item-title">${title}</span></td>
        <td><span class="cart-price cart-column">${price}</span></td>
        <td><input class="cart-quantity-input" type="number" value="1"></td>
        <td><button type="button" class="btn-close">Remove Item</button></td>
        `;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-close")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

let popup = document.getElementById('popup');

function openPopup(){
  popup.classList.add('open-popup');
}

function closePopup(){
  popup.classList.remove('open-popup');
}