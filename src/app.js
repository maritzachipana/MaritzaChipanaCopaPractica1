//cuarto ejercicio, dado un array de enteros encontrar
//un par de elementos adyacentes
function adyacen(a) {
    var j = a.length;
    var ni = 0;
    var o = 1;
    for (var i = 0; i < j; i++) {
        var may = a[i] * a[i + 1];
        if (may > ni) {
            ni = may;
        }
    }
    return ni;
}
console.log(adyacen([3, 6, -2, -5, 7, 3]));
