const ConnectDB = require("./componentes/connect-db")
const Printer = require("./componentes/printer")

const Estagio2 = (function () {
    function gerarRelatorio(cliente, pagamento, configuracoes) {
        const { id_cliente, endereco } = cliente
        const obConnection = new ConnectDB()
        const cpPrinter = new Printer(configuracoes)
        let lbRelatorio = {}
        let sSQL = `select id, nome from cliente where ${id_cliente}`
        obConnection.executeSQL(sSQL, 'cliente')
            .then((data) => {
                lbRelatorio.cliente = { ...data }
                sSQL = `select id, id_cliente, total, desconto, acrescimo, tipo from venda where ${pagamento.id_venda}`
                obConnection.executeSQL(sSQL, 'venda')
                    .then((data) => {
                        lbRelatorio.venda = { ...data }
                        let sTipoDescricao
                        switch (data.tipo) {
                            case 1: sTipoDescricao = 'Entrega'
                                break;
                            case 2: sTipoDescricao = 'Balcão'
                                break;
                            case 3: sTipoDescricao = 'Salão'
                                break;
                            case 4: sTipoDescricao = 'Ficha'
                                break;
                            default: sTipoDescricao = ''
                                break;
                        }

                        lbRelatorio.venda.tipo_descricao = sTipoDescricao
                        lbRelatorio.venda.dinheiro = pagamento.dinheiro
                        lbRelatorio.venda.troco = pagamento.troco
                        lbRelatorio.endereco = { ...endereco }
                        cpPrinter.print(lbRelatorio)

                    })
                    .catch((error) => console.error(error));

            })
            .catch((error) => console.error(error));

    }
    return { gerarRelatorio }
})()

module.exports = Estagio2;