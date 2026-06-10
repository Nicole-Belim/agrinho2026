// Calculadora de Economia de Água
function calcularEconomia() {
    const area = parseFloat(document.getElementById('area').value);
    const fator = parseFloat(document.getElementById('irrigacao').value);
    
    const aguaConvencional = area * 4500; // litros por hectare
    const aguaEconomica = aguaConvencional * fator;
    const economia = aguaConvencional - aguaEconomica;
    
    document.getElementById('resultado').innerHTML = `
        Com o sistema escolhido, você economiza <strong>${economia.toLocaleString('pt-BR')}</strong> litros de água por ciclo de irrigação nesta área!<br>
        <small>Isso equivale a aproximadamente ${Math.round(economia/200000)} piscinas olímpicas.</small>
    `;
}

// Quiz
const perguntas = [
    {
        pergunta: "Qual porcentagem aproximada da água doce do mundo é usada pela agricultura?",
        opcoes: ["30%", "50%", "70%", "90%"],
        correta: 2
    },
    {
        pergunta: "Qual técnica de irrigação é mais eficiente?",
        opcoes: ["Aspersão convencional", "Irrigação por inundação", "Irrigação por gotejamento", "Rega manual"],
        correta: 2
    },
    {
        pergunta: "O que é cobertura morta?",
        opcoes: ["Plantar mais densamente", "Deixar restos de plantas sobre o solo", "Usar plástico no solo", "Irrigar à noite"],
        correta: 1
    }
];

let perguntaAtual = 0;

function carregarPergunta() {
    const p = perguntas[perguntaAtual];
    document.getElementById('pergunta').textContent = p.pergunta;
    
    let html = '';
    p.opcoes.forEach((opcao, index) => {
        html += `<button onclick="responder(${index})" class="opcao-btn">${opcao}</button>`;
    });
    document.getElementById('opcoes').innerHTML = html;
    document.getElementById('proxima').style.display = 'none';
}

function responder(indice) {
    const correta = perguntas[perguntaAtual].correta;
    const botoes = document.querySelectorAll('.opcao-btn');
    
    botoes.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correta) btn.style.background = '#4caf50';
        if (i === indice && i !== correta) btn.style.background = '#f44336';
    });
    
    document.getElementById('proxima').style.display = 'block';
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        document.getElementById('quiz-container').innerHTML = `
            <h3>🎉 Parabéns! Você completou o Quiz!</h3>
            <p>Quanto mais conhecimento, melhor o agro sustentável.</p>
            <button onclick="location.reload()">Reiniciar Quiz</button>
        `;
    }
}

// Inicializar quiz
window.onload = () => {
    carregarPergunta();
};
