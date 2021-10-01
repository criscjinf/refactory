const Estagio1 = require("./estagio-1-ameba");
const Estagio2 = require("./estagio-2-params");
const Estagio3 = require("./estagio-3-variants");
const Estagio4 = require("./estagio-4-async");
const Estagio5 = require("./estagio-5-enum");
const Estagio6 = require("./estagio-6-classes ");
const Estagio7 = require("./estagio-7-extract-function");
const Estagio8 = require("./estagio-8-patterns");

const configuracoes = {
    'printName': 'Microsoft Print to PDF',
    'fontSize': 8,
    'margins': {
        'left': 3,
        'right': 3,
        'top': 3,
        'bottom': 3
    }
}

const cliente = {
    'id_cliente': 1,
    'endereco': {
        'rua': 'Rua das Nações',
        'numero': '121',
        'bairro': 'Centro',
        'cidade': 'Novo Hamburgo',
        'uf': 'RS'
    }
}

const pagamento = {
    'id_venda': 1,
    'dinheiro': 60.00,
    'troco': 8.1
}

//Estágio ameba
// Estagio1.gerarRelatorio(1, 'Rua das Nações', '121', 'Centro', 'Novo Hamburgo', 'RS', 1, 60.00, 8.1, configuracoes)

//Estágio aninhamento de parâmetros por contexto
// Estagio2.gerarRelatorio(cliente, pagamento, configuracoes)

//Estágio de alteração de variáveis para nomes mais relevantes e segregadas por contextos específicos 
// Estagio3.gerarRelatorio(cliente, pagamento, configuracoes)

//Estágio de remoção de promisses passando a utilizar método async await
// Estagio4.gerarRelatorio(cliente, pagamento, configuracoes)

//Estágio de substituição de switch case por enumerado, facilitando a legibilidade e tendo um ponto único de verificação de tipo dentro do sistema
// Estagio5.gerarRelatorio(cliente, pagamento, configuracoes)


// Estagio6.gerarRelatorio(cliente, pagamento, configuracoes)


// Estagio7.gerarRelatorio(cliente, pagamento, configuracoes)

// Estagio8.gerarRelatorio(cliente, pagamento, configuracoes)