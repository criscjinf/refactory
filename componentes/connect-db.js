
data = {
    'cliente': {
        'id': 1,
        'nome': 'Cristiano Lemos'
    },
    'venda': {
        'id': 1234,
        'id_cliente': 1,
        'tipo': 4,
        'total': 51.90
    }
}


class ConnectDB {
    executeSQL(sql, tablename) {
        return new Promise((res, rej) => {
            if (data[tablename]) {
                console.log(`Executou SQL: ${sql}`)
                res({ ...data[tablename] })
            } else rej('Tabela não localizada!')
        })
    }
}

module.exports = ConnectDB;