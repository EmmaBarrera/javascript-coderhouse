//! SIMULADOR DE CARRITO

//? 1- Creo una clase 'Producto' con funcion constructora que tenga como atributos el nombre, marca y precio para luego crear los objetos de tipo Producto.

class Productos {
    constructor(nombre, marca, precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? 2- Crear los objetos de tipo Producto.

const producto1 = new Productos('Wallet', 'Ledger', 300);
const producto2 = new Productos('Cargador', 'Vulkan', 25);
const producto3 = new Productos('Funda', 'Nova', 30);

//? 3- Creo un array vacio para guardar las selecciones del usuario (Carrito de compras). Deberemos hacerle un push a este array cada vez que el usuario seleccione un producto. Esto sera en el switch que se ejecuta mas abajo.

const carrito = [];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? 4- Crear una función que reciba como parámetro un objeto de tipo Producto y que muestre por consola los datos del producto.
//? 5- Crear otra funcion que nos muestre el total de productos que hay en el carrito. Para eso debemos crearle una variable sumaTotal que el sume el total de todos los productos que hay en el carrito y por cada producto del carrito, lo recorra y sume el precio a la variable sumaTotal. La funcion debe retornar la variable sumaTotal.

const mostrarMensaje = (producto) => {
    console.log('Su seleccion fue el producto ' + producto.nombre + ' de marca ' + producto.marca + ' con un precio de ' + producto.precio);

}

const totalCarrito = () => {
    let sumaTotal = 0;
    carrito.forEach((producto) => {
        sumaTotal += producto.precio
});
    return sumaTotal;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? 6- Crear una función que primero reciba un prompt para que el usuario ingrese el nombre del producto. Luego un switch que dependiendo del nombre ingresado, muestre por consola el producto seleccionado utilizando la funcion mostrarMensaje. Y por ultimo le pregunta al usuario si desea seguir comprando o no. Si desea seguir comprando se vuelve a llamar a la funcion agregarProducto dentro de su misma funcion. Si no desea seguir comprando se muestra un mensaje por consola.

const agregarProducto = () => {
    // a. Crear una variable con un prompt que pida al usuario que ingrese un producto.
    const productoElegido = prompt('¿Qué producto deseas comprar? Wallet, Cargador o Funda').toLowerCase();

    // b. Crear un switch que reciba como parámetro el nombre del producto y que ejecute la función mostrarMensaje con el objeto correspondiente.
    switch (productoElegido) {
        case 'wallet':
            mostrarMensaje(producto1);
            carrito.push(producto1);
            break;

        case 'cargador':
            mostrarMensaje(producto2);
            carrito.push(producto2);
            break;

        case 'funda':
            mostrarMensaje(producto3);
            carrito.push(producto3);
            break;

        default:
            console.log('Producto no encontrado');
            break;
    }

    // c. Crear un if que reciba un true o un false a traves de un confirm y que muestre por consola un mensaje para agregar o no un nuevo producto al carrito. Tambien que nos muestre el total de productos que hay en el carrito al finalizar la compra.
    if(confirm('¿Desea agregar otro producto?')) {
        agregarProducto();
    } else {
        console.log('Gracias por su compra, el total a pagar es $' + totalCarrito());
        console.log(carrito);
    }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? 7- Llamar a la funcion agregarProducto.

agregarProducto();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

