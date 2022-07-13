const addedItem = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartTotalPrice = async () => {
  const sumPrices = document.querySelector('.total-price');
  const list = document.querySelectorAll('.cart__item');
  const prices = Array.from(list);
  
  let sum = 0;
  prices.forEach((el) => {
    sum += +el.innerHTML.split('$')[1];
  });
  sumPrices.innerHTML = sum;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = ({ target }) => {
  target.remove();
  saveCartItems(addedItem.innerHTML);
  cartTotalPrice();
};

const removeItems = () => {
  const cartItems = addedItem.childNodes;
  cartItems.forEach((el) => el.addEventListener('click', cartItemClickListener));
};

const removeAllItems = () => {
  const btnEraseAll = document.querySelector('.empty-cart');
  btnEraseAll.addEventListener('click', () => {
    addedItem.innerHTML = '';
    cartTotalPrice();
  });
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const removeLoading = () => document.querySelector('.loading').remove();

const computerList = async () => {
  const li = document.querySelector('.items');
  const data = await fetchProducts('computador');
  const { results } = data;
  results.forEach(({ id, title, thumbnail }) => {
    const items = { sku: id, name: title, image: thumbnail };
    li.appendChild(createProductItemElement(items));
  });
  removeLoading();
};

const productToShopCart = async ({ target }) => {
  const getId = getSkuFromProductItem(target.parentNode);
  const data = await fetchItem(getId);
  const { id, title, price } = data;
  console.log(data);
  const selected = { sku: id, name: title, salePrice: price };
  addedItem.appendChild(createCartItemElement(selected));
  saveCartItems(addedItem.innerHTML);
  cartTotalPrice();
};

const btnAddToCart = () => {
  const btn = document.querySelectorAll('.item__add');
  btn.forEach((el) => {
    el.addEventListener('click', productToShopCart);
  });
};

window.onload = async () => {
  await computerList();
  btnAddToCart();
  addedItem.innerHTML = getSavedCartItems();
  removeItems();
  cartTotalPrice();
  removeAllItems();
};
