const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

function changeFontSize() {
  const fontSize = fontSizeControl.value;
  textElement.style.fontSize = `${fontSize}px`;
}

fontSizeControl.addEventListener('input', changeFontSize);

