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
    orm.insertOne(req.params.burgerName).then(function () {
        console.log("Inserted Burger Name")
        res.send()
    }).catch(function (err) {
        console.error(err.message)
        res.status(500).send()
    })
}

function eatBurger(req, res, next) {
    orm.updateOne(req.params.burgerName).then(function () {
        console.log("Updated")
        res.send()
    }).catch(function (err) {
        console.error(err.message)
        res.status(500).send()
    })
}

module.exports = {
    getBurgers,
    addBurger,
    eatBurger
}