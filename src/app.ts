//cuarto ejercicio, dado un array de enteros encontrar
//un par de elementos adyacentes
function adyacen(a:Array<number>){
    let j:number=a.length;
    let ni=0;
    let o=1;
    for (let i=0; i<j;i++){
        let may:number=a[i]*a[i+1];
        if (may>ni){
            ni=may;
        }
    }
    return ni;
}
console.log(adyacen ([3,6,-2,-5,7,3]))
