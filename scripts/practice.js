// IF ELSE


// const nombreUsuario = prompt('ingrese su usuario:').toLowerCase();

// if (nombreUsuario == 'emma') { 
    
//     const contraseñaUsuario = prompt('ingrese su contraseña:');
    
//     if (contraseñaUsuario === 'abc123') {
//         alert('Bienvenido ' + nombreUsuario + '!');
//     } else {
//         alert('Contraseña incorrecta');
//     }

// } else {
//     alert('nombre de usuario incorrecto');
// }



//-------------------------------------------------------------------------

/*
const edadUsuario = Number(prompt('ingrese su edad: '));

if (edadUsuario == 18) {
    alert('puede pasar, mostrando el documento');
} else if (edadUsuario == 31) {
    alert('Puede pasar gratis')
} else if (edadUsuario > 18 && edadUsuario <= 60){
    alert('puede pasar')
} else if (edadUsuario < 18){
    alert('no puede pasar, es menor de edad');
} else {
    alert('no puede pasar, es mayor de 60')
}
*/

//-------------------------------------------------------------------------

// Ciclos o bucles o iteraciones (for, while, do while)

// ciclos por conteo : repite el codigo un numero de veces especifica (for)

// ciclos condicionales: repiten el codigo elvaliando una condicion y que sea verdadera. (while y do while)

// For :
/*
for(desde; hasta; actualizacion){
    //*lo que escribo aca se ejecuta mientras dure el ciclo
}


for (let i = 0; i < 10; i++) {
    console.log(i);
}
*/


// let datoIngresado = prompt('Ingresar un dato: ');

// while (datoIngresado != 'ESC') {
//     console.log('El usuario ingreso ' + datoIngresado);
//     datoIngresado = prompt('Ingresar otro dato: ');
// }




//lOGIN DE USUARIO Y CLAVE

/*
let nombreUsuario

while (nombreUsuario != 'emma') {

    nombreUsuario = prompt('ingrese su usuario:').toLowerCase();

    if (nombreUsuario == 'emma') { 
    
        const contraseñaUsuario = prompt('ingrese su contraseña:');
        
        if (contraseñaUsuario === 'abc123') {
            alert('Bienvenido ' + nombreUsuario + '!');
        } else {
            alert('Contraseña incorrecta');
        }
    
    } else {
        alert('nombre de usuario incorrecto');
    }
    

}

*/

//! SWITCH
//* SWITCH (NO SIRVE PARA COMPARAR SI ALGO ES MENOR O MAYOR)


// CON IF
/*
let nombreUsuario = prompt('ingrese su nombre: ');
*/

/*
if (nombreUsuario == 'gonzalo') {
    console.log('Hola Gonza')
} else if (nombreUsuario == 'emmanuel') {
    console.log('Hola Emma')
} else {
    console.log('Hola desconocido')
}

*/

/*
switch (nombreUsuario) {
    case 'gonzalo':
        console.log('Hola Gonza')
        break;

    case 'emmanuel':
        console.log('Hola Emma')
        break;
    
    default:
        console.log('Hola desconocido')
        break;
}
*/

//! PROGRAMACION CON FUNCIONES
//*LEER "PRINCIPIO DRY", "PRINCIPIO KISS", "PRINCIPIO YAGNI".
//*SE DECLARAN LAS FUNCIONES Y DESPUES SE LAS LLAMA.
//* SINTAXIS Y LLAMADO:

/*
function name(params) {
    
}

name();

*/

/*
let nombre = prompt('ingrese su nombre')
alert('bienvenido ' + nombre)

let nombre2 = prompt('ingrese su nombre')
alert('bienvenido ' + nombre)

let nombre3 = prompt('ingrese su nombre')
alert('bienvenido ' + nombre)

*/

//¿CÓMO HACEMOS PARA NO REPETIR CÓDIGO TANTAS VECES SI NECESITO PEDIR VARIOS NOMBRES?.
// PARA ESTO SE CREAN LAS FUNCIONES (COMO UNA CLASE EN CSS, QUE POR EJEMPLO APLICA UNA FUENTE, UN TAMAÑO Y UN GROSOR A DETERMINADOS TEXTOS)

//ESTA ES UNA FUNCION SIMPLE. NO LE PASAMOS PARAMETROS EN LOS PARENTENSIS.

