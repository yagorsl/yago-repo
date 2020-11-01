function grade(nota) {
    if (nota <= 100 && nota >= 90){
        return 'A';
    } else if(nota < 90 && nota >= 80) {
        return 'B';
    } else if(nota <= 80 && nota >= 70) {
        return 'C';
    } else if(nota <= 70 && nota >= 60) {
        return 'D';
    } else if(nota <= 60 && nota >= 50) {
        return 'E';
    } else if(nota < 50 && nota >= 0) {
        return 'F';
    }else {
        return 'Valor inválido';
    }
}
console.log(grade(70));
