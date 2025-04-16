// Gerar número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Número máximo de tentativas
const maxTentativas = 10;
let tentativasRestantes = maxTentativas;

// Atualizar interface inicial
document.getElementById('tentativasRestantes').textContent = `Tentativas restantes: ${tentativasRestantes}`;

// Adicionar evento ao botão "Chutar"
document.getElementById('chutar').addEventListener('click', function () {
    // Capturar o valor do palpite
    const palpite = parseInt(document.getElementById('palpite').value);

    // Validar o palpite
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        document.getElementById('mensagem').textContent = 'Por favor, insira um número válido entre 1 e 100.';
        return;
    }

    // Comparar o palpite com o número secreto
    if (palpite === numeroSecreto) {
        document.getElementById('mensagem').textContent = 'Parabéns! Você acertou o número secreto!';
        document.getElementById('tentativasRestantes').textContent = '';
        document.getElementById('chutar').disabled = true; // Desativar o botão
    } else if (palpite < numeroSecreto) {
        document.getElementById('mensagem').textContent = 'O número secreto é maior!';
    } else {
        document.getElementById('mensagem').textContent = 'O número secreto é menor!';
    }

    // Decrementar tentativas
    tentativasRestantes--;
    document.getElementById('tentativasRestantes').textContent = `Tentativas restantes: ${tentativasRestantes}`;

    // Verificar se o jogador perdeu
    if (tentativasRestantes === 0) {
        document.getElementById('mensagem').textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
        document.getElementById('tentativasRestantes').textContent = '';
        document.getElementById('chutar').disabled = true; // Desativar o botão
    }

    // Limpar o campo de input
    document.getElementById('palpite').value = '';
});