/*
function saludo() {
    let nombre = prompt('ingrese su nombre')
    alert('bienvenido ' + nombre)
}

saludo();
*/

// EN ESTE CASO, SI LA VARIABLE 'NOMBRE' ESTARIA DECLARADA EN OTRO LUGAR QUE NO SEA DENTRO DE LA FUNCION, DEBEMOS INCLUIRLA COMO PARAMETRO:

/*
function saludo(nombreUsuario) {
    alert('bienvenido ' + nombreUsuario)
}

saludo('Emmanuel');
*/

// NO HACE FALTA DECLARAR QUE TIPO DE DATO LE PASO ENTRE PARENTESIS. LE PUEDO AGREGAR UN STRING, UN NUMERO, BOULEANO, OBJETO, ARRAY, ETC. SIEMPRE QUE SEA UN DATO.

// MIREMOS EL SIGUIENTE CASO. AQUI NECESITAMOS 2 DATOS, TANTO NOMBRE COMO APELLIDO (AGREGAMOS OTRO PARAMETRO CON UNA ',')

// IMPORTANTE: CUANDO LLAMEMOS A LA FUNCION TENDREMOS QUE UTILIZAR TODOS LOS PARAMETROS QUE UTILIZAMOS AL DECLARARLA Y EN EL MISMO ORDEN

/*
function saludo(nombreUsuario, apellidoUsuario) {
    alert('bienvenido ' + nombreUsuario + '. tu apellido es ' + apellidoUsuario)
}

saludo('Emmanuel', 'Barrera');
*/

//! AHORA VEREMOS COMO CREAR UNA FUNCION QUE SUMA DOS NUMEROS Y OTRA QUE MUESTRA EL MENSAJE CON EL RESULTADO:

/*
let resultado = 0;

function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}

function mostrar(mensaje) {
    console.log(mensaje)
}

sumar(6, 3);
mostrar(resultado);
*/

//* ES BASTANTE COMPLEJO HACERLO DE ESTA MANERA, POR ESO CONTAMOS CON UN VALOR DE RETORNO EN LAS FUNCIONES LLAMADO "RETURN" Y QUEDARIA DE ESTA MANERA:

/*
function sumar (primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}

let resultado = sumar (5, 8);

console.log(resultado);
*/

//* COMO PODEMOS VER, AL LLAMAR A LA FUNCION LO HACEMOS DENTRO DE UNA VARIABLE PARA DESPUES PODER REUTILIZARLA Y LA IMPRIMIMOS EN CONSOLA 

//! CALCULADORA

/*

let primerNumero = Number(prompt('Ingrese el primer numero:'));
let segundoNumero = Number(prompt('Ingrese el segundo numero:'));
let operacion = prompt('Ingrese + , - , * o / para realizar la operación.')

function calculadora (primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case '+':
            return primerNumero + segundoNumero;
            break;
    
        case '-':
            return primerNumero - segundoNumero;
            break;
        
        case '*':
            return primerNumero * segundoNumero;
            break;
        
        case '/':
            return primerNumero / segundoNumero;
            break;
        
        default:
            return 0;
            break;
    }
}

console.log(calculadora(primerNumero, segundoNumero, operacion));

*/

//! SCOPE
//* let es una variable local (solo funciona dentro de la funcion), este ejemplo me mostraria UNDEFINED en el ultimo console.log:
//* Podria declarar dos variables con el mismo nombre si lo hago por dentro y por fuera de la funcion (es confuso, no hacerlo salvo caso muy puntual)


/*
function mostrarNumero() {
    let numero = 5
    console.log('Log desde funcion ' + numero)
}

let numero = 8

mostrarNumero();

console.log('Log fuera de funcion ' + numero)
*/

//! FUNCIONES ANONIMAS
//* ES LO MISMO QUE VENIMOS VIENDO, SOLO CAMBIA LA SINTAXIS (ESTA NO SE UTILIZA TANTO. SI SE USA LA SIGUIENTE (FLECHA))
//* NO LE ESTAMOS PASANDO NOMBRE A LA FUNCION, SOLO LOS PARAMETROS. Y DENTRO DE LAS LLAVES LE DECIMOS QUE DEVUELVA EL CALCULO QUE QUEREMOS HACER.
//* EN EL CONSOLE LOG LO LLAMAMOS CON EL NOMBRE DE LA VARIABLE.

