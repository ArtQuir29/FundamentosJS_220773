const bg ="linear-gradient(11deg,rgbs(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console =`backgroun:${bg};color:white; border-radius : 6px;padding:4px;font-sixe:1.0rem`


//Personalizacion de las salidas a cosnola 
console.warn("pracrica 05 : repaso de obejetos en Java Script");

//cariables independientes
console.log("%c1.- Variables Independientes", style_console);

//declaramos valores independientes

let Producto_Nombre="Computadora Gammer Laptop 17\"";
let Producto_Marca="ASUS"
let Producto_Modelo="TUF 17"
let Producto_Precio=15749.50;
let Producto_Disponible=true;
let Producto_SKU=Symbol("TUF707VV-HX221W")
let Producto_Stock=15
let Producto_Imagen= null;
let Producto_Barcode;
let Producto_Categorias=["Electronicos","Computacion","Gamming","Promociones de Buen Fin","Mejor Valorados"];

//Accedemos a los valores de las caracteristicas del producto de manera independiente

console.log(`Los datos del producto son: \n
    Nombre: ${Producto_Nombre} , Tipo de dato <${typeof(Producto_Nombre)}>
    Nombre: ${Producto_Marca}, Tipo de dato <${typeof(Producto_Marca)}>
    Nombre: ${Producto_Modelo}, Tipo de dato <${typeof(Producto_Modelo)}>
    Nombre: ${Producto_Precio}, Tipo de dato <${typeof(Producto_Precio)}>
    Nombre: ${Producto_Disponible}, Tipo de dato <${typeof(Producto_Disponible)}>
    
    Nombre: ${Producto_Stock}, Tipo de dato <${typeof(Producto_Stock)}>
    Nombre: ${Producto_Imagen}, Tipo de dato <${typeof(Producto_Imagen)}>
    Nombre: ${Producto_Barcode}, Tipo de dato <${typeof(Producto_Barcode)}>
    Nombre: ${Producto_Categorias}, Tipo de dato <${typeof(Producto_Categorias)}>
    `);

    console.log("en el caso del SKI al ser un Symbol , no se puede conectar a la cadena de imnpresion anterior  ")
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));



    //Ahora lo declramos como un objeto
    console.log("%c2.-Objeto",style_console);
    let Producto =
    {
        Nombre:"tenis Depórtivos",
        Marca: "Nike",
        Modelo:"Jordan '24",
        Precio: 3361.25,
        Disponibilidad: false,
        Stock: 0,
        SKU:"DZ5485-612",
        Imagen: ".....",
        Barcode:null,
        Categorias:["Deportes","Juvenil"]



    }

    //Ahora leemos el obejto completo
    console.table(Producto);

    //Para acceder a las propiedades del obejeto utlizamos un "." y el nombre de la propiedad a leer.

    console.log("Accediendo a propiedades especificas del producto")
    console.log(`Nombre completo del producto : ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
    console.log(`Precio.${Producto.Precio}`)
    if(Producto.Disponibilidad == 0)
        console.log('Estatus:Agotado')
    else
    console.log(`Estatus: ${Producto_Stock} unidades disponibles`)





    console.log("%c3.- Destructuracion de Objeto",style_console);
    let Producto2 =
    {
        clave:2300,
        Nombre:"Gafas para el sol",
        Marca: "Palmera",
        Modelo:"Playa",
        Precio: 361.25,
        Disponibilidad: false,
        Stock: 0,
        SKU:"DZ5485-612",
        Imagen: ".....",
        Barcode:null,
        Categorias:["Deportes","Juvenil"]



    }

    let comprador=
    {
        Clave: 220773,
        Nombre: "Ailton",
        Apellido:"Artiaga ",
        Tipo:"Frecuente",
        Correo:"220773@utxicotepec.edu.mx",
        PaisOrigen:"Mexico",
        SaldoActual:14000.00
    }

    let pedido=
    { 
        Producto_clave:230365,
        Comprador_clave:230365,
        Cantidad: 2,
        Estatus:"Carrito de compras",

    }


    // En base a los 3 obejetos necesitamos calcular el costo de la compra y si alcanza con el saldo a favor 

    let{Precio: Producto_Precio2} = Producto2;
    let{Cantidad: pedido_Cantidad}= pedido;
    let{SaldoActual:Cliente_SaldoActual} = comprador;
    let Costo_Compra=Producto_Precio * pedido_Cantidad;

    console.log(`El cliente ha agregado a su carrito de compras ${pedido_Cantidad} unidades, con un costo total de:${Costo_Compra}`);

    // Actualizar el valor de los objetos 

    console.log("c%.- Actualizacion de los valosres de las propiedades de un Objeto.", style_console)

    console.log(`El objeto actualmente tiene los siguientes valores: ${Producto2}`)
    console.log(JSON.stringify(Producto2, null, 2));
    console.log(`Por cuestiones de inflacion el cosoto del producto ha cambiado y debe ser actualizado... de $361.25 a $500.00 `)

    //PARA MODIFICAR EL VALOR DE UN OBJETO HASTA CON IGUAL EL VALOR DEL OBJETO DE LA PROPIEDAD DESEADA

    Producto2.Precio= 500.00;
    console.log(`Los nuevos valores del producto son: ${Producto2}`);

    //¿PUEDO CAMBIAR NO SOLO EL VALOR SI NO EL TIPO DE DATO EN JAVASCRIPT?

    console.log(`--------------------------------------------------------------------`)

    console.log(`El objeto actualmente tiene los siguientes valores: ${Producto2}`)
    let tipoDisponibilidad=typeof (Producto2.Disponibilidad)
    console.log(`El tipo de disponiblidad es: ${tipoDisponibilidad}`)

    console.log(JSON.stringify(Producto2, null, 2));
    Producto2.Disponibilidad="SI";
    let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad)
    console.log(Producto2);
    console.log(`Elnuevo tipo de disponiblidad es: ${nuevoTipoDisponibilidad}`)

    // AGREGAR NUEVAS PROPIEDADES AL OBJETO

    console.log("C%.- Agregar nuevas propiedades al OBJETO", style_console);

    // PARA AGREGAR UNA NUEVA PROPIEDAD UTILIZAREMOS EL NOMBRE DEL OBJETO, LOS CORCHETES Y EL NUEVO DE LA PROPIEDAD CON SU VALOR POR DEFECTO
    console.log("Los datos del comprador son:")
    console.table(comprador)
    
    comprador[`Direccion`] = "AV. Benito Juarez No. 1525, Interior 4D, Xicotepec fe Juaréz, Puebla, México"
    comprador[`Tipo`] = "Nuevo cliente"
    comprador [`ActivadaReciente`] = true
    comprador [`TotalCompras`] = 3900.00

    console.log("Despues de aver agrgado las propiedades Direccion, Tipo,ActivadaReciente y TotalCompras. . .")
    console.table(comprador)

    // ELIMINAR PROPIEDADES EXISTENTES DE UN OBJETO
    console.log("Eliminar propiedades de un OBJETO")
    console.log("La estructura y valores de los Objetos pedido son previos a la modificacion")
    console.table(pedido)
    delete pedido.tipoPago
    console.log("Despues de la modificacion...")
    console.table(pedido)

