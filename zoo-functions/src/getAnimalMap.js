const data = require('../data/zoo_data');

const { species } = data;

// Thanks to Rafael França e Wan Lucas, ambos da Turma 23, Tribo B, que me ajudaram pra caramba a expandir minha lógica durantes os estudos

function getNamesAndSex(param, param2) {
  const array = [];
  param.residents.forEach(({ name, sex }) => {
    if (param2) {
      if (param2 === sex) array.push(name);
    } else {
      array.push(name);
    }
  });
  return array;
}

function verifyParams(param) {
  const locations = { NE: [], NW: [], SE: [], SW: [] };
  if (!param || !param.includeNames) {
    species.forEach((specie) => locations[specie.location].push(specie.name));
    return locations;
  }
  species.forEach((specie) => {
    const names = {};
    names[specie.name] = getNamesAndSex(specie, param.sex);
    if (param.sorted) names[specie.name].sort();
    locations[specie.location].push(names);
  });
  return locations;
}

function getAnimalMap(options) {
  return verifyParams(options);
}

module.exports = getAnimalMap;
