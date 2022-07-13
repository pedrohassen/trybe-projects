const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, verifiedAge) {
  const findAnimal = species.find(({ name }) => name === animal);
  return findAnimal.residents.every(({ age }) => age >= verifiedAge);
}

module.exports = getAnimalsOlderThan;
