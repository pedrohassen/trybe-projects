const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  if (employees
    .find(({ managers }) => (managers).includes(id))) {
    return true;
  } return false;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } if (isManager(managerId)) {
    return employees
      .filter(({ managers }) => (managers).includes(managerId))
      .map(({ firstName, lastName }) => (`${firstName} ${lastName}`));
  }
}

module.exports = { isManager, getRelatedEmployees };
