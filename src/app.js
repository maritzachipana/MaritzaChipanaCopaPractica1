//quinto Problema Estatuas de diferentes tamaños
function estatuas(b) {
    var a = b.sort(function (y, z) { return y - z; });
    var can = b.length;
    var numE = 0;
    var con = a[0];
    for (var i = 0; i < can; i++) {
        while (a[i] != con) {
            con++;
            numE = numE + 1;
        }
        con++;
    }
    return numE;
}
console.log(estatuas([6, 2, 3, 8]));
