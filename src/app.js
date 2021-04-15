//segundo ejercicio dada una cadena mostrarla invertida
function inverCadena(cadena) {
    var l = cadena.length;
    var cadenaInver = "";
    while (l >= 0) {
        cadenaInver = cadenaInver + cadena.charAt(l);
        l--;
    }
    return cadenaInver;
}
console.log(inverCadena("this is a sample string"));
