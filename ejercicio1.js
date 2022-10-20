/* Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.
*/

function descuento(dia, valores) {
    let compraTotal = 0;
    if(dia.toLowerCase() == "martes" || dia.toLowerCase() == "jueves") {
        valores.forEach(num => compraTotal += (num*0.8));
    } else {
        valores.forEach(x => compraTotal = compraTotal + x);
    }
    return compraTotal;
}

console.log(descuento('jueVES', [1000,500,650,8000]))
console.log(descuento('lunes', [1000,500,650,8000]))