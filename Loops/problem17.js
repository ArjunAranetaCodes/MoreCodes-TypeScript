
var num1:number = 1;
var num2:number = 1;

console.log(num1);
while (num2 < 100){
 console.log(num2);
 num2 = num2 + num1;
 num1 = num2 - num1;
}

