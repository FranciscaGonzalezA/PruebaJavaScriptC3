/* Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.
*/

function descuentoPorProductos(valores) {
    let esMayor = false;
    let total = 0;
    valores.forEach(x => {if(x>10000) esMayor = true});
    valores.forEach(x => total = total + x);
    if(valores.length>3 && esMayor) {
        return total*0.95;
    } else {
        return total;
    }
}

console.log(descuentoPorProductos([1000,500,650,8000]));
console.log(descuentoPorProductos([10001,500,650,8000]));
console.log(descuentoPorProductos([10001,500,650]));