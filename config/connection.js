const mysql = require('mysql');


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'vz9pit6hhyen85yr',
        password: 't6inytmcvg9rdw0s',
        database: 'ms9yntsqpdr9zmut'
    });
};



//const connection = mysql.createConnection({
//host: 'localhost',
//user: 'root',
//password: '123',
//  database: 'burgers_db'
//});

connection.connect();

module.exports = connection