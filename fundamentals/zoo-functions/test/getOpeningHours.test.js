const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se a função getOpeningHours existe', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Verifica o retorno quando não é passado nenhum parâmetro', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Verifica se na função getOpeningHours, quando passado o argumento "Monday" e "09:00-AM" deve retornar "The zoo is closed", ou em algum outro dia, quando o horário não é mais de funcionamento, deve retornar a mesma mensagem', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Friday', '11:00-PM')).toEqual('The zoo is closed');
  });
  it('Verifica na função getOpeningHours os seus argumentos passados e seus respectivos retornos', () => {
    expect(getOpeningHours('TuEsDaY', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Verifica na função getOpeningHours, se o segundo parâmetro é um número', () => {
    expect(() => getOpeningHours('Tuesday', 'Bazinga')).toThrow('The hour should represent a number');
  });
  it('Verifica na função getOpeningHours, se o segundo parâmetro, usa a abreviação "AM" ou "PM"', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica na função getOpeningHours, se o segundo parâmetro é uma hora válida, ou seja, um número entre 0 e 12, assim como os minutos, que tem que ser entre 0 e 59', () => {
    expect(() => getOpeningHours('Saturday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Saturday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Verifica na função getOpeningHours, se o primeiro parâmetro é um dia válido', () => {
    expect(() => getOpeningHours('Abacate', '07:30-PM')).toThrow('The day must be valid. Example: Monday');
  });
});
