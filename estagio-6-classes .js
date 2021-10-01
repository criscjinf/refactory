const Printer = require("./componentes/printer")
const TipoVenda = require("./constantes/tipo-venda")
const ConsultaCliente = require("./consultas/consulta-cliente")
const ConsultaVenda = require("./consultas/consulta-venda")

const Estagio6 = (function () {
    async function gerarRelatorio(cliente, pagamento, configuracoes) {
        const { id_cliente, endereco } = cliente
        const printer = new Printer(configuracoes)
        let relatorio = {}
        try {
            const consultaCliente = new ConsultaCliente(id_cliente)
            relatorio.cliente = { ...await consultaCliente.get() }

            const consultavenda = new ConsultaVenda()
            relatorio.venda = { ...await consultavenda.get() }

            relatorio.venda.tipo_descricao = TipoVenda.properties[relatorio.venda.tipo].descricao
            relatorio.venda.dinheiro = pagamento.dinheiro
            relatorio.venda.troco = pagamento.troco
            relatorio.endereco = { ...endereco }
            printer.print(relatorio)

        } catch (error) {
            console.error(error)
        }
    }
    return { gerarRelatorio }
})()

module.exports = Estagio6;