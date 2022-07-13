const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {

  it('Verifies if, when called with an argument of "<ol><li>Item</li></ol>", the function saveCartItems, the method "localStorage.setItem" is called', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  
  it('Verifies if, when called with an argument of "<ol><li>Item</li></ol>", the function saveCartItems, the method "localStorage.setItem" is called with two parameters, the first being "cartItems" and the second being the value being used as argument for saveCartItems', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});
