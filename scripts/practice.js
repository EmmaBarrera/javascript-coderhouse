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

//! DOM

//? ACCEDER A LA INFORMACION DEL DOCUMENTO HTML DESDE LA CONSOLA:

// console.log(document); // NOS MUESTRA LA INFORMACION DEL DOCUMENTO HTML.

//* ACCEDER A LOS ELEMENTOS HEAD Y BODY DEL DOCUMENTO HTML DESDE LA CONSOLA:

// console.log(document.body); // NOS MUESTRA EL BODY DEL DOCUMENTO HTML.
// console.log(document.head); // NOS MUESTRA EL HEAD DEL DOCUMENTO HTML.

//* PARA ACCEDER A OTROS ELEMENTOS (NODOS) DEL DOCUMENTO HTML, COMO POR EJEMPLO, LOS ELEMENTOS HEADER, FOOTER, ETC. USAMOS OTROS METODOS:

//? ACCEDER A LOS NODOS:

//* METODO getElementsById()
// console.log(document.getElementById('encabezado')) // NOS MUESTRA EL NODO QUE TENEMOS CON ID 'encabezado'.

//* METODO getElementsByClassName()
//console.log(document.getElementsByClassName('nav')); // NOS MUESTRA TODOS LOS NODOS QUE TENEMOS CON LA CLASE 'nav' DENTRO DE UN ARRAY.

//* METODO getElementsByTagName()
//console.log(document.getElementsByTagName('li')); // NOS MUESTRA TODOS LOS NODOS QUE TENEMOS CON EL TAG 'li' DENTRO DE UN ARRAY.

//* PODEMOS BUSCAR LOS CHILDREN DE UN NODO COLOCANDO EL METODO getElementById() EN EL NODO PADRE Y LUEGO EL METODO .children() PARA OBTENER LOS HIJOS.

//? ASI COMO PODEMOS ACCEDER Y NOS RETORNA UN VALOR DE UN NODO, PODEMOS ASIGNAR ESE VALOR A UNA VARIABLE:

//const titulo = document.getElementsByTagName('h1'); // NOS MUESTRA EL NODO QUE TENEMOS CON EL TAG 'h1' Y LO ASIGNA A UNA VARIABLE.

//console.log(titulo);

//* A PARTIR DE AHORA, CADA BUSQUEDA QUE HAGAMOS DE UNO O VARIOS DE NUESTROS NODOS HTML LO HAREMOS ASIGNANDOSELO A UNA VARIABLE COMO VIMOS ANTERIORMENTE.

//? MODIFICAR EL CONTENIDO DE UN NODO:

//* lO QUE HACEMOS CON JS ES AGREGAR INTERACTIVIDAD. ESTO LO HACEMOS ACCEDIENDO A UN NODO Y LUEGO MODIFICANDO SU CONTENIDO. VEAMOS UN EJEMPLO:

//const titulo = document.getElementById('titulo'); // NOS MUESTRA EL NODO QUE TENEMOS CON ID 'titulo' Y LO ASIGNA A UNA VARIABLE.
//console.log(titulo); // NOS MUESTRA EN CONSOLA EL VALOR DEL NODO.

//titulo.innerTEXT = 'Modifique el titulo desde JS'

//console.log(titulo); // NOS MUESTRA EN CONSOLA EL VALOR DEL NODO MODIFICADO LUEGO DE HABER ACCEDIDO CON .innerTEXT.

//* DE ESTA FORMA ANTERIOR MODIFICAMOS EL DOM, NO EL HTML. CUANDO CARGA EL SITIO WEB, CARGA EL HTML, LUEGO CUANDO LEE EL JS Y LO EJECUTA, MODIFICA EL DOM. ESTO SUCEDE EN CUESTION DE SEGUNDOS. CUANDO SE CAMBIAN COSAS MAS GRANDES, LA PAGINA TARDA MAS EN CARGAR (POR ESO SE AGREGA UNA BARRA DE PROGRESO EN ALGUNAS OCACIONES).

//? A DIFERENCIA DEL .innerTEXT, EL .innerHTML, ES EL CONTENIDO DEL HTML. ESTO NOS PERMITE CAMBIAR UN BLOQUE DE CODIGO HTML Y NO SOLO UN TEXTO:

//const nav = document.getElementById('nav');

// console.log(nav.innerHTML); // NOS MUESTRA EL CONTENIDO DEL HTML.

//* SI QUEREMOS CAMBIAR EL CONTENIDO DEL HTML, EN VEZ DE SOLO EL TEXTO, LO HACEMOS DE LA SIGUIENTE MANERA:

// nav.innerHTML = '<a href="https://google.com">Google</a>'; // CAMBIAMOS EL CONTENIDO DEL HTML POR UN LINK (PASANDO UN BLOQUE DE STRING, QUE LUEGO EL NAVEGADOR LEERA COMO HTML).

// console.log(nav.innerHTML); // AHORA NOS MUESTRA EL CONTENIDO DEL HTML MODIFICADO.

//? AGREGAR NODOS:

