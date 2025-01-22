function isPrime(num){
    if (num<=1) return false
    for(let i=2;i<num;i++){
        if(num%i===0) return false;
    }
    return true
}

function generateArray(){
    let array=[1,2,3,4,5,6,7]
    let primeArray=[];
    for(let i=0;i<array.length;i++){
        if(isPrime(array[i])){
            primeArray.push(array[i])
        }
    }
    return primeArray;
}

console.log(generateArray());