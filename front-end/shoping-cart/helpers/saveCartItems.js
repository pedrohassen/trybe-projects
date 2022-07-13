const saveCartItems = (orderedlist) => localStorage.setItem('cartItems', orderedlist);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
