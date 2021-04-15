//sexto Problema Costo total de las habitaciones
function cosroom(c) {
    var can = 0;
    var ho = c.length - 1;
    for (var i = 0; i < c.length; i++) {
        for (var j = 0; j < c[i].length; j++) {
            if (i != ho) {
                if (c[i][j] != 0) {
                    if (c[i + 1][j] != 0) {
                        can = can + c[i][j];
                    }
                }
            }
            else {
                if (c[i][j] != 0) {
                    can = can + c[i][j];
                }
            }
        }
    }
    return can;
}
console.log(cosroom([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]));
