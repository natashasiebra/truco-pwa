window.onload = () =>{
    "use strinct";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

// Variáveis para controlar o placar e as vitórias das equipes
let pontosTimeA = 0;
let pontosTimeB = 0;
let vitoriasTimeA = 0;
let vitoriasTimeB = 0;

// Selecionar elementos HTML
const pontosTimeAAElement = document.getElementById('pontos-time-a');
const pontosTimeABElement = document.getElementById('pontos-time-b');
const vitoriasTimeAElement = document.getElementById('vitorias-time-a');
const vitoriasTimeBElement = document.getElementById('vitorias-time-b');
const resultadoBotao = document.getElementById('resultado-botao');
const timeaBotao = document.getElementById('time-a');
const timebBotao = document.getElementById('time-b');
const pontosBotao = document.querySelectorAll('pontos-botao');

let activeTime = 'A'; // Começa com a equipe A ativa

// Função para alternar a equipe ativa
function switchactiveTime() {
    activeTime = (activeTime === 'A') ? 'B' : 'A';
}

// Função para atualizar o placar e verificar vitória
// Função para atualizar o placar e verificar vitória
function updatePontuacao(time, pontos) {
    if ((time === 'A' && pontosTimeA >= 12) || (time === 'B' && pontosTimeB >= 12)) {
        alert('O jogo acabou! Reinicie o jogo.');
        return;
    }

    if (time === 'A') {
        pontosTimeA += pontos;
        pontosTimeAAElement.textContent = pontosTimeA;
        if (pontosTimeA >= 12) {
            vitoriasTimeA++;
            vitoriasTimeAElement.textContent = vitoriasTimeA; // Atualiza o contador de vitórias da equipe A
            alert('Equipe A venceu a rodada!');
            resultadoPontuacao();
        } else {
            switchactiveTime();
        }
    } else if (time === 'B') {
        pontosTimeB += pontos;
        pontosTimeABElement.textContent = pontosTimeB;
        if (pontosTimeB >= 12) {
            vitoriasTimeB++;
            vitoriasTimeBElement.textContent = vitoriasTimeB; // Atualiza o contador de vitórias da equipe B
            alert('Equipe B venceu a rodada!');
            resultadoPontuacao();
        } else {
            switchactiveTime();
        }
    }
}


function resultadoPontuacao() {
    pontosTimeA = 0;
    pontosTimeB = 0;
    pontosTimeAAElement.textContent = '0';
    pontosTimeABElement.textContent = '0';
    activeTime = 'A'; // Reinicia com a equipe A ativa
}

// Event Listeners para os botões de pontuação
pontosBotao.forEach(button => {
    button.addEventListener('click', () => {
        const time = button.dataset.time;
        const pontos = parseInt(button.dataset.pontos);
        updatePontuacao(time, pontos);
    });
});


// Event Listener para o botão de reiniciar
resultadoBotao.addEventListener('click', () => {
    vitoriasTimeA = 0;
    vitoriasTimeB = 0;
    vitoriasTimeAElement.textContent = '0';
    vitoriasTimeBElement.textContent = '0';
    resultadoPontuacao();
});

// Inicialização do placar
resultadoPontuacao();
