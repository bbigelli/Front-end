// Função para criar elementos de cliente na lista
export function renderizarClientes(listaClientes, clientes) {
    listaClientes.innerHTML = ''; // Limpa a lista antes de renderizar
    clientes.forEach(cliente => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${cliente.nome} (${cliente.email})
            <button class="excluir" data-id="${cliente._id}">Excluir</button>
        `;
        listaClientes.appendChild(li);
    });
}

// Função para validar entradas do formulário
export function validarEntradas(nome, email) {
    if (!nome || !email) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    return true;
}