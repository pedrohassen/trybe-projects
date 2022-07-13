// Desafio 11
const checking = (testPhoneNumbers) => {
  for (let numbers in testPhoneNumbers) {
    if (testPhoneNumbers[numbers] < 0 || testPhoneNumbers[numbers] > 9) {
      return false;
    }
  } return true;
};

function repeater(timesChecker) {
  for (let numbers in timesChecker) {
    let repeats = 0;
    for (let check in timesChecker) {
      if (timesChecker[numbers] === timesChecker[check]) {
        repeats += 1;
      }
    } if (repeats >= 3) return false;
  }
  return true;
}

function generatePhoneNumber(array) {
  let ddd = array.slice(0, 2).join('');
  let firstPart = array.slice(2, 7).join('');
  let lastPart = array.slice(-4).join('');
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  if (!checking(array) || !repeater(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (checking(array) && repeater(array)) {
    return `(${ddd}) ${firstPart}-${lastPart}`;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let conditionA = (lineA > lineB + lineC) || (lineA < Math.abs(lineB - lineC));
  let conditionB = (lineB > lineA + lineC) || (lineB < Math.abs(lineA - lineC));
  let conditionC = (lineC > lineB + lineA) || (lineC < Math.abs(lineB - lineA));
  if (conditionA && conditionB && conditionC) return false;
  if (!conditionA || !conditionB || !conditionC) {
    return true;
  }
}

// Desafio 13
function hydrate(string) {
  let regex = /\d+/g;
  let numberString = string.match(regex);
  string = numberString;
  let add = 0;

  for (let letter in string) {
    add += Number(string[letter]);
  }
  if (add > 1) return `${add} copos de água`;
  return `${add} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
