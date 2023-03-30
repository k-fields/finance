function expenseEntry(data){
    
    const dbConnection = require('./connectDB.js');
    const query = "INSERT INTO expenses(user_id, produto, descricao, cartao, data_compra) VALUES (?,?,?,?,?)"
    dbConnection.query(query,[data.user_id,data.produto,data.descricao,data.cartao, data.data_compra], (error, results, fields) => {
        if (error){
            console.error(error);
            return error;
        }
    });  
    dbConnection.end();

    const response = {
        code:200,
        msg:"Item added succesfully"
    };
    
    return response;
}

const data = {
    user_id:1,
    produto:'Carrinho de mão',
    descricao:'Pa pa parabaraba',
    cartao:'C6',
    data_compra:'2023-03-28'
};

expenseEntry(data);

