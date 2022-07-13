// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let splitArray = phrase.split(' ');
  return splitArray;
}

// Desafio 4
function concatName(words) {
  let concatWord = `${words[words.length - 1]}, ${words[0]}`;
  return concatWord;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  let result = wins + ties;
  return result;
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = numbersArray[0];
  let counter = 0;
  for (let index in numbersArray) {
    if (numbersArray[index] > highestNumber) {
      highestNumber = numbersArray[index];
      counter = 1;
    } else if (highestNumber === numbersArray[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);
  if (distance1 < distance2) {
    return 'cat1';
  } if (distance1 > distance2) {
    return 'cat2';
  } if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index of array) {
    if (index % 3 === 0 && index % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (index % 3 === 0) {
      newArray.push('fizz');
    } else if (index % 5 === 0) {
      newArray.push('buzz');
    } else if (index % 3 !== 0 && index % 5 !== 0) {
      newArray.push('bug!');
    }
  } return newArray;
}

// Desafio 9
function encode(string) {
  let codex = '';
  let message = '';
  for (let value of string) {
    if (value === 'a') {
      codex = 1;
      message += codex;
    } else if (value === 'e') {
      codex = 2;
      message += codex;
    } else if (value === 'i') {
      codex = 3;
      message += codex;
    } else if (value === 'o') {
      codex = 4;
      message += codex;
    } else if (value === 'u') {
      codex = 5;
      message += codex;
    } else {
      message += value;
    }
  } return message;
}

encode('hi there!');

function decode(string) {
  let codex = '';
  let message = '';
  for (let value of string) {
    if (value === '1') {
      codex = 'a';
      message += codex;
    } else if (value === '2') {
      codex = 'e';
      message += codex;
    } else if (value === '3') {
      codex = 'i';
      message += codex;
    } else if (value === '4') {
      codex = 'o';
      message += codex;
    } else if (value === '5') {
      codex = 'u';
      message += codex;
    } else {
      message += value;
    }
  } return message;
}

// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) return 'Vazio!';

  tech.sort();

  let array = [];

  for (let index of tech) {
    let object = {
      tech: undefined,
      name: undefined,
    };
    object.tech = index;
    object.name = name;
    array.push(object);
  }

  return array;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
