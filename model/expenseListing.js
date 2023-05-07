const expenses = require('./mockValues')
const conn = require('./connectDB')

const userId = 1;

const queryResult = conn.query('SELECT * FROM expenses WHERE user_id = ?',[userId], (err, result) => {
    if (err){
        console.error(err.sqlMessage);
    }
    else{
        console.table(result)
        return result;
    }
})

conn.end();

module.exports = queryResult;