const ConnectDB = require("./componentes/connect-db")
const Printer = require("./componentes/printer")

const Estagio1 = (function () {
    function gerarRelatorio(idCliente, endereco, numero, bairro, cidade, uf, idVenda, dinheiro, troco, configuracoes) {
        const obConnection = new ConnectDB()
        const cpPrinter = new Printer(configuracoes)
        let lbRelatorio = {}
        let sSQL = `select id, nome from cliente where ${idCliente}`
        obConnection.executeSQL(sSQL, 'cliente')
            .then((data) => {
                lbRelatorio.cliente = { ...data }
                sSQL = `select id, id_cliente, total, desconto, acrescimo, tipo from venda where ${idVenda}`
                obConnection.executeSQL(sSQL, 'venda')
                    .then((data) => {
                        lbRelatorio.venda = { ...data }
                        let tipoDescricao
                        switch (data.tipo) {
                            case 1: tipoDescricao = 'Entrega'
                                break;
                            case 2: tipoDescricao = 'Balcão'
                                break;
                            case 3: tipoDescricao = 'Salão'
                                break;
                            case 4: tipoDescricao = 'Ficha'
                                break;
                            default: tipoDescricao = ''
                                break;
                        }

                        lbRelatorio.venda.tipo_descricao = tipoDescricao
                        lbRelatorio.venda.dinheiro = dinheiro
                        lbRelatorio.venda.troco = troco
                        lbRelatorio.endereco = {
                            'endereco': endereco,
                            'numero': numero,
                            'bairro': bairro,
                            'cidade': cidade,
                            'uf': uf
                        }
                        cpPrinter.print(lbRelatorio)

                    })
                    .catch((error) => console.error(error));

            })
            .catch((error) => console.error(error));
    }
    return { gerarRelatorio }
})()

module.exports = Estagio1;