let numero = prompt("digite um numero:");

if (isNaN(numero)) {
    alert("isso nao e um numero valido.");
} else {
    numero = Number(numero);
    if (numero % 2 === 0) {
        alert("o numero e par.");
    } else {
        alert("o numero e impar.");
    }
}