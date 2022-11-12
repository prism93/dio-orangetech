function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros/100)));
}

var preco = 100;
var pagamento = 3;
// 1 - débito, 2- pix, dinheiro, 3- 2x, 4- + de 2x

if (pagamento === 1) {
    console.log(aplicarDesconto(preco, 10));
} else if (pagamento === 2) {
    console.log(aplicarDesconto(preco, 15));
} else if (pagamento === 3) {
    console.log(preco);
} else {
    console.log(aplicarJuros(preco, 10));
}

