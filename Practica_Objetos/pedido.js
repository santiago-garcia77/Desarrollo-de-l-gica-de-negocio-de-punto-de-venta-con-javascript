import Persona from "./model/Persona.js";
import Producto from "./model/Producto.js";
import Factura from "./model/Factura.js";

const persona1 = new Persona(1, "Juan", "Pérez", "1990-05-15");

const producto1 = new Producto(1, "Laptop", 1200);
const producto2 = new Producto(2, "Mouse", 25000);
const producto3 = new Producto(3, "Teclado", 45000);

let productos = [producto1, producto2, producto3];

let subtotal = 0;
let totalConIva = 0;

productos = productos.map(producto => {
    const precio = parseInt(producto._precio);
    subtotal += precio;
    totalConIva += precio * 1.19;
    return producto;
});

const factura1 = new Factura (1, "2017-05-23", productos, persona1);

console.log(factura1);
console.log("Subtotal:", subtotal);
console.log("Total con IVA:", totalConIva);
