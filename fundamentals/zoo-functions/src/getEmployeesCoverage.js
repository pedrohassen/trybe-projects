const data = require('../data/zoo_data');

const { employees, species } = data;

// Algumas partes chave da lógica por trás da realização deste requisito, eu devo a ajuda do Guilherme Pinho da Turma 23 - Tribo A, que me ajudou a destravar, quando a criatividade acabou.

// Thanks to Débora Serra pelas dicas na refatoração deste requisito! Reaproveitamente de código, limpeza e otimização.

const findAnimal = (idAnimal, nameOrLocation) => idAnimal.map((animal) => {
  const target = species.find(({ id }) => id === animal);
  return target[nameOrLocation];
});

const createEmployees = (e) => ({
  id: e.id,
  fullName: `${e.firstName} ${e.lastName}`,
  species: findAnimal(e.responsibleFor, 'name'),
  locations: findAnimal(e.responsibleFor, 'location'),
});

function getEmployeesCoverage(employee) {
  if (!employee) return employees.map(createEmployees);
  let findWorker;
  if (employee.name) {
    findWorker = employees
      .find((e) => e.firstName === employee.name || e.lastName === employee.name);
  }
  if (employee.id) {
    findWorker = employees
      .find((e) => e.id === employee.id);
  }
  if (!findWorker) throw new Error('Informações inválidas');
  return createEmployees(findWorker);
}

module.exports = getEmployeesCoverage;
