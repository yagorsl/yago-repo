let valorCusto = 50.50;
let valorVenda = 80.99;
let impostoSobreOCusto = valorCusto * 0.2;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0){
    console.log('Erro');
}else {
    console.log('O lucro é' + ' ' + 'R$' + lucro * 1000);
}

