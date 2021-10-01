const Printer = require("./componentes/printer")
const TipoVenda = require("./constantes/tipo-venda")
const ConsultaCliente = require("./consultas/consulta-cliente")
const ConsultaVenda = require("./consultas/consulta-venda")

async function buscarVendaDetalhada(pagamento) {
    const consultavenda = new ConsultaVenda(pagamento.id_venda)
    const venda = { ...await consultavenda.get() }

    return incluirDetalhesVenda(venda, pagamento)
}

async function buscaCliente(id_cliente) {
    const consultaCliente = new ConsultaCliente(id_cliente)
    return { ...await consultaCliente.get() }
}

function incluirDetalhesVenda(venda, pagamento) {
    let vendaDetalhada = { ...venda }
    vendaDetalhada.tipo_descricao = TipoVenda.properties[venda.tipo].descricao
    vendaDetalhada.dinheiro = pagamento.dinheiro
    vendaDetalhada.troco = pagamento.troco
    return vendaDetalhada
}


const Estagio7 = (function () {
    async function gerarRelatorio(cliente, pagamento, configuracoes) {
        const { id_cliente, endereco } = cliente
        const printer = new Printer(configuracoes)
        let relatorio = {}
        try {
            relatorio.cliente = await buscaCliente(id_cliente)
            relatorio.endereco = { ...endereco }
            relatorio.venda = await buscarVendaDetalhada(pagamento)

            printer.print(relatorio)

        } catch (error) {
            console.error(error)
        }
    }
    return { gerarRelatorio }
})()

module.exports = Estagio7;