// const suma = function (a, b) {return a + b}

// console.log(suma(15,20));

//! FUNCIONES FLECHA
//* EN VEZ DE ESCRIBIR "FUNCTION" LE PASO DIRECTO LOS PARAMETROS Y HAGO UNA FLECHA DESPUES DE LOS MISMOS (ESTA REEMPLAZARIA A LA PALABRA FUNCTION)
//* SE UTILIZA MUCHO ESTA FORMA PARA ESCRIBIR FUNCIONES

/*
const suma = (a, b) => {return a + b}

console.log(suma(15,20));
*/

//* NOS DA ALGUNAS VENTAJAS MAS: SI LE SACAMOS EL RETURN Y LOS CORCHETES, HARA EL CALCULO DE A+B Y NOS DARA UN RETURN DE TODAS FORMAS.

/*
const suma = (a, b) => a + b

console.log(suma(15,20));
*/

//!METODOS EN ARRAYS

// const listaNombresMetodos = ['Gonzalo', 'Emmanuel', 'Cristian', 'Miguel'];

//* LENGTH

// console.log(listaNombresMetodos.length);

// for (let i = 0; i < listaNombresMetodos.length; i++) {
//     console.log(listaNombresMetodos[i]);
// }

//* AGREGAR ELEMENTOS (PUSH, UNSHIFT)

// const nombres = ['Gonzalo', 'Emmanuel', 'Cristian', 'Miguel'];

// nombres.push('Matias');
// nombres.unshift('Juan');

// console.log(nombres);

//* ELIMINAR ELEMENTOS (POP, SHIFT)

// nombres.pop()
// nombres.shift()

// console.log(nombres);

//* ELIMINAR 1 ELEMENTO ESPECIFICO (SPLICE)

// nombres.splice(2, 3);

//* CREAR UN STRING DESDE UN ARRAY (JOIN)

// const stringDesdeArray = nombres.join(', ');

// console.log(stringDesdeArray);

//* CONCATENAR UN ARRAY CON OTRO (CONCAT)

// const masNombres = ['Juan', 'Pedro', 'Lucas'];

// console.log(miArray);
// console.log(masNombres);

// const todosLosNombres = miArray.concat(masNombres);

// console.log(todosLosNombres);

//* OBTENER UN INDICE DE UN ARRAY (INDEXOF)

// console.log(nombres.indexOf('Emmanuel'));
// console.log(nombres.indexOf('Gonzalo'));

//* SABER SI UN ELEMENTO EXISTE EN UN ARRAY (INCLUDES)

// console.log(nombres.includes('Gonzalo'));

//* DAR VUELTA A UN ARRAY (REVERSE)

// console.log(nombres.reverse());

//! ARRAYS DE OBJETOS

// const consola1 = { marca: 'Nintendo', modelo: 'Switch', precio: '$200' };
// const consola2 = { marca: 'Sony', modelo: 'Playstation', precio: '$150' };
// const consola3 = { marca: 'Microsoft', modelo: 'Xbox', precio: '$100' };

// const productos = [consola1, consola2, consola3];

// console.log(productos);

//* RECORRER UN ARRAY DE OBJETOS 
//? SINTAXIS ANTERIOR A ES6(FOR OF)

// for (const producto of productos) {
//     console.log(producto.marca);
//     console.log(producto.modelo);
// }

// EJEMPLO: LISTADO DE PRODUCTOS SUGERIDOS EN MERCADOLIBRE.
// POR CADA OBJETO EN EL ARRAY: COLOCAR UNA IMAGEN, UN PRECIO, UN TITULO Y UN BOTON PARA AGREGAR AL CARRITO. Y SE CREA UNA TARJETA DE ESE PRODUCTO.

//* RECORRER UN ARRAY DE OBJETOS
//? SINTAXIS ES6 (FOR EACH)

// productos.forEach((producto) => {
//     console.log(producto.marca);
//     console.log(producto.modelo);
// });

//! FUNCIONES DE ORDEN SUPERIOR SON LAS QUE RECIBEN UNA FUNCION COMO PARAMETRO O LAS QUE DEVUELVEN UNA FUNCION.
//? PRIMERO VEAMOS COMO FUNCIONA LAS QUE RETORNAN UNA FUNCION.

