const inputList = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const btnCreateTask = document.getElementById('criar-tarefa');
const btnEraseAll = document.getElementById('apaga-tudo');
const btnRemoveMarkedTasks = document.getElementById('remover-finalizados');
const btnSaveTasks = document.getElementById('salvar-tarefas');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const btnRemoveSelected = document.getElementById('remover-selecionado');

const grayOrNot = (event) => {
  const sClass = 'selected-item';
  const li = document.getElementsByClassName(sClass)[0];
  if (li) {
    li.classList.remove(sClass);
  }
  event.target.classList.add(sClass);
};

const completeOrNot = (event) => {
  event.target.classList.toggle('completed'); // TOGGLE É BÃO DEMAIS
};

const inputTask = (text, classe) => {
  // if (!inputList.value) {
  //   alert('Digite a sua tarefa.');
  // } else {
  const li = document.createElement('li');
  li.innerText = text;
  li.className = classe;
  li.addEventListener('click', grayOrNot);
  li.addEventListener('dblclick', completeOrNot);
  list.appendChild(li);
  inputList.value = '';
  // }
};

btnCreateTask.addEventListener('click', () => inputTask(inputList.value));

const eraseTasks = () => {
  while (list.firstChild) (list.removeChild(list.firstChild));
};

btnEraseAll.addEventListener('click', eraseTasks);

const eraseMarked = () => {
  const completedLi = document.getElementsByClassName('completed');
  console.log(completedLi);
  while (completedLi.length > 0) completedLi[0].remove();
  console.log(completedLi);
};

btnRemoveMarkedTasks.addEventListener('click', eraseMarked);

const saveList = () => {
  const liWay = document.querySelectorAll('li');
  const tasks = [];

  liWay.forEach((object) => tasks.push({
    classe: object.className,
    text: object.innerText,
  }));
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

btnSaveTasks.addEventListener('click', saveList);

const loadList = () => {
  const data = localStorage.getItem('tasks');
  const newArray = JSON.parse(data);

  if (newArray) {
    newArray.forEach((object) => {
      inputTask(object.text, object.classe);
    });
  }
};

const select = '.selected-item';

// lógica por trás do botão que remove o selecionado
const removeSelected = () => {
  const selected = document.querySelector(select);
  selected.remove();
};

btnRemoveSelected.addEventListener('click', removeSelected);

// desenvolver o botão move up e move down
const moveUp = () => {
  const selected = document.querySelector(select);
  if (selected && selected.previousSibling) {
    selected.parentNode.insertBefore(selected, selected.previousSibling);
  }
};

btnMoveUp.addEventListener('click', moveUp);

const moveDown = () => {
  const selected = document.querySelector(select);
  if (selected && selected.nextSibling) {
    selected.parentNode.insertBefore(selected.nextSibling, selected);
  }
};

btnMoveDown.addEventListener('click', moveDown);

window.onload = () => {
  loadList();
};
