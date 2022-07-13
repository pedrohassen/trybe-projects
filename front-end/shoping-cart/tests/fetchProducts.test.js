require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('verifies if fetchProducts is a function', () => {
    const result = fetchProducts;
    expect(typeof result).toEqual('function');
  });

  it('verifies if fetchProductsis called with "computador" as an argument and check if "fetch" is called', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('verifies if fetchProducts is called with "computador" as an argument, and check if "fetch" uses the endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('verifies if the return of the function fetchProducts with the argument "computador" is a structure of data equal to the object "computadorSearch", that is already imported in the archive', async () => {
    expect.assertions(1);
    const result = await fetchProducts('computador');
    expect(result).toBe(computadorSearch);
  });
  
  it('verifies if, calling the function fetchProducts without an argument, it returns an error with the message: "You must provide an url"', async () => {
    expect.assertions(1);
    await expect(fetchProducts()).rejects.toThrow('You must provide an url');
  });
});