//* lO SIGUIENTE QUE HAREMOS ES COMO EJEMPLO, DECLARAR UNA FUNCION QUE NOS RETORNE UN VALOR (5). LUEGO DECLARAMOS UNA VARIABLE QUE RECIBA COMO VALOR LA FUNCION QUE RETORNABA 5. POR LO QUE EL VALOR DE LA VARIABLE SERA 5.

// function retornaValor() {
//     return 5;
// }

// let valorRetornado = retornaValor();

// console.log(valorRetornado);

//* EL EL SIGUIENTE CASO ESTAMOS COMPARANDO SI M ES MAYOR A N Y COMO RESULTADO DEVOLVERA TRUE O FALSE:

// function mayorQue(n) {
//     return (m) => m > n;
// }

//* PERO DE DONDE VIENE EL PARAMETRO M?
//* LO QUE HAREMOS ES DECLARAR UNA NUEVA VARIABLE A LA QUE LE ASIGNAREMOS UNA FUNCION EN VEZ DE UN DATO.
//* COMO EN EL PRIMER EJEMPLO, SI A LA VARIABLE LE PASAMOS COMO VALOR UN LLAMADO A LA FUNCION MAYORQUE, ÉSTA FUNCION RETORNARA UN VALOR. EN EL SIGUIENTE CASO LA VARIABLE MAYORQUEDIEZ SERA IGUAL AL VALOR RETORNADO POR LA FUNCION MAYORQUE.

// let mayorQueDiez = mayorQue(10); // RETORNARÁ (m) => m > 10

//* POR LO TANTO SI REALIZAMOS LOS SIGUIENTES CONSOLE.LOG:

// console.log(mayorQueDiez(11)); // RETORNARÁ TRUE
// console.log(mayorQueDiez(9)); // RETORNARÁ FALSE

//? AHORA VEAMOS COMO FUNCIONAN LAS QUE RECIBEN UNA FUNCION COMO PARAMETRO.

//* VAMOS A USAR LOS METODOS QUE USAN ESTA LOGICA COMO VIMOS LA CLASE ANTERIOR EN FOR EACH AL QUE LE PASAMOS COMO PARAMETRO UNA FUNCION. (LE DABAMOS UNA FUNCION A UN METODO QUE TAMBIEN ES UNA FUNCION)

//* LO QUE HARA LA SIGUIENTE FUNCION ES RECIBIR COMO PARAMETRO UNA FUNCION Y UN ARRAY. ESE ARRAY SERA EL QUE SE RECORRERA CON EL FOR OF. DENTRO DE ESE FOR OF VOY A USAR UNA FUNCION QUE ES LA MISMA QUE LA QUE RECIBIMOS COMO PARAMETRO, QUE LE VOY A ENVIAR EL ELEMENTO COMO PARAMETRO EN CADA VUELTA.
//* SI ESTE FUESE UN FOR QUE VA DE 1 A 10, ELEMENTO TOMARA EN CADA VUELTA EL 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Y EN CADA VUELTA LLAMARA A LA FUNCION CON EL 1 COMO PARAMETRO, 2 COMO PARAMETRO, 3 COMO PARAMETRO, etc.:

// function porCadaUno(array, funcion) {
//     for (const elemento of array) {
//         funcion(elemento);
//     }
// }

//* LLAMAREMOS A LA FUNCION PORCADAUNO CON UN ARRAY Y UNA FUNCIONS (QUE PUEDE SER NATIVA O CREADA POR NOSOTROS Y SIN LOS PARENTESIS FINALES):

// porCadaUno([ 'Emmanuel', 'Juan', 'Mauro' ], console.log);

//! METODO FIND
//? EL METODO FIND DEVUELVE EL PRIMER ELEMENTO QUE CUMPLA CON LA CONDICION QUE LE PASAMOS COMO PARAMETRO.

//* EN EL SIGUIENTE EJEMPLO CREAMOS UN ARRAY CON LOS NOMBRES DE LOS CURSOS Y SUS PRECIOS. LUEGO CREAMOS UNA VARIABLE RESULTADO QUE IGUALAMOS A UN METODO FIND  DEL ARRAY CURSOS Y LE PASAMOS COMO PARAMETRO UNA FUNCION FLECHA.

