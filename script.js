
//basic equation functions
function addition(num1, num2) {
    return Number(num1) + Number(num2)
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2)
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2)
}

function divide(num1, num2) {
    return Number(num1) / Number(num2)
}

function operate(operator, num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return substract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '÷':
            if (num2 === 0) return null
            else return divide(num1, num2)
        default:
            return null
    }
}

