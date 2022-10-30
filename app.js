function sum(op1, op2){
    let res = op1 + op2;
    return res;
}
let op1 = 10;
let op2 = 20
console.log(sum(op1, op2))



function sumDigits(number){
number = Math.abs(number);
let sum = 0;
number = Math.trunc(number);
do{
let digit = number % 10;
number = (number - digit) /  10;
sum += digit;
}while(number!=0);
return sum;
}
let sum = sumDigits(123)
console.log(sum);


