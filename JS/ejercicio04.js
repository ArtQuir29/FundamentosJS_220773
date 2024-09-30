// Repaso de Arreglos

// Estilización de los mensajes de salida
const bg= "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";

const style_console= `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Personalización de las Salidas a Consola
console.warn("Práctica 06: Arreglos en Java Script")

//DECLARACIÓN DE UN ARREGLO
// Para declarar un arreglo(array) de datos en JavaScript basta con agregar [], y dentro los datos que contendra el arreglo.

const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio","Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]


console.log("%c1.- Declaración de un Arreglo (Array)", style_console);

console.log(mesesAnio);
console.table(mesesAnio);

// Acceder a los valores de un arreglo de datos para acceder a al valor solo basta con enviar la posición del dato que queremos dentro de los límites establecidos. Siendo el límite inferior 0 y el superior tamaño -1

console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]}`)
console.log(`E último mes del año es: ${mesesAnio[mesesAnio.length-1]}`)
// No se pueden acceder a elementods con posiciones negativas o posiciones superiores al tamaño definido.

console.log(`El mes del año en l aposición -1 es: ${mesesAnio[-1]}`)

console.log(`El treceavo mes del año en la posición es: ${mesesAnio[12]}`)

console.log(`¿Qué tipo de dato es un arreglo?: ${typeof(mesesAnio)}`)

// Al ser JavaScript un lenguaje débilmente tipado podremos crear arreglos mixtos de tipos de Datos
console.log("Declarando un Arreglo Mixto")
const saludar=function(nombre){return`hola${nombre}`};
let arregloMixto = ["String", 5,45,26,200, -.16854, Symbol("MARH"), `z`, false, BigInt(1111222233334444555566667777), true, {latidud: "20° 18' 0\" N", longitud: "97° 58' 00\" W", altitud: 796 }, saludar, null]

// Mostramos el contenido del objeto
console.log(arregloMixto)
console.table(arregloMixto)
console.log(typeof(arregloMixto));


console.log("Verificamos los tipos de datos de los elementos del arreglo: ")

console.log(`El dato en la posción[0] = ${arregloMixto[0]} y es del tipo: ${typeof(arregloMixto[0])}`);
console.log(`El dato en la posción[0] = ${arregloMixto[1]} y es del tipo: ${typeof(arregloMixto[1])}`);
console.log(`El dato en la posción[0] = ${arregloMixto[2]} y es del tipo: ${typeof(arregloMixto[2])}`);
console.log(`El dato en la posción[0] = ${arregloMixto[3]} y es del tipo: ${typeof(arregloMixto[3])}`);
console.log(`El dato en la posción[0] = ${arregloMixto[4]} y es del tipo: ${typeof(arregloMixto[4])}`);
console.log(`El dato en la posción[0] = ${arregloMixto[5].toString} y es del tipo: ${typeof(arregloMixto[5])}`);
console.log(`El dato en la posción[0] = ${arregloMixto[6]} y es del tipo: ${typeof(arregloMixto[6])}`);
console.log(`El dato en la posción[0] = ${arregloMixto[7]} y es del tipo: ${typeof(arregloMixto[7])}`);
console.log(`El dato en la posción[0] = ${arregloMixto[8]} y es del tipo: ${typeof(arregloMixto[8])}`);
console.log(`El dato en la posción[0] = ${arregloMixto[9]} y es del tipo: ${typeof(arregloMixto[9])}`);
console.log(`El dato en la posción[0] = ${arregloMixto[10]} y es del tipo: ${typeof(arregloMixto[10])}`);
console.log(`El dato en la posción[0] = ${arregloMixto[11]} y es del tipo: ${typeof(arregloMixto[11])}`);
console.log(`El dato en la posción[0] = ${arregloMixto[12]} y es del tipo: ${typeof(arregloMixto[12])}`);



console.log("%c3.- Arreglos Multidimecionales (Matrices)", style_console);

console.log("Declarando una matriz regular.")
//Una matirz es una estructura de datos multidensional (tabla) de n clolumnas o m filas

let matriz = [[1,2,3,4],[`a`,`b`,`c`,`d`]]
// esta  es una matriz regular de 4x4
console.log(matriz)
console.table(matriz)


console.log("Declarando una matriz irregular.")

const matrizIrregular = [["Juan","Pedro","Maria","Inés"], [true,false,null, [9,2]]]

console.log(matrizIrregular)
console.table(matrizIrregular)

// Accediendo a los valores de una matriz

console.log("Leyendo las Propiedasdes de una Matríz Regular")
console.log(`Elemento en la posición [0][0]: ${matriz[0][0]}`)
console.log(`Elemento en la posición [1][2]: ${matriz[1][2]}`)

// Accediendo a los valores de una matriz irregular
console.log("Leyendo las Propiedasdes de una Matríz Irregular")
console.log(`Elemento en la posición [0][0]: ${matrizIrregular[0][0]}`)
console.log(`Elemento en la posición [2][0] (Promedio de Juan): ${matrizIrregular[2][0]}`)
console.log(`Elemento en la posición [1][2] (¿Es María mayor de edad?): ${matrizIrregular[1][2]}`)

// Funciones y Métods de Arreglo
// Los metodos de un objeto siempre son invocados usando un . y al termino se delimitan los parametros entre(), en ucaso de que no lleve (), no es un método sino una propiedad
//
console.log("%c4.- Funciones o Métodos de los Arreglos (Arrqay Methos or Array Functions)", style_console);
console.log("¿Como saber cual es el tamaño d eun arreglo?")
console.log(`mesesAnio es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto.length}`)
console.log(`¿Qué pasa con los multidimensionales?`)
console.log(`matriz es  un arreglo de tamaño: ${matriz.length}`)
console.log("mmm, eso me da el tamaño de número de filas de la matriz, pero ¿cómo saber el numero de columnas?")
console.log(`La matriz regular tine un número de: ${matriz[0].length}`)
console.log("Y para las irregulares?")
//Para saber la dimensión de una matríz irregular podemos hacer el uso de ciclos
let numeroFilas = matrizIrregular.length
for(let i = 0; i<numeroFilas; i++)
    console.log(`La longitud de la fila ${[i]} es = ${[matrizIrregular,[i].length]}`);
