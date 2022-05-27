//! PRIMER ENTREGABLE

//* VARIABLES:

const precioWallet = 8700;
const precioCargador = 2100;
const precioFunda = 1800;

let productoElegido
let cantidadElegida


//* FUNCIONES:

const totalCompra = () => {
    let total = 0;
    total = (precioProducto * cantidadElegida);
    return total;
}

//* EVENTOS:

while (productoElegido != 'wallet' && productoElegido != 'cargador' && productoElegido != 'funda') {

    productoElegido = prompt('Elija el producto que desee: wallet, cargador o funda');
    
    switch (productoElegido) {

        case 'wallet':
            precioProducto = precioWallet;
            cantidadElegida = prompt('Ingrese la cantidad de productos que desea comprar: ');
            console.log('El producto elegido es: ' + productoElegido + ' y la cantidad es: ' + cantidadElegida + '.' + ' El precio unitario es: $' + precioWallet + ' y el total a pagar es: $' + totalCompra());
            break;

        case 'cargador':
            precioProducto = precioCargador;
            cantidadElegida = prompt('Ingrese la cantidad de productos que desea comprar: ');
            console.log('El producto elegido es: ' + productoElegido + ' y la cantidad es: ' + cantidadElegida + '.' + ' El precio unitario es: $' + precioCargador + ' y el total a pagar es: $' + totalCompra());
            break;

        case 'funda':
            precioProducto = precioFunda;
            cantidadElegida = prompt('Ingrese la cantidad de productos que desea comprar: ');
            console.log('El producto elegido es: ' + productoElegido + ' y la cantidad es: ' + cantidadElegida + '.' + ' El precio unitario es: $' + precioFunda + ' y el total a pagar es: $' + totalCompra());
            break;

        default:
            alert('Por favor, seleccione un producto válido (wallet, cargador o funda)');

    }

}











//* FUNCION:

/*
const totalCompra = (productoElegido, cantidadElegida) => {

    return (precioProducto * cantidadElegida);

}
*/

//* LLAMADO A LA FUNCION:

/*
let carrito = totalCompra(productoElegido, cantidadElegida);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
*/



//////////////////////////////////////////////////////////////////////////


