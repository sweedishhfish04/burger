const connection = require("./connection");

function selectAll() {
    return new Promise(function (resolve, reject) {
        connection.query('SELECT * FROM burgers', function (error, results) {
            if (error) reject(error);
            results.map(burger => {
                burger.devoured = burger.devoured === 1
            })
            resolve(results)
        })
    })
}

function insertOne(burgerName) {
    return new Promise(function (resolve, reject) {
        connection.query(`INSERT INTO burgers VALUES (NULL, "${burgerName}", FALSE)`, function (error, results) {
            if (error) reject(error);
            resolve()
        })
    })
}

function updateOne(burgerName) {
    return new Promise(function (resolve, reject) {
        connection.query(`UPDATE burgers SET devoured = TRUE WHERE burgerName = "${burgerName}"`, function (error, results) {
            if (error) reject(error);
            resolve()
        })
    })
}

module.exports = {
    selectAll,
    insertOne,
    updateOne
}