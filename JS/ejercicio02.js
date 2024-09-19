// Tipo de Datos en JS

// 1. Undefined - (Null)
console.warn("--- Tipo de Dato UNDEFINED")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = "Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de la variable cliente es: ${typeof(cliente)}`);

cliente = 19227
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Undefined es el tipo de dato que por defecto se asigna a variables no incializados o no declarados

// 2.BOOLEAN - Boleanos - TRUE/FALSE (Falso/Verdadero)
console.warn("--- Tipo de Dato: BOOLEAN(Boleano - True/False)")
let esPremium = "No lo sé";
console.log(`Es el cliente Premium?: ${esPremium}`)
console.log(`El tipo de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor \"true\" a la variable")
esPremium="true"
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor true a la variable. ")
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log("Cambiando el valor de esPremium a false")
esPremium=0;

esPremium= false;
console.log(`Es un cliente premium ${esPremium}`);
console.log(`El tipo de dato de la variable e Premium es ${typeof(esPremium)}`);
console.log(`Es un cliente premium ${esPremium}`);
if(esPremium)
    console.log("Es un cliente pago por usar el servicio");
else
console.log("Es un usuario que recibe los servicios gratuitos");

//3. NUMBRE
var cantidad;
const costo_producto =10.50
let saldo_cuenta = -2500.40
let monto_transaccion;

console.warn("---- Tipo de Dato -NUMBER (Numeros, positivos, decimales, flotantes)")
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (Tipo de dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que had seleccionado cuesta: ${costo_producto}`)
cantidad = 8;
console.log(`Has elegido comprar: ${cantidad} de productos .`)
console.log(`El importe total de la compra es: ${cantidad*costo_producto}`);
saldo_cuenta=saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
//El cliente realiza un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${saldo_cuenta+monto_transaccion}`);

// 4. STRING (Cadena de Caractés)
const alumno = "Ailton Artiaga Quiroga"
let producto;

console.warn("--- Tipo de Dato - STRING (Cadena de Caractéres)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);

// Inicializamos el valor de la variable del producto

producto = "Monitor 20\"FULLL HD"
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato  ${typeof(producto)}`);

// Mnipulando los STRINGS 
console.log(`Mas adelante podemos transformar el contenido de los STRING usando los metodosy funciones especificas, como converitr su valor a MAYUSCULAS: ${alumno} =>
    ${alumno.toUpperCase()}`);
    console.log(`O en su defecto a minisculas: ${producto} => ${producto.toLowerCase()}`);

    // 5.- BIGINT (Numero de mayor amplitud)
     const numeroGrande = 1234567890
     const numeroGrande2 = 12345678901234567890
     let numeroGrande3 = 123456789012345678901234567890
     let numeroGrande4 = 12345678901234567890123456789123456789

     console.log(`El primero experimento de un numero grande es: ${numeroGrande}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande)}`)
     console.log(`El segundo experimento de un numero grande es: ${numeroGrande2}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande2)}`)
     console.log(`El tercer experimento de un numero grande es: ${numeroGrande3}, que NO es soportado por NUMBER perdiendo presicion y su tipo de dato es: ${typeof(numeroGrande3)}`)
     console.log(`El cuarto experimento de un numero grande es: ${numeroGrande4}, que NO es soportado por NUMBER perdiendo presicion y su tipo de dato es: ${typeof(numeroGrande4)}`)

     numeroGrande3 = BigInt(123456789012345678901234567890n);
     console.log(`El quinto experimento de un numero grande es: ${numeroGrande3}, que ya fue convertido en BigInt, y su tipom de dato es ${typeof(numeroGrande3)}`)
     numeroGrande3 = BigInt(12345678901234567890123456789123456789n);
     console.log(`El sexto experimento de un numero grande es: ${numeroGrande4}, que ya fue convertido en BigInt, y su tipom de dato es ${typeof(numeroGrande4)}`)
    
     // ¿Se pueden hace operaciones matematicas entre un NUMBER y un GIGINT?

     const numero =129;
     console.log(`Intentando realizar la suma de: numero + numeroGrande3, el resultado es ${BigInt(numero)+ numeroGrande3}`)

     // 6. Symbol (Simbolo)

     console.warn("--- TIpo de Dato Symbol (Simbolo o Único")

     const numero1 =5;
     const numero2 = 5.0;
     const numero3 ="5";
     const numero4 = "5.";
     const numero5 =Symbol(5)
     const nuevo6 =Symbol(5)
     const numero7 =Symbol("5")
     const numero8 = Symbol(5.0)
     const numero9 =Symbol("5.0")

     // pruebas comparativas
    console.log("¿Es 5 = 5.0?")
    if(numero1==numero2)
        console.log("Se comparó numero1 con numero2, determinando que tienen el mismo valor.")
    else 
      console.log("Se comparó numero1 con numero2, determinando que NO tienen el mismo valor")
    
    
    console.log("Es 5 = \"5\?")
    if(numero1==numero2)
        console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor.")
    else 
      console.log("Se comparó numero1 con numero2, determinando que NO tienen el mismo valor")
    
    
      console.log("¿Es 5 === \"5.0\"?")
      if(numero1===numero3)  // Estrictamente igual (Equidad) = Mismo valor, mismo tipo de dato
        console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor.")
    else 
      console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")
    
     
    console.log("Es 5 = \"5.0\"?") 
    if(numero1==numero4)
        console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor.")
    else 
      console.log("Se comparó numero1 con numero3, determinando que NO tienen el mismo valor") 

      console.log(`¿Es 5  === Simbol(5)?, antes de compararlo analizamos que tipos de datos son, siendo el primero de tipo: ${typeof(numero1)} y numero5 del tipo: ${typeof(numero5)}`);
if(numero1 == numero5){ //Estrictamente igual (Equidad) = Mismo valor, mismo tipo de dato
    console.log("Se comparó numero1 con numero5. determinando que tienen el mismo valor");
}else{
    console.log("Se comparó numero1 con numero5, determinando que NO tienen el mismo valor, pero NO el mismo tipo de dato");
}
                             
     



