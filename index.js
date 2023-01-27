// Ejercicio de acceso a la pagina por edad
let edad = parseInt(prompt("Ingrese una edad"));
if (edad >= 18) {
  console.log("Puede ingresar a ver los productos");
} else if (edad < 18) {
  console.log("Eres menor de edad");
}

// productos en posiciones impares poseen descuentos

let cantidadProductos = 5;
for (let i = 1; i <= cantidadProductos; i++) {
  if (i % 2 == 1) {
    console.log("El producto numero " + i + " posee descuento");
  }
}

// funcion que calcula cuotas a pagar

function cuotas(total, cantidadCuotas) {
  let cuota = total / cantidadCuotas;
  console.log(
    "Su precio quedaria en " + cantidadCuotas + " coutas de " + cuota
  );
}
let monto = 21000;
let cuotasSeleccionadas = 6;
cuotas(monto, cuotasSeleccionadas);

let precio = 120000;
let pagos = 9;

cuotas(precio, pagos);
