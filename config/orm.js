const connection = require("./connection");

function selectAll() {
    connection.query('SELECT * FROM burgers', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    })
}

function insertOne() {}

function updateOne() {}

module.exports = {
    selectAll,
    insertOne,
    updateOne
}