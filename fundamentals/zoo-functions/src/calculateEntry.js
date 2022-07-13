const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const obj = { child: 0, adult: 0, senior: 0 };
  const childs = entrants.filter(({ age }) => age >= 0 && age < 18).length;
  obj.child += childs;
  const adults = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  obj.adult += adults;
  const seniores = entrants.filter(({ age }) => age >= 50).length;
  obj.senior += seniores;
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const guestNumber = Object.values(countEntrants(entrants));
  const totalFee = (guestNumber[0] * prices.child)
  + (guestNumber[1] * prices.adult)
  + (guestNumber[2] * prices.senior);
  return totalFee;
}

module.exports = { calculateEntry, countEntrants };
