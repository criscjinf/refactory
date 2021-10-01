const ConnectDB = require("./componentes/connect-db")
const Printer = require("./componentes/printer")

const Estagio4 = (function () {
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
            let tipoVendaDescricao
            switch (data.tipo) {
                case 1: tipoVendaDescricao = 'Entrega'
                    break;
                case 2: tipoVendaDescricao = 'Balcão'
                    break;
                case 3: tipoVendaDescricao = 'Salão'
                    break;
                case 4: tipoVendaDescricao = 'Ficha'
                    break;
                default: tipoVendaDescricao = ''
                    break;
            }

            relatorio.venda.tipo_descricao = tipoVendaDescricao
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

module.exports = Estagio4;