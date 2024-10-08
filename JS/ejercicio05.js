//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,26,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Prática 07: Arreglos en Java Script")

console.log("%c1.- Sí/Entonces ... (IF)", style_console);
//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso
//let fechaActual = new Date();
let fechaActual = new Date("2025/06/05");
console.log(`Hola, la fecha de hoy es ${fechaActual.toString()}`);

//y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleDateString(`es-MX`,
    {
        weekday: `long`,
        year: `numeric`,
        month: `long`,
        day: `numeric`,
        hour: `numeric`,
        minute: `numeric`,
        second: `numeric`,
        hour12: `false`
    }
);

console.log(`en formato local (México): ${fechaLocalMX}`);

// Si es antes de las doce saluda con un buenos días
if(fechaActual.getHours()<12)
    console.log(`Buenos días, hoy es:${fechaLocalMX}`);

// Existe un extensor de la sentencia if(sí) que es else (en caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primer mitad del año.`);
else
   console.log(`estas en la segunda mitad del año.`);

//Que pasa si la validación tiene varias operaciones
const anio = fechaActual.getFullYear();
let inicioPrimavera= new Date(anio, 2, 21);    
let inicioVerano= new Date(anio, 5, 21);  
let inicioOtonio= new Date(anio, 8, 23);
let inicioInvierno= new Date(anio, 11, 21);  
let estacion;

let horarioVerano = false;

if(fechaActual >= inicioPrimavera && fechaActual< inicioVerano)
{
    console.log("Estamos en PRIMAVERA...")
    console.log("Inicia la Floración de Muchas Plantas...")
    console.log("Los días son más largos y las noches más cortas...")
    console.log("Muchos animales despiertan de la hibernación... ")
    console.log()
    estacion="Primavera"
    horarioVerano= true;
}
else if(fechaActual >= inicioOtonio && fechaActual< inicioInvierno)
{
    console.log("Estamos en OTOÑO..")
    console.log("Los árboles suelen cambiar de follaje...")
    console.log("Se registrarán temperaturas más templadas...")
    console.log("Los animales comienzan con la recolección de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran. ")
    estacion="Verano"
    horarioVerano= true;

}
else 
{
    console.log("Estamos en INVIERNO...")
    console.log("En esta temporada los días son más cortos y las noches más largas...")
    console.log("En algunas regiones suele nevar...")
    console.log("Mucha gente busca realizar actividades al aire... ")
    estacion="Invierno"
    horarioVerano= true;
}


console.log("%c2.- Operador Ternario (validacion? cumple:no_cumple) ", style_console);
//En java Script exista una operacion simplificada que valida si una condicion se cumple o no, y que hacer en cada caso

const edadPersona = 18;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;
let evaluarMayoriaEdad = (edad)=>
    edad>=18?"Eres mayor de edad":"No eres mayor de edad"

console.log("Evaluando la mayoria de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona))

//Sin embargo tenemos que considerar que la mayoria de edad varia en cada pais pos cuestiones legales,por lo que debemos considerar un segundo parametro en la evaluacion.

evaluarMayoriaEdad = (edad,pais)=>
    (edad>=18 && pais === "MX")?`En${pais} eres mayor de edad`:`En ${pais}NO eres mayor de edad`;

console.log("Evaluando la mayoria de edad de una persona en México ..")
console.log(evaluarMayoriaEdad(edadPersona,"MX"));

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos ..")
console.log(evaluarMayoriaEdad(edadPersona,"US"));

console.log("%c3.- SWITCH - CASE (Elección por valor definido) ", style_console);
//Calculando tu generacion en base a tu edad 
let anioNacimiento=2005;

switch(true)
{
    case (anioNacimiento<1968): //Baby Boomers
    return "Baby Boomers"

    case(anioNacimiento>1968 && anioNacimiento<=1980):
    return "Generacion Z"

    case (anioNacimiento>1968 && anioNacimiento <= 1980):
        return "Generación X"
}




