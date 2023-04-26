let botao = document.querySelector("#botao");
let quebrado = false;
botao.style.backgroundColor = "blue";

botao.addEventListener("mouseover", () => {
    if(!quebrado) {
        botao.style.backgroundColor = "green";
    }
}); 

botao.addEventListener("mouseout", () => {
    if(!quebrado) {
        botao.style.backgroundColor = "blue";
    }
}); 

botao.addEventListener("click", () => {
    botao.style.backgroundColor = "red";
    botao.innerHTML = "Quebrei!";
    quebrado = true;
}); 

botao.addEventListener("click", () => {
   
    botao.style.backgroundColor = "red";
    botao.innerHTML = "Quebrei!";
    quebrado = true;
}); 