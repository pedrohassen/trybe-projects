const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter((obj) => ids.includes(obj.id));
}

module.exports = getSpeciesByIds;
