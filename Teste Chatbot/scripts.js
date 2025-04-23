document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');

    // Intenções e respostas
    const intencoes = [
        {
            palavrasChave: ["olá", "oi", "e aí", "eae"],
            resposta: "Olá! Como posso te ajudar hoje? 👋",
        },
        {
            palavrasChave: ["time", "furia", "cs"],
            resposta: "O time de CS da FURIA é incrível! 🐺 Eles estão sempre prontos para vencer.",
        },
        {
            palavrasChave: ["jogadores", "quem joga"],
            resposta: "Os jogadores da FURIA são: KSCERATO, yuurih, arT, drop e chelo. 🎮",
        },
        {
            palavrasChave: ["próximo jogo", "agenda", "quando jogam"],
            resposta: "O próximo jogo será anunciado em breve! Fique ligado nas redes sociais da FURIA. 🕒",
        },
        {
            palavrasChave: ["adeus", "tchau", "até mais", "obrigado"],
            resposta: "Até mais! Obrigado por conversar com o chatbot da FURIA. 👋",
        },
    ];

    // Função para identificar a intenção
    function identificarIntencao(mensagem) {
        for (let intencao of intencoes) {
            for (let palavra of intencao.palavrasChave) {
                if (mensagem.includes(palavra)) {
                    return intencao.resposta;
                }
            }
        }
        return "Desculpe, não entendi. Pode reformular? 🤔";
    }

    // Função para adicionar mensagens ao chat
    function adicionarMensagem(mensagem, classe) {
        const p = document.createElement('p');
        p.textContent = mensagem;
        p.className = classe;
        chatBox.appendChild(p);
        chatBox.scrollTop = chatBox.scrollHeight; // Rolar para a última mensagem
    }

    // Evento de envio do formulário
    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const mensagemUsuario = userInput.value.trim().toLowerCase();
        if (mensagemUsuario) {
            adicionarMensagem(`Você: ${mensagemUsuario}`, 'user-message');
            userInput.value = '';

            // Identificar intenção e responder
            const resposta = identificarIntencao(mensagemUsuario);
            adicionarMensagem(`FURIA Bot: ${resposta}`, 'bot-message');
        }
    });
});