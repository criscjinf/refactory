class Printer {
    constructor(settings) {
        this.settings = settings
    }

    print(data) {
        console.log(this.settings, data)
    }
}

module.exports = Printer;