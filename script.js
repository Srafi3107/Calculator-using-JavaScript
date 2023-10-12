let input = document.getElementById('display');

function addToInput(value) {
    input.value += value;
}

function clearInput() {
    input.value = '';
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
}

function backspace() {
    input.value = input.value.slice(0, -1);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        backspace();
    } else if (!isNaN(event.key) || "+-*/.()".includes(event.key)) {
        addToInput(event.key);
    }
});
