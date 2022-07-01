//* 1. CREO UNA VARIABLE A LA QUE LUEGO LE ASIGNARE LOS PRODUCTOS:

let products


//* 2. CREO UNA VARIALBE CON ARRAY PARA EL CARRITO VACIO:

let cart = [];


//* 3. ACCEDO AL GRUPO DE LOS PRODUCTOS EN MI HTML Y LO ASIGNO COMO VALOR A LA CONSTANTE PRODUCTSCONTAINER:

const productsContainer = document.querySelector('.products');


//* 4. CREO UNA FUNCION QUE RECORRA EL ARRAY DE PRODUCTOS Y CREE UNA CARD POR CADA UNO DE ELLOS:
// (ESTA FUNCION SE LLAMARA LUEGO CUANDO TRAIGA LOS PRODUCTOS DEL JSON)

const renderProducts = () => {
    products.forEach((product) => {
        // 6.1 CREO CONTENEDOR DIV DONDE SE AGREGARAN TODAS LAS CARDS:
        const card = document.createElement('div');
        // 6.2 lES AGREGO LA CLASE NECESARIA:
        card.className = "products__card card";
        // 6.3 CON INNER.HMTL INYECTO EL HTML DE LA CARD:
        card.innerHTML = `
            <img src=${product.img} class="card__img" alt="...">
            <div class="card__body">
                <h5 class="card__title">${product.name}</h5>
                <p class="card__text">${product.description}</p>
                <p class="card__price">${product.price} ARS</p>
                <button class="card__button" data-id="${product.id}">AGREGAR AL CARRITO</button>
            </div>
        `;
        // 6.4 CON EL METODO .APPEND, AGREGO LAS CARDS AL CONTENEDOR:
        productsContainer.append(card);
    });

}

//* 5. CREO UNA FUNCION PARA LLAMAR A LOS PRODUCTOS DESDE JSON Y LA EJECUTO:

const loadProducts = async () => {
    // showLoader();
    const response = await fetch('../data/products.json')
    const { data } = await response.json()
    products = data
    renderProducts(products);
    // hideLoader();
};

loadProducts();


//* 6. ACCEDO A LOS BOTONES DE "AGREGAR AL CARRITO" Y ESTO ME DEVOLVERA UN ARRAY CON TODOS LOS BOTONES CON LA CLASE "CARD__BUTTON" QUE SE HAYAN CREADO CON LA FUNCION RENDERPRODUCTS:

const buyBtns = document.querySelectorAll('.card__button');


//* 7. CREO UNA FUNCION PARA ELIMINAR UN PRODUCTO DEL CARRITO:

const deleteProductFromCart = () => {
    // A. ACCEDO A LOS BOTONES DE "ELIMINAR PRODUCTO" Y ESTO ME DEVOLVERA UN ARRAY CON TODOS LOS BOTONES CON LA CLASE "DELETE-BTN" QUE SE HAYAN CREADO CON LA FUNCION PRINTCART.
    const deleteProductBtns = document.querySelectorAll('.cart__delbtn');
    // B. RECORRO EL ARRAY DE BOTONES CON UN .FOREACH Y LE AÑADO UN .ADDEVENTLISTENER() A CADA UNO DE LOS BOTONES:
    deleteProductBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            // b.1 ACCEDO AL ATRIBUTO "DATA-ID" DEL BOTON QUE SE HA CLICKEADO Y LO GUARDO EN UNA VARIABLE:
            const productToDelete = e.target.getAttribute('data-id');
            // b.2 CON EL METODO .FILTER() RECORRO EL ARRAY DE PRODUCTOS DEL CARRITO Y MUESTRO SOLO LOS QUE NO COINCIDAN CON EL MISMO (ES DECIR, SE ELIMINA):
            cart = cart.filter((e) => e.id != productToDelete);
            // b.3 AL RECONOCER EL PRODUCTO AL QUE EL USARIO HIZO CLICK, CON EL METODO .PARENTELEMENT() APLICADO DOS VECES, LLEGO A ELIMINAR TODO EL DIV CONTENEDOR DEL PRODUCTO.
            e.target.parentElement.parentElement.remove();
            // b.5 CON EL METODO .SETITEM() GUARDO EL ARRAY DE PRODUCTOS DEL CARRITO NUEVO EN EL LOCALSTORAGE:
            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });
};


//* 8. CREO UNA FUNCION "IMPRIMIR CARRITO" PARA UTILIZAR EN LA SIGUIENTE FUNCION COMO EVENTO DE CLICK "AGREGAR PRODUCTO AL CARRITO":

