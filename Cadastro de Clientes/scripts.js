const API_URL = "https://crudcrud.com/api/15ab0454efb540729f8556c9e4161b7b/clientes"; // Substitua YOUR_UNIQUE_API_KEY pela sua chave da API CrudCrud

document.addEventListener('DOMContentLoaded', () => {
    const clienteForm = document.getElementById('clienteForm');
    const listaClientes = document.getElementById('listaClientes');

    // Função para listar clientes
    async function listarClientes() {
        try {
            const response = await fetch(API_URL);
            const clientes = await response.json();
            listaClientes.innerHTML = ''; // Limpa a lista antes de renderizar
            clientes.forEach(cliente => {
                const li = document.createElement('li');
                li.innerHTML = `
                    ${cliente.nome} (${cliente.email})
                    <button class="excluir" data-id="${cliente._id}">Excluir</button>
                `;
                listaClientes.appendChild(li);
            });
        } catch (error) {
            console.error('Erro ao listar clientes:', error);
        }
    }

    // Função para cadastrar cliente
    clienteForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email }),
            });

            if (response.ok) {
                listarClientes(); // Atualiza a lista após cadastrar
                clienteForm.reset(); // Limpa o formulário
            } else {
                console.error('Erro ao cadastrar cliente:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
        }
    });

    // Função para excluir cliente
    listaClientes.addEventListener('click', async (event) => {
        if (event.target.classList.contains('excluir')) {
            const clienteId = event.target.getAttribute('data-id');
            try {
                const response = await fetch(`${API_URL}/${clienteId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    listarClientes(); // Atualiza a lista após excluir
                } else {
                    console.error('Erro ao excluir cliente:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao excluir cliente:', error);
            }
        }
    });

    // Carrega a lista de clientes ao carregar a página
    listarClientes();
});