const path = require("path")

mainController = {
    home: (req, res) => {
        res.render(path.join(__dirname, '../views/index'));
    },
    selectorDeDocumento: (req, res) => {
        res.render(path.join(__dirname, '../views/selectorDeDocumento.ejs'));
    },
    capturaFrente: (req, res) => {
        res.render(path.join(__dirname, '../views/capturaFrente.ejs'));
    },
    capturaDorso: (req, res) => {
        res.render(path.join(__dirname, '../views/capturaDorso.ejs'));
    },
    liveness: (req, res) => {
        res.render(path.join(__dirname, '../views/liveness.ejs'));
    },
    verificacion: (req, res) => {
        res.render(path.join(__dirname, '../views/verificacion.ejs'));
    },
}

module.exports = mainController