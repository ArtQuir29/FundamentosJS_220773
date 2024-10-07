//Repaso de Arreglos

// Declaracion de arreglos
//Para declarar un arreglo (array ) de datos en JavaScript basta con agregar [], y dentro los datos que contendra el arrelglo

const mesesAnio= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

//Estilizacion de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199.0,0,36,1) 0%, rgba(255,129,121,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las salidas de la Consola
console.warn("Practica 06: Arreglos en Java Script");

console.log("%c1.-Declaración de un Arreglo (ARRAY) ",  style_console);

console.log(mesesAnio);
console.table(mesesAnio);

// Acceder a los valores de un arreglo de datos para accedeer solo basta enviar las posicion del dato que queremos dentro de los limites establecido. Siendo el limite inferior 0 y el superior tamaño -1

console.log("%c2.-Leer  o recuperar datos de un arreglo  ",  style_console);
console.log(`El primer mes del año es : ${mesesAnio[0]}`)
console.log(`El ultimo mes del año es : ${mesesAnio[mesesAnio.length-1]}`)

console.log(`El treceavo mes del año es : ${mesesAnio[12]}`)

console.log(`¿Que tipo de dato es un arreglo? ${typeof(mesesAnio)}`)


const saludar =  function(nombreUsuario){return `Hola, ${nombreUsuario}!`}

//Y que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`)
let arreglomixto=["String",5,86.25,-200,-.1586,Symbol("March"), 'Z', false,null, BigInt(6454444444444444444444444444444444146),true,{latitud:"20° 18' 0\" N" , longitud:"97° 58' 00\" W",altitud:796},saludar]

console.log(arreglomixto);
console.table(arreglomixto);
console.log(typeof(arreglomixto));

