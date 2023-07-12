const validationInput = document.getElementById('validation-input');

function validateInput() {
  const enteredValue = validationInput.value;
  const expectedLength = validationInput.getAttribute('data-length');

  if (enteredValue.length === parseInt(expectedLength)) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
}

validationInput.addEventListener('blur', validateInput);
