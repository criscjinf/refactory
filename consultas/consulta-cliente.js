const ConsultaBase = require("./consulta-base");

class ConsultaCliente extends ConsultaBase {
    constructor(idCliente) {
        super()
        this.sql = `select id, nome, endereco, numero, bairro, cidade, uf from cliente where ${idCliente}`
        this.table = 'cliente'
    }
}

module.exports = ConsultaCliente;