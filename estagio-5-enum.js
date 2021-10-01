const ConnectDB = require("./componentes/connect-db")
const Printer = require("./componentes/printer")
const TipoVenda = require("./constantes/tipo-venda")

const Estagio5 = (function () {
    async function gerarRelatorio(cliente, pagamento, configuracoes) {
        const { id_cliente, endereco } = cliente
        const connection = new ConnectDB()
        const printer = new Printer(configuracoes)
        let relatorio = {}
        try {
            const SQL_CLIENTE = `select id, nome from cliente where ${id_cliente}`
            const clienteData = await connection.executeSQL(SQL_CLIENTE, 'cliente')
            relatorio.cliente = { ...clienteData }

            const SQL_VENDA = `select id, id_cliente, total, desconto, acrescimo, tipo from venda where ${pagamento.id_venda}`
            const vendaData = await connection.executeSQL(SQL_VENDA, 'venda')
            relatorio.venda = { ...vendaData }

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

module.exports = Estagio5;