//* HASTA AHORA LO QUE HICIMOS FUE SOLO MODIFICAR ELEMENTOS QUE YA EXISTEN EN EL DOM. PARA AGREGAR NUEVOS ELEMENTOS, HACEMOS LO SIGUIENTE:

//* LA CREACION DE UN ELEMENTO ESTA DIVIDIDA EN TRES PARTES:

    //* 1. CREAR EL ELEMENTO EN BLANCO PARA LUEGO AGREGARLO AL DOM.
//    const contenedor = document.createElement('div'); 

    //* 2. DARLE CONTENIDO AL ELEMENTO CREADO:
//    contenedor.innerHTML = '<h2>Hola mundo</h2>';

    //* 3. AGREGAR EL CONTENEDOR CREADO COMO HIJO DE ESTE ELEMENTO UTILIZANDO .append().
    // ANTES DE ESTO, DEBEREMOS HABER ACCEDIDO AL ELEMENTO PADRE CON .getElementById() Y LUEGO SI AGREGARLE COMO HIJO EL ELEMENTO CREADO.
//    document.body.append(contenedor);
    // EN ESTE CASO, LO ESTAMOS AGREGANDO AL FINAL DEL BODY

    // AHORA, SI QUEREMOS AGREGAR UN NODO A UN LUGAR DISTINTO AL BODY (YA QUE NO ES PROLIJO HACERLO DE ESTA FORMA), LO HACEMOS COMO ACABAMOS DE VER:

//    const nav = document.getElementById('nav');
//    nav.append(contenedor); // AGREGAMOS EL NODO QUE CREAMOS AL FINAL DEL NAV.

//? QUITAR NODOS:

    //* PARA QUITAR UN NODO, LO HACEMOS DE LA SIGUIENTE MANERA:
    // 1. HACEMOS UN .remove() AL NODO QUE QUEREMOS QUITAR.

//    nav.remove(); // ELIMINAMOS EL NODO QUE TENEMOS CON EL ID 'nav'.
    // ESTO PODEMOS USARLO PARA POR EJEMPLO, ELIMINAR UN ARTICULO DEL CARRITO.

//? OBTENER DATOS DE INPUTS:

//* PARA ESTE EJEMPLO, TENDREMOS EN NUESTRO HTML UN ELEMENTO INPUT. HASTA LA PROXIMA CLASE, NO TENDREMOS INTERACTIVIDAD CON UN BOTON, POR LO QUE USAREMOS UN VALUE PARA DARLE UN TEXTO PREDETERMINADO. LUEGO QUE VEAMOS EL OTRO TEMA, PODEMOS ACCEDER AL VALOR DEL INPUT LUEGO DE QUE EL USUARIO "ENVIE" EL FORMULARIO.

//const input = document.getElementById('input')

//console.log(input.value); // NOS MUESTRA EL VALOR DEL INPUT.

// ESTO VA A SER NUESTROS NUEVOS PROMPT

//? PLANTILLAS DE TEXTOS:

//* ANTERIORMENTE, CUANDO QUERIAMOS CONCATENAR HACIAMOS LO SIGUIENTE:

//const nombre = 'Juan';
//const apellido = 'Perez';

// const saludo = 'Hola ' + nombre + ' ' + apellido;

// console.log(saludo);

//* EL PROBLEMA CON ESTO APARECE CUANDO TENEMOS QUE AGREGAR TEXTOS MAS LARGOS Y POR EJEMPLO, CUANDO INCLUMOS AL HTML UN BLOQUE DE CODIGO. SI QUEREMOS USAR UNA VARIABLE PARA UN HTML DEBERIAMOS HACER ALGO COMO ESTO:

//const saludo = '<h1>Hola ' + nombre + ' ' + apellido + '</h1>';

//* ESTA FORMA DE HACERLO ES MUY COMPLICADA. POR LO QUE VAMOS A USAR UNA PLANTILLAS LITERALES.
//* PARA ESCRIBIR UN STRING PODIAMOS USAR EL SIMBOLO DE COMILLAS DOBLES Y COMILLAS SIMPLES('' o "").
//* PARA ESCRIBIR STRINGS CON VARIABLES, USAMOS EL SIMBOLO DE BACKTICKS(``).
//* ESTOS A DIFERENCIA DE LOS ANTERIORES SON MULTILINEAS Y NO SE DEBE CERRAR:

// const nombre = 'Juan';
// const apellido = 'Perez';
// const saludo = `Hola ${nombre} ${apellido}`;
// console.log(saludo);

//* ENTONCES SI QUEREMOS AGREGAR CODIGO HTML COMO EN EL EJEMPLO ANTERIOR PODEMOS HACERLO DE ESTA MANERA:

// const nombre = 'Juan';
// const apellido = 'Perez';
// const saludo = `
//     <h1>
//         Hola ${nombre} ${apellido}
//     </h1>
// `;
// console.log(saludo);

//? CON ESTE TEMA VISTO, LO QUE PODEMOS EMPEZAR A HACER ES, COMBINANDO CON EL TEMA VISTO DE CLASES CONSTRUCTORAS Y ARRAYS + FOR EACH, AGREGAR ELEMENTOS DE FORMA DINAMICA DESDE JAVASCRITP (POR EJEMPLO NUESTROS PRODUCTOS):

