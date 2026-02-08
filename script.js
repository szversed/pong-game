// Calculator functionality in JavaScript

// Appends a number to the display
function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

// Appends an operator to the display
function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}

// Calculates the result according to the display input
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Clears the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    if (!isNaN(event.key)) {
        appendNumber(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        appendOperator(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});