const Printer = require("./componentes/printer")
const Relatorio = require("./lib/relatorio")
const IncluirClienteComEndereco = require("./visitors/incluir-cliente-com-endereco")
const IncluirVendaDetalhada = require("./visitors/incluir-venda-detalhada")

const Estagio8 = (function () {
    async function gerarRelatorio(cliente, pagamento, configuracoes) {
        const printer = new Printer(configuracoes)
        const relatorio = new Relatorio()
        try {
            await relatorio.accept(IncluirClienteComEndereco, cliente)
            await relatorio.accept(IncluirVendaDetalhada, pagamento)
            printer.print(relatorio.getData())
        } catch (error) {
            console.error(error)
        }
    }
    return { gerarRelatorio }
})()

module.exports = Estagio8;