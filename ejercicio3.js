/* Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba.
*/

function verificadora(valores) {
    for(var i=0; i<valores.length; i++) {
        if(valores[i] < 0) {
            return "Error en los valores, no pueden existir negativos";
        }
    }
    return "Los valores son correctos";
}

console.log(verificadora([1000,500,650,8000]));
console.log(verificadora([1000,500,-650,8000]));