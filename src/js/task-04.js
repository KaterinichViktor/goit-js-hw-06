const counterValue = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

let currentValue = 0;

function updateCounterValue() {
  counterValue.textContent = currentValue;
}

function incrementCounter() {
  currentValue += 1;
  updateCounterValue();
}

function decrementCounter() {
  currentValue -= 1;
  updateCounterValue();
}

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