/*
class Monitor {
    constructor(marca, pulgadas, precio) {
        this.marca = marca;
        this.pulgadas = pulgadas;
        this.precio = precio;
    }
}

const monitor1 = new Monitor('LG', '24p', 24000);
const monitor2 = new Monitor('Samsung', '32p', 32000);
const monitor3 = new Monitor('AOC', '27p', 27000);

const productos = [monitor1, monitor2, monitor3];

// HASTA ESTA PARTE DEL CODIGO, LO HEMOS VISTO ANTES. AHORA SIGAMOS:

// 1. ACCEDEMOS AL NODO AL CUAL LE VAMOS A INYECTAR LOS PRODUCTOS Y LE ASIGNAMOS SU VALOR A UNA VARIABLE:

const cardContainer = document.getElementById('cardContainer');
*/
// 2. CREAMOS UNA FUNCION QUE RECIBA COMO PARAMETRO UN ARRAY DE PRODUCTOS Y LO RECORRA PARA CREAR UN NUEVO ELEMENTO HTML PARA CADA PRODUCTO.
/*
productos.forEach(producto => {

    // 2.1. CREAMOS UN NUEVO ELEMENTO HTML VACIO:
    const contenedor = document.createElement('div');
    // 2.2. LE AGREGAMOS EL CONTENIDO AL ELEMENTO:
    contenedor.innerHTML = `
        <div id="monitorSamsung" class="card">
            <h3 class="card__h3">Monitor Samsung</h3>
            <img src="" alt="IMG MONITOR">
            <p class="card__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            <span class="card__span">$50000</span>
            <button class="card__btn">AGREGAR AL CARRITO</button>
        </div>
    `
    // 2.3. AGREGAMOS EL NUEVO ELEMENTO AL ELEMENTO PADRE:
    cardContainer.append(contenedor);

});
*/
// LO QUE ACABAMOS DE HACER ES CREAR UN NUEVO ELEMENTO HTML PARA CADA PRODUCTO QUE COMPONEN EL ARRAY.

//* CON ESTO NOS SURGE UN NUEVO PROBLEMA (QUE QUIZAS NO ES OBSERVABLE SI NUESTRO SITIO NO TIENE ESTILO). EL PROBLEMA ES QUE EL ESTILO ESTA SIENDO APLICADO A LA CLASE CARD, PERO NO AL DIV PADRE QUE LO CONTIENE Y POR ESO EL CSS NO FUNCIONARIA BIEN. ENTONCES DEBEMOS RESOLVERLO DE LA SIGUIENTE MANERA (COPIANDO ENTERA LA FUNCION ANTERIOR PARA QUE SE ENTIENDA:)
/*
productos.forEach(producto => {

    // 2.1. CREAMOS UN NUEVO ELEMENTO HTML VACIO:
    const contenedor = document.createElement('div');
    // 2.2. LE DAMOS LA CLASE CARD AL NUEVO ELEMENTO:
    contenedor.className = 'card';
    // 2.3. LE AGREGAMOS EL CONTENIDO AL ELEMENTO (ELIMINANDO EL DIV QUE CONTIENE EL CONTENIDO CON LA CLASE CARD):
    contenedor.innerHTML = `
            <h3 class="card__h3">Monitor Samsung</h3>
            <img src="" alt="IMG MONITOR">
            <p class="card__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            <span class="card__span">$50000</span>
            <button class="card__btn">AGREGAR AL CARRITO</button>
    `
    // 2.4. AGREGAMOS EL NUEVO ELEMENTO AL ELEMENTO PADRE:
    cardContainer.append(contenedor);

});
*/
//* CON EL EJEMPLO ANTERIOR, RECORRIMOS EL ARRAY DE OBJETOS Y CREAMOS UN NUEVO ELEMENTO HTML PARA CADA UNO DE LOS PRODUCTOS, PERO EL HTML QUE CREAMOS ES DE UN MONITOR EN PARTICULAR. LO QUE NOSOTROS QUEREMOS ES QUE NOS CREE UNO CON LAS PROPIEDADES DE CADA MONITOR. POR ESO LO QUE HACEMOS ES REEMPLAZAR CON CODIGO JS EL CONTENIDO QUE QUEREMOS CAMBIAR EN CADA PRODUCTO:
/*
productos.forEach(producto => {

    // 2.1. CREAMOS UN NUEVO ELEMENTO HTML VACIO:
    const contenedor = document.createElement('div');
    // 2.2. LE DAMOS LA CLASE CARD AL NUEVO ELEMENTO:
    contenedor.className = 'card';
    // 2.3. LE AGREGAMOS EL CONTENIDO AL ELEMENTO (ELIMINANDO EL DIV QUE CONTIENE EL CONTENIDO CON LA CLASE CARD):
    contenedor.innerHTML = `
            <h3 class="card__h3">Monitor ${producto.marca}</h3>
            <img src="" alt="IMG MONITOR">
            <p class="card__p">Pulgadas: ${producto.pulgadas}</p>
            <span class="card__span">$${producto.precio}</span>
            <button class="card__btn">AGREGAR AL CARRITO</button>
    `
    // 2.4. AGREGAMOS EL NUEVO ELEMENTO AL ELEMENTO PADRE:
    cardContainer.append(contenedor);

});
*/
//* DE ESTA FORMA ESCRIBIMOS EL PRODUCTO SOLO 1 VEZ Y NOS GENERA UN NUEVO ELEMENTO HTML PARA CADA PRODUCTO (QUE EN ESTE CASO SON 3 PERO PODRIAN SER CIENTOS)

