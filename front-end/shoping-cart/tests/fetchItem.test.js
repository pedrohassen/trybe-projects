require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('verifies if fetchItem is a function', () => {
    const result = fetchItem;
    expect(typeof result).toEqual('function');
  });

  it('verifies if fetchItem is called with "MLB1615760527" as an argument and check if "fetch" was called', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('verifies if as fetchItem is called with "MLB1615760527" as an argument, "fetch" uses the endpoint "https://api.mercadolibre.com/items/MLB1615760527"', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('verifies if the return of the function fetchItems with the argument "MLB1615760527" is a structure of data equal to the object "item", that is already imported in the archive', async () => {
    expect.assertions(1);
    const result = await fetchItem('MLB1615760527');
    expect(result).toBe(item);
  });

  it('verifies if, calling the function fetchItems without an argument, it returns an error with the message: "You must provide an url"', async () => {
    expect.assertions(1);
    await expect(fetchItem()).rejects.toThrow('You must provide an url');
  });
});
