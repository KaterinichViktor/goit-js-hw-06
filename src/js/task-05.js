const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

function updateNameOutput() {
  nameOutput.textContent = nameInput.value || 'Anonymous';
}

nameInput.addEventListener('input', updateNameOutput);
