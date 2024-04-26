let txt = document.getElementById("txt")
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let tipo;
    let inputa = Number(document.getElementById("a").value);
    let inputb = Number(document.getElementById("b").value);
    let inputc = Number(document.getElementById("c").value);
    if((inputa + inputb) > inputc){
        if((inputa == inputb) && (inputb == inputc)){
            tipo = "Equilatero"
        }else if((inputa == inputb) || (inputa == inputc) || (inputb == inputc)){
            tipo = "Isoceles"
        }else {
            tipo = "Escaleno"
        }
        txt.textContent = `Os valores fornecidos formam um triângulo do tipo ${tipo}`;
    }else {
        txt.textContent = "Os valores fornectidos não formam um triângulo";
    }
});