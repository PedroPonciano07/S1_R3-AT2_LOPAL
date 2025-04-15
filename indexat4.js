let valorCompra = prompt("Digite o valor da compra:");

if (isNaN(valorCompra)) {
    alert(" valor inválido.");
} else {
    valorCompra = Number(valorCompra);
    
    if (valorCompra >= 100) {
        let desconto = valorCompra * 0.10;
        let valorFinal = valorCompra - desconto;
        alert("voce ganhou um desconto de 10%!");
        alert("valor do desconto: R$ " + desconto.toFixed(2));
        alert("valor total com desconto: R$ " + valorFinal.toFixed(2));
    } else {
        alert("compra abaixo de R$100. Sem desconto aplicado.");
        alert("valor total: R$ " + valorCompra.toFixed(2));
    }
}