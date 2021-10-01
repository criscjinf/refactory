const TipoVenda = require("../constantes/tipo-venda");
const ConsultaVenda = require("../consultas/consulta-venda");

class IncluirVendaDetalhada {
    static detalharVenda(venda, pagamento) {
        let vendaDetalhada = { ...venda }
        // vendaDetalhada.tipo_descricao = TipoVenda.properties[relatorio.venda.tipo].descricao
        vendaDetalhada.dinheiro = pagamento.dinheiro
        vendaDetalhada.troco = pagamento.troco
        return vendaDetalhada
    }

    static async execute(relatorio, pagamento) {
        const consultavenda = new ConsultaVenda(pagamento.id_venda)
        const venda = { ...await consultavenda.get() }
        relatorio.insertData('venda', IncluirVendaDetalhada.detalharVenda(venda, pagamento))
    }
}

module.exports = IncluirVendaDetalhada;