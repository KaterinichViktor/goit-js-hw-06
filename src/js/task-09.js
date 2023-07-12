const bodyElement = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

changeColorButton.addEventListener('click', changeBackgroundColor);
