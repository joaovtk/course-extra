/* Fazer um programa que leia os valores de tres variaveis numericas, o Programa deve verificar se os valores formam um triangulo 
    se sim deve ter os tipos 
    equilatero todos os lados iguais
    Isoceles Dois lados iguais
    Escaleno - Todos os lados diferentes
    Para formar um triangulo a soma dois lados deve ser maior que terceiro lado
*/

let a = Number.parseFloat(prompt("Digite o primeiro lado: "));
let b = Number.parseFloat(prompt("Digite o segundo lado: "));
let c = Number.parseFloat(prompt("Digite o terceiro lado: "));

if((a + b) > c){
    if((a == b) && (b == c)){
        alert("O Triâgulo fornecido é um Equilátero");
    }else if((a != b) && (b != c)){
        alert("O Triâgulo fornecido é um Escaleno");
    }else {
        alert("O Triâgulo fornecido é um Isoceles");
    }
}else {
    window.alert("Os valores fornecidos não formam um triangulo...");
}