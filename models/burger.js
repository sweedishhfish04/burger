const orm = require('../config/orm');

function getBurgers(req, res, next){
    orm.selectAll().then(function(burgers){
        console.log(burgers)
        res.send(burgers)
    }).catch(function(err){
        console.error(err.message)
        res.status(500).send()
    })
}

function addBurger(req, res, next){

}

function eatBurger(req, res, next){

}

module.exports = {
    getBurgers,
    addBurger,
    eatBurger
}