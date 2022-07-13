const data = require('../data/zoo_data');

const { species } = data;

const ifNoParameter = () => {
  const key = species.map(({ name }) => name);
  const value = species.map(({ residents }) => residents.length);
  const obj = key.reduce((acc, curr, index) => ({ ...acc, [curr]: value[index] }), {}); // src: https://bobbyhadz.com/blog/javascript-create-object-from-two-arrays
  return obj;
};

const ifCountingSimple = (animal) => {
  const findAnimal = Object.values(animal)[0];
  return species.filter(({ name }) => name === findAnimal)
    .reduce((acc, { residents }) => acc + residents.length, 0);
};

const ifCountingComplex = (animal) => {
  const findAnimal = Object.values(animal)[0];
  const findSex = Object.values(animal)[1];
  return species
    .filter(({ name }) => name === findAnimal)[0].residents
    .filter(({ sex }) => sex === findSex).length;
};

function countAnimals(animal) {
  if (!animal) {
    return ifNoParameter();
  }
  if (Object.keys(animal)[1] === undefined) {
    return ifCountingSimple(animal);
  }
  if (Object.keys(animal)[1].includes('sex')) {
    return ifCountingComplex(animal);
  }
}

module.exports = countAnimals;
