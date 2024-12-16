let num1=0;
let num2=1;
let limit= 10;
let fibbo=[num1,num2]
for(i=0;i<=limit;i++){
    let value=num1+num2
    fibbo.push(value)
    num1=num2;
    num2=value;
}

console.log(fibbo)