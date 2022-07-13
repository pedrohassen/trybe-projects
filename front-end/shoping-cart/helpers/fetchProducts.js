const fetchProducts = async (product) => {
  if (!product) throw new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const fetchAPI = await fetch(url);
  const data = await fetchAPI.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
