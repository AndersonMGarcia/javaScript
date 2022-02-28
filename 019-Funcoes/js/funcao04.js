function fatorial(n){
    let fat = 1;

    for(let c = n; c > 1; c -- ){
        fat = fat * c;

        
    }

    return `O valor do fatorial de ${n} = ${fat}`;

}

console.log(fatorial(5));