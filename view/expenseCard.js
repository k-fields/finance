export function createCard(){
    const card = document.createElement('div');
    card.setAttribute('class','card');

    const produto = document.createElement('span');
    const descricao = document.createElement('span');
    const cartao = document.createElement('span');
    const data = document.createElement('span');

    produto.innerText = `Produto: `;
    descricao.innerText = `Descrição: `;
    cartao.innerText = `Pagamento: `;
    data.innerText = `Data de compra: `;

    card.appendChild(produto);
    card.appendChild(descricao);
    card.appendChild(cartao);
    card.appendChild(data);

    return card;
}