// const cursos = [
//     {nombre: 'Javascript', precio: 200},
//     {nombre: 'Python', precio: 150},
//     {nombre: 'Java', precio: 100},
//     {nombre: 'C#', precio: 50},
//     {nombre: 'PHP', precio: 20},
// ];

// const resultado = cursos.find((curso) => curso.precio < 100);

// console.log(resultado);


//* ESTE METODO NOS SERVIRIA MAS PARA BUSCAR UN ELEMENTO EN UN ARRAY POR EJEMPLO POR SU NOMBR (QUE EN ESTE CASO ES UNICO):

// const cursos = [
//     {nombre: 'Javascript', precio: 200},
//     {nombre: 'Python', precio: 150},
//     {nombre: 'Java', precio: 100},
//     {nombre: 'C#', precio: 50},
//     {nombre: 'PHP', precio: 20},
// ];

// const resultado = cursos.find((curso) => curso.nombre === 'Java');

// console.log(resultado);

//* PERO SI QUEREMOS HACER UNA BARRA DE BUSQUEDA NOS TRAERIA TODOS LOS ELEMENTOS QUE CUMPLAN CON LA CONDICION, NO SOLO EL PRIMERO QUE CUMPLA CON LA CONDICION.
//* PARA ESTO UTILIZAREMOS EL METODO FILTER:

//! METODO FILTER

// const cursos = [
//     {nombre: 'Javascript', precio: 200},
//     {nombre: 'Python', precio: 150},
//     {nombre: 'Java', precio: 100},
//     {nombre: 'C#', precio: 50},
//     {nombre: 'PHP', precio: 20},
// ];

// const resultado = cursos.filter((curso) => curso.precio < 100);

// console.log(resultado);

//* COMO VEMOS NOS MUESTRA TODOS LOS CURSOS QUE CUMPLEN CON LA CONDICION.
//* ES IMPORTANTE TENER EN CUENTA QUE FIND NO ES UN METODO DESTRUCTIVO, ES DECIR QUE NO MODIFICA EL ARRAY ORIGINAL. LOS FILTRA Y NOS MUESTRA LOS RESULTADOS EN UN NUEVO ARRAY.

//? AHORA BIEN, SI LO QUE QUEREMOS ES OBTENER LOS RESULTADOS QUE INCLUYAN LO QUE EL USUARIO INGRESE, DEBEMOS AGREGAR UN NUEVO METODO DENTRO DEL FIND:

//! METODO INCLUDES

// let ingresoUsuario = prompt('¿Qué curso desea buscar?');

// const cursos = [
//     {nombre: 'Javascript', precio: 200},
//     {nombre: 'Python', precio: 150},
//     {nombre: 'Java', precio: 100},
//     {nombre: 'C#', precio: 50},
//     {nombre: 'PHP', precio: 20},
// ];
    
//     const resultado = cursos.filter((curso) => curso.nombre.includes(ingresoUsuario));
    
//     console.log(resultado);

//* COMO PODEMOS VER, AGREGAMOS LA VARIABLE INGRESOUSUARIO DONDE SE BUSCA EL CURSO QUE NECESITA, Y LUEGO LO USAMOS PARA FILTRAR LOS NOMBRES QUE LA INCLUYAN.

//* LOS DOS ANTERIORES SON LOS MAS UTILIZADOS.

//! METODO SOME

//* ESTE METODO FUNCIONA IGUAL QUE EL FIND, PERO SI EL RESULTADO DE LA CONDICION ES TRUE, EL METODO SOME RETORNA TRUE. Y SI EL RESULTADO ES FALSE, EL METODO SOME RETORNA FALSE.

// const cursos = [
//     {nombre: 'Javascript', precio: 200},
//     {nombre: 'Python', precio: 150},
//     {nombre: 'Java', precio: 100},
//     {nombre: 'C#', precio: 50},
//     {nombre: 'PHP', precio: 20},
// ];
    
// console.log(cursos.some((curso) => curso.nombre == 'Javascript'));
// console.log(cursos.some((curso) => curso.nombre == 'Angular'));

