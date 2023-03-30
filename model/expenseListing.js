const expenses = require('./mockValues')

let i = 1;
while(true){
    if (expenses[i]) {
        let nome, data, pagamento = '';

        nome = expenses[i].nome;
        data = expenses[i].data;
        pagamento = expenses[i].pagamento;

        console.log("Nome: " + nome +" | data: " + data + " | método de pagamento: "+pagamento)
        
        i++;
    }
    else break;
}