//* PROXIMAMENTE AGREGAREMOS EL MANEJO DE EVENTOS PARA QUE CUANDO SE HAGA CLICK EN EL BOTON DE AGREGAR AL CARRITO, SE AGREGUE EL PRODUCTO AL CARRITO, TAMBIEN PODER ELIMINARLO, ETC.

//? VEAMOS OTRA FORMA DE SELECCIONAR NODOS:

//* QUERY SELECTOR: ESTE NOS PERMITE UTILIZAR EL MISMO METODO PARA ID, CLASS, TAGNAME, ETC. Y LE PASAMOS COMO PARAMETRO EL NOMBRE DEL NODO COMO EN CSS (CON # PARA ID Y CON . PARA CLASS).

//* CUANDO UTILIZAMOS EL .QUERYSELECTOR(#ID) NOS DEVOLVERA COMO VALOR EL UNICO ELEMENTO QUE TENGA EL ID QUE LE PASAMOS COMO PARAMETRO. Y CUANDO LE PASAMOS UN .QUERYSELECTOR(.CLASS) NOS DEVOLVERA COMO VALOR EL "PRIMER" ELEMENTO QUE TENGA LA CLASE QUE LE PASAMOS COMO PARAMETRO(COMO EL METODO .FIND() QUE HABIAMOS VISTO).
//* SI QUEREMOS QUE NOS DEVUELVA LA COLECCION DE CLASES, UTILIZAREMOS .QUERYSELECTORALL(.CLASS):

/*

class Monitor {
    constructor(marca, pulgadas, precio) {
        this.marca = marca;
        this.pulgadas = pulgadas;
        this.precio = precio;
    }
}

const monitor1 = new Monitor('LG', '24p', 24000);
const monitor2 = new Monitor('Samsung', '32p', 32000);
const monitor3 = new Monitor('AOC', '27p', 27000);

const productos = [monitor1, monitor2, monitor3];
const cardContainer = document.querySelector('#cardContainer');

productos.forEach(producto => {

    // 2.1. CREAMOS UN NUEVO ELEMENTO HTML VACIO:
    const contenedor = document.createElement('div');
    // 2.2. LE DAMOS LA CLASE CARD AL NUEVO ELEMENTO:
    contenedor.className = 'card';
    // 2.3. LE AGREGAMOS EL CONTENIDO AL ELEMENTO (ELIMINANDO EL DIV QUE CONTIENE EL CONTENIDO CON LA CLASE CARD):
    contenedor.innerHTML = `
            <h3 class="card__h3">Monitor ${producto.marca}</h3>
            <img src="" alt="IMG MONITOR">
            <p class="card__p">Pulgadas: ${producto.pulgadas}</p>
            <span class="card__span">$${producto.precio}</span>
            <button class="card__btn">AGREGAR AL CARRITO</button>
    `
    // 2.4. AGREGAMOS EL NUEVO ELEMENTO AL ELEMENTO PADRE:
    cardContainer.append(contenedor);

});

const card__h3 = document.querySelectorAll('.card__h3');

console.log(card__h3);
*/

//* lA DIFERENCIA QUE PODEMOS VER ES QUE POR CONSOLA NOS DEVUELVE AHORA UNA LISTA DE NODOS EN VEZ DE UNA COLECCION DE ELEMENTOS. ENTONCES PODEMOS UTILIZAR EN ESTE CASO EL METODO .FOREACH() PARA RECORRER LA LISTA DE NODOS Y CON LA COLECCION DE ELEMENTOS NO PODEMOS UTILIZAR .FOREACH()

//! EVENTOS:

//* UN EVENTO ES UNA FORMA DE CONTROLAR UNA ACCION QUE SE REALIZA EN EL DOCUMENTO. POR EJEMPLO, MOVER EL CURSOR, CLICAR EN UN BOTON, INSERTAR UN TEXTO EN UN CAMPO, PRESIONAR UNA TECLA, SOLTAR UNA TECLA, ETC.

//* PRIMERO DEBEMOS "ESCUCHAR" EL EVENTO QUE DESEAMOS CONTROLAR. PARA ESTE EJEMPLO, SI EL USUARIO CLICKEA EN EL BOTON DE AGREGAR AL CARRITO. A ESTA ESCUCHA SE LA DENOMINA "EVENT LISTENER".

