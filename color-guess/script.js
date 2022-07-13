const question = document.getElementById('rgb-color');
const colors = document.getElementsByClassName('ball');
const answer = document.getElementById('answer');
const btnReset = document.getElementById('reset-game');
const score = document.getElementById('score');

// source: https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

let randomBall = randomBetween(0, 5);

const generateColors = () => {
  for (let index = 0; index <= 5; index += 1) {
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    colors[index].style.background = rgb;
  }
};

generateColors();

const guessColor = colors[randomBall].style.background;
question.innerText = guessColor;

score.innerText = 0;

const guessIt = (color) => {
  for (let index = 0; index <= 5; index += 1) {
    colors[index].addEventListener('click', ({ target }) => {
      if (target.style.background === color) {
        answer.innerText = 'Acertou!';
        const scoreWay = score.innerText;
        let newScore = parseInt(scoreWay, 10);
        newScore += 3;
        score.innerText = newScore;
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    });
  }
};

guessIt(guessColor);

btnReset.addEventListener('click', () => {
  colors.innerText = '';
  generateColors();
  randomBall = randomBetween(0, 5);
  const guessColor2 = colors[randomBall].style.background;
  question.innerText = guessColor2;
  answer.innerText = 'Escolha uma cor';
  guessIt(guessColor2);
});
