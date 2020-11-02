let salarioBruto = 5000;
let salarioBase;
let aliqInss8 = salarioBruto * 0.08;
let aliqInss9 = salarioBruto * 0.09;
let aliqInss11 = salarioBruto * 0.11;
let aliqInssMax = salarioBruto - 570.88;

if (salarioBruto >= 0 && salarioBruto <= 1556.94){
    salarioBase = salarioBruto - aliqInss8;    
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - aliqInss9;   
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - aliqInss11;     
}
else { 
    salarioBase = aliqInssMax;   
}

let salarioLiquido;
let aliqIr0 = (salarioBase * 1);
let aliqIr1 = (salarioBase * 0.075) - 142.80;
let aliqIr2 = (salarioBase * 0.15) - 354.80;
let aliqIr3 = (salarioBase * 0.225) - 636.13;
let aliqIr4 = (salarioBase * 0.275) - 869.36;

if (salarioBase >=0 && salarioBase <= 1903.98){
    salarioLiquido = aliqIr0;
    console.log(salarioLiquido + ' ' + 'Isento de IR');
}else if (salarioBase > 1903.98 && salarioBase <= 2826.65){
    salarioLiquido = salarioBase - aliqIr1;
    console.log(salarioLiquido);
}else if (salarioBase > 2826.65 && salarioBase <= 3751.05){
    salarioLiquido = salarioBase - aliqIr2;
    console.log(salarioLiquido);
}else if (salarioBase > 3751.05 && salarioBase <= 4664.68){
    salarioLiquido = salarioBase - aliqIr3;
    console.log(salarioLiquido);
}else{
    salarioLiquido = salarioBase - aliqIr4;
    console.log(salarioLiquido);
}