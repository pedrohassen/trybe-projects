const fetchItem = async (item) => {
  if (!item) throw new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/items/${item}`;
  const fetchAPI = await fetch(url);
  const data = await fetchAPI.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