//? METODO .ADDEVENTLISTENER:
/*
class Monitor {
    constructor(marca, pulgadas, precio) {
        this.marca = marca;
        this.pulgadas = pulgadas;
        this.precio = precio;
    }
}

const monitor1 = new Monitor('LG', '24p', 24000);
const monitor2 = new Monitor('Samsung', '32p', 32000);
const monitor3 = new Monitor('AOC', '27p', 27000);

const productos = [monitor1, monitor2, monitor3];
const cardContainer = document.querySelector('#cardContainer');

productos.forEach(producto => {

    // 2.1. CREAMOS UN NUEVO ELEMENTO HTML VACIO:
    const contenedor = document.createElement('div');
    // 2.2. LE DAMOS LA CLASE CARD AL NUEVO ELEMENTO:
    contenedor.className = 'card';
    // 2.3. LE AGREGAMOS EL CONTENIDO AL ELEMENTO (ELIMINANDO EL DIV QUE CONTIENE EL CONTENIDO CON LA CLASE CARD):
    contenedor.innerHTML = `
            <h3 class="card__h3">Monitor ${producto.marca}</h3>
            <img src="" alt="IMG MONITOR">
            <p class="card__p">Pulgadas: ${producto.pulgadas}</p>
            <span class="card__span">$${producto.precio}</span>
            <button class="card__btn">AGREGAR AL CARRITO</button>
    `
    // 2.4. AGREGAMOS EL NUEVO ELEMENTO AL ELEMENTO PADRE:
    cardContainer.append(contenedor);

});

*/
//* PRIMERO CON QUERY SELECTOR SELECCIONAMOS UN NODO DEL DOM (EN ESTE CASO EL PRIMER BOTON QUE TENGA LA CLASE:

//const boton = document.querySelector('.card__btn');
//console.log(boton);

//* SEGUNDO LE ASIGNAMOS EL EVENTO A ESE NODO (BOTON) Y LE PASAMOS 2 PARAMETROS. POR UN LADO EL NOMBRE DEL EVENTO QUE DESEAMOS ESCUCHAR Y POR OTRO, QUE FUNCION VA A EJECUTAR CUANDO SEA ESCUCHADO:

// DEFINIMOS UNA FUNCION QUE SE EJECUTARA CUANDO EL BOTON SEA PRESIONADO:

// const mostrarMensaje = () => {
//     console.log('Evento escuchado')
// }

//AGREGAMOS EL ESCUCHADOR AL ELEMENTO Y LE DAMOS POR PARAMETRO EL NOMBRE DEL EVENTO Y LA FUNCION QUE VA A EJECUTARSE CUANDO SE ESCUCHE:

//? OPCION 1 (la que vamos a utilizar
// boton.addEventListener('click', mostrarMensaje);

//? OPCION 2 (Lo dejamos para React):
/*
boton.onclick = () => {
    console.log('Evento escuchado desde onclick');
}
*/
//* ANTES VIMOS COMO INYECTAR LOS PRODUCTOS DESDE JS AL DOM DIRECTAMENTE AL CARGAR.
//? AHORA LO QUE HAREMOS SERA AGREGAR LOS PRODUCTOS SOLO CUANDO EL USUARIO CLICKE EN UN BOTON.
/*
class Monitor {
    constructor(marca, pulgadas, precio) {
        this.marca = marca;
        this.pulgadas = pulgadas;
        this.precio = precio;
    }
}

const monitor1 = new Monitor('LG', '24p', 24000);
const monitor2 = new Monitor('Samsung', '32p', 32000);
const monitor3 = new Monitor('AOC', '27p', 27000);

const productos = [monitor1, monitor2, monitor3];
const cardContainer = document.querySelector('#cardContainer');

const mostrarProductos = () => {
    
    productos.forEach((producto) => {

        // 2.1. CREAMOS UN NUEVO ELEMENTO HTML VACIO:
        const contenedor = document.createElement('div');
        // 2.2. LE DAMOS LA CLASE CARD AL NUEVO ELEMENTO:
        contenedor.className = 'card';
        // 2.3. LE AGREGAMOS EL CONTENIDO AL ELEMENTO (ELIMINANDO EL DIV QUE CONTIENE EL CONTENIDO CON LA CLASE CARD):
        contenedor.innerHTML = `
                <h3 class="card__h3">Monitor ${producto.marca}</h3>
                <img src="" alt="IMG MONITOR">
                <p class="card__p">Pulgadas: ${producto.pulgadas}</p>
                <span class="card__span">$${producto.precio}</span>
                <button class="card__btn">AGREGAR AL CARRITO</button>
        `
        // 2.4. AGREGAMOS EL NUEVO ELEMENTO AL ELEMENTO PADRE:
        cardContainer.append(contenedor);
    
    });
};
*/

//* 1. LLAMAMOS AL BOTON CON EL ID DE HTML A TRAVES DE QUERY SELECTOR Y SE LO ASIGNAMOS A UNA VARIABLE:
/*
const botonMostrarProductos = document.querySelector('#insertar-productos');
console.log(botonMostrarProductos);
*/

