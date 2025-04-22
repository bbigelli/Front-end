document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const cepInput = document.getElementById('cep');
    const enderecoInput = document.getElementById('endereco');
    const numeroInput = document.getElementById('numero');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('estado');

    // Restaurar dados do Web Storage ao carregar a página
    const savedData = JSON.parse(localStorage.getItem('cadastroUsuario'));
    if (savedData) {
        nomeInput.value = savedData.nome || '';
        emailInput.value = savedData.email || '';
        cepInput.value = savedData.cep || '';
        enderecoInput.value = savedData.endereco || '';
        numeroInput.value = savedData.endereco || '';
        cidadeInput.value = savedData.cidade || '';
        estadoInput.value = savedData.estado || '';
    }

    // Preenchimento automático do endereço ao digitar o CEP
    cepInput.addEventListener('blur', async () => {
        const cep = cepInput.value.trim();
        if (cep.length === 8 && /^[0-9]+$/.test(cep)) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();
                if (data.erro) {
                    alert('CEP não encontrado.');
                } else {
                    enderecoInput.value = data.logradouro || '';
                    cidadeInput.value = data.localidade || '';
                    estadoInput.value = data.uf || '';
                }
            } catch (error) {
                alert('Erro ao buscar o CEP. Tente novamente.');
            }
        } else {
            alert('Por favor, insira um CEP válido.');
        }
    });

    // Salvar os dados no Web Storage ao enviar o formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impedir o envio do formulário
        const usuario = {
            nome: nomeInput.value,
            email: emailInput.value,
            cep: cepInput.value,
            endereco: enderecoInput.value,
            numero: numeroInput.value,
            cidade: cidadeInput.value,
            estado: estadoInput.value,
        };
        localStorage.setItem('cadastroUsuario', JSON.stringify(usuario));
        alert('Dados salvos com sucesso!');
    });
});