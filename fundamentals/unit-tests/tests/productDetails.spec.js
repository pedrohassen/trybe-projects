const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(productDetails('água', 'sabão')).toBeInstanceOf(Array);
    expect(productDetails('água', 'sabão').length).toBe(2);
    expect(productDetails('água', 'sabão')[0]).toBeInstanceOf(Object);
    expect(productDetails('água', 'sabão')[1]).toBeInstanceOf(Object);
    expect(productDetails('água', 'refri')).not.toEqual([
      { name: 'Água', details: { productId: 'Água123' } },
      { name: 'Sabão', details: { productId: 'Sabão123' } }
    ]);
    expect(productDetails('água', 'sabão')).toEqual([
      { name: 'água', details: { productId: 'água123' } },
      { name: 'sabão', details: { productId: 'sabão123' } }
    ]);
  });
});