//* 2. lE AGREGAMOS EL LISTENER AL BOTON Y LE PASAMOS COMO PARAMETRO EL NOMBRE DEL EVENTO QUE DESEAMOS ESCUCHAR Y LA FUNCION QUE VA A EJECUTARSE CUANDO SE ESCUCHE (EN ESTE CASO, MOSTRAR LOS PRODUCTOS):
// botonMostrarProductos.addEventListener('click', mostrarProductos);

//* DE ESTA FORMA NOS SURGIRA UN PROBLEMA QUE ES SI EL USUARIO PRESIONA EL BOTON DE MOSTRAR PRODUCTOS N VECES, SE MOSTRARAN LOS PRODUCTOS N VECES.


//* FORMULARIO
/*
const inputName = document.querySelector('#name');

const mostrarValue = () => {
    console.log(inputName.value)
}

inputName.addEventListener('change', mostrarValue);
*/
// EN ESTE CASO CON CHANGE, CUANDO EL INPUT PIERDE EL FOCO, SE EJECUTA LA FUNCION MOSTRAR VALOR.

// ESTO LO PODEMOS REEMPLAZAR POR EL PROMPT QUE VENIAMOS USANDO HASTA AHORA.

//? INFORMACION DEL EVENTO:

// EN ALGUNOS CASOS VAMOS A NECESITAR INFORMACION CONTEXTUAL DEL EVENTO. POR EJEMPLO, EL SUBMIT, TRAE INCORPORADO POR DEFECTO EL RECARGAR LA PAGINA AL PRECIONARLO, COSA QUE NOSOTROS NO QUEREMOS. PARA EVITAR ESTO UTILIZAREMOS LOS OJETOS "EVENT" QUE INCORPORA JAVASCRIPT: 

// 1. LLAMAMOS AL FORMULARIO A TRAVES DE QUERY SELECTOR Y LO ASIGNAMOS A UNA VARIABLE:
// const formulario = document.querySelector('#formulario');

// 2. CREAMOS UNA FUNCION QUE SE EJECUTARA CUANDO EL FORMULARIO SEA ENVIADO. ESTA FUNCION RECIBE COMO PARAMETRO EL EVENTO (E) AL CUAL LE ADICIONAMOS UN METODO QUE PREVENDRA QUE LA PAGINA SE RECARGE AL ENVIAR EL FORMULARIO:
//ESTE EVENTO (e) ES UN OBJETO QUE MANEJA JS Y ESTA IMPLICITO/AUTOMATICO QUE NOSOTROS PODEMOS NO COLOCAR Y SIN EMBARGO JS LO HARA POR NOSOTROS.

// const mostrarValue = (e) => {
//     e.preventDefault();
//     console.log(formulario);
// };

// formulario.addEventListener('submit', mostrarValue);

//AL HACER UN ADDEVENTLISTENER, JS LE PASA ESTE PARAMETRO IMPLICITO (E) A LA FUNCION QUE EJECUTA.

// class Monitor {
//     constructor(marca, pulgadas, precio) {
//         this.marca = marca;
//         this.pulgadas = pulgadas;
//         this.precio = precio;
//     }
// }

// const monitor1 = new Monitor('LG', '24p', 24000);
// const monitor2 = new Monitor('Samsung', '32p', 32000);
// const monitor3 = new Monitor('AOC', '27p', 27000);

// const productos = [monitor1, monitor2, monitor3];
// const cardContainer = document.querySelector('#cardContainer');

//const mostrarProductos = (e) => {
    
    //console.log(e.target);
    
//     productos.forEach((producto) => {

//         // 2.1. CREAMOS UN NUEVO ELEMENTO HTML VACIO:
//         const contenedor = document.createElement('div');
//         // 2.2. LE DAMOS LA CLASE CARD AL NUEVO ELEMENTO:
//         contenedor.className = 'card';
//         // 2.3. LE AGREGAMOS EL CONTENIDO AL ELEMENTO (ELIMINANDO EL DIV QUE CONTIENE EL CONTENIDO CON LA CLASE CARD):
//         contenedor.innerHTML = `
//                 <h3 class="card__h3">Monitor ${producto.marca}</h3>
//                 <img src="" alt="IMG MONITOR">
//                 <p class="card__p">Pulgadas: ${producto.pulgadas}</p>
//                 <span class="card__span">$${producto.precio}</span>
//                 <button data-id="${producto.marca}" class="card__btn">AGREGAR AL CARRITO</button>
//         `
//         // 2.4. AGREGAMOS EL NUEVO ELEMENTO AL ELEMENTO PADRE:
//         cardContainer.append(contenedor);
    
//     });
// //};

// const botonMostrarProductos = document.querySelector('#insertar-productos');

//botonMostrarProductos.addEventListener('click', mostrarProductos);

//* EN ESTE EJEMPLO ANTERIOR, VEMOS QUE LA ESCUCHA DEL CLICK EN EL "BOTON MOSTRAR PRODUCTOS", EJECUTA UNA FUNCION "MOSTRAR PRODUCTOS" Y ESTA ULTIMA NO ESTA RECIBIENDO NINGUN PARAMETRO PERO JS LE ESTA ENVIANDO DE TODAS FORMAS EL EVENTO (E).
//* PARA ENTENDER MEJOR LO QUE ESTAMOS HACIENDO, SE LO AGREGAMOS COMO PARAMETRO Y HACEMOS UN CONSOLE.LOG DE ESA INFORMACION. VAMOS A VER QUE AL PRESIONAR EL BOTON, NOS MUESTRA LOS PRODUCTOS Y EN LA CONSOLA NOS MUESTRA UN "POINTER EVENT".


