export class ClienteAPI {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    // Método para listar clientes
    async listarClientes() {
        try {
            const response = await fetch(this.apiUrl);
            return await response.json();
        } catch (error) {
            console.error('Erro ao listar clientes:', error);
            throw error;
        }
    }

    // Método para cadastrar cliente
    async cadastrarCliente(cliente) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cliente),
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar cliente');
            }
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            throw error;
        }
    }

    // Método para excluir cliente
    async excluirCliente(clienteId) {
        try {
            const response = await fetch(`${this.apiUrl}/${clienteId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Erro ao excluir cliente');
            }
        } catch (error) {
            console.error('Erro ao excluir cliente:', error);
            throw error;
        }
    }
}