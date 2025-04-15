let numero = prompt("digite um número:");

if (isNaN(numero)) {
    alert("isso não é um numero valido.");
} else {
    numero = Number(numero);
    if (numero % 5 === 0) {
        alert("O número é múltiplo de 5.");
    } else {
        alert("O número não é múltiplo de 5.");
    }
}