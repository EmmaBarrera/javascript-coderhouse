//! SIMULADOR DE CARRITO

class Products {
    constructor(name, price, description, img, id) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
        this.id = id;
    };
};

const product1 = new Products('NANO X', '$17.080,00', 'Protege, compra, cambia, haz crecer tus cripto y gestiona tus NFTs con nuestra nueva billetera de hardware con Bluetooth. Todos tus activos digitales protegidos en un mismo lugar.', 'https://cdn.shopify.com/s/files/1/2974/4858/products/01_4f10d168-302a-47b3-b79f-e0a6b6da7a48.png?v=1644216184', 040041);

const product2 = new Products('NANO S PLUS', '$9.569,00', 'Protege tus activos y explora la Web3 con el nuevo Ledger Nano S Plus. Tomar el emblemático Ledger Nano S y transformarlo en amigable para las DeFi y los NFTs. Eso es lo que hicimos con el nuevo Nano S Plus.', 'https://cdn.shopify.com/s/files/1/2974/4858/products/01_6.png?v=1647271638', 040042);

const product3 = new Products('NANO S', '$6.595,00', 'Protege, compra y haz crecer tus activos cripto con la billetera de hardware más famosa del mundo.', 'https://cdn.shopify.com/s/files/1/2974/4858/products/black-lns_95b4bf48-c245-4dc5-8db7-7b437ce5bdc5.png?v=1644216128', 040043);

const products = [product1, product2, product3];

const cart = [];

const cardContainer = document.querySelector('#card__container');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = `
            <h3 class="card__title">Wallet ${product.name}</h3>
            <p class="card__price">${product.price}</p>
            <p class="card__description">${product.description}</p>
            <img class="card__img" src="${product.img}">
            <button class="card__btn" data-id="${product.id}">Agregar al carrito</button>
    `;
    cardContainer.append(card);
});

const addProductToCart = (e) => {
    const productSelect = e.target.getAttribute('data-id');
    const product = products.find((product) => product.id === productSelect);
    cart.push(product);
    console.log(cart);
};

const buyBtns = document.querySelectorAll('.card__btn');

buyBtns.forEach(btn => {
    btn.addEventListener('click', addProductToCart);
});

