const ConsultaCliente = require("../consultas/consulta-cliente")

class IncluirClienteComEndereco {

    static async buscaCliente(id_cliente) {
        const consultaCliente = new ConsultaCliente(id_cliente)
        return { ...await consultaCliente.get() }
    }

    static async execute(relatorio, cliente) {
        const { id_cliente, endereco } = cliente

        relatorio.insertData('cliente', { ...await IncluirClienteComEndereco.buscaCliente(id_cliente) })
        relatorio.insertData('endereço', { ...endereco })
    }
}

module.exports = IncluirClienteComEndereco;