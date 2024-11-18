const counterDisplay = document.getElementsByClassName("counter")[0];
counterDisplay.textContent = '0'; 
const incrementButton = document.getElementById('increment'); 
const decrementButton = document.getElementById('decrement');

let counterValue = 0;

incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounterDisplay();
});

decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounterDisplay();
});

function updateCounterDisplay() {
    counterDisplay.textContent = counterValue;
}
