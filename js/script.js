document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.createElement("div");
    counterDisplay.className = "counter";
    counterDisplay.textContent = '0';

    const incrementButton = document.createElement("button");
    incrementButton.id = "increment";
    incrementButton.textContent = "+";

    const decrementButton = document.createElement("button");
    decrementButton.id = "decrement";
    decrementButton.textContent = "-";

    document.body.appendChild(counterDisplay);
    document.body.appendChild(incrementButton);
    document.body.appendChild(decrementButton);


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
});
