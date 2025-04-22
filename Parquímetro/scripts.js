// Classe Parquímetro
class Parquimetro {
    constructor() {
        this.tabelaValores = [
            { valor: 1.00, tempo: 30 },
            { valor: 1.75, tempo: 60 },
            { valor: 3.00, tempo: 120 }
        ];
    }

    calcularTempo(valorInserido) {
        if (valorInserido < 1.00) {
            return { mensagem: "Valor insuficiente", tempo: 0, troco: 0 };
        }

        // Encontrar o maior valor possível na tabela
        let tempo = 0;
        let troco = valorInserido;

        for (let item of this.tabelaValores) {
            if (valorInserido >= item.valor) {
                tempo = item.tempo;
                troco = (valorInserido - item.valor).toFixed(2);
            }
        }

        return { mensagem: "Tempo calculado com sucesso", tempo, troco };
    }
}

// Instanciar a classe Parquímetro
const parquimetro = new Parquimetro();

// Adicionar evento ao botão
document.getElementById('calcular').addEventListener('click', function () {
    const valorInserido = parseFloat(document.getElementById('valor').value);

    if (isNaN(valorInserido) || valorInserido <= 0) {
        document.getElementById('tempo').textContent = "Por favor, insira um valor válido.";
        document.getElementById('troco').textContent = "";
        return;
    }

    const resultado = parquimetro.calcularTempo(valorInserido);

    if (resultado.tempo === 0) {
        document.getElementById('tempo').textContent = resultado.mensagem;
        document.getElementById('troco').textContent = "";
    } else {
        document.getElementById('tempo').textContent = `Tempo de permanência: ${resultado.tempo} minutos`;
        document.getElementById('troco').textContent = `Troco: R$ ${resultado.troco}`;
    }
});