// 8.1 SELECCIONO EL CONTENEDOR DEL CARRITO Y LO ASIGNO COMO VALOR A LA VARIABLE CARTCONTAINER: 
const cartContainer = document.querySelector('.cart');

const printCart = () => {
    // A. PRIMERO INYECTO CODIGO HTML VACIO:
    cartContainer.innerHTML = '';
    // B. CON EL METODO .FOREACH() RECORRO EL ARRAY DE PRODUCTOS DEL CARRITO E IMPRIMO UN HTML DE CADA UNO DE ELLOS:
    cart.forEach((product) => {
        // B.1 CREO UNA CONSTANTE Y LE ASIGNO COMO VALOR LA CREACION DE UN CONTENEDOR DIV QUE SERA EL CONTENEDOR DE LOS PRODUCTOS DEL CARRITO:
        const cartView = document.createElement('div');
        // B.2 LE ASIGNO LA CLASE NECESARIA:
        cartView.className = "cart__container";
        // B.3 LE ASIGNO EL HTML DE CADA PRODUCTO DEL CARRITO:
        cartView.innerHTML = `
            <img src=${product.img} class="cart__img" alt="...">
            <div class="cart__body">
                <h5 class="cart__title">${product.name}</h5>
                <p class="cart__text">${product.price} ARS</p>
                <button class="cart__delbtn" data-id="${product.id}">ELIMINAR DEL CARRITO</button>
            </div>
        `;
        // B.4 LE AÑADO EL CONTENEDOR DE EL/LOS PRODUCTOS DEL CARRITO AL CONTENEDOR DEL CARRITO GENERAL:
        cartContainer.append(cartView);
        // B.5 EJECUTO LA FUNCION DE ELIMINAR PRODUCTO DEL CARRITO:
        deleteProductFromCart();
    });
};


//* 10 CREO UNA FUNCION "AGREGAR PRODUCTO AL CARRITO" PARA UTILIZAR LUEGO COMO EVENTO DE CLICK AL BOTON:

const addProductToCart = (e) => {
    // A. ACCEDO AL ATRIBUTO "DATA-ID" DEL BOTON QUE SE HA CLICKEADO Y LO GUARDO EN UNA VARIABLE:
    const selectProduct = e.target.getAttribute('data-id');
    // B. CON EL METODO .FIND() BUSCO ESE ATRIBUTO DEL PRODUCTO ELEGIDO EN EL ARRAY COMPLETO DE PRODUCTOS Y CUANDO ENCUENTRE EL VALOR DE "DATA-ID" DEL PRODUCTO ELEGIDO, LO GUARDO EN UNA VARIABLE:
    const product = products.find(product => product.id === selectProduct);
    // C. REALIZO UN .PUSH() DEL PRODUCTO ELEGIDO AL CARRITO:
    cart.push(product);
    // D. IMPRIMIMOS EL CARRITO EN LA PANTALLA:
    printCart();
    // E. IMPRIMIMOS EL CARRITO EN EL LOCALSTORAGE:
    localStorage.setItem('cart', JSON.stringify(cart));
    // F. INFORMAMOS AL USUARIO QUE EL PRODUCTO SE HA AGREGADO AL CARRITO:
    Toastify({
        text: "Agregado al carrito",
        duration: 2000,
        className: "info",
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #134E5E, #71B280)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
    
};


//* 11. HABIENDO CREADO EL ARRAY DE BOTONES Y LA FUNCION DE AGREGAR PRODUCTOS AL CARRITO, AHORA RECORRO EL ARRAY DE PRODUCTOS CON UN .FOREACH Y LE AGREGO UN .ADDEVENTLISTENER() A CADA UNO DE LOS BOTONES, DE ESA MANERA LO PODRA ESCUCHAR CUANDO SE CLICKEE Y EJECUTARA LA FUNCION YA DECLARADA:

buyBtns.forEach((buyButton) => {
    buyButton.addEventListener('click', addProductToCart);
});


//* 12. VERIFICO SI EL LOCALSTORAGE TIENE ALGO Y SI ES ASI, LO CARGO EN EL ARRAY DE PRODUCTOS DEL CARRITO:

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    printCart();
};


//* 13. CUANDO HAGO CLICK EN .NAV__BTN, TOGGLE 'ACTIVE':

const cartButton = document.querySelector('.nav__btn');
const cartDiv = document.querySelector('.cart');

cartButton.addEventListener('click', () => {
    cartDiv.classList.toggle('active');
});



