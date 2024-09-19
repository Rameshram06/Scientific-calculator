
function clearDisplay() {
    document.getElementById('display').value = '';
}


function Back() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}


function appendToDisplay(value) {
    document.getElementById('display').value += value;
}


function calculate() {
    let display = document.getElementById('display').value;
    display = display.replace('^', '**'); 
    display = display.replace('pi', 'Math.PI'); 

    try {
        
        document.getElementById('display').value = eval(display
            .replace('sin', 'Math.sin')
            .replace('cos', 'Math.cos')
            .replace('tan', 'Math.tan')
            .replace('log', 'Math.log')
            .replace('√', 'Math.sqrt')
        );
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}


function toggleCalculator() {
    var scientific = document.getElementById("scientific-calculator");
    var button = document.getElementById("toggle-btn");

    if (scientific.style.display === "none") {
        scientific.style.display = "block";
        button.textContent = "Scientific";
    } else {
        scientific.style.display = "none";
        button.textContent = "Basic";
    }
}
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*.^/';
    if (validKeys.includes(key)){
        appendToDisplay(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c'){
        clearDisplay();
    }
})
