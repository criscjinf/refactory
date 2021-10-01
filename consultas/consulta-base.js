const ConnectDB = require("../componentes/connect-db");

class ConsultaBase {
    constructor() {
        this.sql = ''
        this.table = ''
    }

    async get() {
        const connection = new ConnectDB()
        return await connection.executeSQL(this.sql, this.table)
    }
}

module.exports = ConsultaBase;