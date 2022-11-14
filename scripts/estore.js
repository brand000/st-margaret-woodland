/**
 * https://www.youtube.com/watch?v=YeFzkC2awTM
 */


var removeCartItem = document.getElementsByClassName('btn-close')

for (var i = 0; i < removeCartItem.length; i++){
    var button = removeCartItem[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
        
    
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0


    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quanity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))

        var quanity = quantityElement.value

        total = total + (price * quanity)
        
    }   
}
