const email = document.getElementById('email');
const password = document.getElementById('password');
const btnEnter = document.getElementById('btnEnter');
const btnSubmit = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const maxChars = 500;
const eForm = document.getElementById('evaluation-form');
const nome = document.getElementById('input-name');
const lastname = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const house = document.getElementById('house');
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const newForm = (e) => {
  e.preventDefault();

  const family = $('input[name=family]:checked');
  const subjects = $$('.subject:checked');
  const rating = $('input[name=rate]:checked');
  const show = $('#form-data');

  eForm.style.display = 'none';
  show.classList.toggle('display');
  show.innerText = `
  Nome: ${nome.value} ${lastname.value}
  Email: ${emailInput.value}
  Casa: ${house.value}
  Família: ${family.value}
  Matérias: ${[...subjects].map((subject) => subject.value).join(', ')}
  Avaliação: ${rating.value}
  Observações: ${textArea.value}
  `;
};

eForm.addEventListener('submit', newForm);

const validate = () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const enableSubmit = () => {
  if (checkBox.checked) {
    btnSubmit.disabled = false;
    btnSubmit.style.backgroundColor = 'rgb(50, 167, 145)';
  } else if (!checkBox.checked) {
    btnSubmit.disabled = true;
    btnSubmit.style.backgroundColor = 'rgb(244, 237, 217)';
  }
};

enableSubmit();

btnEnter.addEventListener('click', validate);
checkBox.addEventListener('click', enableSubmit);

// scr = https://stackabuse.com/character-counter-for-text-areas-with-vanilla-javascript/

const countChars = () => {
  const typedCharacters = textArea.value.length;
  const dinamicCounter = maxChars - typedCharacters;
  counter.textContent = `${dinamicCounter} /500`;
};

textArea.addEventListener('input', countChars);

// Com método FormData, alterando 'names' dos inputs pra passar em requisitos conflitantes.

// const eForm = document.getElementById('evaluation-form');
// const $ = (selector) => document.querySelector(selector);
// const show = $('#form-data');

// const newForm = (e) => {
//   e.preventDefault();

//   const dataForm = new FormData(eForm);
//   eForm.style.display = 'none';

//   show.innerText = `
//   Nome: ${dataForm.get('Nome')} ${dataForm.get('Sobrenome')}
//   Email: ${dataForm.get('Email')}
//   Casa: ${dataForm.get('Selection')}
//   Família: ${dataForm.get('family')}
//   Matérias: ${dataForm.getAll('Conteúdo').join(', ')}
//   Avaliação: ${dataForm.get('rate')}
//   Observações: ${dataForm.get('textarea')}
//   `;
// };

// eForm.addEventListener('submit', newForm);
