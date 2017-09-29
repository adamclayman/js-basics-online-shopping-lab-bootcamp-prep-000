var cart = [];
var message;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.ceil(Math.random() * 100);
  var newObj = {[itemName]: itemPrice};
  cart.push(newObj);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  switch (cart.length) {
    case 0:
      message = 'Your shopping cart is empty.';
      console.log(message);
      break;

    case 1:
      message = `In your cart, you have ${cart[0][itemName]} at $${cart[0][itemPrice]}.`;
      console.log(message);
      break;

    case 2:
      message = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      console.log(message);
      break;

    default:
      message = 'In your cart, you have ';
      for (let i=0; i < cart.length - 1; i++) {
        message += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
      message += `and ${cart[cart.length-1][0]} at $${cart[cart.length-1].itemPrice}.`
      console.log(message);
      break;
  }
  return message;
}

function total() {
  var cartTotal = parseInt(0);
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      cartTotal += parseInt(cart[i].itemPrice);
      console.log(cart[i].itemName);
    }
  } else cartTotal = parseInt(0);
  console.log(cartTotal);
  return cartTotal;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
  else {
    message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    console.log(message);
    cart = [];
    return cart;
  }
}
