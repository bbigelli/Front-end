import { Formulario } from './classe.js';
import { validarFormulario, limparFormulario, renderizarClientes } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');
    const clientesContainer = document.createElement('div'); // Opcional: para exibir clientes na interface
    document.body.appendChild(clientesContainer);

    const formulario = new Formulario();

    // Evento de envio do formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const mensagem = mensagemInput.value.trim();

        // Validação dos campos
        if (!validarFormulario(nome, email, mensagem)) {
            return;
        }

        // Adiciona o cliente ao formulário
        formulario.adicionarCliente({ nome, email, mensagem });

        // Renderiza os clientes na interface (opcional)
        renderizarClientes(formulario.listarClientes(), clientesContainer);

        // Limpa o formulário
        limparFormulario([nomeInput, emailInput, mensagemInput]);

        // Exibe uma mensagem de sucesso
        alert('Cadastro realizado com sucesso!');
    });
});