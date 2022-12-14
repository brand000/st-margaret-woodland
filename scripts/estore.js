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

  //
  var addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  //
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
 * This is a simple function that is used to remove the items from the rows.
 * It removes the entire row by removing the parent element of the row which contains
 * all the items information.
 * It then calls the update cart total function to calculate the total
 * 
 * @param {*} event the clicking of the remove button
 * 
 * Author: Rahabar Mahmud
 */
function removeCartItem(event) {
  var buttonClicked = event.target;

  //removing the rows
  buttonClicked.parentElement.parentElement.remove();

  //updating cart
  updateCartTotal();
}

/**
 * This is the function used to ugrade the price of the items in the cart.
 * It uses a simple for loop that iterates through all the items in the cart and adds
 * up their prices. It uses the class name of the cart item and the row they are in.
 * It also checks for the quantity of each item selected by the user. The quantity box can be
 * updated and the cart total will increase as well. Then it finally displays the total 
 * price of the items in the cart to the user.
 * 
 * Author: Rahabar Mahmud
 */
function updateCartTotal() {
  //setting up variables for cart item and row of the item
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0; //initializing total to be 0

  //the for loop to go through all the items
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement =
      cartRow.getElementsByClassName("cart-quantity-input")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));

    //the price of the item
    var quantity = quantityElement.value;

    //finding the new total
    total = total + price * quantity;
  }
  //rounding up the results and printing them
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}


/**
 * This function is called when the checkout button is called. It uses a while loop to
 * emptu all the items in the shopping cart. It then updates the cart again by the
 * update cart function to show the new price of the empty cart, which would now be 0.
 * 
 * Author: Rahabar Mahmud
 */
function purchaseClicked() {
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