let n1 = Number.parseFloat(prompt("Digite um numero: "));
let n2 = Number.parseFloat(prompt("Digite outro numero: "));

let op = prompt("1 - Adição\n2 - Subtração\nDigite sua Opção: ");

if(op == 1){
    n3 = n1 + n2;
}else {
    n3 = n1 - n2;
}

alert("O Resultado é: "+ n3);