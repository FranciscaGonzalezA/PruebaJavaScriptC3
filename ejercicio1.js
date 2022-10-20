/* Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.
*/

function descuento(dia, valores) {
    //la compra parte en 0, antes de sumar los productos
    let compraTotal = 0;
    //sumamos los valores de los preoductos, recorriendo con forEach
    valores.forEach(num => compraTotal = compraTotal + num);
    //chequeamos si es el dia de descuento
    if(dia.toLowerCase() == "martes" || dia.toLowerCase() == "jueves") {
        //retornamos el valor con el descuento
        return compraTotal*0.8
    } else {
        //retornamos el valor sin el descuento
        return compraTotal;        
    }
}

console.log(descuento('jueVES', [1000,500,650,8000]))
console.log(descuento('lunes', [1000,500,650,8000]))