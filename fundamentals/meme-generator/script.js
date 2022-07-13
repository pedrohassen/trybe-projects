const inputMeme = document.querySelector('#text-input');
const containerMeme = document.getElementById('meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const btnUploadMeme = document.querySelector('#meme-insert');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

meme1.addEventListener('click', ({ target }) => {
  memeImage.src = target.src;
});

meme2.addEventListener('click', ({ target }) => {
  memeImage.src = target.src;
});

meme3.addEventListener('click', ({ target }) => {
  memeImage.src = target.src;
});

meme4.addEventListener('click', ({ target }) => {
  memeImage.src = target.src;
});

btnUploadMeme.addEventListener('input', ({ target }) => {
  memeImage.src = URL.createObjectURL(target.files[0]);
});

const writeMeme = () => {
  inputMeme.addEventListener('input', () => {
    memeText.innerText = inputMeme.value;
    containerMeme.appendChild(memeText);
  });
};

writeMeme();

btnFire.addEventListener('click', () => {
  containerMeme.style.border = '';
  containerMeme.style.border = '3px dashed rgb(255, 0, 0)';
});

btnWater.addEventListener('click', () => {
  containerMeme.style.border = '';
  containerMeme.style.border = '5px double rgb(0, 0, 255)';
});

btnEarth.addEventListener('click', () => {
  containerMeme.style.border = '';
  containerMeme.style.border = '6px groove rgb(0, 128, 0)';
});
