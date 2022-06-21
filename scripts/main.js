//* 1. CREO UNA CLASE CONSTRUCTORA PARA LOS PRODUCTOS:

class Wallets {
    constructor(name, price, description, img, id) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
        this.id = id;
    }
};

//* 2. CREO LOS PRODUCTOS:

const product1 = new Wallets('NANO X', '$17.080,00', 'Protege, compra, cambia, haz crecer tus cripto y gestiona tus NFTs con nuestra nueva billetera de hardware con Bluetooth. Todos tus activos digitales protegidos en un mismo lugar.', 'https://cdn.shopify.com/s/files/1/2974/4858/products/01_4f10d168-302a-47b3-b79f-e0a6b6da7a48.png?v=1644216184', '040041');

const product2 = new Wallets('NANO S PLUS', '$9.569,00', 'Protege tus activos y explora la Web3 con el nuevo Ledger Nano S Plus. Tomar el emblemático Ledger Nano S y transformarlo en amigable para las DeFi y los NFTs. Eso es lo que hicimos con el nuevo Nano S Plus.', 'https://cdn.shopify.com/s/files/1/2974/4858/products/01_6.png?v=1647271638', '040042');

const product3 = new Wallets('NANO S', '$6.595,00', 'Protege, compra y haz crecer tus activos cripto con la billetera de hardware más famosa del mundo.', 'https://cdn.shopify.com/s/files/1/2974/4858/products/black-lns_95b4bf48-c245-4dc5-8db7-7b437ce5bdc5.png?v=1644216128', '040043');

//* 3. CREO UN ARRAY CON LOS PRODUCTOS:

let products = [product1, product2, product3];

//* 4. CREO EL CARRITO VACIO AL QUE PUSHEAR DESPUES LOS PRODUCTOS:

let cart = [];

//* 5. CON .QUERYSELECTOR ACCEDO AL GRUPO DE LOS PRODUCTOS Y LO ASIGNO COMO VALOR A LA VARIABLE PRODUCTSCONTAINER:

const productsContainer = document.querySelector('.card-group');

//* 6. CON EL METODO DE ARRAY .FOREACH, RECORRO EL ARRAY DE PRODUCTOS Y CREO UNA CARD POR CADA UNO DE ELLOS:

products.forEach((product) => {
    // 6.1 CREO CONTENEDOR DIV DONDE SE AGREGARAN TODAS LAS CARDS:
    const card = document.createElement('div');
    // 6.2 lES AGREGO LA CLASE NECESARIA:
    card.className = "card";
    // 6.3 CON INNER.HMTL INYECTO EL HTML DE LA CARD:
    card.innerHTML = `
        <img src=${product.img} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.price} ARS</p>
            <button class="button btn-primary" data-id="${product.id}">AÑADIR AL CARRITO</button>
        </div>
    `;
    // 6.4 CON EL METODO .APPEND, AGREGO LAS CARDS AL CONTENEDOR:
    productsContainer.append(card);
});

//* 7. CON LAS CARDS YA CREADAS, ACCEDO A LOS BOTONES DE "AGREGAR AL CARRITO" Y ESTO ME DEVOLVERA UN ARRAY CON TODOS LOS BOTONES CON LA CLASE "BUTTON" QUE SE HAYAN CREADO CON LA FUNCION:

const buyBtns = document.querySelectorAll('.button');

//* 8. CREO UNA FUNCION "IMPRIMIR CARRITO" PARA UTILIZAR EN LA SIGUIENTE FUNCION COMO EVENTO DE CLICK "AGREGAR PRODUCTO AL CARRITO":

// 8.1 SELECCIONO EL CONTENEDOR DEL CARRITO Y LO ASIGNO COMO VALOR A LA VARIABLE CARTCONTAINER: 
const cartContainer = document.querySelector('.cart-container');

const printCart = () => {
    // A. PRIMERO INYECTO CODIGO HTML VACIO:
    cartContainer.innerHTML = '';
    // B. CON EL METODO .FOREACH() RECORRO EL ARRAY DE PRODUCTOS DEL CARRITO E IMPRIMO UN HTML DE CADA UNO DE ELLOS:
    cart.forEach((product) => {
        // B.1 CREO UNA CONSTANTE Y LE ASIGNO COMO VALOR LA CREACION DE UN CONTENEDOR DIV QUE SERA EL CONTENEDOR DE LOS PRODUCTOS DEL CARRITO:
        const cartView = document.createElement('div');
        // B.2 LE ASIGNO LA CLASE NECESARIA:
        cartView.className = "card";
        // B.3 LE ASIGNO EL HTML DE CADA PRODUCTO DEL CARRITO:
        cartView.innerHTML = `
            <img src=${product.img} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price} ARS</p>
                <button class="button btn-danger delete-btn" data-id="${product.id}">ELIMINAR DEL CARRITO</button>
            </div>
        `;
        // B.4 LE AÑADO EL CONTENEDOR DE LOS PRODUCTOS DEL CARRITO AL CONTENEDOR DEL CARRITO GENERAL:
        cartContainer.append(cartView);
    });
}

