class Expense {
    constructor (expense_id, user_id, produto, descricao, cartao, data_compra){
        this.expense_id = expense_id;
        this.user_id = user_id;
        this.produto = produto;
        this.descricao = descricao;
        this.cartao = cartao;
        this.data_compra = data_compra;
    }

    

    toString(){
        console.log("Expense Id: " + this.expense_id);
        console.log("User Id: " + this.user_id);
        console.log("Produto: " + this.produto);
        console.log("Descrição: " + this.descricao);
        console.log("Cartão: " + this.cartao);
        console.log("Data de Compra: " + this.data_compra);
    }
}