const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'finance',
    password:'148635Blind@',
    database:'finance_app'
});

module.exports = connect;
