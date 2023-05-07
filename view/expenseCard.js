function createCard(cardObject){
    const card = document.createElement('div');
    card.setAttribute('class','card');

    const produto = document.createElement('span');
    const descricao = document.createElement('span');
    const cartao = document.createElement('span');
    const data = document.createElement('span');

    produto.innerText = `Produto: ${cardObject.produto}`;
    descricao.innerText = `Descrição: ${cardObject.descricao}`;
    cartao.innerText = `Pagamento: ${cardObject.cartao}`;
    data.innerText = `Data de compra: ${cardObject.data}`;

    card.appendChild(produto);
    card.appendChild(descricao);
    card.appendChild(cartao);
    card.appendChild(data);

    return card;
}

module.exports = createCard;

const obj = {
    'produto': 'Carrinho',
    'descricao':'É só um carrinho memo',
    'cartao':'Next',
    'data':'30/03/2023',
}