//* SI ABRIMOS ESA INFORMACION DEL EVENTO "POINTER VIEW" ENCONTRAREMOS UNA PROPIEDAD DEL NODO LLAMADA "TARGET: NOMBRE DEL ELEMENTO QUE PRESIONAMOS" QUE NOS MUESTRA EL ELEMENTO AL QUE SE LE HA DADO CLICK. 

//* VAMOS AL CASO EN LOS BOTONES DE "AGREGAR AL CARRITO". PARA SABER EN CUAL DE TODOS ELLOS SE HA DADO CLICK, OBTENEMOS ESA INFORMACION EN EL E.TARGET.

//? e.target.

//* PARA ACCEDER POR CONSOLA DIRECTAMENTE AL TARGET DONDE SE ACTIVO EL EVENTO Y NO VER TODA LA LISTA DE PROPIEDADES DEL NODO. COLOCAMOS EL CONSOLE.LOG E.TARGET y NOS DEVOLVERA EL ELEMENTO AL QUE SE LE HA DADO CLICK UNICAMENTE.

//? AHORA LE AGREGAREMOS INTERACTIVIDAD A LOS BOTONES "AGREGAR AL CARRITO" PARA QUE AL PRESIONARLOS, SE MUESTRE UN MENSAJE DE QUE SE AGREGO EL PRODUCTO AL CARRITO.

// NOSOTROS DEBEMOS ACCEDER A LOS BOTONES "AGREGAR AL CARRITO" POR SU CLASE. EN ESTE CASO NO PODEMOS HACERLO POR ID YA QUE SON VARIOS Y ESTARIAMOS ROMPIENDO UNA REGLA DE HTML.

// const botonesCompra = document.querySelectorAll('.card__btn');

// console.log(botonesCompra);

// COMO PODEMOS OBSERVAR, NOS MUESTRA LOS 3 BOTONES EN UN ARRAY.

//botonesCompra.addEventListener('click', mostrarMensaje);

//* ESTO NOS ARROJARA UN ERROR "BOTONES COMPRA. ADDEVENTLISTENER IS NOT A FUNCTION". EL PROBLEMA ES QUE BOTONES COMPRA ES UN ARRAY DE NODOS. NO SE PUEDE AGREGAR UN ADDEVENTLISTENER A UN ARRAY.

//* SI LE QUIERO AGREGAR A CADA UNO DE LOS BOTONES, UN ADDEVENTLISTENER DEBEMOS HACERLO POR CADA UNO DE LOS NODOS QUE COMPONEN EL ARRAY CON UN FOR EACH:
/*
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', mostrarMensaje);
});
*/
// AHORA SI, SI PRESIONAMOS CADA UNO DE LOS BOTONES "AGREGAR AL CARRITO", SE MUESTRA EL MENSAJE DE EVENTO ESCUCHADO.

//* ESTO NO TRAE OTRO NUEVO INCONVENIENTE A RESOLVER. ES QUE CADA BOTON DE COMPRA EJECUTA LA MISMA FUNCION "MOSTRAR MENSAJE". PARA RESOLVER ESTO Y SABER CUAL DE LOS BOTONES "AGREGAR AL CARRITO" CLICKO EL USUARIO HAREMOS LO SIGUIENTE:

// 1. CREAMOS UNA FUNCION MOSTRAREVENTO:

// const mostrarEvento = (e) => {
//     console.log(e.target.getAttribute("data-id"));
// };

// 2. AL TOCAR UN BOTON, SE EJECUTA LA FUNCION MOSTRAREVENTO Y ESTE A TRAVES DEL E.TARGET ACCEDE A LA INFORMACION DEL EVENTO CORRESPONDIENTE.
// botonesCompra.forEach((botonCompra) => {
//     botonCompra.addEventListener('click', mostrarEvento);
// });

//* COMO COMPLEMENTO A ESTO, AGREGAREMOS UN ATRIBUTO A LAS ETIQUETAS HTML QUE SE LLAMA DATA-ID. ESTE NO MODIFICA NADA EN HTML PERO SI NOS SIRVE PARA OBTENER LA INFORMACION DEL EVENTO DESDE JS.

//? METODO .GETATTRIBUTE()

//* COMO PODEMOS OBSERVAR, TENEMOS ADICIONADO AL E.TARGET UN NUEVO ATRIBUTO QUE NOS MUESTRA EL DATA-ID QUE LE ASIGNAMOS A CADA BOTON DE COMPRA. ESTO SE RECOMIENDA HACER CON UN ID NUMERO O CODIGO DE BARRAS SI SON PRODUCTOS. ASI JS PUEDE ACCEDER A QUE BOTON FUE PRESIONADO EN PARTICULAR.


