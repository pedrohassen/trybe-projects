const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função HandlerElephants existe', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verifica se a função HandlerElephants só aceita strings', () => {
    expect(handlerElephants(4)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se a função HandlerElephants retorna undefined caso não receba parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se a função HandlerElephants retorna as informações referentes aos elefantes conforme os argumentos passados', () => {
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica se a função HandlerElephants retorna null, caso uma string inexistente no objeto, seja passada', () => {
    expect(handlerElephants('vem null')).toBeNull();
    expect(handlerElephants('azeite')).toBe(null);
    expect(handlerElephants('Ayrton Senna')).toEqual(null);
  });
});
