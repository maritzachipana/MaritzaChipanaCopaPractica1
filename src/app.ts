//problema 8 N numeros primos
function primo(num:number){
    for(let i:number=2; i < num;i++){
        if(num % i ==0){
            return false;
        }
    }
    return true;
}
function numPrimos(v:number){
    var nump = [];
    var s:number = 0;
    let c:number = 2;
    while(true){
        if(s==v){
            break;
        }
        else
        if(primo(c) == true){
            nump.push(c);
            s++;
        }
        c++;
    }
    return nump;
    }
    
    console.log(numPrimos(9))

