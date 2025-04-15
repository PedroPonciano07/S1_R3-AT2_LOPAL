// Pede ao usuário para informar a idade
let idadeUsuario = parseFloat(prompt("Informe sua idade:"));

// Converte o valor para número
idadeUsuario = parseInt(idadeUsuario);
// caso digite algo sem ser um numero vai dar esse alerta 
if (isNaN(idadeUsuario) || idadeUsuario < 0) {
alert("isso nao e um numero")
} else 


    // Verifica se a idade é 18 ou mais
    if (idadeUsuario >= 18) {
        alert("voce é maior de idade.");
    } else {
        alert("voce é menor de idade.");
    }
{}