//! METODO MAP
//* ESTE METODO SE USA MUCHO PARA CREAR BLOQUES DINAMICOS DE CODIGO EN HTML, QUE VEREMOS MAS ADELANTE, ETC.

//* EL METODO MAP RETORNA UN NUEVO ARRAY CON LOS RESULTADOS DE LA FUNCION QUE LE PASAMOS COMO PARAMETRO. ESTE METODO SE USA MUCHO PARA CREAR NUEVOS ARRAYS CON ALGUNOS ELEMENTOS DE OTRO ARRAY.

// const cursos = [
//     {nombre: 'Javascript', precio: 200},
//     {nombre: 'Python', precio: 150},
//     {nombre: 'Java', precio: 100},
//     {nombre: 'C#', precio: 50},
//     {nombre: 'PHP', precio: 20},
// ];

// const arrayMap = cursos.map((curso) => curso.nombre);

// console.log(arrayMap);

//* EN EL ULTIMO EJEMPLO CREAMOS UN ARRAY NUEVO CON STRINGS. PERO A SU VEZ PODEMOS TAMBIEN DEVOLVER UN ARRAY CON OBJETOS:

// const cursos = [
//     {nombre: 'Javascript', precio: 200},
//     {nombre: 'Python', precio: 150},
//     {nombre: 'Java', precio: 100},
//     {nombre: 'C#', precio: 50},
//     {nombre: 'PHP', precio: 20},
// ];

// const arrayModificado = cursos.map((curso) => {
//     return {
//         nombre: curso.nombre + ' promo 50%',
//         precio: curso.precio * 0.5
//     }
// });

// console.log(arrayModificado);

//! METODO REDUCE
//* ESTE METODO SE USA PARA SUMAR TODOS LOS ELEMENTOS DE UN ARRAY O PARA OBTENER UN RESULTADO GENERAL SOBRE TODOS LOS ELEMENTOS.
//* ESTE NO SOLO RECIBE LA FUNCION POR PARAMETRO SINO QUE RECIBE TAMBIEN EL VALOR INICIAL DEL ACUMULADOR. EJEMPLO PARA SUMAR EL TOTAL DEL CARRITO.
//* NO LO USAN MUCHO PORQUE ES UN POCO COMPLEJO DE USAR POR QUE TENEMOS QUE DECLARAR UNA VARIABLE EN 0 PARA EMPEZAR A SUMAR (ACUMULADOR)

// const cursos = [
//     {nombre: 'Javascript', precio: 200},
//     {nombre: 'Python', precio: 150},
//     {nombre: 'Java', precio: 100},
//     {nombre: 'C#', precio: 50},
//     {nombre: 'PHP', precio: 20},
// ];

// const totalCursos = cursos.reduce((acumulador, curso) => acumulador + curso.precio, 0); // EL 0 ES EL VALOR INICIAL DEL ACUMULADOR.

// console.log(totalCursos); // 200 + 150 + 100 + 50 + 20 = 500

//! METODO SORT
//* ESTE METODO SE USA PARA ORDENAR UN ARRAY. POR EJEMPLO, ORDENAR DE MENOR PRECIO A MAYOR PRECIO. CUIDADO, ESTE METODO ES DESTRUCTIVO, ES DECIR, MODIFICA EL ARRAY ORIGINAL.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numeros.sort((a, b) => a - b); // ESTE METODO ORDENA DE MENOR A MAYOR.
// numeros.sort((a, b) => b - a); // ESTE METODO ORDENA DE MAYOR A MENOR.

//* TAMBIEN LO USAMOS PARA ORDENAR ALFABETICAMENTE (STRINGS). ES DIFICIL, PERO CUANTO TENGAMOS QUE ORDENAR ALGO ALFABETICAMENTE, ESTE METODO ES EL MEJOR QUE HAY. LO APLICAREMOS ASI COMO ESTA:

// const cursos = [
//     {nombre: 'Javascript', precio: 200},
//     {nombre: 'Python', precio: 150},
//     {nombre: 'Java', precio: 100},
//     {nombre: 'C#', precio: 50},
//     {nombre: 'PHP', precio: 20},
// ];

// cursos.sort((a, b) => {
//     if (a.nombre > b.nombre) {
//         return 1;
//     } else if (a.nombre < b.nombre) {
//         return -1;
//     }
//     return 0;
// });

// console.log(cursos);