const ConsultaBase = require("./consulta-base");

class ConsultaVenda extends ConsultaBase {
    constructor(idVenda) {
        super()
        this.sql = `select id, id_cliente, total, desconto, acrescimo, tipo from venda where id = ${idVenda}`
        this.table = 'venda'
    }
}

module.exports = ConsultaVenda;