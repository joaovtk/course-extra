let inputa = Number(document.querySelector("#a").value);
let inputb = Number(document.querySelector("#b").value);
let inputc = Number(document.querySelector("#c").value);
let txt = document.querySelector("#txt");

let button = document.querySelector("#btn");

button.addEventListener("submit", (e) => {
    e.preventDefault();
    if((inputa + inputb) > inputc){

    }else {
        txt.textContent("")
    }
});