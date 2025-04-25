import { ClienteAPI } from './classes.js';
import { renderizarClientes, validarEntradas } from './utils.js';

const API_URL = "https://crudcrud.com/api/15ab0454efb540729f8556c9e4161b7b/clientes";
const clienteAPI = new ClienteAPI(API_URL);

document.addEventListener('DOMContentLoaded', () => {
    const clienteForm = document.getElementById('clienteForm');
    const listaClientes = document.getElementById('listaClientes');

    // Função para carregar e renderizar clientes
    async function carregarClientes() {
        try {
            const clientes = await clienteAPI.listarClientes();
            renderizarClientes(listaClientes, clientes);
        } catch (error) {
            console.error('Erro ao carregar clientes:', error);
        }
    }

    // Evento para cadastrar cliente
    clienteForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!validarEntradas(nome, email)) return;

        try {
            await clienteAPI.cadastrarCliente({ nome, email });
            clienteForm.reset(); // Limpa o formulário
            carregarClientes(); // Atualiza a lista
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
        }
    });

    // Evento para excluir cliente
    listaClientes.addEventListener('click', async (event) => {
        if (event.target.classList.contains('excluir')) {
            const clienteId = event.target.getAttribute('data-id');
            try {
                await clienteAPI.excluirCliente(clienteId);
                carregarClientes(); // Atualiza a lista
            } catch (error) {
                console.error('Erro ao excluir cliente:', error);
            }
        }
    });

    // Carrega a lista de clientes ao iniciar
    carregarClientes();
});