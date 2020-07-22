var caracter = null
var resultado = null
var num1 = null
var num2 = null
function  seleciona(botao) {
    caracter = botao

    switch (caracter) {
        case 'C':
            document.getElementById('display').value = ''
            break
        case '+':
            resultado = parseFloat('caracter') + parseFloat('caracter')
            break
        case '-':
            resultado = caracter - caracter
            break
        case '/':
            resultado = caracter / caracter
            break
        case '*':
            resultado = caracter * caracter
            break
        case '=':
            document.getElementById('display').value = resultado
            break
        default:
            resultado = caracter
            document.getElementById('display').value += resultado
    }
}

function calular(simbolo) {

    switch (simbolo) {
        case '+':
            resultado = parseFloat('caracter') + parseFloat('caracter')
            break
        case '-':
            resultado = caracter - caracter
            break
        case '/':
            resultado = caracter / caracter
            break
        case '*':
            resultado = caracter * caracter
            break
        case '=':
            document.getElementById('display').value = resultado
            break
    }
}