//sexto Problema Costo total de las habitaciones
function cosroom(c:number[][]){
    var can:number=0;
    let ho:number=c.length-1;
    for (let i:number=0; i<c.length; i++){
        for (let j:number=0; j<c[i].length; j++){
            if(i!=ho){
                if (c[i][j]!=0){
                    if(c[i+1][j] != 0){
                        can = can + c[i][j];
                    }
                }
            }
            else{
                if (c[i][j]!=0){
                    can = can + c[i][j];
                }
            }
            
        }
    }
    return can;
} 
console.log(cosroom([[0,1,1,2],[0,5,0,0],[2,0,3,3]]))

