const btnCreateLetter = document.querySelector('#criar-carta');

const paragraph = document.querySelector('#carta-gerada');

const input = document.querySelector('#carta-texto');

const pCounter = document.getElementById('carta-contador');

const randomizeClasses = (span) => {
  const groups = [
    ['newspaper', 'magazine1', 'magazine2'],
    ['medium', 'big', 'reallybig'],
    ['rotateleft', 'rotateright'],
    ['skewleft', 'skewright'],
  ];
  const spanWithClass = span;
  spanWithClass.classList = '';
  for (let index = 0; index < groups.length; index += 1) {
    span.classList.add(groups[index][Math.floor(Math.random() * groups[index].length)]);
  }
};

const deleteSpan = () => {
  while (paragraph.hasChildNodes()) paragraph.removeChild(paragraph.firstChild);
};

const createLetter = () => {
  deleteSpan();
  const inputToSplit = input.value.split(' ');
  inputToSplit.forEach((element) => {
    const span = document.createElement('span');
    span.innerText = element;
    if (element === '' || element === ' ') {
      paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
    }
    randomizeClasses(span);
    span.addEventListener('click', (e) => {
      randomizeClasses(e.target);
    });
    paragraph.appendChild(span);
    pCounter.innerText = inputToSplit.length;
  });
};

btnCreateLetter.addEventListener('click', createLetter);
