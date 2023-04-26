let primeiroNumero = document.querySelector("#primeiroNumero");
let segundoNumero = document.querySelector("#segundoNumero");
let operacao = document.querySelector("#operacao");
let executar = document.querySelector("#executar")
let resultado = document.querySelector("#resultado");

executar.addEventListener("click", calcular);

function calcular () {
    let num1 = convertNumber(primeiroNumero.value);
    let num2 = convertNumber(segundoNumero.value);

    switch (operacao.value) {
        case 'somar': resultado.innerText = somar(num1, num2);
        break;
        case 'subtrair': resultado.innerText = subtrair(num1, num2);
        break;
        case 'dividir': resultado.innerText = dividir(num1, num2);
        break;
        case 'multiplicar': resultado.innerText = multiplicar(num1, num2);
        break;
    }
}

function somar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function dividir(num1, num2) {
   return num1 / num2;
}

function multiplicar(num1, num2) {
   return num1 * num2;
}

function convertNumber(num) {
    return Number(num);
}