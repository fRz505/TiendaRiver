// Ejercicio de acceso a la pagina por edad
// let edad = parseInt(prompt("Ingrese una edad"));
// if (edad >= 18) {
//   console.log("Puede ingresar a ver los productos");
// } else if (edad < 18) {
//   console.log("Eres menor de edad");
// }

// productos en posiciones impares poseen descuentos

// let cantidadProductos = 5;
// for (let i = 1; i <= cantidadProductos; i++) {
//   if (i % 2 == 1) {
//     console.log("El producto numero " + i + " posee descuento");
//   }
// }

// // funcion que calcula cuotas a pagar

// function cuotas(total, cantidadCuotas) {
//   let cuota = total / cantidadCuotas;
//   console.log(
//     "Su precio quedaria en " + cantidadCuotas + " coutas de " + cuota
//   );
// }
// let monto = 21000;
// let cuotasSeleccionadas = 6;
// cuotas(monto, cuotasSeleccionadas);

// let precio = 120000;
// let pagos = 9;

// cuotas(precio, pagos);

// const indumentarias = [
//   { id: 1, nombre: "camiseta titular", precio: 1000 },
//   { id: 2, nombre: "camiseta suplente", precio: 800 },
//   { id: 3, nombre: "botines", precio: 1300 },
//   { id: 4, nombre: "remera de entrenamiento", precio: 600 },
//   { id: 5, nombre: "zapatillas de entrenamiento", precio: 1500 }
// ];



// let indumentariaSeleccionadas = [];
// let precioTotal = 0;

// const seleccionarIndumentaria = () => {
//   let seleccionada = false;
//   while (!seleccionada) {
//       let idindumentaria = parseInt(prompt("Ingresa el ID del producto que deseas agregar: \n ID: 1) camiseta titular $1000 \n ID: 2) camiseta suplente $800 \n ID: 3) botines $1300 \n ID: 4) remera de entrenamiento $600 \n ID: 5) zapatillas de entrenamiento $1500"));
//       let indumentaria = indumentarias.find(c => c.id === idindumentaria);

//       if (!indumentaria) {
//           alert("producto no encontrado, por favor ingresa un ID válido");
//       } else {
//           indumentariaSeleccionadas.push(indumentaria);
//           precioTotal += indumentaria.precio;
//           seleccionada = true;
//       }
//   }
// };


// const eliminarindumentaria = () => {
//   if (indumentariaSeleccionadas.length === 0) {
//       alert("No hay productos disponibles para ser eliminados.");
//       return;
//   }

//   let listadoTienda = indumentariaSeleccionadas.map((c, i) => {
//       return `${i + 1}. ID: ${c.id}, Precio: $${c.precio}`;
//   }).join("\n");
//   let idindumentaria = parseInt(prompt(`Selecciona el número de producto que deseas eliminar:\n\n${listadoTienda}`));
//   let indice = idindumentaria - 1;
//   if (isNaN(idindumentaria) || idindumentaria <= 0 || idindumentaria > indumentariaSeleccionadas.length) {
//       alert("Opción no válida, por favor selecciona un número del 1 al " + indumentariaSeleccionadas.length);
//   } else {
//       let indumentaria = indumentariaSeleccionadas[indice];
//       indumentariaSeleccionadas.splice(indice, 1);
//       precioTotal -= indumentaria.precio;
//       alert("producto eliminado exitosamente");
//   }
// };

// const mostrarTotal = () => {
//   let listadoindumentarias = "";
//   if (indumentariaSeleccionadas.length === 0) {
//       listadoindumentarias = "No hay productos seleccionados.";
//   } else {
//       listadoindumentarias = indumentariaSeleccionadas.map((c, i) => {
//           return `${i + 1}. ID: ${c.id} - Nombre: ${c.nombre} - Precio: $${c.precio}`;
//       }).join("\n");
//   }
//   alert(`Resumen de indumentarias:\n\n${listadoindumentarias}\n\nTotal: $${precioTotal}`);
// };

// let salir = false;

// while (salir === false) {
//   let accion = parseInt(prompt("¿Qué deseas hacer?:\n1) Agregar productos\n2) Eliminar productos\n3) Mostrar compra actual\n4) Salir"));
//   switch (accion) {
//       case 1:
//           seleccionarIndumentaria();
//           break;
//       case 2:
//           eliminarindumentaria();
//           break;
//       case 3:
//           mostrarTotal();
//           break;
//       case 4:
//           alert("Programa Finalizado!");
//           salir = true;
//           break;
//       default:
//           alert("Opción no válida, por favor ingresa un número entre 1 y 4");
//           break;
//   }
// }
const eliminarCarrito = document.getElementById("eliminarCarrito");
const compra = document.getElementById("compra");
const pelota = document.getElementById("pelota");
const camiseta = document.getElementById("camiseta");
const botines = document.getElementById("botines");
const key = "carrito";

eliminarCarrito.addEventListener("click", (ev) => {
    if (localStorage.getItem(key) != null) {
        localStorage.removeItem(key);
        swal("", "Carrito Eliminado", "success");
    }else {
        swal("Error", "No tiene elementos en el carrito", "error");
    }
})


compra.addEventListener("click", (ev) => {
    console.log("compra");
    // debugger;
    if (localStorage.getItem(key)!= null) {
        let carritoCompra = JSON.parse(localStorage.getItem(key));
        let mensaje = "";
        for(let i = 0; i<carritoCompra.length; i++ ) {
            
            mensaje = mensaje + JSON.stringify(carritoCompra[i]) + "\n";
            
        }
        alert("carrito: " + "\n" + mensaje +"\n" +"Total: "+calcularTotal());
    }else {
        alert("No tiene elementos en el carrito.")
    }

})

 botines.addEventListener("click", (ev)=> {
    console.log("botines");
    armarCarrito("botines", 17000);
 })

 camiseta.addEventListener("click", (ev) =>{
    console.log("camiseta");
    armarCarrito("camiseta", 20000);
 })

 pelota.addEventListener("click", (ev) =>{
    console.log("pelota ");
    armarCarrito("pelota", 15000);
 })
 

 //un objeto carrito, funcion, crear carrito si no esta creado, 

 let carrito = [];

 function armarCarrito(producto, precio) {
    if (localStorage.getItem(key) == null) {
        carrito.push({nombre:producto, precio})
        localStorage.setItem(key, JSON.stringify(carrito))
    }else {
        carrito =  JSON.parse(localStorage.getItem(key))
      console.log(carrito);
       carrito.push({nombre:producto, precio})
       localStorage.setItem(key, JSON.stringify(carrito))
    }
 }

 function calcularTotal() {
    carrito =  JSON.parse(localStorage.getItem(key));
    let suma = 0;
    for(let i = 0; i<carrito.length; i++) {
        suma = suma + carrito[i].precio;
        console.log(carrito[i].nombre);
    }

    return suma;
 }


