function exibir(){
    
    // Captura os valores dos inputs
    const titulo = document.getElementById('titulo').value;
    const duracao = parseInt(document.getElementById('duracao').value);

    // Verifica se os valores são válidos
    if (!titulo || isNaN(duracao) || duracao <= 0) {
        alert('Por favor, insira um título válido e uma duração maior que zero.');
        return;
    }

    // Converte a duração para horas e minutos
    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    // Exibe o resultado
    const resultado = `O filme "${titulo}" tem duração de ${horas} hora(s) e ${minutos} minuto(s).`;
    document.getElementById('resultado').textContent = resultado;
}