//primer ejercicio PRIMO
function primo(num:number){
    for(let i:number=2; i < num;i++){
        if(num % i ==0){
            return false;
        }
    }
    return true;
}
console.log(primo(10))
