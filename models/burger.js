const orm = require('../config/orm');

function getBurgers(req, res, next) {
    orm.selectAll().then(function (burgers) {
        console.log(burgers)
        res.send(burgers)
    }).catch(function (err) {
        console.error(err.message)
        res.status(500).send()
    })
}

function addBurger(req, res, next) {
    orm.insertOne(req.pramas.burgerName).then(function () {
        console.log("Inserted Burger Name")
        res.send()
    }).catch(function (err) {
        console.error(err.message)
        res.status(500).send()
    })
}

function eatBurger(req, res, next) {

}

module.exports = {
    getBurgers,
    addBurger,
    eatBurger
}