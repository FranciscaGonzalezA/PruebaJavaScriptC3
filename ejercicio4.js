/* Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto:
    ○ Crea una función que retorne el valor del producto más costoso.
    ○ Crea una función que retorne el valor del producto menos costoso.
*/

/** Esta función recibe una lista de valores y retorna el valor del producto más costoso */
function productoMasCostoso(valores) {
    let precioMasAlto = valores[0];
    for(var i=1; i<valores.length; i++) {
        if(valores[i] >= precioMasAlto) {
            precioMasAlto = valores[i];
        } else {
            //continuamos buscando el precio más alto;
        }
    }
    return precioMasAlto;
}


/** Esta función recibe una lista de valores y retorna el valor del producto menos costoso */
function productoMenosCostoso(valores) {
    //declaramos el primer valor como el menos costoso
    let precioMasBajo = valores[0];
    for(var i=1; i<valores.length; i++) {
        //comparamos cada valor restante
        if(valores[i] <= precioMasBajo) {
            //si encuentra un menor valor, se reasigna el valor de nuestra variable
            precioMasBajo = valores[i];
        } else {
            //continuamos buscando el producto menos costoso;
        }
    }
    return precioMasBajo;
}

console.log(productoMasCostoso([1000,500,650,8000]));
console.log(productoMenosCostoso([1000,500,650,8000]));
