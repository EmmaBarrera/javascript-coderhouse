//! Primer entrega proyecto final:

//* CLASE CON FUNCION CONSTRUCTORA PARA OBJETOS PRODUCTOS:

class Producto {
    constructor(categoria, nombre, marca, modelo, precio) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////
//* CREACION DE OBJETOS PRODUCTO:

const producto1 = new Producto('Equipos', 'Wallet', 'Ledger', 'Nano S', 6500);
const producto2 = new Producto('Equipos', 'Wallet', 'Ledger', 'Nano S Plus', 9500);
const producto3 = new Producto('Equipos', 'Wallet', 'Ledger', 'Nano X', 17000);
const producto4 = new Producto('Accesorios', 'Cargador', 'Ledger', 'OTG Kit', 1600);
const producto5 = new Producto('Accesorios', 'Security', 'Ledger', 'Cryptosteel', 11000);
const producto6 = new Producto('Accesorios', 'Security', 'Ledger', 'El Billfodl', 2500);
//////////////////////////////////////////////////////////////////////////////////////////////
//* ARRAYS:

const carrito = [ ];
const productos = [ producto1, producto2, producto3, producto4, producto5, producto6 ];
//////////////////////////////////////////////////////////////////////////////////////////////
//* DECLARACION DE FUNCIONES:

const totalCompra = () => {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio;
    })
    return total;
};

const mostrarEleccion = (productos) => {
    console.log('El producto seleccionado es: ' + productos.marca + 'modelo ' + productos.modelo + 'por un total de $' + productos.precio);
}
//////////////////////////////////////////////////////////////////////////////////////////////
//* DECLARACION DE VARIABLES:

let productoElegido;
//////////////////////////////////////////////////////////////////////////////////////////////
//* EVENTOS:

while (productoElegido != 'nano s' && productoElegido != 'nano s plus' && productoElegido != 'nano x' && productoElegido != 'otg kit' && productoElegido != 'cryptosteel' && productoElegido != 'el billfodl') {
    
        let agregarProducto = () => {
    
        let productoElegido = prompt('¿Qué producto desea comprar?: Nano S, Nano S Plus, Nano X, OTG Kit, Cryptosteel o El Billfodl').toLowerCase();

        switch (productoElegido) {
            case 'nano s':
                mostrarEleccion(producto1);
                carrito.push(producto1);
                break;
            
            case 'nano s plus':
                mostrarEleccion(producto2);
                carrito.push(producto2);
                break;
            
            case 'nano x':
                mostrarEleccion(producto3);
                carrito.push(producto3);
                break;
            
            case 'otg kit':
                mostrarEleccion(producto4);
                carrito.push(producto4);
                break;
            
            case 'cryptosteel':
                mostrarEleccion(producto5);
                carrito.push(producto5);
                break;
            
            case 'el billfodl':
                mostrarEleccion(producto6);
                carrito.push(producto6);
                break;
            
            default:
                alert('El producto no existe. Por favor, ingrese: Nano S, Nano S Plus, Nano X, OTG Kit, Cryptosteel o El Billfodl');
                break;
        }

        let confirmacionCarrito = confirm('¿Desea agregar otro producto al carrito?');
        if (confirmacionCarrito) {
            agregarProducto();
        } else {
            console.log('El total de la compra es: $' + totalCompra());
            console.log(carrito);
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////
