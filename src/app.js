//problema 8 N numeros primos
function primo(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
function numPrimos(v) {
    var nump = [];
    var s = 0;
    var c = 2;
    while (true) {
        if (s == v) {
            break;
        }
        else if (primo(c) == true) {
            nump.push(c);
            s++;
        }
        c++;
    }
    return nump;
}
console.log(numPrimos(9));
