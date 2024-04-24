let n1 = Number.parseFloat(prompt("Digite um numero: "));
let n2 = Number.parseFloat(prompt("Digite outro numero: "));

let op = prompt("1 - Adição\n2 - Subtração\n3 - Divisão\n4 - Multiplicação\nDigite sua Opção: ");

if(op == 1){
    n3 = n1 + n2;
}else if(op == 2){
    n3 = n1 - n2;
}else if(op == 3){
    n3 = n1 / n2;
}else if(op == 4){
    n3 = n1 + n2;
}

if(op <= 4){
    alert("O Resultado é: "+ n3);
}else {
    alert("Opção Invalida\nRecarregue a pagina para tentar de novo");
}

