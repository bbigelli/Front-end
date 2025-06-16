// Função para validar os campos do formulário
export function validarFormulario(nome, email, mensagem) {
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    if (!email.includes('@')) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }
    return true;
}

// Função para limpar os campos do formulário
export function limparFormulario(inputs) {
    inputs.forEach(input => input.value = '');
}

// Função para renderizar clientes na interface (opcional)
export function renderizarClientes(clientes, container) {
    container.innerHTML = ''; // Limpa o container
    clientes.forEach(cliente => {
        const clienteDiv = document.createElement('div');
        clienteDiv.textContent = `${cliente.nome} - ${cliente.email}`;
        container.appendChild(clienteDiv);
    });
}