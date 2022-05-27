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
//* NO LE ESTAMOS PASANDO NOMBRE A LA FUNCION, SOLO LOS PARAMETROS. Y DENTRO DE LOS CORCHETES LE DECIMOS QUE DEVUELVA EL CALCULO QUE QUEREMOS HACER.
//* EN EL CONSOLE LOG LO LLAMAMOS CON EL NOMBRE DE LA VARIABLE.

/*
const suma = function (a, b) {return a + b}

console.log(suma(15,20));
*/

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
