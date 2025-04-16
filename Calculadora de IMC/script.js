function executar(){
    
        // Captura os valores dos inputs
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
    
        // Verifica se os valores são válidos
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert('Por favor, insira valores válidos para peso e altura.');
            return;
        }
    
        // Calculo do IMC
        const imc = peso / (altura * altura);
    
        // Exibe o valor do IMC na tag <p> correspondente
        document.getElementById('valorIMC').textContent = `Seu IMC é: ${imc.toFixed(2)}`;
    
        // Classifica o IMC
        let classificacao = '';
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.99) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc < 29.99) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }
    
        // Exibe a classificação na tag <p> correspondente
        document.getElementById('Classificação').textContent = `Classificação: ${classificacao}`;
    
}
