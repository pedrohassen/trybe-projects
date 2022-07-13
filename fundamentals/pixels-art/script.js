// Caminho para o main.
const main = document.getElementById('main');

// Caminho para o campo de dimensionamento do quadro de pixels.
const input = document.getElementById('board-size');

// Caminho para o botão VQV.
const buttonBoardSize = document.getElementById('generate-board');

// Constante auxiliar para agrupar os botões e fazer uso do flexbox.
const buttonSection = document.getElementById('group-buttons');

// Insere o agrupamento de botões ao main.
main.appendChild(buttonSection);

// src https://css-tricks.com/snippets/javascript/random-hex-color/
// Gera um número hexadecimal, para randomizar as cores.
const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
const colorPalette = document.createElement('section');

// Cria a paleta com as 4 cores, a primeira: 'preta', as 3 seguintes, aleatórias.
const createPalette = () => {
  colorPalette.id = 'color-palette';
  for (let index = 1; index <= 4; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    if (index === 1) {
      color.className = 'color selected';
      color.style.background = 'black';
    } else {
      color.style.background = `#${randomColor()}`;
    }
    colorPalette.appendChild(color);
  }
  main.prepend(colorPalette);
};

// Input para redimensionar o quadro de pixels ao clicar em VQV.
const createInput = () => {
  buttonSection.appendChild(input);
};

// Cria botão VQV.
const createVQV = () => {
  const clean = document.getElementById('generate-board');
  clean.innerText = 'VQV!';
  buttonSection.appendChild(clean);
};

// Cria botão Limpar.
const createResetButton = () => {
  const clean = document.getElementById('clear-board');
  clean.innerText = 'Limpar';
  buttonSection.appendChild(clean);
};

// Limpa o quadro de pixels.
const resetWhenClick = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
};

// Captura o clique no botão Limpar.
const cleanButton = () => {
  const resetBtn = document.getElementById('clear-board');
  resetBtn.addEventListener('click', resetWhenClick);
};

// Muda a cor do pixel branco, de acordo com a cor selecionada.
const changeColorWhenClick = ({ target }) => {
  const paint = document.querySelector('.selected').style.background;
  const block = target;
  block.style.backgroundColor = paint;
};

// Cria o pixel branco.
const createWhitePixels = () => {
  const pushPixels = document.createElement('div');
  pushPixels.className = 'pixel';
  pushPixels.style.background = 'white';
  pushPixels.addEventListener('click', changeColorWhenClick);
  return pushPixels;
};

// Cria a linha de pixels.
const createRows = (width) => {
  const pushLines = document.createElement('div');
  pushLines.className = 'rows';
  for (let index = 1; index <= width; index += 1) {
    const createPixels = createWhitePixels();
    pushLines.appendChild(createPixels);
  }
  return pushLines;
};

// Empilha as linhas, criando o bloco, na mesma altura que o número de elementos em cada linha.
const createBoard = (heigth = 5) => {
  const lineOfPixels = document.getElementById('pixel-board');
  lineOfPixels.innerHTML = '';
  for (let index = 1; index <= heigth; index += 1) {
    const receiveRows = createRows(heigth);
    lineOfPixels.appendChild(receiveRows);
  }
  main.appendChild(lineOfPixels);
};

// Lógica por trás da escolha da dimensão do quadro de pixels.
const applyInput = () => {
  let changeSize = input.value;
  if (!changeSize) {
    alert('Board inválido!');
  } if (changeSize > 50) {
    changeSize = 50;
  } if (changeSize <= 5) {
    changeSize = 5;
    createBoard(changeSize);
  } else {
    createBoard(changeSize);
  }
};

// Captura o clique no VQV.
buttonBoardSize.addEventListener('click', applyInput);

// Seleciona a cor da paleta, após o clique.
const selectColor = () => {
  const findColor = document.querySelectorAll('.color');
  findColor.forEach((item) => {
    item.addEventListener('click', (event) => {
      const color = event.target;
      const selected = document.getElementsByClassName('selected')[0];
      selected.classList.remove('selected');
      color.classList.add('selected');
      return selected;
    });
  });
};

// Chamada da maioria das funções.
window.onload = () => {
  createPalette();
  createInput();
  createVQV();
  createResetButton();
  createBoard();
  selectColor();
  cleanButton();
};
