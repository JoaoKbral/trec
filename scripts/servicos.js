const botaoEmpresas = document.querySelector(".pacoteEmpresas");
const botaoEventos = document.querySelector(".pacoteEventos");
const sectionEmpresas = document.querySelector(".empresas");
const sectionEventos = document.querySelector(".eventos");

botaoEmpresas.addEventListener('click', () => {
    sectionEmpresas.style.display = "block";
    sectionEventos.style.display = "none";
});
botaoEventos.addEventListener('click', () => {
    sectionEventos.style.display = "block";
    sectionEmpresas.style.display = "none";
});

// 3 pacotes eventos
// 3 pacotes 
const pacotes = document.getElementsByClassName('pacote');

pacotes[0].addEventListener('click', () => { selecionaPacote(pacotes[0]); })
pacotes[1].addEventListener('click', () => { selecionaPacote(pacotes[1]); })
pacotes[2].addEventListener('click', () => { selecionaPacote(pacotes[2]); })
pacotes[3].addEventListener('click', () => { selecionaPacote(pacotes[3]); })
pacotes[4].addEventListener('click', () => { selecionaPacote(pacotes[4]); })
pacotes[5].addEventListener('click', () => { selecionaPacote(pacotes[5]); })

function selecionaPacote(pacote) {
    for (let i = 0; i < pacotes.length; i++) {
        if (pacote.querySelector(".conteudo").classList.length == 2) {
            continue;
        }
        pacotes[i].querySelector('.conteudo').classList.remove('visivel');

    }

    pacote.querySelector(".conteudo").classList.toggle('visivel');
}