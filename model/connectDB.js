const mysql = require('mysql2');

//Yeah, I know this isn't optimal, but I'm learning and just practicing.
const connection = mysql.createConnection({
    user:'finance',
    password:'finance',
    host:'localhost',
    port:3306,
    database:'finance_app'
});

connection.connect( err => {
    if (err) {
        console.error(err.stack);
        return;
    }
});

module.exports = connection;