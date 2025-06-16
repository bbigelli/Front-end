export class Formulario {
    constructor() {
        this.clientes = []; // Array para armazenar os dados dos cadastros
    }

    // Método para adicionar cliente
    adicionarCliente(cliente) {
        this.clientes.push(cliente);
        console.log('Cliente cadastrado:', cliente);
    }

    // Método para listar clientes
    listarClientes() {
        return this.clientes;
    }
}