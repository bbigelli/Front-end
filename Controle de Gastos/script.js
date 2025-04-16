// Variáveis para armazenar os valores de cada categoria
let totalAlimentacao = 0;
let totalTransporte = 0;
let totalLazer = 0;
let totalOutros = 0;

function adicionarGasto(){
     // 1. Pegar o valor informado
    const valorInput = document.getElementById('valor').value;

    // 2. Pegar a categoria informada
    const categoria = document.getElementById('categoria').value;

    // 3. Impedir números inválidos
    const valor = parseFloat(valorInput);
    if (isNaN(valor) || valor <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    // 4. Atualizar o valor de acordo com a categoria
    if (categoria === 'alimentacao') {
        totalAlimentacao += valor;
    } else if (categoria === 'transporte') {
        totalTransporte += valor;
    } else if (categoria === 'lazer') {
        totalLazer += valor;
    } else if (categoria === 'outros') {
        totalOutros += valor;    
    } else {
        alert('Por favor, selecione uma categoria válida.');
        return;
    }

    // 5. Atualizar a interface
    document.getElementById('totalAlimentacao').textContent = `Alimentação: R$ ${totalAlimentacao.toFixed(2)}`;
    document.getElementById('totalTransporte').textContent = `Transporte: R$ ${totalTransporte.toFixed(2)}`;
    document.getElementById('totalLazer').textContent = `Lazer: R$ ${totalLazer.toFixed(2)}`;
    document.getElementById('totalOutros').textContent = `Outros: R$ ${totalOutros.toFixed(2)}`;

    // 6. Limpar os campos
    document.getElementById('valor').value = '';
    document.getElementById('categoria').value = '';
}

