const botaoEmpresas = document.querySelectorAll(".botao")[0];
const botaoEventos = document.querySelectorAll(".botao")[1];
const fotosEmpresas = document.querySelector(".fotosEmpresas");
const fotosEventos = document.querySelector(".fotosEventos");

botaoEmpresas.addEventListener('click', () => { 
    fotosEmpresas.style.display = "flex";
    fotosEventos.style.display = "none";
});
botaoEventos.addEventListener('click', () => { 
    fotosEventos.style.display = "flex";
    fotosEmpresas.style.display = "none"; 
});