//quinto Problema Estatuas de diferentes tamaños
function estatuas(b:number[]){
    let a:number[]=b.sort((y,z) => y-z);
    let can = b.length;
    let numE=0;
    let con=a[0];
    for (let i=0; i<can; i++){
        while(a[i]!=con){
            con++;
            numE=numE+1;
        }
        con++;
    }
    return numE;
}
console.log(estatuas([6,2,3,8]))
