//septimo problema NUmero de caracteres similares
function charequal(a, b) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (b == a.charAt(i))
            sum = sum + 1;
    }
    return sum;
}
function numCar(a, b) {
    var conC = 0;
    var l = 0;
    var ll = 0;
    for (var i = 0; i < a.length; i++) {
        if (i == 0) {
            l = charequal(a, a.charAt(i));
            ll = charequal(b, a.charAt(i));
            conC = conC + Math.min(l, ll);
        }
        else {
            for (var j = 0; j < i; j++) {
                if (a.charAt(j) != a.charAt(i)) {
                    if (j == i - 1) {
                        l = charequal(a, a.charAt(i));
                        ll = charequal(b, a.charAt(i));
                        conC = conC + Math.min(l, ll);
                    }
                }
                else {
                    if (a.charAt(j) == a.charAt(i)) {
                        break;
                    }
                }
            }
        }
    }
    return conC;
}
console.log(numCar("abca", "xyzbac"));
