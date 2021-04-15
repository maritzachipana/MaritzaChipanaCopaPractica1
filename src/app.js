//tercer ejercicio Dada una cadena, comprobar si es palíndromo
function palindromo(caden) {
    var m = caden.length;
    var cadin = "";
    while (m >= 0) {
        cadin = cadin + caden.charAt(m);
        m--;
    }
    if (caden == cadin) {
        return true;
    }
    else {
        return false;
    }
}
console.log(palindromo("bangnab"));
