//tercer ejercicio Dada una cadena, comprobar si es palíndromo
function palindromo(caden:string){
    let m:number=caden.length;
    let cadin="";
    while (m>=0){
        cadin = cadin + caden.charAt(m)
        m--;
    }
    if (caden == cadin){
        return true;
    }
    else{
        return false;
    }
}
console.log(palindromo("bangnab"))
