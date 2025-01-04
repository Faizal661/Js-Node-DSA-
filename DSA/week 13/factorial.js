function fact(n){
    let factorial=1;
    for(let i=1;i<=n;i++){
        factorial*=i
    }
    return factorial
}

console.log(fact(1))