//* 8.1 CREO UNA FUNCION "AGREGAR PRODUCTO AL CARRITO" PARA UTILIZAR LUEGO COMO EVENTO DE CLICK AL BOTON:

const addProductToCart = (e) => {
    // A. ACCEDO AL ATRIBUTO "DATA-ID" DEL BOTON QUE SE HA CLICKEADO Y LO GUARDO EN UNA VARIABLE:
    const selectProduct = e.target.getAttribute('data-id');
    // B. CON EL METODO .FIND() BUSCO ESE ATRIBUTO DEL PRODUCTO ELEGIDO EN EL ARRAY COMPLETO DE PRODUCTOS Y CUANDO ENCUENTRE EL VALOR DE "DATA-ID" DEL PRODUCTO ELEGIDO, LO GUARDO EN UNA VARIABLE:
    const product = products.find(product => product.id === selectProduct);
    // C. REALIZO UN .PUSH() DEL PRODUCTO ELEGIDO AL CARRITO:
    cart.push(product);
    // E. IMPRIMIMOS EL CARRITO EN LA PANTALLA:
    printCart();
    // F. IMPRIMIMOS EL CARRITO EN EL LOCALSTORAGE:
    localStorage.setItem('cart', JSON.stringify(cart));
};

//* 8.2 HABIENDO CREADO EL ARRAY DE BOTONES Y LA FUNCION DE AGREGAR PRODUCTOS AL CARRITO, AHORA RECORRO EL ARRAY DE PRODUCTOS CON UN .FOREACH Y LE AGREGO UN .ADDEVENTLISTENER() A CADA UNO DE LOS BOTONES, DE ESA MANERA LO PODRA ESCUCHAR CUANDO SE CLICKEE Y EJECUTARA LA FUNCION YA DECLARADA:

buyBtns.forEach((buyButton) => {
    buyButton.addEventListener('click', addProductToCart);
});


//* 9. VERIFICO SI EL LOCALSTORAGE TIENE ALGO Y SI ES ASI, LO CARGO EN EL ARRAY DE PRODUCTOS DEL CARRITO:

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    printCart();
}






//! REVISAR EL SIGUIENTE BLOQUE DE CODIGO PARA ELIMINAR PRODUCTO DEL CARRITO. NO FUNCIONA:

//* 10. CREO UNA FUNCION PARA ELIMINAR UN PRODUCTO DEL CARRITO:

// 10.1 ACCEDO A LOS BOTONES DE "ELIMINAR PRODUCTO" Y ESTO ME DEVOLVERA UN ARRAY CON TODOS LOS BOTONES CON LA CLASE "DELETE-BTN" QUE SE HAYAN CREADO CON LA FUNCION PRINTCART.

const deleteProductBtns = document.querySelectorAll('.delete-btn');

// 10.2 CREO UNA FUNCION "ELIMINAR PRODUCTO DEL CARRITO" PARA UTILIZAR LUEGO COMO EVENTO DE CLICK AL BOTON:

const deleteProductFromCart = (e) => {
    // A. ACCEDO AL ATRIBUTO "DATA-ID" DEL BOTON QUE SE HA CLICKEADO Y LO GUARDO EN UNA VARIABLE:
    const selectProductToDelete = e.target.getAttribute('data-id');
    // B. CON EL METODO .FIND() BUSCO ESE ATRIBUTO DEL PRODUCTO ELEGIDO EN EL ARRAY DEL CARRITO Y CUANDO ENCUENTRE EL VALOR DE "DATA-ID" DEL PRODUCTO ELEGIDO, LO GUARDO EN UNA VARIABLE:
    const productToDelete = cart.find(product => product.id === selectProductToDelete);
    // C. CON EL METODO .FILTER() RECORRO EL ARRAY DEL CARRITO Y ME QUEDO CON LOS PRODUCTOS QUE NO COINCIDAN CON EL PRODUCTO ELEGIDO:
    cart = cart.filter(product => product.id !== productToDelete);
    // D. IMPRIMO EL CARRITO EN LA PANTALLA:
    printCart();
    // E. IMPRIMO EL CARRITO EN EL LOCALSTORAGE:
    localStorage.setItem('cart', JSON.stringify(cart));
};

// 10.3 RECORRO EL ARRAY DE BOTONES CON UN .FOREACH Y LE AGREGO UN .ADDEVENTLISTENER() A CADA UNO DE LOS BOTONES, DE ESA MANERA LO PODRA ESCUCHAR CUANDO SE CLICKEE Y EJECUTARA LA FUNCION YA DECLARADA:

deleteProductBtns.forEach((deleteButton) => {
    deleteButton.addEventListener('click', deleteProductFromCart);
});

