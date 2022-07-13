const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const firstAnimalById = employees.filter((e) => e.id === id)[0].responsibleFor[0];
  const getOldest = species
    .filter((e) => e.id === firstAnimalById)[0].residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(getOldest);
}

module.exports = getOldestFromFirstSpecies;
