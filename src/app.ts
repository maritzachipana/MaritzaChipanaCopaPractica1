//septimo problema NUmero de caracteres similares
function charequal(a:string, b:string){
    let sum:number = 0;
    for(let i=0; i<a.length; i++){
        if(b==a.charAt(i))
        sum = sum + 1;
    }
    return sum;
}
function numCar(a:string, b:string){
    let conC:number = 0;
    let l:number = 0;
    let ll:number = 0;
    for (let i = 0; i<a.length; i++){
        if(i == 0){
            l=charequal(a,a.charAt(i)); 
            ll = charequal(b,a.charAt(i));
            conC = conC + Math.min(l,ll);
        }
        else{
            for(let j=0; j<i; j++){
                if(a.charAt(j)!=a.charAt(i)){
                    if (j == i-1){
                        l=charequal(a,a.charAt(i)); 
                        ll = charequal(b,a.charAt(i));
                        conC = conC + Math.min(l,ll);
                        
                    }
                }
                else{
                    if(a.charAt(j) == a.charAt(i)){
                        break;
                    }
                }
            }
        }
    }

    return conC;
}
console.log(numCar("abca","xyzbac"))

