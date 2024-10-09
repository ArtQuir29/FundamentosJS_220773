//Repaso de Ciclos y Sentencias de Control

//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199,10,36,1) 0%, rgba(129,25,26,1) 33%, rgba(201,10,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalizacion de salida de consola
console.warn("Practica 07: Arreglos en Java Script");


console.log("%c1.- Condicionales - Si/Entonces ... (IF)",  style_console);
//Le indica al programa que hacer o que no hacer en base a una prueba de lógica de verdadero o falso 
let fechaActual = new Date();
/*let fechaActual = new Date("2024/6/5");//Cuando se declara una fecha el 0 será enero*/
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

//¡Y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    }
);
console.log(`En formato local (México): ${fechaLocalMX}`);

//Si es antes de las doce saluda con un "Buenos días"

if(fechaActual.getHours()<12)//Si solo tiene una instrucción no es necesario colocar llaves
    console.log(`Buenos días, hoy es: ${fechaLocalMX}`);

    //Existe unextensor de la sentencia if(sí) que es else (en caso contrario)
    if(fechaActual.getMonth()<=6)
        console.log(`Estas en la primera mitad del año.`);
    else
    console.log(`Estas en la segunda mitad del año.`)


// Que pasa si la validación tiene varias operaciones

const anio = fechaActual.getFullYear();

let inicioPrimavera = new Date(anio,2,21);
let inicioVerano = new Date(anio,5,21);
let inicioOtonio = new Date(anio,8,23);
let inicioInvierno = new Date(anio,11,21);
let estacion;
let horarioVerano=false;
if(fechaActual >=inicioPrimavera && fechaActual< inicioVerano)
{
    console.log("Estamos en PRIMAVERA...")
    console.log("Inicia la floraciòn de muchas plantas.")
    console.log("Los días son más largos y las noches más cortas.")
    console.log("Muchos animales despiertan de la hibernación.")
    estacion="Primavera"
    horarioVerano=true;
}
else if(fechaActual >= inicioVerano && fechaActual< inicioOtonio)
{
    console.log("Estamos en VERANO...")
    console.log("En esta temporada abundan los días soleados y calurosos.")
    console.log("En esta temporada el indicé de turismo vacacional sube.")
    console.log("Mucha gente busca realizar acitividades al aire.")
    estacion="Verano"
    horarioVerano=true;
}
else if(fechaActual >= inicioOtonio && fechaActual< inicioInvierno)
    {
        console.log("Estamos en OTOÑO...")
        console.log("Los árboles suelen cambiar el follaje.")
        console.log("Se registrarán temperaturas más templadas.")
        console.log("Los animales comienzan con la recolecciòn de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran.")
        estacion="Otorño"
        horarioVerano=true;
    }
else{
    
    console.log("Estamos en IVIERNO...")
    console.log("En esta temporada abundan los días son más cortos y las noches màs largas.")
    console.log("En algunas regiones suele nevar.")
    console.log("Dado a las bajas temperaturas, se recomienda abrigarse.")
    estacion="Invierno"
     horarioVerano=true;
       
}

console.log("%c2.- Operador Ternario (Validación?cumple:no_cumple)",  style_console);
//En Java Script existe una operación simplificada que valida si una condición se cumple o no, y que hacer en cada caso

const edadPersona = 18;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;

let evaluarMayoriaEdad = (edad) =>
    edad>=18 ? "Eres mayor de edad." : "No eres mayor de edad."

console.log("Evaluando la mayoria de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar que la mayoria de edad varia en cada país por cuestiones legales, por lo que debemos considerar un segundo paràmetro en la evaluaciòn.

evaluarMayoriaEdad=(edad,pais) =>
    (edad>=18 && pais==="MX") ?`En ${pais} eres mayor de edad` : `En ${pais} No eres mayor de edad`;
console.log("Evaluando la mayoria de edad de una persona en Mèxico.")
console.log(evaluarMayoriaEdad(edadPersona, "MX"));

console.log("Evaluando la mayoria de edad de una persona en Esatdos Unidos.")
console.log(evaluarMayoriaEdad(edadPersona, "US"));

console.log("%c3.- SWITCH - CASE (Elecciòn por valor definido))",  style_console);

//Calcualndo tu generaciòn en base a tu edad
let anioNacimiento = 2000;
let asignaGeneracion= (anioNacimiento)=>{

switch(true)
{
    case (anioNacimiento<1968): //Baby Boomers
    return "Baby Boomers";

    case(anioNacimiento>1968 && anioNacimiento <=1980):
    return "Generaciòn X";

    case(anioNacimiento>1981 && anioNacimiento<=1993):
    return "Millennials";

    case(anioNacimiento>1994 && anioNacimiento<=2010):
    return "Generaciòn Z";
    
    case(anioNacimiento>2011 && anioNacimiento<=2024):
    return "Cristalitos";
    }
}

console.log(`Dado que nació en el año 2000 es de la generaciòn : ${asignaGeneracion(2000)}`);


