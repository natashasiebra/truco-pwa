window.onload = () =>{
    "use strinct";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};


const nome1NameInput = document.getElementById('nome1');
const nome2NameInput = document.getElementById('nome2');
const nome1pontoDisplay = document.getElementById('nome1ponto');
const nome2pontoDisplay = document.getElementById('nome2ponto');

let nome1ponto = 0;
let nome2ponto = 0;

document.getElementById('umPonto').addEventListener('click', () => updateponto(1));
document.getElementById('tresPontos').addEventListener('click', () => updateponto(3));
document.getElementById('seisPontos').addEventListener('click', () => updateponto(6));
document.getElementById('dozePontos').addEventListener('click', () => updateponto(12));
document.getElementById('resultados').addEventListener('click', resultadoPonto);

function updateponto(pontos) {
    if (nome1ponto < 12 && nome2ponto < 12) {
        if (nome1ponto < 12) nome1ponto += pontos;
        if (nome2ponto < 12) nome2ponto += pontos;

        updatepontoDisplay();
    }

    if (nome1ponto >= 12) {
        alert(`${nome1NameInput.value || 'Nome 1'} wins!`);
        resetScore();
    } else if (nome2ponto >= 12) {
        alert(`${nome2NameInput.value || 'Nome 2'} wins!`);
        resultadoPonto();
    }
}

function resultadoPonto() {
    nome1ponto = 0;
    nome2ponto = 0;
    updatepontoDisplay();
}

function updatepontoDisplay() {
    nome1pontoDisplay.textContent = `${nome1NameInput.value || 'nome 1'}: ${nome1ponto}`;
    nome2pontoDisplay.textContent = `${nome2NameInput.value || 'nome 2'}: ${nome2ponto}`;
}