//! CREANDO UN EJERCICIO DE CARRITO DESDE CERO:

//* 1. CREAMOS UNA CLASE CONSTRUCTORA PARA LOS PRODUCTOS:
class Monitor {
    constructor(id, marca, modelo, pulgadas, tipo, precio) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
        this.tipo = tipo;
        this.precio = precio;
    }
};

//* 2. CREAMOS LOS PRODUCTOS:

const monitor1 = new Monitor(001, 'LG', 'G5', 15.6, 'LCD', 1500);
const monitor2 = new Monitor(002, 'DELL', 'XPS', 17.3, 'LED', 2500);
const monitor3 = new Monitor(003, 'ACER', 'ASPIRE', 15.6, 'LCD', 1000);

//* 3. CREAMOS UN ARRAY DE PRODUCTOS PARA LUEGO RECORRERLO CUANDO EJECUTE EL CODIGO CON EL FOR EACH Y NOS CREE CADA CARD:
const productos = [monitor1, monitor2, monitor3];


//* 4. CREAMOS EL CARRITO VACIO AL QUE PUSHEAREMOS LO QUE AGREGA EL USUARIO COM EL BOTON DE CADA PRODUCTO.
let carrito = [];

//* 5. CON QUERYSELECTOR ACCEDEMOS AL CONTENEDOR DEL PRODUCTO 

const productContainer = document.querySelector('#product-container');

//* 6. CON EL METODO DE ARRAY.FOR EACH, RECORREMOS EL ARRAY DE PRODUCTOS Y CREAMOS UN CARD POR CADA PRODUCTO:

productos.forEach((producto) => {
    // 6.1 CREAMOS EL CONTENEDOR DIV DONDE SE AGREGARA EL CARD:
    const card = document.createElement('div');
    // 6.2 LE AGREGAMOS LA CLASE CARD:
    card.className = "card";
    // 6.3 CON INNER.HTML INYECTAMOS EL HTML DE CADA CARD:
    card.innerHTML = `
        <h3 class="cardTitle"> Monitor ${producto.marca}</h3>
        <img src="" class="cardImg">
        <p class="cardDesc">${producto.pulgadas} Pulgadas </p>
        <span class="cardPrice">$${producto.precio}</span>
        <button data-id="${producto.id}" class="card__btn">Agregar al carrito</button>
        `
    // 6.4 AGREGAMOS EL CARD AL CONTENEDOR:
    cardContainer.append(card);
});

//* 7. UNA VEZ QUE TENEMOS LAS CARDS CREADAS, LO QUE HAREMOS ES ACCEDER A TODOS LOS BOTONES DE AGREGAR AL CARRITO QUE CREAMOS, LO QUE NOS DEVOLVERA UN ARRAY CON TODOS LOS BOTONES QUE SE HAYAN CREADO CON LA FUNCION:

const buyBtn = document.querySelectorAll('.card__btn');

//* 8.1 CREAMOS UNA FUNCION AGREGARPRODUCTO PARA UTILIZAR LUEGO EN EL EVENTO CLICK:

// A. DECLARAMOS LA FUNCION CON UN PARAMETRO QUE SERA LA INFORMACION DEL EVENTO QUE SE EJECUTARA CUANDO SE PRESIONE EL BOTON:
const agregarProducto = (e) => {
    // B. ACCEDEMOS AL ATRIBUTO DATA-ID DEL BOTON QUE SE PRESIONO Y LO GUARDAMOS EN UNA VARIABLE PRODUCTOELEGIDO:
    const productoElegido = e.target.getAttribute('data-id');
    // C. CON EL METODO .find() DE LOS ARRAY, BUSCAMOS ESE ATRIBUTO DEL PRODUCTO ELEGIDO EN EL ARRAY COMPLETO DE PRODUCTOS Y CUANDO ENCUENTRE EL == LO GUARDARA EN LA VARIABLE "PRODUCTO":
    const producto = productos.find((producto) => producto.id == productoElegido);
    // D. PUSHEAMOS EL PRODUCTO ELEGIDO AL CARRITO:
    carrito.push(producto);
    // E. MOSTRAMOS EL CARRITO POR CONSOLA:
    console.log(carrito);
};

//* 8.2 UNA VEZ QUE TENEMOS EL ARRAY DE BOTONES, Y LA FUNCION DE AGREGAR AL CARRITO LISTA, LO QUE HAREMOS ES RECORRER ESE ARRAY DE PRODUCTOS CREADOS CON UN FOREACH PARA AGREGARLE UN ADDEVENTLISTENER A CADA UNO DE LOS BOTONES QUE CONTIENEN Y ASI PODER ESCUCHARLOS CUANDO SE LOS CLICKEE Y EJECUTE LA FUNCION "AGREGAR PRODUCTO" QUE DECLARAMOS ARRIBA.

// A. CON .FOR EACH, RECORREMOS EL ARRAY DE BOTONES:
buyBtn.forEach((btn) => {
    // B. AGREGAMOS EL EVENTO CLICK A CADA UNO DE SUS BOTONES:
    btn.addEventListener('click', agregarProducto);
});