console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[0] = ${arreglomixto[0]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[1] = ${arreglomixto[1]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[2] = ${arreglomixto[2]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[3] = ${arreglomixto[3]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[4] = ${arreglomixto[4]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[5] = ${arreglomixto[5].toString} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[6] = ${arreglomixto[6]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[7] = ${arreglomixto[7]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[8] = ${arreglomixto[8]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[9] = ${arreglomixto[9]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[10] = ${arreglomixto[10]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[11] = ${arreglomixto[11]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[12] = ${arreglomixto[12]} y es del tipo: ${(typeof(arreglomixto))}`)

console.log("%c3.-Arreglos Multidimencionales (Matrices)",  style_console);
// Una matriz es una estructura de datos multidimensional (tabla) de n columnas o m filas

let matriz= [[1,2,3,4],['a','b','c','d']];
// esta es una matriz regular de 4 x 4

console.log(matriz);
console.table(matriz);

console.log("Declarando una matriz irregular");

const matrizIrregular=[["Juan","Pedro","Maria","Inés"],[true,false,null],[9.2]]

console.log(matrizIrregular);
console.table(matrizIrregular);

// Accediendo a los valores de una matriz

console.log("Leyendo las Propiedades de una Matriz Regular")
console.log(`Elemento en la posición [0][0]: ${matriz[0][0]}`)
console.log(`Elemento en la posición [1][2]: ${matriz[1][2]}`)

//Accediendo a los valors de una matriz irregular
console.log("Leyendo las Propiedades de una Matriz irregular")
console.log(`Elemento en la posición [0][0]: ${matrizIrregular[0][2]}`)
console.log(`Elemento en la posición [2][0]: ${matrizIrregular[2][0]}`)
console.log(`Elemento en la posición [1][2](¿Es Maria mayor de edad?): ${matrizIrregular[1][2]}`)

//Funciones y Metodos
// Los metodos de un objeto son invocados usando un . y al termino se delimitan los parametros entr (), en caso de que no lleve (),  no es un metodo sino una propiedad 
//
console.log("%c4.-Funciones o metodos de los arrreglos (Array Methos or Array Functions)",  style_console);
console.log("¿Como saber cual es el tamaño de un arreglo?")
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMisto es un arreglo de tamaño: ${arreglomixto.length}`)
console.log(`¿Qué pasa con los arreglos multidimensionales?`)
console.log(`Matriz es un arreglo de tamaño: ${matriz.length}`)
console.log(`mmm, eso me da el tamaño de número de filas de la matriz, pero como saber el numero de columnas?: ${arreglomixto.length}`)
console.log(`la matriz regular tiene un numero de ${matriz[0].length}`)
console.log("Y para las  irregulares?")
//Para saber la dimensión de una matriz irregulas podemos hacer el uso de ciclo
let numeroFilas= matrizIrregular.length;
for( let  i=0 ; i<numeroFilas; i++)
    console.log(`La longitud de la fila ${i} es = ${matrizIrregular[i].length}`)

console.log("%c5.-Agregar un nuevo elemento a un arreglo (PUSH)",  style_console);

let estudiantes=["Angel Rufino" ,"Idai Vargas","Daniel Bravo","Esther Gonzáles", "Ailton Artiaga"]
console.log("Los elementos actuales del arreglo son:")
console.table(estudiantes)
console.log("Agregamos a un nueco estudiante llamado: Abril Guzman")
estudiantes.push("Abril Guzman")
console.log("Despues de agregarla, los elementos del arreglo son: ")
console.table(estudiantes)

console.log("¿Qué pasa con los Mixtos")
console.log("El arregloMixto actualmente tiene los siguientes elementos")
console.table(arreglomixto);
console.log("Agregamos la palabra: \"Hola\", como nuevo Elemento")
arreglomixto.push("Hola")
console.log("Y tambien agregamos el numero -311465165945158414959.4564894149641, siendo este un BigInt")
arreglomixto.push(BigInt(-311465165945158414959.4564894149641))
console.log("Despues de estas dos operaciones el arreglo queda con los siguentes elementos:")
console.table(arreglomixto)

console.log("%c6.-Agregar un nuevo elemento a un arreglo (UNSHIFT) en la posición inicial",  style_console);
console.table(estudiantes)
console.log("Ahora agregaremos a Abishai Flores, al comienzo del arreglo")
estudiantes.unshift("Abishai Flores")
console.log("La lista actual es :")
console.table(estudiantes)

console.log("%c7.- Eliminar elementos de un arreglo en la última posición (POP)",  style_console);
console.log("El arreglo tiene los siguientes elementos")
console.table(estudiantes);
console.log("Para este caso eliminaremos a Abril Guzman, en la última posición ")
estudiantes.pop()
console.log("Despues de eliminar el último elemento del arreglo quedó de la siguente manera ")
console.table(estudiantes)

console.log("%c8.- Eliminar elementos de un arreglo en la primera posición (SHIFT)",  style_console);
console.log("El arreglo tiene los siguientes elementos")
console.table(estudiantes);
console.log("Para este caso eliminaremos a Abishai Flores, en la primera posición ")
estudiantes.shift()
console.log("Despues de eliminar el primer elemento del arreglo quedó de la siguente manera ")
console.table(estudiantes)

console.log("%c9.- Modificar un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)",  style_console);
console.log("El arreglo original tiene los elementos:")
console.table(estudiantes)
console.log("Dividir el arreglo en uno nuevo eliminando ciertos elementos en base a su posición ")
//Cuando la funcion splice recibe un solo parametro eliminará los elementos de esa posición en adelante
estudiantes.splice(2)
console.table(estudiantes)
//Cuando la funcion splice recibe dos parametros se eliminan todos los elementos que no esten en ese rango
estudiantes.push("Zyanya Zacatenco")
estudiantes.push("Tania Licuados")
estudiantes.push("Dulce Balderas")
estudiantes.push("Juvenal Viveros")
estudiantes.push("Jonathan Baldemar")
console.log("Se han agregado 5 nuevos estudiantes, por lo que el arreglo es:")
console.table(estudiantes)
console.log("Ahora ya tenemos los elementos suficientes para aplicar el método splice con dos parámetros que serán 3,5")
estudiantes.splice(3,5)
console.log("Resultado en :")
console.table(estudiantes)

console.log("Ahora vamos a insertar a \"Edgar Cabrera\" en los elementos de la posición 0 y 1 ")
estudiantes.splice(1,0,"Edgar Cabrera")
console.log("Resultado en:")
console.table(estudiantes)

//Tambien splice sirve para reemplazar elementos por otros, en este caso reemplazar a "Angel Rufino" por "Brandon León"
console.log("Ahora vamos a insertar a \"Angel Rufino\" en los elementos de la posición \"Brandon Leon \" ")
estudiantes.splice(0,1,"Brandon Leon")
console.log("Resultado en:")
console.table(estudiantes)

console.log("%c10.- Métodos para la manipulación de Arreglos INMUTABLES ",  style_console);
let signosZodiacales=["Aries","Tauro","Geminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis"]

let [signo1,,signo3,,,,signo7,,,,,]=signosZodiacales;
console.log(`El primer signo zodiacal es: ${signo1}`)
console.log(`El primer signo zodiacal es: ${signo3}`)
console.log(`El primer signo zodiacal es: ${signo7}`)
//console.log(`El primer signo zodiacal es: ${signo4}`)

//congelamos el arreglo volviendolo INMUTABLE; 
Object.freeze(signosZodiacales);


// Filtrado de datos
console.log("%c11.- Filtrado de elementos adentro de un arreglo utilizando el metodo FILTER",style_console);

// Antes de filtrar datos llamamos el arreglo con 10 elementos
estudiantes.push("Angel Rufino");
estudiantes.push("Esther Gonzales");
estudiantes.push("Lorena Galindo");
estudiantes.push("Jonathan Ramirez");
estudiantes.push("Ailton Artiaga");
estudiantes.push("Tania Ibarra");
console.table(estudiantes);

Object.freeze(estudiantes);

// Filtrar es un elemento que recorre los elementos de un arreglo haciendo alguna tarea en esepecifico
// lo que tenemos que considerar es que este nuevo arreglo resultante es un objeto nuevo que puede ser mutable

console.log("Filtrando los primeros 5 elementos");
let nuevoEstudiantes = estudiantes.filter((estudiante,index) => index < 5);
console.table(nuevoEstudiantes)

// Filtrar a los estudiantes que su nombre  tenga más de 15 caracteres
//let nuevoEstudiantes = estudiantes.filter((estudiante) => estudiante.length>15);






// Intentamos modificar el arreglo inmutable
/*estudiantes.pop();
console.table(estudiantes);*/

// Intentamos modificar el nuevo arreglo que no ha sid congelado

nuevoEstudiantes.unshift("Diego Tecorralco");
console.table(nuevoEstudiantes);

function filtrarPrimeros5(arregloEstudiantes)
{
    let listaFiltrada =[]
    for ( let i=0; i=5; i++)
    {
        listaFiltrada.push(arregloEstudiantes[i]);
    }

    return listaFiltrada;
       
}

// Filtrado de Datos - Transformación de datos
console.log("%c12.- Filtrado de elementos dentro de un arreglo utilizando el metodo MAP, en el que necesitamos transformarlos",style_console);
console.log("Imprimimos los elementos actuales de signosZodiacales:")
console.table(signosZodiacales);
// Que podemos hacer si necesitamos el mismo arreglo pero ahora con todos elementos con letras MAYUSCULAS
console.table(signosZodiacales.map(signoZodiacal => signoZodiacal.toUpperCase()));

/*Reduccion de elementos de un arreglo, se usa cuando debemos de hacver operaciones matematicas o cuantitativas a un arreglo
como detener totales, la idea es reducir la lista a un valor mas simplificado */

const costoListaCompras = [15,52,50,16.90,32.50,28,105,45.2,94.10]
// Como podemos calcular la lista de compras (costos)

console.log("Los precios son:")
console.table(costoListaCompras);
console.log(`El total de la compra es: ${costoListaCompras.reduce((total,precio) => total+precio,0)}`)



