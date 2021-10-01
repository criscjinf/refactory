class Relatorio {
    constructor() {
        this.data = {}
    }
    async accept(visitor, args) {
        await visitor.execute(this, args)
    }
    insertData(propName, data) {
        this.data[propName] = data
    }
    getData() {
        return this.data
    }
}

module.exports = Relatorio;