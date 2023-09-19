const buttons = document.querySelectorAll('#calcButton')
let display = document.getElementById('display')
let expression = ''

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let value = button.textContent;
        
        if (display.textContent === '0' && value !== '/') {
            display.textContent = value;
        }
        else {
            display.textContent += value;
        }
        expression += value;
    })
})

function clearDisplay() {
    display.textContent = 0
    expression = ''
}

function calcResult() {
    try {
        display.textContent = eval(expression);
    }
    catch(error) {
        display.textContent = 'ERROR'
    }
    finally {
        expression = ''
    }
}